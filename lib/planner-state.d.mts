import type {Recipe,Ingredient} from './recipes.mjs';
export interface PlanSettings {minutes:number;type:'any'|'budget'|'meatless';servings:number}
export interface PlannerState {preferences:PlanSettings;week:{ids:string[];settings:PlanSettings;needsReview:boolean};shopping:Ingredient[];checked:string[];weekImports:string[]}
export const plannerStorageKey:string;
export const defaultSettings:PlanSettings;
export function normalizeSettings(value:unknown,fallback?:PlanSettings):PlanSettings;
export function emptyPlanner():PlannerState;
export function restorePlanner(saved:unknown,legacyWeek:unknown,legacyShopping:unknown,legacyChecked:unknown,recipes:Recipe[]):PlannerState;
export function weekImportKey(ids:string[],servings:number):string;
export function importWeekGroceries(state:PlannerState,key:string,additions:Ingredient[]):PlannerState;
export function updateShopping(state:PlannerState,items:Ingredient[]):PlannerState;
export function savePlanner(storage:Pick<Storage,'setItem'>,state:PlannerState):boolean;
