// Keep the existing saved checkbox keys so earlier shopping lists remain usable.
export function shoppingKey(item){return item.name+'|'+item.unit;}

export function splitShopping(items,checked){
 const purchasedKeys=new Set(checked);
 const remaining=[],purchased=[];
 for(const item of items){(purchasedKeys.has(shoppingKey(item))?purchased:remaining).push(item);}
 return {remaining,purchased};
}

export function reopenAddedItems(checked,additions){
 const addedKeys=new Set(additions.map(shoppingKey));
 return checked.filter(key=>!addedKeys.has(key));
}
