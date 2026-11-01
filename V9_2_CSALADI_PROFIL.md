# Varázsfazék V9.2 – Családi profil, 1. ütem

- Új Profil navigációs pont és szerkesztőoldal.
- Családlétszám (1–8 fő) és főzési idő (15–180 perc) mentése a böngészőbe.
- A családlétszám szinkronban van a receptadagszámmal és a bevásárlólista mennyiségeivel.
- A főzési idő szinkronban van a főoldali időszűrővel.
- Nem kedvelt alapanyagok és 14 allergénkategória mentése.
- Fontos: a kizárások még NEM szűrik a recepteket; erre külön, ellenőrzött fejlesztési ütem szükséges. A felület ezt egyértelműen jelzi.
- A V9.1 összes receptje és fotója változatlan.
- Tesztek: `npm test` (49/49 sikeres).
- A teljes `npm run build` nem volt futtatható itt, mert a `next` függőség nincs telepítve. Helyben ellenőrizendő.
