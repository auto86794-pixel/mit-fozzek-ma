import test from 'node:test';import assert from 'node:assert/strict';
import {leftoverSuggestions} from '../lib/leftovers.mjs';
import {DEFAULT_PROFILE} from '../lib/family-profile.mjs';
const rs=[{id:'a',name:'A',minutes:20,ingredients:[['burgonya',1,'kg'],['tojás',2,'db']]},{id:'b',name:'B',minutes:20,ingredients:[['burgonya',1,'kg']]},{id:'c',name:'C',minutes:90,ingredients:[['burgonya',1,'kg']]}];
test('empty pantry produces no results',()=>assert.deepEqual(leftoverSuggestions(rs,[],DEFAULT_PROFILE),[]));
test('complete recipe first and missing list accurate',()=>{const r=leftoverSuggestions(rs,['burgonya'],DEFAULT_PROFILE);assert.equal(r[0].recipe.id,'b');assert.deepEqual(r.find(x=>x.recipe.id==='a').missing,['tojás']);});
test('allergen restrictions never bypassed',()=>assert.deepEqual(leftoverSuggestions(rs,['burgonya'],{...DEFAULT_PROFILE,allergens:['tej']}),[]));
test('time restriction honored',()=>assert.ok(!leftoverSuggestions(rs,['burgonya'],{...DEFAULT_PROFILE,cookingTime:30}).some(x=>x.recipe.id==='c')));
