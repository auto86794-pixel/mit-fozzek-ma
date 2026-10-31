'use client';

import {useState} from 'react';
import type {Ingredient} from '../lib/recipes.mjs';
import {shoppingKey,splitShopping} from '../lib/shopping.mjs';

type Props={
 items:Ingredient[];
 checked:string[];
 pantryCount:number;
 onRemovePantry:()=>void;
 onToggle:(key:string)=>void;
 onRemove:(key:string)=>void;
 onReset:()=>void;
 onClear:()=>void;
 onBrowse:()=>void;
};

export default function ShoppingChecklist({items,checked,pantryCount,onRemovePantry,onToggle,onRemove,onReset,onClear,onBrowse}:Props){
 const {remaining,purchased}=splitShopping(items,checked);
 const [notice,setNotice]=useState('');

 function renderItem(item:Ingredient,bought:boolean){
  const key=shoppingKey(item);
  return <li className={'checklist-item'+(bought?' is-purchased':'')} key={key}>
   <label className="checklist-label">
    <input type="checkbox" checked={bought} onChange={()=>{onToggle(key);setNotice(item.name+(bought?' visszakerült a megvenni valók közé.':' a Megvéve részbe került.'));}}/>
    <span className="checklist-item-text"><strong>{item.name}</strong><span>{item.quantity.toLocaleString('hu-HU')} {item.unit}</span></span>
    <span className="checklist-item-action" aria-hidden="true">{bought?'Visszateszem':'Kosárba'}</span>
   </label>
   <button type="button" className="checklist-remove" aria-label={item.name+' törlése a bevásárlólistáról'} onClick={()=>{onRemove(key);setNotice(item.name+' törölve a listáról.');}}>×</button>
  </li>;
 }

 return <section className="store-checklist" aria-labelledby="shopping-title">
  <p className="eyebrow">A BOLTBAN IS VELED</p>
  <h1 id="shopping-title">Bevásárlólista</h1>
  <p className="muted">Pipáld ki, amit betettél a kosárba. A kipipált tételeket lent, a „Megvéve” részben találod.</p>
  <p className="checklist-announcement" role="status">{notice}</p>
  {pantryCount>0&&<div className="pantry-shopping-notice"><p><strong>{pantryCount} alapanyag már otthon van</strong> a bevásárlólistádról. Ezeket külön eltávolíthatod, a többi tétel megmarad.</p><button type="button" className="secondary full" onClick={()=>{onRemovePantry();setNotice("Az otthon meglévő alapanyagokat eltávolítottuk a listáról.");}}>Otthon lévők levétele a listáról</button></div>}
  {items.length>0?<>
   <div className="checklist-progress">
    <div><strong>{remaining.length===0?'Minden a kosárban!':remaining.length+' tétel van még hátra'}</strong><span>{purchased.length} / {items.length} megvéve</span></div>
    <progress value={purchased.length} max={items.length} aria-label="Bevásárlás állása"/>
   </div>
   <section aria-labelledby="remaining-title">
    <h2 id="remaining-title" className="checklist-group-title">Még megvenni <span>{remaining.length}</span></h2>
    {remaining.length>0?<ul className="store-checklist-items">{remaining.map(item=>renderItem(item,false))}</ul>:<p className="checklist-complete">✓ Kész a bevásárlás! Minden tételt megtalálsz lent, a „Megvéve” részben.</p>}
   </section>
   <section aria-labelledby="purchased-title">
    <h2 id="purchased-title" className="checklist-group-title">Megvéve <span>{purchased.length}</span></h2>
    {purchased.length>0?<><p className="muted">Téves pipa? Koppints a tételre, és visszakerül a megvenni valók közé.</p><ul className="store-checklist-items">{purchased.map(item=>renderItem(item,true))}</ul><button type="button" className="secondary full" onClick={()=>{onReset();setNotice('Minden tétel visszakerült a megvenni valók közé.');}}>Minden vissza a listára</button></>:<p className="checklist-hint">Ide kerül, amit kipipálsz. A tételek a lista bezárása után is megmaradnak ebben a böngészőben.</p>}
   </section>
   <details className="checklist-options"><summary>Lista kezelése</summary><p className="muted">A receptek azonos hozzávalóit összeadjuk. A kamrában megadott alapanyagok kimaradnak.</p><button type="button" className="secondary full" onClick={onClear}>Teljes lista törlése</button></details>
  </>:<div className="empty"><p>Még üres a listád. Válassz egy receptet, és add hozzá a hiányzó hozzávalókat!</p><button type="button" className="primary full" onClick={onBrowse}>Receptek kiválasztása →</button></div>}
 </section>;
}
