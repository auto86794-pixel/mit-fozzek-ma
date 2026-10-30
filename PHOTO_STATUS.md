# Receptképek – teljes sorozat

Mind a 30 recepthez külön, a recept neve és hozzávalói alapján készített AI-ételillusztráció tartozik. A képek nem valódi ételfotók. A hozzárendelés stabil receptazonosító alapján történik a `lib/recipe-photos.mjs` fájlban; a szűrés és sorrend nem változtatja meg.

Minden képnek 960×640 pixeles részletképe és 384×256 pixeles bélyegképe van. A böngésző a megjelenítési méretnek megfelelő változatot tölti be. A `-v2` fájlnevek elkerülik a régi képek gyorsítótárból való megjelenését. Sikertelen betöltésnél az étel ikonja jelenik meg.

A korábbi képfájlok megmaradtak, de az oldal az új sorozatot használja. A helyi ellenőrzőlap: `output/photo-audit/all-recipes.jpg`.
