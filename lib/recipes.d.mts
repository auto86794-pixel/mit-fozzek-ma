export interface Recipe {id:string;name:string;minutes:number;baseServings:number;prepMinutes:number;cookMinutes:number;restMinutes:number;note?:string;budget:boolean;meatless:boolean;emoji:string;ingredients:[string,number,string][];steps:string[]}
export interface Ingredient {name:string;quantity:number;unit:string}
export const recipes:Recipe[];
export function matches(recipe:Recipe,minutes:number,type:string):boolean;
export function scaledIngredients(recipe:Recipe,servings:number):Ingredient[];
export function mergeIngredients(items:Ingredient[]):Ingredient[];

export function shoppingIngredients(recipe:Recipe,servings:number):Ingredient[];
