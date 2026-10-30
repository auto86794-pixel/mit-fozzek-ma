# Mit főzzek ma? – stabil induló alap

Magyar nyelvű, mobilra optimalizált Next.js 16 alkalmazás, zsályazöld–bézs–arany arculattal.

## Indítás

Node.js 20.9+ szükséges.

```bash
npm install
npm run dev
```

Nyisd meg: http://localhost:3000

## Ellenőrzés

```bash
npm test
npm run build
```

## Funkciók

- Napi 3 receptajánlat, idő és ételtípus szerinti szűrés
- 12 induló mintarecept, 4 fős alapmennyiségekkel
- Adagarányos hozzávalók (1–8 fő)
- Összevont, kipipálható bevásárlólista
- Kedvencek és lista mentése a böngésző helyi tárhelyére
- Mobilos alsó navigáció, receptkereső

## Tudatos korlátok

- A 12 recept fejlesztési mintatartalom: publikálás előtt receptszakmai, allergén- és mennyiségi ellenőrzés szükséges.
- Nem számol aktuális bolti árakat, nincs autentikáció vagy felhőszinkron.
- A helyi mentés az adott böngészőhöz kötött, törléskor elveszhet.
- Ételképek helyett most emojik szerepelnek, a fotókat később jogtiszta, optimalizált képekkel adjuk hozzá.
- Nem tartalmaz előfizetést vagy külső API-t.

## Következő lépések

1. Felhasználói teszt mobilon
2. Ellenőrzött recept-adatbázis és admin
3. Alapanyag-alapú ajánló
4. Több eszköz közti szinkron
