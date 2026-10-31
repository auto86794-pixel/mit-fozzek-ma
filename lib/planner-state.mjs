import {mergeIngredients} from './recipes.mjs';
import {shoppingKey,reopenAddedItems} from './shopping.mjs';

export const plannerStorageKey='mfm-planner-v7';
export const defaultSettings={minutes:60,type:'any',servings:4};

export function normalizeSettings(value,fallback=defaultSettings){
 const source=value&&typeof value==='object'?value:{};
 return {
  minutes:[15,30,45,60,90,120,180].includes(source.minutes)?source.minutes:fallback.minutes,
  type:['any','budget','meatless'].includes(source.type)?source.type:fallback.type,
  servings:Number.isInteger(source.servings)&&source.servings>=1&&source.servings<=8?source.servings:fallback.servings
 };
}

export function emptyPlanner(){return {preferences:{...defaultSettings},week:{ids:[],settings:{...defaultSettings},needsReview:false},shopping:[],checked:[],weekImports:[]};}

// Migration preserves day positions and the original v6 storage as a fallback.
export function restorePlanner(saved,legacyWeek,legacyShopping,legacyChecked,recipes){
 const source=saved&&typeof saved==='object'&&!Array.isArray(saved)?saved:{};
 const preferences=normalizeSettings(source.preferences);
 const savedWeek=source.week&&typeof source.week==='object'?source.week:null;
 const rawIds=Array.isArray(savedWeek?.ids)?savedWeek.ids:Array.isArray(legacyWeek)?legacyWeek:[];
 const known=new Set(recipes.map(r=>r.id));
 const ids=rawIds.slice(0,7).map(id=>typeof id==='string'&&known.has(id)?id:'');
 if(ids.some(Boolean)){while(ids.length<7)ids.push('');}else ids.length=0;
 const rawItems=Array.isArray(source.shopping)?source.shopping:Array.isArray(legacyShopping)?legacyShopping:[];
 const shopping=rawItems.filter(item=>item&&typeof item.name==='string'&&item.name.trim()&&Number.isFinite(item.quantity)&&item.quantity>0&&typeof item.unit==='string'&&item.unit);
 const keys=new Set(shopping.map(shoppingKey));
 const rawChecked=Array.isArray(source.checked)?source.checked:Array.isArray(legacyChecked)?legacyChecked:[];
 const checked=[...new Set(rawChecked.filter(key=>typeof key==='string'&&keys.has(key)))];
 const settings=normalizeSettings(savedWeek?.settings,preferences);
 const settingsIntact=['servings','minutes','type'].every(key=>savedWeek?.settings?.[key]===settings[key]);
 return {
  preferences,
  week:{ids,settings,needsReview:ids.length>0&&(!settingsIntact||Boolean(savedWeek?.needsReview))},
  shopping,checked,
  weekImports:shopping.length&&Array.isArray(source.weekImports)?[...new Set(source.weekImports.filter(key=>typeof key==='string'))]:[]
 };
}

export function weekImportKey(ids,servings){return JSON.stringify({ids:[...ids].sort(),servings});}

// Items and the import receipt are persisted in the same snapshot. Repeated
// functional updates, rapid clicks and reloads cannot apply one import twice.
export function importWeekGroceries(state,key,additions){
 if(!additions.length||state.weekImports.includes(key))return state;
 return {...state,shopping:mergeIngredients([...state.shopping,...additions]),checked:reopenAddedItems(state.checked,additions),weekImports:[...state.weekImports,key]};
}

export function updateShopping(state,items){
 const keys=new Set(items.map(shoppingKey));
 return {...state,shopping:items,checked:state.checked.filter(key=>keys.has(key)),weekImports:items.length?state.weekImports:[]};
}

export function savePlanner(storage,state){
 try{storage.setItem(plannerStorageKey,JSON.stringify(state));return true;}catch{return false;}
}
