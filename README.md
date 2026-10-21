# Flipper Duel

Et neon-flipperspil for to spillere, der kører direkte i browseren. Ingen installation og intet login.

**Spil her:** https://woodmandk.github.io/Flipper-Duel/

## Spiltyper

- **Duel** – I har hvert jeres bord og 1200 liv hver. Alt du rammer, skader modstanderens liv. Bedst af 3 runder, og hver runde spilles på en tilfældig bane (Neon Klassik, Orbit-loopet, Kaosfabrikken, Tvillingerne eller Portal-labyrinten). Efter 2½ minut går runden i OVERDRIVE, hvor al skade tæller dobbelt. 5 hurtige træf i træk giver combo med +25% skade.
- **Arena** – Ét bord med flippere i begge ender og ingen tyngdekraft: kuglen flyver frit, og hele banen kan ses på én gang. Først til 5 mål, og banen skifter for hver 2 mål. Hver spiller har sin egen rampe, der skyder mod modstanderens mål.

## Brede baner

Banerne er brede og zoomet godt ud. I Duel følger kameraet kuglen og viser hele bordet ved multiball. Arena-banerne er Klassik, Møllen, Diamanten og Bumper-stormen. På bordene finder du:

- **Ramper** – skyd hårdt ind i indgangen, så kører kuglen på skinner over bordet. Flere ramper i træk giver mere skade.
- **Portaler** – orange og blå hænger sammen og teleporterer kuglen.
- **Ekstra flipper** midt på nogle baner.
- **BOSS** – i Duel dukker Øjet, Krabben eller Spøgelset op midt på bordet, hvor man kan nå dem. Besejr den, så mister modstanderen 80 liv.
- **Missioner** – små opgaver med tidsfrist, fx "Ram 8 bumpere". Klarer du dem, mister modstanderen 30 liv.
- **Ryst bordet** med `S` eller `↓`. Ryster du for meget, kommer der TILT.

## SUPER-angreb

Alt du rammer, lader din gule SUPER-måler op. Når den er fuld, kan du se hvilket angreb du har klar, og **du bestemmer selv hvornår du fyrer det af**.

- **Duel:** SUPER koster modstanderen 40 liv og sender et angreb over: spejlvendte flippere, tåge, sort hul, bombe, bomberegn, mini-flippere eller jordskælv. Angreb står i kø, så de aldrig lander oven i hinanden.
- **Arena:** Ildkugle (alle kugler brager mod modstanderens mål), Frys (modstanderens flippere fryser i 2 sek.) eller Mur (et skjold foran dit mål).

Efter et kaos-power-up får bordet en pause, før det næste dukker op: kaos, så ro, så kaos igen.

## Power-ups

Sekskanter dukker op på bordet. Ram dem med kuglen. I Arena går de til den, der sidst ramte kuglen.

- **Almindelige:** Multiball, Skjold, Dobbelt skade, Reparér (+50 liv), Kæmpe-flippere, Sløv modstander og Turbo. Ekstra kugler forsvinder igen efter kort tid.
- **KAOS-power-ups** (med regnbue-ring): Mega-kaos +10 kugler, Kæmpekugler, Måne-tyngde (kun Duel), Bumper-raseri, Lynstorm og Kuglekanon.

Tryk på **?** i spillet for at se en forklaring på alt.

## Sådan spiller I mod hinanden

1. Åbn spillet, skriv dit navn, vælg spiltype og tryk **Udfordr en ven online**.
2. Tryk **Kopiér invitation** og send linket til din ven.
3. Din ven åbner linket (koden er allerede udfyldt) og trykker **Deltag**.
4. Tryk **Start kampen**.

Man kan også spille mod computeren eller to på samme skærm.

## Styring

| | Venstre flipper | Højre flipper | SUPER | Ryst |
|---|---|---|---|---|
| Én spiller | `A` eller `←` | `D` eller `→` | `W`, `↑` eller `Mellemrum` | `S` eller `↓` |
| Spiller 1 (samme skærm) | `A` | `D` | `W` | `S` |
| Spiller 2 (samme skærm) | `←` | `→` | `↑` | `↓` |
| Mobil/tablet | Tryk i venstre side | Tryk i højre side | SUPER-knappen | – |

## Teknik

Hele spillet er én fil, `index.html`: Canvas-grafik, egen flipperfysik og lyd lavet med Web Audio. Online-spil går direkte mellem de to browsere via WebRTC ([PeerJS](https://peerjs.com)), så der er ingen server at drive. På meget lukkede netværk (fx nogle firma- eller mobilnet) kan en direkte forbindelse fejle.
