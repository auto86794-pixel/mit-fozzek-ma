# Varázsfazék V8 – receptadatok ellenőrzése

Forrás: mitfozzekma(5).zip. 42 recept, köztük 18 leves.

## Javítások
- A 12 új leves receptjében feltüntettük a főzéshez szükséges víz mennyiségét és a só irányadó mennyiségét (4 adaghoz).
- A víz kimérésére vonatkozó szövegeket pontosítottuk, ahol a korábbi recept hozzávetőleges mennyiséget adott meg.
- Füstölt vagy konzerv hozzávalóknál kóstolás utáni sózást jeleztünk.
- A babos receptekben pontosítottuk, hogy a megadott konzervbab-mennyiség lecsepegtetett tömeg.
- A májgombócnál és csirkés leveseknél az átfőzés ellenőrzését pontosítottuk.
- Két új automatikus teszt ellenőrzi a levesek víz/só adatait és az adagváltás/bevásárlólista összhangját.

## Korlátok
Az automatikus tesztek a szerkezeti és számszaki összhangot ellenőrzik, nem helyettesítik a receptek gyakorlati kifőzését. A 42 recept minden egyes ízét és elkészítési idejét nem lehet kódteszttel hitelesíteni. A teljes Next.js build és a mobilos megjelenés külön ellenőrzendő.

## Megőrzött működés
A meglévő receptazonosítók, menüpontok, fotók, heti menü és bevásárlólista logikája változatlan.
