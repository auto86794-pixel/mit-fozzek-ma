# Varázsfazék V3 – Minden napra egy jó ötlet.

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


## V2 változások
- Fotóközpontú receptkártyák és nyitóoldal, zsályazöld–bézs–arany színekkel.
- Napi ajánlásnál a nemrég megnyitott receptek hátrébb kerülnek.
- „Mi van otthon?” alapanyagok helyi mentése, részleges egyezéses ajánlás.
- Bevásárlólistába csak a nem otthon lévő hozzávalók kerülnek.
- A fotók külső Unsplash illusztrációk; nem feltétlenül a recept szerinti ételt mutatják. Éles kiadás előtt receptazonos, jogtisztán felhasználható saját képekre cserélendők.

## V3 márkaváltás

- Új márkanév: Varázsfazék; domain: varazsfazek.hu (DNS beállítás külön).
- A korábbi `mfm-*` localStorage-kulcsok szándékosan megmaradtak, hogy a korábbi kedvencek és bevásárlólisták azonos böngészőben és domainen ne vesszenek el. **Új domainen a böngésző nem viszi át automatikusan a régi domain helyi adatait.**
- Az Unsplash-fotók jelenleg illusztrációk, nem minden ételnél pontosak.
