export type FamilyProfile={servings:number;cookingTime:number;disliked:string[];allergens:string[]};
export const PROFILE_KEY:string;
export const DEFAULT_PROFILE:FamilyProfile;
export const DISLIKED_OPTIONS:string[];
export const ALLERGEN_OPTIONS:string[];
export function normalizeProfile(value:unknown):FamilyProfile;
