import test from 'node:test';
import assert from 'node:assert/strict';
import {soups} from '../lib/soups.mjs';
import {scaledIngredients,mergeIngredients,shoppingIngredients} from '../lib/recipes.mjs';

test('all 12 newly added soups explicitly list measured water and salt',()=>{
 assert.equal(soups.length,12);
 for(const recipe of soups){
  const water=recipe.ingredients.find(([name])=>name==='víz');
  const salt=recipe.ingredients.find(([name])=>name==='só');
  assert.ok(water && water[1]>=1000 && water[2]==='ml',recipe.name);
  assert.ok(salt && salt[1]>0 && salt[2]==='tk',recipe.name);
 }
});
test('soup ingredient scaling and shopping list remain consistent',()=>{
 for(const recipe of soups){
  const base=scaledIngredients(recipe,4),half=scaledIngredients(recipe,2);
  for(let i=0;i<base.length;i++)assert.ok(Math.abs(half[i].quantity-base[i].quantity/2)<=0.0051,recipe.name);
  assert.ok(!shoppingIngredients(recipe,4).some(i=>i.name==='víz'),recipe.name);
 }
 const sample=mergeIngredients([...shoppingIngredients(soups[0],4),...shoppingIngredients(soups[0],4)]);
 assert.equal(sample.find(i=>i.name==='csirkemáj').quantity,500);
});
