import test from 'node:test';import assert from 'node:assert/strict';import {recipes,matches,scaledIngredients,mergeIngredients} from '../lib/recipes.mjs';
test('unique recipe IDs and valid fields',()=>{assert.equal(new Set(recipes.map(r=>r.id)).size,recipes.length);for(const r of recipes){assert.ok(r.name&&r.minutes>0&&r.steps.length&&r.ingredients.length)}});
test('time and dietary filters',()=>{assert.ok(recipes.filter(r=>matches(r,30,'meatless')).every(r=>r.minutes<=30&&r.meatless));assert.ok(!matches(recipes.find(r=>r.id==='paprikas'),30,'any'))});
test('portion scaling',()=>{const r=recipes.find(r=>r.id==='rakott');assert.equal(scaledIngredients(r,2).find(i=>i.name==='burgonya').quantity,500)});
test('shopping ingredient merging',()=>{const out=mergeIngredients([{name:'tejföl',quantity:200,unit:'g'},{name:'tejföl',quantity:100,unit:'g'}]);assert.equal(out.length,1);assert.equal(out[0].quantity,300)});
