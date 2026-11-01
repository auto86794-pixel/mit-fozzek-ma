import {normalizeIngredient} from './recommendations.mjs';
import {normalizeProfile} from './family-profile.mjs';
const synonyms={hal:['hal','lazac','tonhal','ponty','hekk','tőkehal','szardínia'],gomba:['gomba','csiperke'],brokkoli:['brokkoli'],karfiol:['karfiol'],padlizsán:['padlizsán'],hagyma:['hagyma','vöröshagyma','lilahagyma','újhagyma'],fokhagyma:['fokhagyma'],paprika:['paprika','paprikakrém','pritamin']};
export function hasDislikedIngredient(recipe,disliked=[]){
 const ingredients=(recipe.ingredients||[]).map(i=>normalizeIngredient(i[0]));
 return disliked.some(dislike=>(synonyms[dislike]||[dislike]).some(term=>ingredients.some(name=>name.includes(normalizeIngredient(term)))));
}
// The recipe database has no audited allergen declarations or cross-contact data.
// Do not label recipes allergen-safe based on keyword searches.
export function profileEligibleRecipes(recipes,profile){
 const p=normalizeProfile(profile);
 if(p.allergens.length)return [];
 return recipes.filter(recipe=>recipe.minutes<=p.cookingTime&&!hasDislikedIngredient(recipe,p.disliked));
}
export function profileRestrictionMessage(profile){
 const p=normalizeProfile(profile);
 return p.allergens.length?'Az allergénekhez még nincsenek ellenőrzött receptadatok. Biztonsági okból nem jelenítünk meg allergénmentesnek vélt ajánlatokat. Ellenőrizd az összetevőket és a csomagolást.':null;
}
