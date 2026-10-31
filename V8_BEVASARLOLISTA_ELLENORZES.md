# Varázsfazék V8 – Bevásárlólista és adagváltás ellenőrzése

- A 2, 4 és 6 személyre számolt mennyiségeket automatikus tesztek ellenőrzik.
- Az azonos nevű és azonos mértékegységű hozzávalók összevonásánál a tizedes mennyiségeket két tizedesre kerekítjük; eltérő mértékegységeket nem vonunk össze.
- Az egy- és kétfogásos heti menü bevásárlólistájának összeállítását külön tesztek ellenőrzik.
- Az otthon lévő alapanyagok kiszűrését a kétfogásos menüben teszteltük.
- A meglévő bevásárlólista felülete és a böngészőben tárolt adatok formátuma változatlan.

## Eredmény
39/39 Node automatikus teszt sikeres. A teljes Next.js build helyben nem futott le, mert a node_modules nincs a feltöltött ZIP-ben. A Vercel telepítés külön ellenőrzendő.

## Ismert működés
A heti hozzávalók ismételt hozzáadása a már meglévő listához ismét növeli a mennyiségeket. Ez a korábbi működés, nem módosítottuk automatikusan, mert a felhasználó akár többször is megfőzheti ugyanazt a menüt.
