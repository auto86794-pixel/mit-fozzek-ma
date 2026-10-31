'use client';
import {useEffect,useState} from 'react';
import {recipes} from '../lib/recipes.mjs';
import {emptyPlanner,plannerStorageKey,restorePlanner,savePlanner} from '../lib/planner-state.mjs';

export function usePlannerStore(){
 const [planner,setPlanner]=useState(emptyPlanner);
 const [loaded,setLoaded]=useState(false);
 const [saveError,setSaveError]=useState(false);
 const [readError,setReadError]=useState(false);
 const [canSave,setCanSave]=useState(true);
 useEffect(()=>{
  let failed=false;let writable=true;
  function read(key:string){
   try{
    const value=localStorage.getItem(key);
    if(!value)return null;
    try{return JSON.parse(value);}catch{
     failed=true;
     // Preserve a damaged current snapshot before any fallback is saved.
     if(key===plannerStorageKey){try{localStorage.setItem(key+'-recovery',value);}catch{writable=false;}}
     return null;
    }
   }catch{failed=true;writable=false;return null;}
  }
  const saved=read(plannerStorageKey);
  const hasSnapshot=saved&&typeof saved==='object'&&!Array.isArray(saved);
  const restored=restorePlanner(saved,hasSnapshot?null:read('mfm-week-v6'),hasSnapshot?null:read('mfm-shopping'),hasSnapshot?null:read('mfm-checked'),recipes);
  setPlanner(restored);setReadError(failed);setCanSave(writable);setLoaded(true);
 },[]);
 useEffect(()=>{
  if(!loaded||!canSave)return;
  try{setSaveError(!savePlanner(localStorage,planner));}catch{setSaveError(true);}
 },[planner,loaded,canSave]);
 return {planner,setPlanner,loaded,saveError:readError||saveError||!canSave};
}
