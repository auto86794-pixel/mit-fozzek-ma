import type {FamilyProfile} from './family-profile.mjs';
export function hasDislikedIngredient(recipe:{ingredients:readonly (readonly [string,number,string])[]},disliked:string[]):boolean;
export function profileEligibleRecipes<T extends {minutes:number;ingredients:readonly (readonly [string,number,string])[]}>(recipes:T[],profile:FamilyProfile):T[];
export function profileRestrictionMessage(profile:FamilyProfile):string|null;
