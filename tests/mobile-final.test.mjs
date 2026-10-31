import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const css=readFileSync(new URL('../app/globals.css',import.meta.url),'utf8');
const page=readFileSync(new URL('../app/page.tsx',import.meta.url),'utf8');
test('mobile navigation lays out all six destinations',()=>{
 assert.match(css,/\.bottom-nav\{grid-template-columns:repeat\(6,minmax\(0,1fr\)\)/);
 assert.match(css,/\.bottom-nav button\{min-width:0;flex:none;min-height:56px/);
});
test('soups search has an empty-result message',()=>{
 assert.match(page,/Nincs ilyen leves\. Próbálj másik keresést!/);
});
