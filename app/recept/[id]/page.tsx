import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { recipes } from '../../../lib/recipes.mjs';
import { recipePhotos } from '../../../lib/recipe-photos.mjs';

const base = 'https://varazsfazek.hu';
type Recipe = typeof recipes[number];
const getRecipe = (id: string): Recipe | undefined => recipes.find((r: Recipe) => r.id === id);
export function generateStaticParams() { return recipes.map((r: Recipe) => ({ id: r.id })); }
export async function generateMetadata({params}: {params: Promise<{id:string}>}): Promise<Metadata> {
  const {id} = await params;
  const recipe = getRecipe(id);
  if (!recipe) return {title:'Recept nem található',robots:{index:false}};
  const photo = recipePhotos[recipe.id as keyof typeof recipePhotos];
  const description = `${recipe.name} recept ${recipe.minutes} perc alatt, hozzávalókkal és részletes elkészítéssel. Főzz a Varázsfazékkal!`;
  return {title:`${recipe.name} recept – Varázsfazék`,description,alternates:{canonical:`/recept/${recipe.id}`},openGraph:{title:`${recipe.name} recept – Varázsfazék`,description,url:`${base}/recept/${recipe.id}`,type:'article',images:photo?[{url:photo.src,alt:photo.alt}]:undefined}};
}
export default async function RecipePage({params}:{params:Promise<{id:string}>}) {
  const {id} = await params;
  const recipe = getRecipe(id);
  if (!recipe) notFound();
  const photo = recipePhotos[recipe.id as keyof typeof recipePhotos];
  const ingredients = recipe.ingredients.map(([name,amount,unit]: [string,number,string])=>`${amount} ${unit} ${name}`);
  const data = {'@context':'https://schema.org','@type':'Recipe',name:recipe.name,description:`${recipe.name} házias recept, részletes elkészítéssel.`,image:photo?[`${base}${photo.src}`]:undefined,recipeYield:`${recipe.baseServings ?? 4} adag`,totalTime:`PT${recipe.minutes}M`,prepTime:`PT${recipe.prepMinutes}M`,cookTime:`PT${recipe.cookMinutes}M`,recipeIngredient:ingredients,recipeInstructions:recipe.steps.map((text:string)=>({'@type':'HowToStep',text})),inLanguage:'hu-HU',author:{'@type':'Organization',name:'Varázsfazék'}};
  return <div className="app-shell"><header className="header"><Link href="/" className="seo-brand"><img className="brand-logo" src="/brand/varazsfazek-pot-v1.webp" alt="" width={68} height={68}/><span><strong>Varázsfazék</strong><small>Minden napra egy jó ötlet.</small></span></Link></header><main className="seo-recipe"><nav aria-label="Morzsamenü"><Link href="/">Főoldal</Link> / <Link href="/receptek">Receptek</Link> / {recipe.name}</nav><article><h1>{recipe.name}</h1><p>⏱ {recipe.minutes} perc · {recipe.baseServings ?? 4} adag</p>{photo&&<img className="seo-photo" src={photo.src} alt={photo.alt} width={960} height={640}/>}<h2>Hozzávalók</h2><ul>{ingredients.map((item:string,i:number)=><li key={i}>{item}</li>)}</ul><h2>Elkészítés</h2><ol>{recipe.steps.map((step:string,i:number)=><li key={i}>{step}</li>)}</ol>{recipe.note&&<p>{recipe.note}</p>}<p className="muted">Az elkészítési idő tájékoztató jellegű. Az allergének ellenőrzéséhez nézd meg az alapanyagok címkéit.</p><Link href="/">← Vissza a Varázsfazékhoz – menütervezés és bevásárlólista</Link></article></main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\\u003c')}}/></div>;
}
