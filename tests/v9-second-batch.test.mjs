import test from 'node:test';
import assert from 'node:assert/strict';
import {v9Recipes} from '../lib/v9-recipes.mjs';
import {recipes,scaledIngredients,mergeIngredients} from '../lib/recipes.mjs';
test('V9 second batch contains twenty distinct recipes with valid quantities',()=>{
 const batch=v9Recipes.slice(10);
 assert.equal(batch.length,20);
 assert.equal(new Set(recipes.map(r=>r.id)).size,72);
 for(const r of batch){
  assert.ok(r.ingredients.length>=5);
  assert.ok(r.steps.length>=4);
  assert.ok(r.ingredients.every(([name,q,unit])=>name&&unit&&Number.isFinite(q)&&q>0));
  assert.equal(r.minutes,r.prepMinutes+r.cookMinutes);
 }
});
test('V9 second batch scales and merges fractional quantities',()=>{
 const recipe=v9Recipes.find(r=>r.id==='v9-csirkes-tortilla');
 const half=scaledIngredients(recipe,2);
 assert.equal(half.find(i=>i.name==='csirkemell').quantity,250);
 const combined=mergeIngredients([...half,...half]);
 assert.equal(combined.find(i=>i.name==='csirkemell').quantity,500);
});
