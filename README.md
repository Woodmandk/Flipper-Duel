# Flipper Duel

A neon pinball game for two players that runs right in the browser. No install, no login.

**Play here:** https://woodmandk.github.io/Flipper-Duel/

## Game modes

- **Duel** – you each have your own table and 1200 HP. Everything you hit damages your opponent. Best of 3 rounds, each played on a random table (Neon Classic, Space Invasion, Chaos Factory, Deep Sea or Haunted House). After 2½ minutes the round goes into OVERDRIVE, where all damage counts double. 5 quick hits in a row give a combo with +25% damage.
- **Campaign** – you alone against the bosses in 20 boss fights. Every 5th level is a **mega boss**: bigger, with every boss's attacks, a phase 2 invasion at half HP, and new skills unlocked when you beat it. Many levels have a special rule: low gravity, storm wind, darkness, bomb rain, mini flippers, heavy ball or mirror chaos. The last 5 levels are played on the giant table. You have 300 HP and 5–7 minutes, and the boss wears your HP down. Win to unlock the next level and earn 1–3 stars depending on how much HP you have left.
- **Arena** – pinball football: the table is a pitch with no gravity. Each player has a goalkeeper (two flippers in front of the goal) and two strikers up on the opponent's half, just like table football. First to 5 goals, and the table changes every 2 goals. Each player has a ramp that shoots at the opponent's goal.

## Tables

The tables are wide and zoomed out. In Duel the camera follows the ball and shows the whole table during multiball. Each table has its own shape, theme and music, and its own mechanic (shown on screen before the round):

- **Neon Classic** – light all bumpers at once for a light jackpot (−15).
- **Space Invasion** – a UFO flies across the top. Shoot it down for −12.
- **Chaos Factory** – conveyor belts push the ball sideways and switch direction.
- **Deep Sea** – low gravity and bubble columns that lift the ball.
- **Haunted House** – the lights go out now and then, so you only see around the ball.
- **Stadium** – a referee walks back and forth across the middle.
- **Ice Rink** – slippery ice: the ball zooms faster.
- **Retro Arcade** – bricks you can smash for energy. They come back after 10 seconds.
- **Volcano** – eruptions fling the balls away. Watch for the red warning.

**Giant tables** show up now and then: GIANT HALL in Duel and MEGA STADIUM in Arena are much bigger than the others.

On the tables you'll find ramps, portals, extra flippers, missions with a time limit, and a **boss** on every Duel table that fights back with its own attack. Beat it and your opponent loses 100 HP. Nudge the table with `S` or `↓`, but nudge too much and you get TILT.

## Skills

You pick **2 skills** (under "Your skills" in the menu and in the campaign). You have one energy bar that fills when you hit things, and each skill costs part of it (the marks on the bar show the price). The bar holds 100 energy and skills cost from 20 to 100. Use the same skill again and its time stacks. When you can afford a skill it says READY!, and you fire it with `Q` / `E` (or `1` / `2`) or the button by the table. Some skills unlock when you beat the mega bosses.

## Power-ups

Hexagons pop up on the table. Hit them with the ball. Regular ones include Multiball, Shield, Double damage, Repair, Giant flippers, Safety net and Double goal. **CHAOS power-ups** (with a rainbow ring) include Mega chaos +10 balls, Giant balls, Moon gravity, Invasion, Reverse gravity, Bumper rage, Lightning storm and Ball cannon.

Press **?** in the game for an explanation of everything.

## Daily challenge, shop and Chaos Friday

- **Daily challenge:** a new boss fight every day. The table, boss and rule come from the date, so everyone gets the same one. The game keeps today's record and your streak of days in a row.
- **Shop:** you earn coins in every match (most for wins and the daily challenge) and buy new balls, flippers, backgrounds (Sunset, Deep Sea, Matrix, Galaxy) and victory dances (Confetti, Fireworks, Lightning Show, Disco).
- **Chaos Friday:** every Friday all chaos power-ups are on, they show up much more often, and you get 50% more coins. Add `#kaos` to the address to try it on another day.

Coins, purchases, records and stats are stored only on your device.

## Playing against each other

**Find an opponent online:** press **Find an opponent online** and you're paired with a random player searching for the same mode right now. It runs without a server of its own (via PeerJS). If nobody is online, you can play the computer instead.

**Against a friend:**

1. Open the game, type your name, pick a mode and press **Challenge a friend online**.
2. Press **Copy invite** and send the link to your friend.
3. Your friend opens the link (the code is already filled in) and presses **Join**.
4. Press **Start the match**.

You can also play the computer or two players on one screen.

## Controls

| | Left flipper | Right flipper | Skill / SUPER | Nudge |
|---|---|---|---|---|
| One player | `A` or `←` | `D` or `→` | `Q` / `E` | `S` or `↓` |
| Player 1 (same screen) | `A` | `D` | `Q` / `E` | `S` |
| Player 2 (same screen) | `←` | `→` | `I` / `O` | `↓` |
| Phone/tablet | Tap the left side | Tap the right side | Skill buttons | – |

Online you can send emojis to your opponent with the keys 6–0.

## Tech

The whole game is one file, `index.html`: canvas graphics, custom pinball physics and sound made with Web Audio. Online play goes directly between the two browsers over WebRTC ([PeerJS](https://peerjs.com)), so there is no server to run. On very locked-down networks (some company or mobile networks) a direct connection can fail.
