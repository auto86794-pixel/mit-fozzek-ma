// Search metadata derived only from existing recipe content; no invented ratings or nutrition.
export function recipeSeo(recipe) {
  const name = recipe.name.toLocaleLowerCase('hu-HU');
  const category = recipe.category === 'soup' || /leves|gulyás|csorba/.test(name)
    ? 'Leves'
    : /palacsinta|sütemény|torta|kása|desszert|piskóta|muffin/.test(name)
      ? 'Desszert'
      : 'Főétel';
  const keywords = [recipe.name, `${category.toLocaleLowerCase('hu-HU')} recept`, 'házi recept'];
  if (recipe.minutes <= 30) keywords.push('gyors recept');
  if (recipe.meatless) keywords.push('húsmentes recept');
  // Only classify unmistakably Hungarian dishes, not every recipe on a Hungarian site.
  const hungarian = /paprikás|pörkölt|gulyás|főzelék|rakott krumpli|lecsó|töltött paprika|nokedli|halászlé|lángos|hortobágyi|palócleves|frankfurti leves|bableves|krumplileves/.test(name);
  return { recipeCategory: category, keywords: keywords.join(', '), ...(hungarian ? {recipeCuisine:'Magyar'} : {}) };
}
