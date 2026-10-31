import test from 'node:test';
import assert from 'node:assert/strict';
import {splitShopping,reopenAddedItems,shoppingKey} from '../lib/shopping.mjs';
import {mergeIngredients} from '../lib/recipes.mjs';

const milk={name:'tej',quantity:500,unit:'ml'};
const eggs={name:'tojás',quantity:4,unit:'db'};

test('existing saved checkmarks move only matching items to purchased; undo restores them',()=>{
 const items=[milk,eggs];
 assert.deepEqual(splitShopping(items,['tej|ml','deleted|g']),{remaining:[eggs],purchased:[milk]});
 assert.deepEqual(splitShopping(items,[]),{remaining:items,purchased:[]});
 assert.deepEqual(splitShopping(items,items.map(shoppingKey)),{remaining:[],purchased:items});
});

test('adding a recipe again reopens its merged ingredients without unchecking other purchases',()=>{
 const addition={...milk,quantity:250};
 const saved=['tej|ml','tojás|db'];
 const checked=reopenAddedItems(saved,[addition]);
 const items=mergeIngredients([milk,eggs,addition]);
 const {remaining,purchased}=splitShopping(items,checked);
 assert.deepEqual(remaining,[{...milk,quantity:750}]);
 assert.deepEqual(purchased,[eggs]);
 assert.deepEqual(saved,['tej|ml','tojás|db']);
});

test('different units stay separate and removed items never inflate the progress',()=>{
 const milkByBottle={name:'tej',quantity:1,unit:'db'};
 assert.deepEqual(splitShopping([milk,milkByBottle],['tej|ml']),{remaining:[milkByBottle],purchased:[milk]});
 assert.deepEqual(splitShopping([],['tej|ml']),{remaining:[],purchased:[]});
});
