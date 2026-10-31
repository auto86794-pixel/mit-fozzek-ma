import {soups} from './soups.mjs';
// Home-style recipes: quantities are for baseServings; total time includes resting.
const originalRecipes = [
  {
    "id": "paprikas",
    "name": "Csirkepaprikás nokedlivel",
    "minutes": 75,
    "budget": true,
    "meatless": false,
    "emoji": "🍗",
    "ingredients": [
      [
        "csirkecomb",
        800,
        "g"
      ],
      [
        "vöröshagyma",
        2,
        "db"
      ],
      [
        "tejföl",
        200,
        "g"
      ],
      [
        "liszt",
        400,
        "g"
      ],
      [
        "tojás",
        2,
        "db"
      ],
      [
        "pirospaprika",
        2,
        "tk"
      ],
      [
        "étolaj",
        2,
        "ek"
      ],
      [
        "só",
        1,
        "tk"
      ],
      [
        "őrölt bors",
        0.25,
        "tk"
      ],
      [
        "víz",
        300,
        "ml"
      ]
    ],
    "steps": [
      "A hagymát aprítsd fel. A csirkecombokat tisztítsd meg, majd a só felével és a borssal ízesítsd.",
      "Az olajon közepes lángon párold a hagymát 6–8 percig. Húzd le a lábast a tűzről, keverd hozzá a pirospaprikát, majd rögtön add hozzá a csirkét és a kimért vizet.",
      "Fedő alatt, kis lángon párold a csirkét 40–50 percig. Néha forgasd meg; ha elfő a leve, kevés vízzel pótold. A csont mellett is puhuljon meg.",
      "Közben forralj egy nagy fazék vizet. A lisztet a tojással, a maradék sóval és fokozatosan hozzáadott vízzel keverd sűrű, szaggatható tésztává. Csak röviden dolgozd össze.",
      "Szaggasd a nokedlit több adagban a forró vízbe. Miután feljött a víz tetejére, főzd még 1–2 percig, majd szűrd le.",
      "A tejfölhöz keverj néhány kanál forró szaftot, majd öntsd a csirkéhez. Kis lángon melegítsd össze, és a nokedlivel tálald."
    ],
    "baseServings": 4,
    "prepMinutes": 20,
    "cookMinutes": 55,
    "restMinutes": 0,
    "note": "A liszt a nokedlihez kell. A paprikást a tejföl krémesíti, külön lisztes habarás nem szükséges. A nokedli főzővize nincs beleszámítva a vízmennyiségbe."
  },
  {
    "id": "rakott",
    "name": "Rakott krumpli",
    "minutes": 70,
    "budget": true,
    "meatless": false,
    "emoji": "🥔",
    "ingredients": [
      [
        "burgonya",
        1000,
        "g"
      ],
      [
        "tojás",
        6,
        "db"
      ],
      [
        "kolbász",
        250,
        "g"
      ],
      [
        "tejföl",
        330,
        "g"
      ],
      [
        "étolaj",
        1,
        "ek"
      ],
      [
        "só",
        0.5,
        "tk"
      ],
      [
        "őrölt bors",
        0.25,
        "tk"
      ]
    ],
    "steps": [
      "A burgonyát mosd meg, héjában főzd éppen puhára, mérettől függően 20–25 perc alatt. A tojásokat külön, a forrástól számítva 10 percig főzd.",
      "A sütőt melegítsd elő 190 °C-ra, alsó-felső sütésen. A megfőtt burgonyát hűtsd annyira, hogy meg tudd hámozni; a tojásokat hideg vízben hűtsd le és pucold meg.",
      "A burgonyát, tojást és kolbászt vágd karikára. Az olajjal kend ki a sütőtálat.",
      "Rétegezd a burgonyát, tojást és kolbászt. A burgonyarétegeket enyhén sózd, borsozd, és oszd el közöttük a tejföl egy részét. A tetejére burgonya és a maradék tejföl kerüljön.",
      "Süsd 25–30 percig, amíg a közepe is átforrósodik és a teteje enyhén megpirul."
    ],
    "baseServings": 4,
    "prepMinutes": 20,
    "cookMinutes": 50,
    "restMinutes": 0
  },
  {
    "id": "teszta",
    "name": "Sajtos-tejfölös tészta",
    "minutes": 20,
    "budget": true,
    "meatless": true,
    "emoji": "🍝",
    "ingredients": [
      [
        "száraztészta",
        500,
        "g"
      ],
      [
        "tejföl",
        300,
        "g"
      ],
      [
        "reszelt sajt",
        200,
        "g"
      ],
      [
        "só",
        1,
        "tk"
      ]
    ],
    "steps": [
      "Forralj bő vizet egy nagy fazékban. Add hozzá a sót és a tésztát; a csomagoláson jelzett ideig főzd.",
      "Mielőtt leszűröd, tegyél félre egy kevés főzővizet. A tésztát szűrd le.",
      "A még forró tésztát keverd össze a tejföllel. Ha túl sűrű, adj hozzá kanalanként a félretett főzővízből.",
      "Szórd meg a reszelt sajttal, és azonnal tálald."
    ],
    "baseServings": 4,
    "prepMinutes": 5,
    "cookMinutes": 15,
    "restMinutes": 0
  },
  {
    "id": "fozelek",
    "name": "Zöldborsófőzelék",
    "minutes": 30,
    "budget": true,
    "meatless": true,
    "emoji": "🫛",
    "ingredients": [
      [
        "zöldborsó",
        800,
        "g"
      ],
      [
        "tej",
        400,
        "ml"
      ],
      [
        "liszt",
        40,
        "g"
      ],
      [
        "petrezselyem",
        1,
        "csokor"
      ],
      [
        "só",
        0.5,
        "tk"
      ],
      [
        "víz",
        250,
        "ml"
      ]
    ],
    "steps": [
      "A borsót tedd lábasba a kimért vízzel és a sóval. Fedő alatt, kis lángon főzd 10–15 percig, amíg megpuhul.",
      "A lisztet először kevés hideg tejjel keverd simára, majd öntsd hozzá a többi tejet.",
      "A tejes habarást folyamatos keverés mellett csorgasd a borsóhoz. Kis lángon főzd még 5–8 percig, hogy besűrűsödjön és a liszt is megfőjön.",
      "A megmosott, aprított petrezselymet keverd bele. Ha túl sűrű, kevés vízzel vagy tejjel lazítsd; ezután melegítsd át."
    ],
    "baseServings": 4,
    "prepMinutes": 5,
    "cookMinutes": 25,
    "restMinutes": 0,
    "note": "Fagyasztott vagy friss, tisztított zöldborsóval készíthető; a puhulási idő eltérhet."
  },
  {
    "id": "lecsó",
    "name": "Tojásos lecsó",
    "minutes": 40,
    "budget": true,
    "meatless": true,
    "emoji": "🍳",
    "ingredients": [
      [
        "paprika",
        700,
        "g"
      ],
      [
        "paradicsom",
        500,
        "g"
      ],
      [
        "vöröshagyma",
        2,
        "db"
      ],
      [
        "tojás",
        4,
        "db"
      ],
      [
        "étolaj",
        2,
        "ek"
      ],
      [
        "só",
        0.5,
        "tk"
      ]
    ],
    "steps": [
      "A paprikát és paradicsomot mosd meg. A paprikát csumázd ki, csíkozd fel; a paradicsomot darabold fel, a hagymát szeleteld vékonyra.",
      "Az olajon, közepes lángon párold a hagymát 5 percig. Add hozzá a paprikát és a sót, és kevergetve párold további 5 percig.",
      "Tedd bele a paradicsomot. Fedő alatt, időnként megkeverve főzd 10–15 percig, amíg a paprika megpuhul. Ha túl sok a leve, röviden fedő nélkül sűrítsd.",
      "A tojásokat külön tálban verd fel, öntsd a lecsóhoz, és kevergetve süsd addig, amíg a tojás teljesen megszilárdul."
    ],
    "baseServings": 4,
    "prepMinutes": 15,
    "cookMinutes": 25,
    "restMinutes": 0
  },
  {
    "id": "bolognai",
    "name": "Bolognai spagetti",
    "minutes": 50,
    "budget": false,
    "meatless": false,
    "emoji": "🍝",
    "ingredients": [
      [
        "spagetti",
        500,
        "g"
      ],
      [
        "darált hús",
        500,
        "g"
      ],
      [
        "passzírozott paradicsom",
        500,
        "g"
      ],
      [
        "vöröshagyma",
        1,
        "db"
      ],
      [
        "reszelt sajt",
        100,
        "g"
      ],
      [
        "étolaj",
        2,
        "ek"
      ],
      [
        "fokhagyma",
        2,
        "gerezd"
      ],
      [
        "só",
        1,
        "tk"
      ],
      [
        "őrölt bors",
        0.25,
        "tk"
      ],
      [
        "szárított oregánó",
        1,
        "tk"
      ]
    ],
    "steps": [
      "A hagymát és fokhagymát aprítsd fel. Az olajon párold a hagymát 5 percig, majd add hozzá a darált húst.",
      "A húst közepes-erős lángon, kevergetve és szétnyomkodva pirítsd 8–10 percig. A fokhagymát az utolsó percben add hozzá.",
      "Öntsd rá a passzírozott paradicsomot. A só felével, borssal és oregánóval ízesítsd, majd kis lángon főzd 20–25 percig. Ha túlságosan besűrűsödik, kevés vízzel lazítsd.",
      "Közben bő vízben, a maradék sóval főzd meg a spagettit a csomagolás szerint, majd szűrd le.",
      "A kész húsos szósszal és a reszelt sajttal tálald a spagettit."
    ],
    "baseServings": 4,
    "prepMinutes": 15,
    "cookMinutes": 35,
    "restMinutes": 0,
    "note": "Gyors, hétköznapi paradicsomos-húsos változat; nem a több órán át főzött olasz ragù."
  },
  {
    "id": "krumplis",
    "name": "Krumplis tészta",
    "minutes": 40,
    "budget": true,
    "meatless": true,
    "emoji": "🥘",
    "ingredients": [
      [
        "burgonya",
        800,
        "g"
      ],
      [
        "kockatészta",
        400,
        "g"
      ],
      [
        "vöröshagyma",
        2,
        "db"
      ],
      [
        "pirospaprika",
        2,
        "tk"
      ],
      [
        "étolaj",
        3,
        "ek"
      ],
      [
        "só",
        1,
        "tk"
      ],
      [
        "őrölt bors",
        0.5,
        "tk"
      ]
    ],
    "steps": [
      "A burgonyát hámozd meg, vágd kis kockákra, és a só felével ízesített vízben főzd puhára, körülbelül 15–20 perc alatt.",
      "A hagymát aprítsd fel, és az olajon 8–10 perc alatt párold puhára. Húzd le a tűzről, keverd bele a pirospaprikát, és rögtön adj hozzá kevés burgonyafőzővizet.",
      "A kockatésztát külön edényben, a maradék sóval ízesített vízben főzd meg a csomagolás szerint.",
      "A burgonyát szűrd le, villával törd össze, majd keverd a paprikás hagymához. Borsozd meg.",
      "Forgasd bele a leszűrt tésztát. Kis lángon, kevergetve melegítsd össze; ha száraz, kevés főzővizet adj hozzá."
    ],
    "baseServings": 4,
    "prepMinutes": 15,
    "cookMinutes": 25,
    "restMinutes": 0
  },
  {
    "id": "rizses",
    "name": "Zöldséges rizs",
    "minutes": 35,
    "budget": true,
    "meatless": true,
    "emoji": "🍚",
    "ingredients": [
      [
        "rizs",
        350,
        "g"
      ],
      [
        "vegyes zöldség",
        500,
        "g"
      ],
      [
        "vöröshagyma",
        1,
        "db"
      ],
      [
        "étolaj",
        2,
        "ek"
      ],
      [
        "só",
        0.75,
        "tk"
      ],
      [
        "víz",
        700,
        "ml"
      ]
    ],
    "steps": [
      "A rizst öblítsd át. A hagymát aprítsd fel, a zöldségeket vágd kis darabokra; fagyasztott keveréket felengedés nélkül is használhatsz.",
      "Az olajon párold a hagymát 4–5 percig. Add hozzá a rizst, és keverd át 1 percig.",
      "Tedd hozzá a zöldségeket, a kimért vizet és a sót. Forrald fel, majd fedő alatt, kis lángon főzd a rizs csomagolásán jelzett ideig, általában 15–20 percig.",
      "Ha a rizs még kemény, de a víz elfogyott, kevés forró vízzel pótold. Amikor megpuhult, húzd le a tűzről, és fedő alatt pihentesd 5 percig.",
      "Villával lazítsd fel, és tálald."
    ],
    "baseServings": 4,
    "prepMinutes": 10,
    "cookMinutes": 20,
    "restMinutes": 5,
    "note": "A rizst szárazon mérd. A kimért víz hosszú szemű rizshez kiindulási mennyiség; ha a csomagolás más arányt ír, azt kövesd."
  },
  {
    "id": "rantott",
    "name": "Rántott csirkemell",
    "minutes": 40,
    "budget": false,
    "meatless": false,
    "emoji": "🍗",
    "ingredients": [
      [
        "csirkemell",
        700,
        "g"
      ],
      [
        "liszt",
        120,
        "g"
      ],
      [
        "tojás",
        3,
        "db"
      ],
      [
        "zsemlemorzsa",
        200,
        "g"
      ],
      [
        "étolaj",
        500,
        "ml"
      ],
      [
        "só",
        0.75,
        "tk"
      ]
    ],
    "steps": [
      "A csirkemellet vágd közel egyforma, körülbelül 1 cm vastag szeletekre; szükség esetén óvatosan lapítsd ki, majd sózd meg.",
      "Készíts három tálat: az egyikbe a lisztet, a másikba a felvert tojásokat, a harmadikba a zsemlemorzsát tedd.",
      "A húst sorban forgasd lisztbe, tojásba, majd morzsába. A felesleget rázd le.",
      "Serpenyőben melegíts annyi olajat, hogy a szeletek oldaláig érjen. Közepes lángon, több adagban süsd a húst oldalanként körülbelül 4–5 percig. Ha a morzsa túl gyorsan barnul, csökkentsd a hőt.",
      "A legvastagabb részen maghőmérővel ellenőrizd az átsülést: érje el a 75 °C-ot. A kész szeleteket tiszta tányérra vagy rácsra szedd."
    ],
    "baseServings": 4,
    "prepMinutes": 20,
    "cookMinutes": 20,
    "restMinutes": 0,
    "note": "Az olaj a sütéshez szükséges mennyiség, nem mind szívódik az ételbe. A recept köretet nem tartalmaz."
  },
  {
    "id": "paradicsom",
    "name": "Paradicsomleves",
    "minutes": 25,
    "budget": true,
    "meatless": true,
    "emoji": "🍅",
    "ingredients": [
      [
        "passzírozott paradicsom",
        700,
        "g"
      ],
      [
        "víz",
        700,
        "ml"
      ],
      [
        "betűtészta",
        100,
        "g"
      ],
      [
        "cukor",
        1,
        "ek"
      ],
      [
        "só",
        0.5,
        "tk"
      ]
    ],
    "steps": [
      "A passzírozott paradicsomot és a kimért vizet öntsd lábasba. Add hozzá a sót és először a cukor felét.",
      "Forrald fel, majd kis lángon főzd 8–10 percig. Kóstold meg; a paradicsom savasságától függően add hozzá a maradék cukrot.",
      "Tedd bele a betűtésztát, és időnként megkeverve főzd a csomagoláson jelzett ideig, amíg megpuhul.",
      "Ha a tészta túl sok levet szív fel, kevés forró vízzel állítsd be a sűrűséget. Melegen tálald."
    ],
    "baseServings": 4,
    "prepMinutes": 5,
    "cookMinutes": 20,
    "restMinutes": 0
  },
  {
    "id": "palacsinta",
    "name": "Túrós palacsinta",
    "minutes": 55,
    "budget": true,
    "meatless": true,
    "emoji": "🥞",
    "ingredients": [
      [
        "liszt",
        300,
        "g"
      ],
      [
        "tej",
        500,
        "ml"
      ],
      [
        "tojás",
        3,
        "db"
      ],
      [
        "túró",
        400,
        "g"
      ],
      [
        "étolaj",
        3,
        "ek"
      ],
      [
        "cukor",
        40,
        "g"
      ],
      [
        "vaníliás cukor",
        8,
        "g"
      ],
      [
        "só",
        0.25,
        "tk"
      ],
      [
        "víz",
        200,
        "ml"
      ]
    ],
    "steps": [
      "A tojásokat a sóval és a tej egy részével keverd el. Fokozatosan add hozzá a lisztet, majd a többi tejet és a vizet, hogy csomómentes, híg tésztát kapj.",
      "Az olaj egyharmadát keverd a tésztába, és pihentesd 15 percig. Ha ezután túl sűrű, kevés vízzel hígítsd.",
      "A túrót villával törd át, és keverd el a cukorral meg a vaníliás cukorral. Ha nagyon száraz, kevés tejjel lazítsd.",
      "A serpenyőt közepes-erős lángon forrósítsd fel, a maradék olajjal vékonyan kend ki. Süss vékony palacsintákat: az első oldaluk nagyjából 1 perc, a második 20–30 másodperc.",
      "Oszd el a túrót a teljesen átsült palacsintákon, majd tekerd fel őket."
    ],
    "baseServings": 4,
    "prepMinutes": 15,
    "cookMinutes": 25,
    "restMinutes": 15,
    "note": "Körülbelül 12 palacsinta, vagyis 4 főre fejenként 3 darab készülhet. A serpenyő mérete és a tészta vastagsága ezt befolyásolja."
  },
  {
    "id": "paprikaskrumpli",
    "name": "Paprikás krumpli",
    "minutes": 50,
    "budget": true,
    "meatless": false,
    "emoji": "🍲",
    "ingredients": [
      [
        "burgonya",
        1200,
        "g"
      ],
      [
        "vöröshagyma",
        2,
        "db"
      ],
      [
        "kolbász",
        200,
        "g"
      ],
      [
        "pirospaprika",
        2,
        "tk"
      ],
      [
        "étolaj",
        2,
        "ek"
      ],
      [
        "só",
        0.5,
        "tk"
      ],
      [
        "őrölt kömény",
        0.5,
        "tk"
      ],
      [
        "víz",
        800,
        "ml"
      ]
    ],
    "steps": [
      "A burgonyát hámozd meg, vágd egyforma, közepes kockákra. A hagymát aprítsd fel, a kolbászt karikázd fel.",
      "Az olajon párold a hagymát 5–7 percig. Húzd félre az edényt, keverd hozzá a pirospaprikát és egy kevés kimért vizet.",
      "Add hozzá a burgonyát, a kolbászt, a köményt és a sót. Öntsd fel a többi vízzel; nagyjából a burgonya tetejéig érjen.",
      "Fedő alatt, kis lángon főzd 25–30 percig, amíg a burgonya megpuhul. Néha óvatosan keverd meg, és szükség esetén kevés vizet pótolj.",
      "Ha túl híg, néhány burgonyakockát nyomj szét a szaftban, és röviden főzd fedő nélkül."
    ],
    "baseServings": 4,
    "prepMinutes": 15,
    "cookMinutes": 35,
    "restMinutes": 0
  },
  {
    "id": "gulyas",
    "name": "Gulyásleves",
    "minutes": 180,
    "budget": false,
    "meatless": false,
    "emoji": "🍲",
    "ingredients": [
      [
        "marhahús",
        600,
        "g"
      ],
      [
        "burgonya",
        500,
        "g"
      ],
      [
        "sárgarépa",
        250,
        "g"
      ],
      [
        "vöröshagyma",
        2,
        "db"
      ],
      [
        "pirospaprika",
        2,
        "tk"
      ],
      [
        "étolaj",
        2,
        "ek"
      ],
      [
        "fokhagyma",
        2,
        "gerezd"
      ],
      [
        "só",
        1,
        "tk"
      ],
      [
        "őrölt kömény",
        1,
        "tk"
      ],
      [
        "víz",
        1800,
        "ml"
      ]
    ],
    "steps": [
      "A marhahúst vágd körülbelül 2 cm-es kockákra. A hagymát és fokhagymát aprítsd fel; a megtisztított répát karikázd, a burgonyát kockázd fel.",
      "A hagymát az olajon párold 7–8 percig. Add hozzá a húst, és kevergetve pirítsd körbe.",
      "Húzd félre a lábast, szórd rá a pirospaprikát, keverd át, és rögtön adj hozzá a kimért vízből annyit, hogy a húst ellepje. Add hozzá a fokhagymát, sót és köményt.",
      "Kis lángon, fedő alatt főzd a húst 90–120 percig. Időnként keverd meg, és pótold az elpárolgott vizet. Csak akkor lépj tovább, amikor a hús már majdnem puha.",
      "Add hozzá a répát, burgonyát és a kimért víz maradékát. Gyöngyözve főzd még 25–30 percig, amíg a zöldségek és a hús is teljesen megpuhulnak.",
      "Kóstold meg, és a leves sűrűségét szükség esetén kevés forró vízzel állítsd be."
    ],
    "baseServings": 4,
    "prepMinutes": 25,
    "cookMinutes": 155,
    "restMinutes": 0,
    "note": "Marhalábszárral vagy marhalapockával készítsd. A 180 perc becslés: a hús korától és a darabok méretétől függően hosszabb főzés is kellhet. Ez a változat csipetke nélkül készül."
  },
  {
    "id": "husleves",
    "name": "Házi húsleves",
    "minutes": 120,
    "budget": false,
    "meatless": false,
    "emoji": "🥣",
    "ingredients": [
      [
        "csirkecomb",
        600,
        "g"
      ],
      [
        "sárgarépa",
        300,
        "g"
      ],
      [
        "fehérrépa",
        200,
        "g"
      ],
      [
        "zellergumó",
        150,
        "g"
      ],
      [
        "levesbetét",
        120,
        "g"
      ],
      [
        "só",
        1,
        "tk"
      ],
      [
        "egész fekete bors",
        0.5,
        "tk"
      ],
      [
        "víz",
        2200,
        "ml"
      ]
    ],
    "steps": [
      "A csirkecombokat tedd nagy fazékba a kimért hideg vízzel. Közepes lángon lassan melegítsd fel.",
      "A felszínén képződő habot szedd le. Add hozzá a megtisztított, nagyobb darabokra vágott répákat és zellert, a sót és az egész borsot.",
      "Vedd egészen kicsire a lángot, és csak gyöngyözve főzd 75–90 percig. A leves ne lobogjon; ha sok víz elpárolog, kevés forró vízzel pótold.",
      "Ellenőrizd, hogy a hús a csont mellett is puha és teljesen átfőtt. Maghőmérővel a legvastagabb húsrész érje el a 75 °C-ot, a csont érintése nélkül mérve.",
      "A levesbetétet külön vízben főzd ki a csomagolás szerint. A levest szűrd át, és a hússal, zöldségekkel meg a tésztával tálald."
    ],
    "baseServings": 4,
    "prepMinutes": 20,
    "cookMinutes": 100,
    "restMinutes": 0,
    "note": "A becsült idő fiatal csirkecombhoz értendő; tyúkból jóval tovább készül. A zöldségeket tisztítás után mérd."
  },
  {
    "id": "turogomboc",
    "name": "Túrógombóc",
    "minutes": 95,
    "budget": true,
    "meatless": true,
    "emoji": "🍡",
    "ingredients": [
      [
        "túró",
        500,
        "g"
      ],
      [
        "búzadara",
        100,
        "g"
      ],
      [
        "tojás",
        2,
        "db"
      ],
      [
        "zsemlemorzsa",
        120,
        "g"
      ],
      [
        "tejföl",
        200,
        "g"
      ],
      [
        "vaj",
        30,
        "g"
      ],
      [
        "cukor",
        30,
        "g"
      ],
      [
        "só",
        0.25,
        "tk"
      ]
    ],
    "steps": [
      "A túrót törd át villával, majd keverd össze a tojásokkal, búzadarával és a sóval. Lefedve tedd hűtőbe legalább 60 percre, hogy a dara megszívja magát.",
      "A vajat serpenyőben olvaszd fel, add hozzá a zsemlemorzsát, és kis-közepes lángon, kevergetve pirítsd aranyszínűre. Húzd félre.",
      "Forralj vizet egy nagy fazékban. Nedves kézzel formázz diónál nagyobb, egyforma gombócokat. Először egy próbagombócot főzz ki; ha szétesik, a masszát tovább pihentesd.",
      "A gombócokat több adagban, gyöngyöző, nem lobogó vízben főzd. Miután feljöttek, mérettől függően még körülbelül 5–8 perc kellhet. Egyet vágj ketté: a közepe is legyen átfőtt.",
      "Szűrőkanállal emeld ki, csepegtesd le, és óvatosan forgasd a pirított morzsába. A tejfölt a cukorral keverd el, és ezzel tálald."
    ],
    "baseServings": 4,
    "prepMinutes": 15,
    "cookMinutes": 20,
    "restMinutes": 60,
    "note": "A 95 percben a 60 perces hűtős pihentetés is benne van. Körülbelül 12 kisebb gombóccal számolj, azaz 4 főre fejenként 3 darabbal."
  },
  {
    "id": "toltottpaprika",
    "name": "Töltött paprika",
    "minutes": 85,
    "budget": false,
    "meatless": false,
    "emoji": "🫑",
    "ingredients": [
      [
        "tv paprika",
        6,
        "db"
      ],
      [
        "darált hús",
        500,
        "g"
      ],
      [
        "rizs",
        120,
        "g"
      ],
      [
        "passzírozott paradicsom",
        700,
        "g"
      ],
      [
        "tojás",
        1,
        "db"
      ],
      [
        "só",
        1,
        "tk"
      ],
      [
        "őrölt bors",
        0.25,
        "tk"
      ],
      [
        "cukor",
        1,
        "ek"
      ],
      [
        "víz",
        600,
        "ml"
      ]
    ],
    "steps": [
      "A paprikákat mosd meg, vágd ki a csumájukat és a magházat. A rizst öblítsd át és csepegtesd le.",
      "A darált húst keverd el a rizzsel, tojással, a só felével és a borssal. Lazán töltsd a paprikákba; a maradékból kisebb húsgombócokat formázhatsz.",
      "Széles lábasban keverd össze a passzírozott paradicsomot a kimért vízzel, a maradék sóval és a cukorral. Helyezd bele a paprikákat; a folyadék majdnem lepje el őket.",
      "Óvatosan forrald fel, majd kis lángon, félig lefedve főzd 50–60 percig. Erős keverés helyett az edényt óvatosan mozgasd. Ha kell, kevés vízzel pótold a levét.",
      "Egy nagyobb tölteléket ellenőrizz: a rizs legyen puha, a húsos töltelék közepe maghőmérővel érje el a 75 °C-ot. Ha a rizs kemény, főzd tovább.",
      "Ha a szósz túl híg, a kész paprikákat emeld ki, és a szószt néhány percig forrald sűrűbbre."
    ],
    "baseServings": 4,
    "prepMinutes": 20,
    "cookMinutes": 65,
    "restMinutes": 0,
    "note": "A rizst szárazon mérd, megmosva, nyersen kerül a töltelékbe. A paprikát ne tömd tele, mert a rizs főzés közben megdagad."
  },
  {
    "id": "csirkesrizs",
    "name": "Csirkés-zöldséges rizs",
    "minutes": 45,
    "budget": true,
    "meatless": false,
    "emoji": "🍚",
    "ingredients": [
      [
        "csirkemell",
        500,
        "g"
      ],
      [
        "rizs",
        350,
        "g"
      ],
      [
        "vegyes zöldség",
        400,
        "g"
      ],
      [
        "vöröshagyma",
        1,
        "db"
      ],
      [
        "étolaj",
        2,
        "ek"
      ],
      [
        "só",
        0.75,
        "tk"
      ],
      [
        "őrölt bors",
        0.25,
        "tk"
      ],
      [
        "víz",
        700,
        "ml"
      ]
    ],
    "steps": [
      "A csirkemellet vágd kis, egyforma kockákra. A hagymát aprítsd fel, a rizst öblítsd át; a zöldségek legyenek kis darabokban.",
      "Az olajon párold a hagymát 4–5 percig. Add hozzá a csirkét, sózd, borsozd, és kevergetve pirítsd 5–6 percig.",
      "Add hozzá a rizst, zöldségeket és a kimért vizet. Forrald fel, majd fedő alatt, kis lángon főzd 15–20 percig, a rizs csomagolását is figyelembe véve.",
      "A rizs legyen puha; ha még kemény és elfogyott a víz, kevés forró vízzel pótold. A legnagyobb csirkekocka belseje maghőmérővel érje el a 75 °C-ot.",
      "Húzd le a tűzről, fedő alatt pihentesd 5 percig, majd lazán forgasd át."
    ],
    "baseServings": 4,
    "prepMinutes": 15,
    "cookMinutes": 25,
    "restMinutes": 5,
    "note": "A rizst szárazon mérd. A víz mennyiségénél a rizs csomagolásán lévő útmutató az irányadó."
  },
  {
    "id": "gombaporkolt",
    "name": "Gombapörkölt",
    "minutes": 35,
    "budget": true,
    "meatless": true,
    "emoji": "🍄",
    "ingredients": [
      [
        "csiperkegomba",
        700,
        "g"
      ],
      [
        "vöröshagyma",
        2,
        "db"
      ],
      [
        "pirospaprika",
        2,
        "tk"
      ],
      [
        "tejföl",
        150,
        "g"
      ],
      [
        "étolaj",
        2,
        "ek"
      ],
      [
        "só",
        0.5,
        "tk"
      ],
      [
        "őrölt bors",
        0.25,
        "tk"
      ]
    ],
    "steps": [
      "A gombát tisztítsd meg és szeleteld fel. A hagymát aprítsd fel.",
      "Az olajon párold a hagymát 6–8 percig. Húzd félre, keverd hozzá a pirospaprikát, majd rögtön add hozzá a gombát.",
      "Tedd vissza a tűzre, sózd, borsozd. Először fedő alatt párold 10–12 percig, hogy levet engedjen, majd fedő nélkül főzd tovább, amíg a gomba puha és a szaftja megfelelően sűrű.",
      "Ha a gomba nem enged elég levet, kevés vizet adj hozzá. A tejfölt egy kevés forró szafttal keverd el, majd add a gombához, és kis lángon melegítsd össze."
    ],
    "baseServings": 4,
    "prepMinutes": 10,
    "cookMinutes": 25,
    "restMinutes": 0,
    "note": "Ez az alaprecept köret nélkül értendő. A tejföl a végén kerül bele."
  },
  {
    "id": "zoldsegleves",
    "name": "Zöldségleves",
    "minutes": 40,
    "budget": true,
    "meatless": true,
    "emoji": "🥕",
    "ingredients": [
      [
        "sárgarépa",
        300,
        "g"
      ],
      [
        "burgonya",
        300,
        "g"
      ],
      [
        "zöldborsó",
        200,
        "g"
      ],
      [
        "fehérrépa",
        150,
        "g"
      ],
      [
        "petrezselyem",
        1,
        "csokor"
      ],
      [
        "étolaj",
        1,
        "ek"
      ],
      [
        "só",
        0.75,
        "tk"
      ],
      [
        "víz",
        1400,
        "ml"
      ]
    ],
    "steps": [
      "A zöldségeket tisztítsd meg. A répákat karikázd fel, a burgonyát vágd kis kockákra, a petrezselymet aprítsd fel.",
      "Lábasban melegítsd az olajat, és forgasd át benne a répákat 3–4 percig.",
      "Öntsd fel a kimért vízzel, add hozzá a sót és a burgonyát. Forrástól számítva, kis lángon főzd körülbelül 15 percig.",
      "Add hozzá a zöldborsót, és főzd további 5–8 percig. Ellenőrizd, hogy minden zöldség puha-e.",
      "A végén szórd bele a petrezselymet, majd tálald."
    ],
    "baseServings": 4,
    "prepMinutes": 15,
    "cookMinutes": 25,
    "restMinutes": 0
  },
  {
    "id": "csirkesalata",
    "name": "Csirkés saláta",
    "minutes": 30,
    "budget": false,
    "meatless": false,
    "emoji": "🥗",
    "ingredients": [
      [
        "csirkemell",
        450,
        "g"
      ],
      [
        "salátakeverék",
        250,
        "g"
      ],
      [
        "paradicsom",
        300,
        "g"
      ],
      [
        "uborka",
        1,
        "db"
      ],
      [
        "joghurt",
        150,
        "g"
      ],
      [
        "étolaj",
        1,
        "ek"
      ],
      [
        "citromlé",
        1,
        "ek"
      ],
      [
        "só",
        0.5,
        "tk"
      ],
      [
        "őrölt bors",
        0.25,
        "tk"
      ]
    ],
    "steps": [
      "A csirkemellet vágd egyforma, vékony szeletekre. A só felével és a borssal ízesítsd.",
      "Serpenyőben melegítsd az olajat, és közepes lángon süsd a csirkét oldalanként körülbelül 4–6 percig, vastagságtól függően. A legvastagabb részen maghőmérővel ellenőrizd a 75 °C-ot.",
      "A nyers hús után moss kezet és használj tiszta eszközöket. A salátát, paradicsomot és uborkát mosd meg, a paradicsomot és uborkát darabold fel.",
      "A joghurtot keverd össze a citromlével és a maradék sóval.",
      "A megsült csirkét tiszta vágódeszkán szeleteld fel, tedd a zöldségekre, és az öntetet tálaláskor add hozzá."
    ],
    "baseServings": 4,
    "prepMinutes": 15,
    "cookMinutes": 15,
    "restMinutes": 0
  },
  {
    "id": "sultkrumpli",
    "name": "Tepsis burgonya zöldségekkel",
    "minutes": 55,
    "budget": true,
    "meatless": true,
    "emoji": "🥔",
    "ingredients": [
      [
        "burgonya",
        900,
        "g"
      ],
      [
        "sárgarépa",
        300,
        "g"
      ],
      [
        "vöröshagyma",
        2,
        "db"
      ],
      [
        "paprika",
        300,
        "g"
      ],
      [
        "étolaj",
        3,
        "ek"
      ],
      [
        "só",
        0.75,
        "tk"
      ],
      [
        "őrölt bors",
        0.25,
        "tk"
      ]
    ],
    "steps": [
      "A sütőt melegítsd elő 200 °C-ra, alsó-felső sütésen. Készíts elő egy nagy tepsit.",
      "A burgonyát és répát tisztítsd meg; vágd körülbelül 2 cm-es darabokra. A hagymát cikkekre, a kicsumázott paprikát nagyobb darabokra vágd.",
      "A zöldségeket forgasd össze az olajjal, sóval és borssal. Terítsd egy rétegben a tepsibe; ha nem férnek el, használj két tepsit.",
      "Süsd 35–40 percig, félidőben forgasd át. A burgonya és a répa belseje villával könnyen átszúrható, a széle enyhén pirult legyen."
    ],
    "baseServings": 4,
    "prepMinutes": 15,
    "cookMinutes": 40,
    "restMinutes": 0
  },
  {
    "id": "tonhalasteszta",
    "name": "Tonhalas paradicsomos tészta",
    "minutes": 30,
    "budget": false,
    "meatless": false,
    "emoji": "🍝",
    "ingredients": [
      [
        "száraztészta",
        400,
        "g"
      ],
      [
        "tonhalkonzerv",
        2,
        "db"
      ],
      [
        "passzírozott paradicsom",
        400,
        "g"
      ],
      [
        "fokhagyma",
        3,
        "gerezd"
      ],
      [
        "étolaj",
        1,
        "ek"
      ],
      [
        "só",
        0.75,
        "tk"
      ],
      [
        "őrölt bors",
        0.25,
        "tk"
      ]
    ],
    "steps": [
      "A tésztának forralj bő vizet, és a só felét add hozzá. Főzd a csomagoláson jelzett ideig, majd szűrd le; kevés főzővizet tegyél félre.",
      "Közben a fokhagymát aprítsd fel, és az olajon közepes lángon 30–60 másodpercig futtasd meg. Ne barnítsd meg.",
      "Öntsd hozzá a passzírozott paradicsomot, a maradék sóval és borssal ízesítsd. Kis lángon főzd 8–10 percig.",
      "A tonhalat csepegtesd le, villával lazítsd fel, és keverd a szószba. Melegítsd össze 2–3 percig.",
      "Forgasd bele a tésztát. Szükség esetén kevés félretett főzővízzel lazítsd, és forrón tálald."
    ],
    "baseServings": 4,
    "prepMinutes": 10,
    "cookMinutes": 20,
    "restMinutes": 0,
    "note": "A tonhalkonzervnél körülbelül 160 g össztömegű dobozzal számolj; az olajat vagy levet a szószhoz adás előtt csepegtesd le."
  },
  {
    "id": "tojasrantotta",
    "name": "Zöldséges rántotta",
    "minutes": 15,
    "budget": true,
    "meatless": true,
    "emoji": "🍳",
    "ingredients": [
      [
        "tojás",
        6,
        "db"
      ],
      [
        "paprika",
        200,
        "g"
      ],
      [
        "paradicsom",
        200,
        "g"
      ],
      [
        "vöröshagyma",
        1,
        "db"
      ],
      [
        "étolaj",
        1,
        "ek"
      ],
      [
        "só",
        0.5,
        "tk"
      ]
    ],
    "steps": [
      "A hagymát aprítsd fel, a megmosott, kicsumázott paprikát és a paradicsomot vágd kis darabokra.",
      "A tojásokat külön tálba üsd fel, a sóval verd el.",
      "Az olajon, közepes lángon párold a hagymát és paprikát 4–5 percig. Add hozzá a paradicsomot, és főzd még 1–2 percig.",
      "Öntsd rá a tojást. Kis-közepes lángon, óvatosan kevergetve süsd további 3–4 percig, amíg minden része megszilárdul. Azonnal tálald."
    ],
    "baseServings": 4,
    "prepMinutes": 5,
    "cookMinutes": 10,
    "restMinutes": 0
  },
  {
    "id": "babfozelek",
    "name": "Babfőzelék",
    "minutes": 30,
    "budget": true,
    "meatless": true,
    "emoji": "🫘",
    "ingredients": [
      [
        "konzerv fehérbab",
        4,
        "db"
      ],
      [
        "tejföl",
        200,
        "g"
      ],
      [
        "liszt",
        40,
        "g"
      ],
      [
        "babérlevél",
        2,
        "db"
      ],
      [
        "só",
        0.5,
        "tk"
      ],
      [
        "víz",
        400,
        "ml"
      ]
    ],
    "steps": [
      "A konzerveket bontsd ki, a babot szűrd le, öblítsd át. Tedd lábasba a kimért vízzel és a babérlevelekkel.",
      "Forrald fel, majd kis lángon főzd 8–10 percig. A sót csak kóstolás után, fokozatosan add hozzá.",
      "A lisztet a tejföllel keverd simára. Néhány kanál forró főzőlével hígítsd, majd kevergetve öntsd a babhoz.",
      "Kis lángon, gyakran megkeverve főzd még 5–8 percig, amíg besűrűsödik és a liszt megfő. Ha kell, kevés vizet adj hozzá.",
      "Tálalás előtt vedd ki a babérleveleket."
    ],
    "baseServings": 4,
    "prepMinutes": 10,
    "cookMinutes": 20,
    "restMinutes": 0,
    "note": "Egy doboz konzervnél körülbelül 400 g össztömeggel számolj. A bab már főtt; ne szárazbabot használj ehhez az időhöz. A konzerv sótartalma miatt először kevesebbet sózz."
  },
  {
    "id": "rakottkarfiol",
    "name": "Rakott karfiol",
    "minutes": 65,
    "budget": false,
    "meatless": false,
    "emoji": "🥦",
    "ingredients": [
      [
        "karfiol",
        900,
        "g"
      ],
      [
        "darált hús",
        450,
        "g"
      ],
      [
        "rizs",
        150,
        "g"
      ],
      [
        "tejföl",
        300,
        "g"
      ],
      [
        "étolaj",
        2,
        "ek"
      ],
      [
        "vöröshagyma",
        1,
        "db"
      ],
      [
        "só",
        1,
        "tk"
      ],
      [
        "őrölt bors",
        0.25,
        "tk"
      ]
    ],
    "steps": [
      "A sütőt melegítsd elő 190 °C-ra, alsó-felső sütésen. A karfiolt tisztítsd meg, és szedd egyforma rózsákra.",
      "A rizst külön edényben, a csomagolás szerint, a só harmadával főzd meg. A karfiolt másik edényben, a só harmadával ízesített vízben 5–7 perc alatt főzd elő, majd jól csepegtesd le.",
      "A felaprított hagymát az olaj nagyobb részén párold 5 percig. Add hozzá a darált húst, a maradék sót és a borsot; kevergetve pirítsd, amíg átfő és a nagyobb csomók is szétesnek.",
      "A maradék olajjal kend ki a sütőtálat. Rétegezd bele a karfiolt, a főtt rizst és a húsos keveréket; a tetejére karfiol és egyenletesen elosztott tejföl kerüljön.",
      "Süsd 25–30 percig, amíg a közepe is alaposan átforrósodik és a teteje aranybarna."
    ],
    "baseServings": 4,
    "prepMinutes": 20,
    "cookMinutes": 45,
    "restMinutes": 0
  },
  {
    "id": "lencseleves",
    "name": "Lencseleves",
    "minutes": 40,
    "budget": true,
    "meatless": true,
    "emoji": "🥣",
    "ingredients": [
      [
        "konzerv lencse",
        3,
        "db"
      ],
      [
        "sárgarépa",
        250,
        "g"
      ],
      [
        "vöröshagyma",
        1,
        "db"
      ],
      [
        "tejföl",
        150,
        "g"
      ],
      [
        "étolaj",
        1,
        "ek"
      ],
      [
        "só",
        0.5,
        "tk"
      ],
      [
        "babérlevél",
        2,
        "db"
      ],
      [
        "víz",
        1000,
        "ml"
      ]
    ],
    "steps": [
      "A hagymát aprítsd fel, a megtisztított répát vágd vékony karikákra. A konzerv lencsét szűrd le és öblítsd át.",
      "Az olajon párold a hagymát 5 percig. Add hozzá a répát, és kevergetve párold még 2 percig.",
      "Öntsd fel a kimért vízzel, add hozzá a babérleveleket. Kis lángon főzd 15–20 percig, amíg a répa megpuhul.",
      "Add hozzá a lencsét, és főzd további 5–8 percig. A konzerv sótartalmát figyelembe véve, kóstolás után sózd.",
      "Vedd ki a babérleveleket. A tejfölt tálaláskor oszd el az adagok tetején."
    ],
    "baseServings": 4,
    "prepMinutes": 10,
    "cookMinutes": 30,
    "restMinutes": 0,
    "note": "Egy doboz konzervnél körülbelül 400 g össztömeggel számolj. Ez a változat főtt, konzerv lencsével készül; száraz lencséhez más főzési idő kell."
  },
  {
    "id": "tocsni",
    "name": "Burgonyás tócsni",
    "minutes": 40,
    "budget": true,
    "meatless": true,
    "emoji": "🥔",
    "ingredients": [
      [
        "burgonya",
        800,
        "g"
      ],
      [
        "tojás",
        2,
        "db"
      ],
      [
        "liszt",
        100,
        "g"
      ],
      [
        "fokhagyma",
        2,
        "gerezd"
      ],
      [
        "étolaj",
        150,
        "ml"
      ],
      [
        "só",
        0.75,
        "tk"
      ],
      [
        "őrölt bors",
        0.25,
        "tk"
      ]
    ],
    "steps": [
      "A burgonyát hámozd meg és reszeld le. Kézzel nyomkodd ki a levét; ezután keverd be rögtön, hogy ne barnuljon meg.",
      "Add hozzá a tojásokat, lisztet, zúzott fokhagymát, sót és borsot. Keverd sűrű, kanalazható masszává.",
      "Serpenyőben melegíts vékony réteg olajat. Kanalazz bele kisebb adagokat, és lapítsd őket legfeljebb 1 cm vastag lepényekké.",
      "Közepes lángon, több adagban süsd oldalanként 3–4 percig. A belsejükben a burgonya puhuljon meg és a tojásos massza is süljön át; ha túl gyorsan barnulnak, csökkentsd a hőt.",
      "A kész tócsnikat szedd rácsra vagy papírtörlőre, és melegen tálald."
    ],
    "baseServings": 4,
    "prepMinutes": 20,
    "cookMinutes": 20,
    "restMinutes": 0,
    "note": "Az olaj a sütéshez szükséges, nem mind szívódik az ételbe. Körülbelül 12 kisebb lepénnyel számolj."
  },
  {
    "id": "csirkemellteszta",
    "name": "Tejszínes csirkés tészta",
    "minutes": 35,
    "budget": false,
    "meatless": false,
    "emoji": "🍝",
    "ingredients": [
      [
        "csirkemell",
        500,
        "g"
      ],
      [
        "száraztészta",
        400,
        "g"
      ],
      [
        "főzőtejszín",
        250,
        "ml"
      ],
      [
        "fokhagyma",
        2,
        "gerezd"
      ],
      [
        "étolaj",
        1,
        "ek"
      ],
      [
        "só",
        0.75,
        "tk"
      ],
      [
        "őrölt bors",
        0.25,
        "tk"
      ]
    ],
    "steps": [
      "A csirkemellet vágd kis, egyforma kockákra. A fokhagymát aprítsd fel.",
      "A tésztát bő vízben, a só felével főzd meg a csomagolás szerint. Leszűrés előtt kevés főzővizet tegyél félre.",
      "Az olajon, közepes-erős lángon pirítsd a csirkét 8–10 percig. Add hozzá a maradék sót és a borsot, majd a fokhagymát; keverd még fél percig.",
      "Öntsd hozzá a tejszínt. Kis lángon főzd 3–5 percig, és ellenőrizd, hogy a legnagyobb csirkekocka belseje elérte a 75 °C-ot.",
      "Forgasd bele a leszűrt tésztát. Ha a szósz túl sűrű, kevés félretett főzővízzel lazítsd, és azonnal tálald."
    ],
    "baseServings": 4,
    "prepMinutes": 15,
    "cookMinutes": 20,
    "restMinutes": 0
  },
  {
    "id": "sutotokleves",
    "name": "Sütőtökkrémleves",
    "minutes": 40,
    "budget": true,
    "meatless": true,
    "emoji": "🎃",
    "ingredients": [
      [
        "sütőtök",
        900,
        "g"
      ],
      [
        "vöröshagyma",
        1,
        "db"
      ],
      [
        "főzőtejszín",
        150,
        "ml"
      ],
      [
        "burgonya",
        200,
        "g"
      ],
      [
        "étolaj",
        1,
        "ek"
      ],
      [
        "só",
        0.75,
        "tk"
      ],
      [
        "őrölt bors",
        0.25,
        "tk"
      ],
      [
        "víz",
        1000,
        "ml"
      ]
    ],
    "steps": [
      "A sütőtököt hámozd meg és magozd ki, a burgonyát tisztítsd meg. Mindkettőt vágd kis, közel egyforma kockákra; a hagymát aprítsd fel.",
      "Az olajon párold a hagymát 4–5 percig, majd add hozzá a sütőtököt és burgonyát.",
      "Öntsd fel a kimért vízzel, sózd, borsozd. Kis lángon főzd 15–20 percig, amíg a zöldségek teljesen megpuhulnak.",
      "Húzd le a tűzről, és botmixerrel óvatosan turmixold simára, ügyelve a forró fröccsenésre.",
      "Keverd bele a tejszínt, tedd vissza a tűzre, és finoman forrald össze. Ha sűrű, kevés vízzel lazítsd."
    ],
    "baseServings": 4,
    "prepMinutes": 15,
    "cookMinutes": 25,
    "restMinutes": 0,
    "note": "A sütőtök mennyisége a meghámozott, kimagozott húsra értendő."
  },
  {
    "id": "almaskasa",
    "name": "Almás-fahéjas zabkása",
    "minutes": 15,
    "budget": true,
    "meatless": true,
    "emoji": "🍎",
    "ingredients": [
      [
        "zabpehely",
        250,
        "g"
      ],
      [
        "tej",
        700,
        "ml"
      ],
      [
        "alma",
        3,
        "db"
      ],
      [
        "fahéj",
        2,
        "tk"
      ]
    ],
    "steps": [
      "Az almákat mosd meg, távolítsd el a magházukat, majd reszeld le vagy vágd kis kockákra.",
      "A zabpelyhet és a tejet tedd lábasba. Kevergetve, kis-közepes lángon melegítsd fel.",
      "Amikor gyöngyözni kezd, add hozzá az almát és a fahéjat. Kis lángon, gyakran megkeverve főzd 5–8 percig, amíg a zab megpuhul és a kása krémessé válik.",
      "Ha túl sűrű, kevés tejjel vagy vízzel hígítsd. Vedd le a tűzről, és rövid hűlés után oszd el az adagokat."
    ],
    "baseServings": 4,
    "prepMinutes": 5,
    "cookMinutes": 10,
    "restMinutes": 0,
    "note": "A 15 perces idő gyorsan puhuló, apró szemű zabpehellyel értendő. Nagy szemű pehelynél kövesd a csomagoláson jelzett hosszabb főzési időt."
  }
];
export const recipes = [...originalRecipes.map(r=>({...r,category: /leves|gulyás/i.test(r.name)?'soup':'main'})),...soups];
export function matches(recipe, minutes, type){return recipe.minutes<=minutes&&(type==='any'||(type==='budget'&&recipe.budget)||(type==='meatless'&&recipe.meatless));}
export function scaledIngredients(recipe,servings){return recipe.ingredients.map(([name,quantity,unit])=>({name,quantity:Math.round(quantity*servings/(recipe.baseServings??4)*100)/100,unit}));}
export function mergeIngredients(items){const out=new Map();for(const item of items){const key=item.name.toLocaleLowerCase('hu-HU')+'|'+item.unit;const old=out.get(key);const total=(old?.quantity??0)+item.quantity;out.set(key,{...item,name:old?.name??item.name,quantity:Math.round((total+Number.EPSILON)*100)/100});}return [...out.values()];}

export function shoppingIngredients(recipe,servings){return scaledIngredients(recipe,servings).filter(item=>item.name.toLocaleLowerCase('hu-HU')!=='víz');}
