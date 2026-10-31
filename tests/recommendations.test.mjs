import test from 'node:test';import assert from 'node:assert/strict';
import {ingredientAvailable,rankPantry,nextSuggestions} from '../lib/recommendations.mjs';
const sample=Array.from({length:8},(_,i)=>({id:String(i),name:String(i),ingredients:[['burgonya',1],['tojás',2]]}));
test('rotates without repeating previously shown suggestions',()=>{const a=nextSuggestions(sample);const b=nextSuggestions(sample,a.map(x=>x.id));assert.equal(a.length,3);assert.equal(b.length,3);assert.ok(b.every(x=>!a.some(y=>y.id===x.id)))});
test('handles fewer than three recipes',()=>assert.equal(nextSuggestions(sample.slice(0,2)).length,2));
test('pantry matches accents and ingredient variants',()=>assert.equal(ingredientAvailable('burgonyát',['burgonya']),true));
test('pantry suggestions require an actual ingredient match',()=>assert.equal(rankPantry(sample,['alma']).length,0));
