import test from 'node:test';
import assert from 'node:assert/strict';
import {recipes,shoppingIngredients,mergeIngredients} from '../lib/recipes.mjs';
import {generateWeek,replaceDay,weekIngredients} from '../lib/weekly-plan.mjs';
import {emptyPlanner,restorePlanner,weekImportKey,importWeekGroceries,updateShopping,savePlanner,plannerStorageKey} from '../lib/planner-state.mjs';

const ids=recipes.slice(0,7).map(r=>r.id);
const milk={name:'tej',quantity:200,unit:'ml'};
const eggs={name:'tojás',quantity:3,unit:'db'};

test('two-person week and filters survive JSON persistence without reverting to four',()=>{
 const original=emptyPlanner();
 original.preferences={servings:8,minutes:180,type:'any'};
 original.week={ids,settings:{servings:2,minutes:45,type:'meatless'},needsReview:false};
 const restored=restorePlanner(JSON.parse(JSON.stringify(original)),[],[],[],recipes);
 assert.deepEqual(restored.week,original.week);
 assert.equal(restored.preferences.servings,8);
 assert.equal(restored.week.settings.servings,2);
});

test('migration preserves legacy day assignments, groceries and checkmarks and requests portion review',()=>{
 const oldWeek=[...ids];const items=[milk,eggs];
 const migrated=restorePlanner(null,oldWeek,items,['tej|ml'],recipes);
 assert.deepEqual(migrated.week.ids,ids);
 assert.equal(migrated.week.needsReview,true);
 assert.deepEqual(migrated.shopping,items);
 assert.deepEqual(migrated.checked,['tej|ml']);
 assert.deepEqual(migrated.weekImports,[]);
 assert.deepEqual(oldWeek,ids);
});

test('rapid repeated weekly imports and imports after reload do not double quantities or reset checked items',()=>{
 const state={...emptyPlanner(),shopping:[milk,eggs],checked:['tej|ml','tojás|db']};
 const key=weekImportKey(ids,2);
 const once=importWeekGroceries(state,key,[{...milk,quantity:100}]);
 const twice=importWeekGroceries(once,key,[{...milk,quantity:100}]);
 assert.strictEqual(twice,once);
 assert.equal(once.shopping.find(i=>i.name==='tej').quantity,300);
 assert.deepEqual(once.checked,['tojás|db']);
 const reloaded=restorePlanner(JSON.parse(JSON.stringify(once)),[],[],[],recipes);
 assert.strictEqual(importWeekGroceries(reloaded,key,[milk]),reloaded);
});

test('same grocery week reordered has the same receipt; portions and repeated meals count',()=>{
 assert.equal(weekImportKey(ids,2),weekImportKey([...ids].reverse(),2));
 assert.notEqual(weekImportKey(ids,2),weekImportKey(ids,4));
 assert.notEqual(weekImportKey(['teszta'],4),weekImportKey(['teszta','teszta'],4));
});

test('emptying the list allows a new shopping trip while removing one item retains duplicate protection',()=>{
 const state={...emptyPlanner(),shopping:[milk,eggs],checked:['tej|ml'],weekImports:['receipt']};
 assert.deepEqual(updateShopping(state,[eggs]).weekImports,['receipt']);
 assert.deepEqual(updateShopping(state,[eggs]).checked,[]);
 const cleared=updateShopping(state,[]);
 assert.deepEqual(cleared.weekImports,[]);
 assert.equal(importWeekGroceries(cleared,'receipt',[milk]).shopping.length,1);
});

test('fully stocked pantry does not consume an import receipt',()=>{
 const state=emptyPlanner();
 const additions=weekIngredients(ids,recipes,2,shoppingIngredients,mergeIngredients,()=>true);
 assert.strictEqual(importWeekGroceries(state,'receipt',additions),state);
});

test('damaged saved shapes and unknown recipes do not crash or shift weekdays',()=>{
 const migrated=restorePlanner({week:{ids:[ids[0],'unknown',ids[2]],settings:{servings:0,minutes:-1,type:'bad'}},shopping:[null,{quantity:-1},milk],checked:[null,'tej|ml','stale'],weekImports:null},null,null,null,recipes);
 assert.equal(migrated.week.ids[0],ids[0]);assert.equal(migrated.week.ids[1],'');assert.equal(migrated.week.ids[2],ids[2]);assert.equal(migrated.week.ids.length,7);
 assert.equal(migrated.week.settings.servings,4);
 assert.equal(migrated.week.needsReview,true);
 assert.deepEqual(migrated.shopping,[milk]);assert.deepEqual(migrated.checked,['tej|ml']);
 assert.deepEqual(restorePlanner(null,null,null,null,recipes),emptyPlanner());
});

test('storage failures are reported and items and receipts share a single storage write',()=>{
 const state=importWeekGroceries(emptyPlanner(),'receipt',[milk]);
 let writes=0;
 assert.equal(savePlanner({setItem(key,value){writes++;assert.equal(key,plannerStorageKey);const data=JSON.parse(value);assert.equal(data.shopping[0].quantity,200);assert.deepEqual(data.weekImports,['receipt']);}},state),true);
 assert.equal(writes,1);
 assert.equal(savePlanner({setItem(){throw new Error('Quota exceeded');}},state),false);
});

test('day replacement never changes other days or breaks selected dietary and time limits',()=>{
 const plan=generateWeek(recipes,60,'meatless');
 const replaced=replaceDay(plan,3,recipes,60,'meatless');
 assert.deepEqual(replaced.filter((_,i)=>i!==3),plan.filter((_,i)=>i!==3));
 assert.ok(recipes.find(r=>r.id===replaced[3]).meatless);
 assert.ok(recipes.find(r=>r.id===replaced[3]).minutes<=60);
 assert.strictEqual(replaceDay(plan,9,recipes),plan);
 const one=[recipes.find(r=>r.id==='almaskasa')];
 const repeated=generateWeek(one,15,'meatless');
 assert.equal(repeated.length,7);assert.equal(new Set(repeated).size,1);
 assert.strictEqual(replaceDay(repeated,2,one,15,'meatless'),repeated);
});
