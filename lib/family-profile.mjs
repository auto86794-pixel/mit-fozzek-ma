export const PROFILE_KEY='mfm-family-profile-v9';
export const DEFAULT_PROFILE=Object.freeze({servings:4,cookingTime:60,disliked:[],allergens:[]});
export const DISLIKED_OPTIONS=['gomba','hal','brokkoli','karfiol','padlizsán','hagyma','fokhagyma','paprika'];
export const ALLERGEN_OPTIONS=['glutén','tej','tojás','földimogyoró','diófélék','szója','hal','rákfélék','puhatestűek','zeller','mustár','szezám','csillagfürt','szulfitok'];
export function normalizeProfile(value){
 const source=value&&typeof value==='object'&&!Array.isArray(value)?value:{};
 const servings=Number(source.servings),cookingTime=Number(source.cookingTime);
 const clean=(input,options)=>Array.isArray(input)?[...new Set(input.filter(x=>typeof x==='string'&&options.includes(x)))]:[];
 return {servings:Number.isInteger(servings)&&servings>=1&&servings<=8?servings:4,cookingTime:[15,30,45,60,90,120,180].includes(cookingTime)?cookingTime:60,disliked:clean(source.disliked,DISLIKED_OPTIONS),allergens:clean(source.allergens,ALLERGEN_OPTIONS)};
}
