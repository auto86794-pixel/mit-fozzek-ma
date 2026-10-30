import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import sharp from 'sharp';
import {recipes} from '../lib/recipes.mjs';
import {recipePhotos} from '../lib/recipe-photos.mjs';

test('all recipes have an individual photo pair assigned by stable recipe ID', async()=>{
  assert.deepEqual(Object.keys(recipePhotos).sort(), recipes.map(r=>r.id).sort());
  const hashes = new Set();
  for(const recipe of recipes){
    const photo=recipePhotos[recipe.id];
    const slug=recipe.id==='lecsó'?'lecso':recipe.id;
    assert.equal(photo.src,`/recipes/${slug}-v2.webp`);
    assert.equal(photo.thumbnail,`/recipes/${slug}-v2-small.webp`);
    assert.ok(photo.alt.includes(recipe.name));
    for(const [file,width,height] of [[photo.src,960,640],[photo.thumbnail,384,256]]){
      const buffer=await readFile(new URL('../public'+file,import.meta.url));
      const metadata=await sharp(buffer).metadata();
      assert.equal(metadata.format,'webp',recipe.id);
      assert.equal(metadata.width,width,recipe.id);
      assert.equal(metadata.height,height,recipe.id);
      assert.ok(buffer.length<200000,`Oversized image: ${file}`);
      await sharp(buffer).raw().toBuffer();
      const hash=createHash('sha256').update(buffer).digest('hex');
      assert.ok(!hashes.has(hash),`Repeated image: ${file}`);
      hashes.add(hash);
    }
  }
});
