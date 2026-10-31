import test from 'node:test';import assert from 'node:assert/strict';import {recipes,matches,scaledIngredients,mergeIngredients} from '../lib/recipes.mjs';
test('unique recipe IDs and valid fields',()=>{assert.equal(new Set(recipes.map(r=>r.id)).size,recipes.length);for(const r of recipes){assert.ok(r.name&&r.minutes>0&&r.steps.length&&r.ingredients.length)}});
test('time and dietary filters',()=>{assert.ok(recipes.filter(r=>matches(r,30,'meatless')).every(r=>r.minutes<=30&&r.meatless));assert.ok(!matches(recipes.find(r=>r.id==='paprikas'),30,'any'))});
test('portion scaling',()=>{const r=recipes.find(r=>r.id==='rakott');assert.equal(scaledIngredients(r,2).find(i=>i.name==='burgonya').quantity,500)});
test('shopping ingredient merging',()=>{const out=mergeIngredients([{name:'tejföl',quantity:200,unit:'g'},{name:'tejföl',quantity:100,unit:'g'}]);assert.equal(out.length,1);assert.equal(out[0].quantity,300)});

test('reviewed recipes have complete timing and valid unique ingredient quantities',()=>{
 assert.equal(recipes.length,30);
 for(const recipe of recipes){
  assert.equal(recipe.baseServings,4,recipe.id);
  assert.equal(recipe.minutes,recipe.prepMinutes+recipe.cookMinutes+recipe.restMinutes,recipe.id);
  assert.ok(recipe.prepMinutes>0&&recipe.cookMinutes>0&&recipe.restMinutes>=0,recipe.id);
  assert.ok(recipe.steps.length>=4,recipe.id);
  const keys=recipe.ingredients.map(([name,,unit])=>name+'|'+unit);
  assert.equal(new Set(keys).size,keys.length,recipe.id);
  for(const [name,quantity,unit] of recipe.ingredients) assert.ok(name&&Number.isFinite(quantity)&&quantity>0&&unit,recipe.id);
 }
});
test('portion scaling uses each recipe base serving count and preserves fractions',()=>{
 const sample={baseServings:2,ingredients:[['tojás',1,'db']]};
 assert.equal(scaledIngredients(sample,1)[0].quantity,0.5);
 assert.equal(scaledIngredients(sample,4)[0].quantity,2);
});
test('resting and slow cooking are included in time filters',()=>{
 const dumplings=recipes.find(r=>r.id==='turogomboc');
 assert.equal(dumplings.restMinutes,60);
 assert.ok(!matches(dumplings,60,'any'));
 assert.ok(matches(dumplings,120,'any'));
 assert.ok(recipes.every(r=>matches(r,180,'any')));
});
