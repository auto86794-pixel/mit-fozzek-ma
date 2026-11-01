import test from 'node:test';
import assert from 'node:assert/strict';
import {prioritizePantryRecipes} from '../lib/pantry-suggestions.mjs';
const recipes=[{id:'a',ingredients:[['répa',1],['tej',1]]},{id:'b',ingredients:[['burgonya',1],['hagyma',1]]},{id:'c',ingredients:[['burgonya',1]]}];
test('without pantry original order is retained',()=>assert.deepEqual(prioritizePantryRecipes(recipes,[]),recipes));
test('fully cookable recipes rank first',()=>assert.deepEqual(prioritizePantryRecipes(recipes,['burgonya']).map(r=>r.id),['c','b','a']));
test('ranking does not mutate source',()=>{const original=[...recipes];prioritizePantryRecipes(recipes,['burgonya']);assert.deepEqual(recipes,original)});
