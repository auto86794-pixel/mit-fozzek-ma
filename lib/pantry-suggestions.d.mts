export function prioritizePantryRecipes<T extends {ingredients: readonly (readonly [string, ...unknown[]])[]}>(recipes: T[], pantry: string[]): T[];
