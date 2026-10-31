'use client';
import type {Recipe} from '../lib/recipes.mjs';
import {matches} from '../lib/recipes.mjs';
import {days} from '../lib/weekly-plan.mjs';
import type {PlanSettings,PlannerState} from '../lib/planner-state.mjs';
import type {ReactNode} from 'react';

type Props={
 week:PlannerState['week'];preferences:PlanSettings;recipes:Recipe[];ready:boolean;alreadyAdded:boolean;notice:string;
 onSettings:(patch:Partial<PlanSettings>)=>void;onGenerate:()=>void;onReplace:(index:number)=>void;onOpen:(recipe:Recipe)=>void;
 onClear:()=>void;onAdd:()=>void;photo:(recipe:Recipe)=>ReactNode;
};

export default function WeeklyPlanner({week,preferences,recipes,ready,alreadyAdded,notice,onSettings,onGenerate,onReplace,onOpen,onClear,onAdd,photo}:Props){
 const settings=week.settings;
 const planned=week.ids.map(id=>recipes.find(recipe=>recipe.id===id));
 const missing=planned.filter(recipe=>!recipe).length;
 const violations=planned.filter(recipe=>recipe&&!matches(recipe,settings.minutes,settings.type)).length;
 const eligible=recipes.filter(recipe=>matches(recipe,settings.minutes,settings.type));
 const different=week.ids.length>0&&(settings.minutes!==preferences.minutes||settings.type!==preferences.type||settings.servings!==preferences.servings);
 const repeats=week.ids.length-new Set(week.ids.filter(Boolean)).size;
 return <section className="weekly-section"><h1>Heti menütervező</h1>
  <p className="muted">A hét ételei és az alábbi beállítások együtt mentődnek ebben a böngészőben.</p>
  <fieldset className="weekly-settings" disabled={!ready}><legend>A heti menü beállításai</legend>
   <label htmlFor="week-servings">Hány főre?</label><select id="week-servings" value={settings.servings} onChange={e=>onSettings({servings:Number(e.target.value)})}>{[1,2,3,4,5,6,7,8].map(n=><option key={n} value={n}>{n} fő</option>)}</select>
   <label htmlFor="week-minutes">Egy ételre szánt idő</label><select id="week-minutes" value={settings.minutes} onChange={e=>onSettings({minutes:Number(e.target.value)})}>{[15,30,45,60,90,120,180].map(n=><option key={n} value={n}>{n} perc</option>)}</select>
   <label htmlFor="week-type">Étel típusa</label><select id="week-type" value={settings.type} onChange={e=>onSettings({type:e.target.value as PlanSettings['type']})}><option value="any">Bármi jöhet</option><option value="budget">Olcsón</option><option value="meatless">Húsmentes</option></select>
  </fieldset>
  {week.needsReview&&<p className="weekly-warning" role="status">A korábbi verzió csak az ételeket mentette. Ellenőrizd a fenti adagszámot, mert a régi beállítás nem állítható vissza biztosan.</p>}
  {different&&<div className="weekly-hint"><p>A főoldal beállításai eltérnek. A heti menü a fenti saját beállításait használja.</p><button type="button" className="secondary small" onClick={()=>onSettings(preferences)}>Főoldali beállítások átvétele</button></div>}
  {violations>0&&<p className="weekly-warning" role="status">{violations} nap étele nem felel meg a most választott időnek vagy ételtípusnak. A mentett ételeket megtartottuk; kérj új heti menüt, vagy cseréld ki az érintett napokat.</p>}
  {missing>0&&<p className="weekly-warning" role="status">{missing} nap receptje nem érhető el. Állíts össze új hetet, mielőtt hozzáadod a hozzávalókat.</p>}
  <p className="muted">A szűrők az új összeállításra és a napok cseréjére vonatkoznak. Az adagszám minden napra érvényes.</p>
  <div className="weekly-actions"><button type="button" className="primary" disabled={!ready||!eligible.length} onClick={onGenerate}>{week.ids.length?'Új heti menü készítése ↻':'Heti menü összeállítása →'}</button>{week.ids.length>0&&<button type="button" className="secondary small" onClick={onClear}>Terv törlése</button>}</div>
  {!eligible.length&&<p className="weekly-warning">Ezekkel a szűrőkkel nincs választható recept. Adj meg több időt vagy más ételtípust; a meglévő terved megmarad.</p>}
  {eligible.length>0&&eligible.length<7&&<p className="weekly-hint">A szűrőkhöz {eligible.length} különböző recept tartozik, ezért egy teljes héten ismétlődhetnek az ételek.</p>}
  <p className="weekly-notice" role="status">{notice}</p>
  {week.ids.length>0&&<><div className="weekly-grid">{days.map((day,index)=>{const recipe=planned[index];return <article className="weekly-day" key={day}><span className="weekly-day-name">{day}</span>{recipe?<>{photo(recipe)}<h3>{recipe.name}</h3><p className="muted">⏱ kb. {recipe.minutes} perc · {settings.servings} fő</p>{!matches(recipe,settings.minutes,settings.type)&&<p className="weekly-day-warning">Eltér a választott szűrőktől</p>}<div className="weekly-day-buttons"><button type="button" className="small" onClick={()=>onOpen(recipe)} aria-label={day+': '+recipe.name+' receptje'}>Recept →</button><button type="button" className="small secondary" onClick={()=>onReplace(index)} aria-label={day+': másik étel'}>Másikat kérek ↻</button></div></>:<p>Nincs elérhető recept</p>}</article>;})}</div>
   {repeats>0&&<p className="muted">A heti tervben van ismétlődő étel; a hozzávalók minden főzési alkalomra beleszámítanak.</p>}
   <button type="button" className="primary full" disabled={!ready||missing>0||alreadyAdded} onClick={onAdd}>{alreadyAdded?'✓ Ez a menü már a bevásárlólistán van':'＋ Heti hozzávalók a bevásárlólistára'}</button>
   {alreadyAdded&&<p className="weekly-hint">Ugyanazt a menüt nem adjuk hozzá újra. Új bevásárláshoz előbb ürítsd ki a bevásárlólistát.</p>}
   <p className="muted">Az azonos hozzávalókat összevonjuk, a kamrában lévőket kihagyjuk. A meglévő lista megmarad; eltérő heti menü hozzáadása előtt külön megerősítést kérünk.</p>
  </>}
 </section>;
}
