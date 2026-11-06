import test from 'node:test';
import assert from 'node:assert/strict';
import {recipes} from '../lib/recipes.mjs';
import {recipeSeo} from '../lib/recipe-seo.mjs';
test('all recipes get honest category and keywords',()=>{
 for(const recipe of recipes){const seo=recipeSeo(recipe);assert.ok(['Leves','Főétel','Desszert'].includes(seo.recipeCategory));assert.ok(seo.keywords.includes(recipe.name));assert.equal(seo.aggregateRating,undefined);assert.equal(seo.nutrition,undefined);}
});
test('paprikas recognized as Hungarian main dish',()=>{
 const seo=recipeSeo(recipes.find(r=>r.id==='paprikas'));
 assert.equal(seo.recipeCuisine,'Magyar');assert.equal(seo.recipeCategory,'Főétel');
});
