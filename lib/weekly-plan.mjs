export const days=['Hétfő','Kedd','Szerda','Csütörtök','Péntek','Szombat','Vasárnap'];
export function generateWeek(recipes,minutes=180,type='any',previous=[]){const eligible=recipes.filter(r=>r.minutes<=minutes&&(type==='any'||(type==='budget'&&r.budget)||(type==='meatless'&&r.meatless)));if(!eligible.length)return [];const used=new Set();return days.map((_,i)=>{const available=eligible.filter(r=>!used.has(r.id)&&!previous.includes(r.id));const fallback=eligible.filter(r=>!used.has(r.id));const pool=available.length?available:fallback.length?fallback:eligible;const chosen=pool[(i*3+Math.floor(Math.random()*pool.length))%pool.length];used.add(chosen.id);return chosen.id})}
export function replaceDay(plan,index,recipes,minutes=180,type='any'){if(!Array.isArray(plan)||!Number.isInteger(index)||index<0||index>=plan.length)return plan;const eligible=recipes.filter(r=>r.minutes<=minutes&&(type==='any'||(type==='budget'&&r.budget)||(type==='meatless'&&r.meatless)));const unused=eligible.filter(r=>!plan.includes(r.id));const candidates=unused.length?unused:eligible.filter(r=>r.id!==plan[index]);if(!candidates.length)return plan;const next=[...plan];next[index]=candidates[Math.floor(Math.random()*candidates.length)].id;return next}
export function weekIngredients(plan,recipes,servings,shoppingIngredients,mergeIngredients,available){const byId=new Map(recipes.map(r=>[r.id,r]));return mergeIngredients(plan.flatMap(id=>{const recipe=byId.get(id);return recipe?shoppingIngredients(recipe,servings).filter(i=>!available(i.name)):[]}))}

export function generateTwoCourseWeek(recipes,minutes=180,type='any',previous=[]){
 const soups=recipes.filter(r=>r.category==='soup'&&r.minutes<=minutes&&(type==='any'||(type==='budget'&&r.budget)||(type==='meatless'&&r.meatless)));
 const mains=recipes.filter(r=>r.category!=='soup'&&r.minutes<=minutes&&(type==='any'||(type==='budget'&&r.budget)||(type==='meatless'&&r.meatless)));
 if(!soups.length||!mains.length)return [];
 const usedSoup=new Set(),usedMain=new Set();
 const pick=(pool,used,old)=>{const choices=pool.filter(r=>!used.has(r.id)&&!old.includes(r.id));const fallback=pool.filter(r=>!used.has(r.id));const candidates=choices.length?choices:fallback.length?fallback:pool;const result=candidates[Math.floor(Math.random()*candidates.length)];used.add(result.id);return result.id};
 return days.map(()=>({soup:pick(soups,usedSoup,previous.map(d=>d.soup)),main:pick(mains,usedMain,previous.map(d=>d.main))}));
}
export function replaceTwoCourse(plan,index,course,recipes,minutes=180,type='any'){
 if(!Array.isArray(plan)||!Number.isInteger(index)||index<0||index>=plan.length||!['soup','main'].includes(course))return plan;
 const eligible=recipes.filter(r=>(course==='soup'?r.category==='soup':r.category!=='soup')&&r.minutes<=minutes&&(type==='any'||(type==='budget'&&r.budget)||(type==='meatless'&&r.meatless)));
 const used=new Set(plan.map(d=>d[course]));const choices=eligible.filter(r=>!used.has(r.id));const fallback=eligible.filter(r=>r.id!==plan[index]?.[course]);const pool=choices.length?choices:fallback;
 if(!pool.length)return plan;
 return plan.map((day,i)=>i===index?{...day,[course]:pool[Math.floor(Math.random()*pool.length)].id}:day);
}
export function twoCourseIngredients(plan,recipes,servings,shoppingIngredients,mergeIngredients,available){return weekIngredients(plan.flatMap(d=>[d.soup,d.main]),recipes,servings,shoppingIngredients,mergeIngredients,available)}
