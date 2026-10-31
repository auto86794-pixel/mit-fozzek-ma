import test from 'node:test';
import assert from 'node:assert/strict';
import {recipes,shoppingIngredients} from '../lib/recipes.mjs';

test('shopping includes cooking staples, scales them, and omits water',()=>{
 const recipe=recipes.find(r=>r.id==='csirkesrizs');
 const list=shoppingIngredients(recipe,2);
 assert.ok(!list.some(i=>i.name==='víz'));
 assert.equal(list.find(i=>i.name==='rizs').quantity,175);
 assert.equal(list.find(i=>i.name==='étolaj').quantity,1);
 assert.equal(list.find(i=>i.name==='csirkemell').quantity,250);
});

test('canned beans and lentils are listed as cans, rather than ambiguous dry weights',()=>{
 for(const [id,name] of [['babfozelek','konzerv fehérbab'],['lencseleves','konzerv lencse']]){
  assert.equal(shoppingIngredients(recipes.find(r=>r.id===id),4).find(i=>i.name===name).unit,'db');
 }
});
