import test from 'node:test';
import assert from 'node:assert/strict';
import {recipes,scaledIngredients,shoppingIngredients} from '../lib/recipes.mjs';
import {v9Recipes} from '../lib/v9-recipes.mjs';
test('V9 contains thirty unique, complete main dishes',()=>{
 assert.equal(v9Recipes.length,30);
 assert.equal(new Set(v9Recipes.map(r=>r.id)).size,30);
 for(const r of v9Recipes){assert.equal(r.category,'main');assert.equal(r.minutes,r.prepMinutes+r.cookMinutes);assert.ok(r.steps.length>=4);assert.ok(r.ingredients.every(i=>i[1]>0));assert.ok(recipes.some(x=>x.id===r.id));}
});
test('V9 recipes scale and omit water from groceries',()=>{
 const r=v9Recipes.find(r=>r.id==='v9-paprikas-krumpli');
 assert.equal(scaledIngredients(r,2).find(i=>i.name==='burgonya').quantity,550);
 assert.ok(!shoppingIngredients(r,4).some(i=>i.name==='víz'));
});
