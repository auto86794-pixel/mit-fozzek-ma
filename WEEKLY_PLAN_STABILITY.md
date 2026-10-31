# Heti menü stabilitási javítások

- A heti receptazonosítók, a hét saját adagszáma és szűrői, a főoldal beállításai, a bevásárlólista, a pipák és az importok nyilvántartása egyetlen `mfm-planner-v7` helyi snapshotba mentődnek.
- A korábbi `mfm-week-v6`, `mfm-shopping`, `mfm-checked` adatok átkerülnek, az eredeti kulcsok megmaradnak. A régi verzió nem mentett adagszámot, ezért átvételkor a felület egyszer ellenőrzést kér. Hiányzó receptnél a nap helye megmarad, a hiányt a felület jelzi.
- A heti menü saját beállításai függetlenek a főoldal utólagos módosításaitól. Az eltérést és az új szűrőknek nem megfelelő napokat külön jelzés mutatja. A napcsere a hét saját szűrőit használja.
- Az azonos receptmennyiségből, azonos adagszámmal készített menü egyszer kerülhet a meglévő bevásárlólistára. A nyilvántartás és a hozzávalók együtt mentődnek. A napok puszta átrendezése nem jelent új hozzávalókat.
- Másik menü vagy adagszám hozzáadása a korábbi lista mellé megerősítést kér. Nem helyettesíti automatikusan a korábbi hozzávalókat, mert azok más receptekhez vagy vásárlásokhoz is tartozhatnak. Új bevásárlás indítható a teljes lista kiürítésével.
- Részleges törlés vagy egy pipa módosítása nem oldja fel a duplázásvédelmet. A teljesen üres lista új vásárlást tesz lehetővé. A teljesen feltöltött kamrából következő üres hozzáadás nem foglal importot.
- Mentési hiba látható üzenetet ad. Hibás aktuális JSON snapshot helyreállítás előtt `mfm-planner-v7-recovery` alatt megmarad; ha ez sem menthető, nem írjuk felül a hibás forrást.

## Ellenőrzés

A regressziós tesztek lefedik a 2 fős terv JSON-visszatöltését, a korábbi adatok átvételét, a gyors ismételt hozzáadást, az újratöltés utáni védelmet, a pipák megtartását, az új vásárlást, a kamra miatti üres hozzáadást, a sérült adatformákat, a mentési hibát és a szűrt napcserét.

A helyi böngészős próba ellenőrizte a korábbi hét átvételét, a 2 fő és húsmentes szűrő megőrzését, a megmaradó pipa és mennyiségek visszatöltését, a letiltott ismételt importot és az eltérő menü hozzáadásának visszavonását. A működés helyi böngészőmentésen alapul; nem fiókok közötti szinkronizálás.
