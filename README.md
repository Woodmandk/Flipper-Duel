# Flipper Duel

Et neon-flipperspil for to spillere, der kører direkte i browseren. Ingen installation og intet login.

**Spil her:** https://woodmandk.github.io/Flipper-Duel/

## Spiltyper

- **Duel** – I har hvert jeres bord. Bumpere, ZAP-banerne og de grønne targets skader modstanderens energi. Når den gule angrebsmåler er fuld, sendes et angreb over: spejlvendte flippere, tåge, sort hul eller en bombe-kugle. Bedst af 3 runder. Efter 80 sekunder går runden i OVERDRIVE, hvor al skade tæller dobbelt.
- **Arena** – Ét bord med flippere i begge ender. Tyngdekraften peger væk fra den, der sidst ramte kuglen. Først til 5 mål. Skjold og multiball dukker op undervejs.

## Sådan spiller I mod hinanden

1. Åbn spillet, skriv dit navn, vælg spiltype og tryk **Udfordr en ven online**.
2. Tryk **Kopiér invitation** og send linket til din ven.
3. Din ven åbner linket (koden er allerede udfyldt) og trykker **Deltag**.
4. Tryk **Start kampen**.

Man kan også spille mod computeren eller to på samme skærm.

## Styring

| | Venstre flipper | Højre flipper |
|---|---|---|
| Én spiller | `A` eller `←` | `D` eller `→` |
| Spiller 1 (samme skærm) | `A` | `D` |
| Spiller 2 (samme skærm) | `←` | `→` |
| Mobil/tablet | Tryk i venstre side | Tryk i højre side |

## Teknik

Hele spillet er én fil, `index.html`: Canvas-grafik, egen flipperfysik og lyd lavet med Web Audio. Online-spil går direkte mellem de to browsere via WebRTC ([PeerJS](https://peerjs.com)), så der er ingen server at drive. På meget lukkede netværk (fx nogle firma- eller mobilnet) kan en direkte forbindelse fejle.
