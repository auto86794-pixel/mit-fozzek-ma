import type {Ingredient} from './recipes.mjs';
export function shoppingKey(item:Ingredient):string;
export function splitShopping(items:Ingredient[],checked:string[]):{remaining:Ingredient[];purchased:Ingredient[]};
export function reopenAddedItems(checked:string[],additions:Ingredient[]):string[];
