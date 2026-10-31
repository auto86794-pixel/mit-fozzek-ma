import type {Recipe,Ingredient} from './recipes.mjs';
export const days:string[];
export function generateWeek(recipes:Recipe[],minutes?:number,type?:string,previous?:string[]):string[];
export function replaceDay(plan:string[],index:number,recipes:Recipe[],minutes?:number,type?:string):string[];
export function weekIngredients(plan:string[],recipes:Recipe[],servings:number,shoppingIngredients:(recipe:Recipe,servings:number)=>Ingredient[],mergeIngredients:(items:Ingredient[])=>Ingredient[],available:(name:string)=>boolean):Ingredient[];

export function generateTwoCourseWeek(recipes:Recipe[],minutes?:number,type?:string,previous?:{soup:string;main:string}[]):{soup:string;main:string}[];
export function replaceTwoCourse(plan:{soup:string;main:string}[],index:number,course:'soup'|'main',recipes:Recipe[],minutes?:number,type?:string):{soup:string;main:string}[];
export function twoCourseIngredients(plan:{soup:string;main:string}[],recipes:Recipe[],servings:number,shoppingIngredients:(r:Recipe,n:number)=>Ingredient[],mergeIngredients:(items:Ingredient[])=>Ingredient[],available:(name:string)=>boolean):Ingredient[];
