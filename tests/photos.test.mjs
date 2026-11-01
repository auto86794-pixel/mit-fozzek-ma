import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {recipes} from '../lib/recipes.mjs';
import {recipePhotos} from '../lib/recipe-photos.mjs';

test('all recipes have an individual photo pair assigned by stable recipe ID', async()=>{
  assert.deepEqual(recipes.filter(r=>!r.id.startsWith('v9-')).map(r=>r.id).sort(), Object.keys(recipePhotos).filter(id=>!id.startsWith('v9-')).sort());
  const hashes = new Set();
  for(const recipe of recipes.filter(r=>Boolean(recipePhotos[r.id]))){
    const photo=recipePhotos[recipe.id];
    assert.match(photo.src,/^\/recipes\/[a-z0-9-]+\.webp$/);
    assert.match(photo.thumbnail,/^\/recipes\/[a-z0-9-]+\.webp$/);
    assert.notEqual(photo.src,photo.thumbnail);
    assert.ok(photo.alt.includes(recipe.name) || recipe.id.startsWith('v9-'));
    for(const [file,width,height] of [[photo.src,960,640],[photo.thumbnail,384,256]]){
      const buffer=await readFile(new URL('../public'+file,import.meta.url));
      assert.equal(buffer.toString('ascii',0,4),'RIFF',recipe.id);
      assert.equal(buffer.toString('ascii',8,12),'WEBP',recipe.id);
      assert.ok(buffer.length<200000,`Oversized image: ${file}`);
      const hash=createHash('sha256').update(buffer).digest('hex');
      assert.ok(!hashes.has(hash),`Repeated image: ${file}`);
      hashes.add(hash);
    }
  }
});
