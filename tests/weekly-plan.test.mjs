import test from 'node:test';import assert from 'node:assert/strict';
import {recipes,shoppingIngredients,mergeIngredients} from '../lib/recipes.mjs';
import {days,generateWeek,replaceDay,weekIngredients} from '../lib/weekly-plan.mjs';
test('seven days with distinct recipes',()=>{const plan=generateWeek(recipes);assert.equal(plan.length,7);assert.equal(new Set(plan).size,7);assert.equal(days.length,7)});
test('replacement changes only one day',()=>{const plan=generateWeek(recipes);const next=replaceDay(plan,2,recipes);assert.notEqual(next[2],plan[2]);assert.deepEqual(next.filter((_,i)=>i!==2),plan.filter((_,i)=>i!==2))});
test('week groceries combine quantities and exclude pantry',()=>{const plan=generateWeek(recipes);const items=weekIngredients(plan,recipes,4,shoppingIngredients,mergeIngredients,name=>name==='só');assert.ok(items.length);assert.ok(!items.some(i=>i.name==='só'));assert.equal(new Set(items.map(i=>i.name+'|'+i.unit)).size,items.length)});
