import test from 'node:test';
import assert from 'node:assert/strict';
import {recipes,scaledIngredients,shoppingIngredients,mergeIngredients} from '../lib/recipes.mjs';
import {weekIngredients,twoCourseIngredients} from '../lib/weekly-plan.mjs';

const soup=recipes.find(r=>r.category==='soup');
const main=recipes.find(r=>r.category!=='soup');

test('adagváltás 2, 4 és 6 főre a recept alapadagjához arányos',()=>{
  for(const recipe of [soup,main]){
    for(const servings of [2,4,6]){
      const scaled=scaledIngredients(recipe,servings);
      assert.equal(scaled.length,recipe.ingredients.length);
      for(let i=0;i<scaled.length;i++){
        const expected=Math.round(recipe.ingredients[i][1]*servings/(recipe.baseServings??4)*100)/100;
        assert.equal(scaled[i].quantity,expected);
      }
    }
  }
});

test('azonos mértékegységek összevonása pontos két tizedesre',()=>{
  const items=mergeIngredients([{name:'tej',quantity:0.1,unit:'l'},{name:'tej',quantity:0.2,unit:'l'},{name:'tej',quantity:1,unit:'db'}]);
  assert.deepEqual(items,[{name:'tej',quantity:0.3,unit:'l'},{name:'tej',quantity:1,unit:'db'}]);
});

test('kétfogásos heti bevásárlás minden fogást összesít és kihagyja a kamrát',()=>{
  const plan=[{soup:soup.id,main:main.id},{soup:soup.id,main:main.id}];
  const pantry=new Set([soup.ingredients[0][0].toLocaleLowerCase('hu-HU')]);
  const result=twoCourseIngredients(plan,recipes,4,shoppingIngredients,mergeIngredients,name=>pantry.has(name.toLocaleLowerCase('hu-HU')));
  const expected=mergeIngredients([...shoppingIngredients(soup,4),...shoppingIngredients(main,4),...shoppingIngredients(soup,4),...shoppingIngredients(main,4)].filter(i=>!pantry.has(i.name.toLocaleLowerCase('hu-HU'))));
  assert.deepEqual(result,expected);
  assert.ok(result.every(i=>i.name.toLocaleLowerCase('hu-HU')!=='víz'));
});

test('egy fogás heti összesítése figyelembe veszi a személyek számát',()=>{
  for(const servings of [2,4,6]){
    const result=weekIngredients([main.id,main.id],recipes,servings,shoppingIngredients,mergeIngredients,()=>false);
    assert.deepEqual(result,mergeIngredients([...shoppingIngredients(main,servings),...shoppingIngredients(main,servings)]));
  }
});
