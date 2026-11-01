# Varázsfazék – domain és Google Search Console

Éles domain: https://varazsfazek.hu/

A Next.js automatikusan kiszolgálja:
- https://varazsfazek.hu/robots.txt
- https://varazsfazek.hu/sitemap.xml

A webhelytérkép jelenleg csak a főoldalt tartalmazza, mert a receptek és a funkciók egyetlen oldal belső nézetei, nem külön indexelhető URL-ek.

## Telepítés
1. Vercel projekt → Settings → Domains: add `varazsfazek.hu` and `www.varazsfazek.hu`.
2. A domain regisztrátor DNS-felületén a Vercel által az adott projekthez mutatott DNS-rekordokat állítsd be. Ne feltételezz előre konkrét rekordot.
3. A Vercelen az elsődleges domain legyen `varazsfazek.hu`; a `www` irányítson át erre.
4. Ellenőrizd a két végpontot és a HTTPS-t, csak ezután küldd be a Search Console-ba.
5. Google Search Console → Tulajdon hozzáadása → Domain: `varazsfazek.hu` → DNS TXT ellenőrzés (a Google által adott egyedi értékkel).
6. Webhelytérképek → `https://varazsfazek.hu/sitemap.xml` beküldése.
7. URL-ellenőrzés → `https://varazsfazek.hu/` → Indexelés kérése.

A DNS-igazolás TXT értékét nem lehet előre kitalálni. Az indexelés nem azonnali és nem garantált.

## Fontos
Ez a csomag nem módosítja a recepteket vagy a felhasználói funkciókat. A domain aktiválásáig a `metadataBase` és a canonical az új domainre mutat; ezért ezt a változatot a domain átállásával együtt érdemes élesíteni.
