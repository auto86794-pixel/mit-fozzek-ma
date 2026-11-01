import {ingredientAvailable} from './recommendations.mjs';
import {profileEligibleRecipes} from './profile-recommendations.mjs';

/** Returns only recipes with at least one ingredient on hand; never bypasses profile restrictions. */
export function leftoverSuggestions(recipes, pantry, profile){
 if(!Array.isArray(pantry)||!pantry.length)return [];
 return profileEligibleRecipes(recipes,profile).map(recipe=>{
  const available=recipe.ingredients.filter(i=>ingredientAvailable(i[0],pantry));
  const missing=recipe.ingredients.filter(i=>!ingredientAvailable(i[0],pantry));
  return {recipe,found:available.length,total:recipe.ingredients.length,missing:missing.map(i=>i[0]),complete:missing.length===0};
 }).filter(item=>item.found>0).sort((a,b)=>Number(b.complete)-Number(a.complete)||b.found/b.total-a.found/a.total||a.missing.length-b.missing.length||a.recipe.name.localeCompare(b.recipe.name,'hu'));
}
