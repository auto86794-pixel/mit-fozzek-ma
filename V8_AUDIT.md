# Varázsfazék V8 – ellenőrzés

- 33/33 automatikus teszt sikeres a javítás után.
- Javítva: érvénytelen napindex esetén a heti menü ételcseréje nem változtatja meg a tervet.
- Javítva: a receptfotó-teszt a tényleges képfájlokat vizsgálja, nem követeli meg a régi v2 fájlneveket, és nem függ a projektben nem deklarált sharp csomagtól.
- A fotóteszt ellenőrzi a WebP fájlok alapformátumát, méretkorlátját és az egyedi képfájlokat, de nem helyettesíti a vizuális ellenőrzést.
- A teljes Next.js build ebben a környezetben nem futott le, mert a node_modules/next nincs telepítve. A felhasználó gépén npm ci, majd npm run build szükséges.
- A receptek szakmai, tételes felülvizsgálata és a mobilos vizuális teszt külön ellenőrzést igényel.
