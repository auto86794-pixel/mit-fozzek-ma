import test from 'node:test';import assert from 'node:assert/strict';
import {profileEligibleRecipes,hasDislikedIngredient,profileRestrictionMessage} from '../lib/profile-recommendations.mjs';
const r=[{name:'Gombás',minutes:20,ingredients:[['csiperke gomba',1,'db']]},{name:'Gyors',minutes:25,ingredients:[['rizs',100,'g']]},{name:'Lassú',minutes:70,ingredients:[['rizs',100,'g']]}];
test('nem kedvelt alapanyagok kizárása',()=>{assert.equal(hasDislikedIngredient(r[0],['gomba']),true);assert.deepEqual(profileEligibleRecipes(r,{servings:4,cookingTime:30,disliked:['gomba'],allergens:[]}).map(x=>x.name),['Gyors'])});
test('allergénadat hiányában nem állít biztonságot',()=>{const p={servings:4,cookingTime:60,disliked:[],allergens:['tej']};assert.deepEqual(profileEligibleRecipes(r,p),[]);assert.match(profileRestrictionMessage(p),/ellenőrzött/)});
