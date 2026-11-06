import type {MetadataRoute} from 'next';
import {recipes} from '../lib/recipes.mjs';
const origin='https://varazsfazek.hu';
export default function sitemap(): MetadataRoute.Sitemap {return [{url:origin+'/',changeFrequency:'weekly',priority:1},{url:origin+'/receptek',changeFrequency:'weekly',priority:0.9},...recipes.map(r=>({url:`${origin}/recept/${r.id}`,changeFrequency:'monthly' as const,priority:0.7}))];}
