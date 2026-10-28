// Builds the itch.io package from ../index.html without changing the game itself.
//   node itch/make.js zip            -> itch/out/flipper-duel-html5.zip
//   node itch/make.js shots          -> itch/out/shots/*.png (several candidates per mode)
//   node itch/make.js cover A.png B.png -> itch/out/cover.png (630x500) and cover@2x.png
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const ROOT = path.join(__dirname, '..'), OUT = path.join(__dirname, 'out');
const LIVE = 'https://woodmandk.github.io/Flipper-Duel/';
const pw = () => require(process.env.PLAYWRIGHT || 'playwright');
const launch = () => pw().chromium.launch(process.env.HTTPS_PROXY ? { proxy: { server: process.env.HTTPS_PROXY } } : {});

function zip() {
  // Inside itch.io the game runs in an iframe on html-classic.itch.zone, so invite links
  // would point there. Point them at the live GitHub Pages copy (same PeerJS rooms) instead.
  const src = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const from = "location.href.split('#')[0]";
  if (!src.includes(from)) throw new Error('inviteLink() changed; update the patch in itch/make.js');
  // GoatCounter skips pages inside an iframe unless allow_frame is set. Visits from itch
  // are counted under the path /itch so they stand apart from the GitHub Pages ones.
  const gc = '<script data-goatcounter=';
  if (!src.includes(gc)) throw new Error('GoatCounter tag changed; update the patch in itch/make.js');
  const dir = path.join(OUT, 'build');
  fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), src.replace(from, `'${LIVE}'`)
    .replace(gc, `<script data-goatcounter-settings='{"allow_frame":true,"path":"/itch"}' data-goatcounter=`));
  const z = path.join(OUT, 'flipper-duel-html5.zip'); fs.rmSync(z, { force: true });
  execFileSync('zip', ['-j', '-q', z, path.join(dir, 'index.html')]);
  console.log('wrote', z);
}

async function shots() {
  const dir = path.join(OUT, 'shots'); fs.mkdirSync(dir, { recursive: true });
  const b = await launch();
  const run = async (name, setup, at) => {
    const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
    p.on('pageerror', e => console.log(name, 'error:', e.message));
    await p.goto('file://' + path.join(ROOT, 'index.html'));
    await p.waitForTimeout(1500);
    await p.fill('input[type=text]', 'Daniel').catch(() => {});
    await setup(p);
    let t = 0;
    for (const f of at) {
      while (t < f) { // keep the ball alive by tapping the flippers
        const k = Math.random() < .5 ? 'a' : 'd';
        await p.keyboard.down(k); await p.waitForTimeout(120); await p.keyboard.up(k); await p.waitForTimeout(380); t += 500;
      }
      await p.screenshot({ path: path.join(dir, `${name}-${f / 1000}s.png`) });
    }
    await p.close();
  };
  const at = [8000, 15000, 25000, 40000];
  await run('menu', async () => {}, [0]);
  await run('duel', p => p.click('#bCpu'), at);
  await run('arena', async p => { await p.click('#mArena'); await p.click('#bCpu'); }, at);
  await run('local', p => p.click('#bLocal'), at);
  await run('boss', p => p.evaluate(() => startCamp(0)), at);
  await run('mega', p => p.evaluate(() => startCamp(4)), at);
  await b.close();
  console.log('wrote', dir);
}

async function cover(a, c) {
  const img = f => 'data:image/png;base64,' + fs.readFileSync(f).toString('base64');
  const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bungee&family=Chakra+Petch:wght@600&display=swap">
<style>
html,body{margin:0;width:630px;height:500px;overflow:hidden;background:#07060f;}
.s{position:absolute;top:0;height:500px;width:330px;background-size:cover;}
.l{left:0;background-image:url(${img(a)});background-position:50% 40%;clip-path:polygon(0 0,100% 0,82% 100%,0 100%);}
.r{right:0;background-image:url(${img(c)});background-position:50% 40%;clip-path:polygon(18% 0,100% 0,100% 100%,0 100%);}
.fade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(7,6,15,.1) 0%,rgba(7,6,15,.35) 45%,rgba(7,6,15,.92) 78%,#07060f 100%);}
.v{position:absolute;left:50%;top:0;width:4px;height:500px;transform:translateX(-50%) skewX(-6.8deg);background:linear-gradient(#22e6ff,#ff3fd2);box-shadow:0 0 18px #b04bff;}
h1{position:absolute;left:0;right:0;bottom:62px;margin:0;text-align:center;font:400 76px/.92 Bungee,Impact,sans-serif;letter-spacing:.02em;}
.a{color:#22e6ff;text-shadow:0 0 14px rgba(34,230,255,.85),0 0 40px rgba(34,230,255,.5);}
.b{color:#ff3fd2;text-shadow:0 0 14px rgba(255,63,210,.85),0 0 40px rgba(255,63,210,.5);}
p{position:absolute;left:0;right:0;bottom:24px;margin:0;text-align:center;font:600 19px "Chakra Petch",sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#ece9ff;}
.vs{position:absolute;left:50%;top:150px;transform:translateX(-50%);font:400 40px Bungee,sans-serif;color:#ffd84a;text-shadow:0 0 16px rgba(255,216,74,.8);}
</style></head><body>
<div class="s l"></div><div class="s r"></div><div class="v"></div><div class="fade"></div>
<div class="vs">VS</div>
<h1><span class="a">FLIPPER</span><br><span class="b">DUEL</span></h1>
<p>2-player neon pinball battles</p>
</body></html>`;
  fs.mkdirSync(OUT, { recursive: true });
  const b = await launch();
  for (const [scale, name] of [[1, 'cover.png'], [2, 'cover@2x.png']]) {
    const p = await b.newPage({ viewport: { width: 630, height: 500 }, deviceScaleFactor: scale });
    await p.setContent(html, { waitUntil: 'networkidle' });
    await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: path.join(OUT, name) });
    await p.close();
  }
  await b.close();
  console.log('wrote', path.join(OUT, 'cover.png'));
}

const [cmd, ...args] = process.argv.slice(2);
({ zip, shots, cover })[cmd] ? Promise.resolve(({ zip, shots, cover })[cmd](...args)).catch(e => { console.error(e); process.exit(1); })
  : console.log('usage: node itch/make.js zip | shots | cover <left.png> <right.png>');
