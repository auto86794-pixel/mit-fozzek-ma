from PIL import Image
from pathlib import Path
import subprocess
root=Path('/mnt/data/v9_photo_work')
# first collage and second collage; index is zero-based row-major, 6 columns
sources=[Image.open('/mnt/data/a_high_resolution_food_photo_collage_a_grid_of_30.png').convert('RGB'),Image.open('/mnt/data/a_detailed_collage_food_image_a_grid_of_30_recipe.png').convert('RGB')]
assign={
'v9-paradicsomos-husgomboc':(1,0),'v9-zoldbabfozelek':(1,2),'v9-paprikas-krumpli':(1,1),'v9-csirkes-rizses-egytal':(1,4),'v9-tojasos-nokedli':(1,3),'v9-sutoben-sult-csirkecomb':(1,23),'v9-lencsefozelek':(1,18),'v9-almas-palacsinta':(1,29),'v9-tejszines-gombas-csirke':(1,5),'v9-csirkes-tortilla':(1,6),'v9-krumplis-teszta':(1,8),'v9-sargaborso-fozelek':(1,9),'v9-rakott-karfiol':(1,7),'v9-zoldseges-rizotto':(1,10),'v9-sutoben-sult-zoldseges-fasirt':(0,24),'v9-sajtos-tejfolos-teszta':(0,22),'v9-paradicsomos-mozzarellas-teszta':(0,23),'v9-csirkes-zoldseges-teszta':(0,28)
}
# reject images with significant mismatches: v9-sajtos-tejfolos-teszta 22 is baked pasta not correct, v9-csirkes-zoldseges-teszta 28 close enough but chicken and vegetables no pasta; remove.
for key in ['v9-sajtos-tejfolos-teszta','v9-csirkes-zoldseges-teszta'] : assign.pop(key)
for key,(si,i) in assign.items():
 im=sources[si];w,h=im.size;col=i%6;row=i//6;x0=round(col*w/6)+5;x1=round((col+1)*w/6)-5;y0=round(row*h/5)+4;y1=round((row+1)*h/5)-58
 tile=im.crop((x0,y0,x1,y1)).resize((960,640),Image.Resampling.LANCZOS)
 tile.save(root/'public/recipes'/f'{key}.webp',format='WEBP',quality=86,method=6)
 tile.resize((384,256),Image.Resampling.LANCZOS).save(root/'public/recipes'/f'{key}-small.webp',format='WEBP',quality=80,method=6)
js=root/'lib/recipe-photos.mjs'
with js.open('a') as f:
 f.write('\n// V9.1: new matching recipe illustrations.\nObject.assign(recipePhotos, {\n')
 for key in assign:
  f.write(f'  "{key}": {{"src":"/recipes/{key}.webp","thumbnail":"/recipes/{key}-small.webp","alt":"{key.replace("v9-", "").replace("-", " ")} – ételillusztráció"}},\n')
 f.write('});\n')
# clean non-portable duplicate legacy lecsó files; valid lecso-v2 variants remain
for p in (root/'public/recipes').iterdir():
 try:p.name.encode('utf-8')
 except UnicodeEncodeError:p.unlink()
 else:
  if p.name.startswith('lecs') and p.name not in ('lecso-v2.webp','lecso-v2-small.webp'):
   p.unlink()
print('Added',len(assign),'recipe images')
