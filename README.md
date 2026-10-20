# Flipper Duel

Et neon-flipperspil for to spillere, der kører direkte i browseren. Ingen installation og intet login.

**Spil her:** https://woodmandk.github.io/Flipper-Duel/

## Spiltyper

- **Duel** – I har hvert jeres bord. Bumpere, ZAP-banerne og de grønne targets skader modstanderens liv. Når den gule angrebsmåler er fuld, sendes et tilfældigt angreb over: spejlvendte flippere, tåge, sort hul, bombe, bomberegn, mini-flippere eller jordskælv. Bedst af 3 runder, og hver runde spilles på en ny bane (Neon Klassik, Diamanten, Kaosfabrikken). Efter 80 sekunder går runden i OVERDRIVE, hvor al skade tæller dobbelt. 5 hurtige træf i træk giver combo med +50% skade.
- **Arena** – Ét bord med flippere i begge ender. Tyngdekraften peger mod den, der skal forsvare. Først til 7 mål, og banen skifter for hver 3 mål.

## Power-ups

Sekskanter dukker op på bordet. Ram dem med kuglen. I Arena går de til den, der sidst ramte kuglen.

- **Almindelige:** KAOS ×5 (4 ekstra kugler), Skjold, Dobbelt skade, Reparér (+15 liv), Kæmpe-flippere, Sløv modstander og Turbo.
- **KAOS-power-ups** (med regnbue-ring): Mega-kaos +10 kugler, Kæmpekugler, Måne-tyngde, Bumper-raseri, Lynstorm og Kuglekanon.

Tryk på **?** i spillet for at se en forklaring på alt.

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
