import test from 'node:test';
import assert from 'node:assert/strict';
import {DEFAULT_PROFILE,normalizeProfile,ALLERGEN_OPTIONS} from '../lib/family-profile.mjs';
test('defaults for missing profile',()=>assert.deepEqual(normalizeProfile(null),DEFAULT_PROFILE));
test('valid profile preserved',()=>assert.deepEqual(normalizeProfile({servings:6,cookingTime:30,disliked:['gomba'],allergens:['tej']}),{servings:6,cookingTime:30,disliked:['gomba'],allergens:['tej']}));
test('invalid values are sanitized',()=>assert.deepEqual(normalizeProfile({servings:99,cookingTime:5,disliked:['gomba','gomba','invalid'],allergens:['tej','invalid']}),{servings:4,cookingTime:60,disliked:['gomba'],allergens:['tej']}));
test('all EU priority allergen categories are selectable',()=>assert.equal(ALLERGEN_OPTIONS.length,14));
