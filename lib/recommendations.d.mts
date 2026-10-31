export function normalizeIngredient(value:string):string;
export function ingredientAvailable(name:string,pantry:string[]):boolean;
export function rankPantry<T extends {id:string;name:string;ingredients:readonly (readonly [string,...unknown[]])[]}>(recipes:T[],pantry:string[]):(T & {found:number;missing:number})[];
export function nextSuggestions<T extends {id:string}>(recipes:T[],shown?:string[],recent?:string[],count?:number):T[];
