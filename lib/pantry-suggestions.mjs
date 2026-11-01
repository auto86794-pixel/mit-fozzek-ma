import {ingredientAvailable} from './recommendations.mjs';

/** Rank eligible recipes by ingredients already on hand; keep existing order for ties. */
export function prioritizePantryRecipes(recipes,pantry){
 if(!Array.isArray(pantry)||pantry.length===0)return recipes;
 return recipes.map((recipe,index)=>({recipe,index,found:recipe.ingredients.filter(i=>ingredientAvailable(i[0],pantry)).length}))
  .sort((a,b)=>Number(b.found===b.recipe.ingredients.length)-Number(a.found===a.recipe.ingredients.length)||
   b.found/b.recipe.ingredients.length-a.found/a.recipe.ingredients.length||a.index-b.index)
  .map(x=>x.recipe);
}
