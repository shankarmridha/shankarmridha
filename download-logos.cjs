/**
 * Logo Downloader - Run with: node download-logos.cjs
 * Uses https module only (no npm install needed)
 * Adds delays between requests to avoid rate limiting
 */

const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.join(__dirname, "public", "logos");
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function download(url, dest, retries = 2) {
  return new Promise((resolve) => {
    const proto = url.startsWith("https") ? https : http;
    const file = fs.createWriteStream(dest);

    const req = proto.get(
      url,
      {
        headers: {
          "User-Agent": "shankarmridha-logo-downloader/1.0 (website asset script; node.js)",
          "Api-User-Agent": "shankarmridha-logo-downloader/1.0",
          Accept: "image/png,image/svg+xml,image/*,*/*;q=0.8",
        },
        timeout: 15000,
      },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.close();
          try { fs.unlinkSync(dest); } catch(e) {}
          download(res.headers.location, dest, retries).then(resolve);
          return;
        }
        if (res.statusCode === 429 && retries > 0) {
          file.close();
          try { fs.unlinkSync(dest); } catch(e) {}
          res.resume(); // drain the response
          console.log("\x1b[90m     429 — waiting 8s before retry (" + retries + " left)...\x1b[0m");
          sleep(8000).then(() => download(url, dest, retries - 1).then(resolve));
          return;
        }
        if (res.statusCode !== 200) {
          file.close();
          try { fs.unlinkSync(dest); } catch(e) {}
          res.resume();
          resolve({ ok: false, reason: "HTTP " + res.statusCode });
          return;
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          try {
            const size = fs.statSync(dest).size;
            if (size < 500) {
              fs.unlinkSync(dest);
              resolve({ ok: false, reason: "Too small (" + size + " bytes)" });
            } else {
              resolve({ ok: true, size });
            }
          } catch(e) {
            resolve({ ok: false, reason: e.message });
          }
        });
      }
    );

    req.on("error", (e) => {
      file.close();
      try { fs.unlinkSync(dest); } catch(ex) {}
      resolve({ ok: false, reason: e.message });
    });

    req.on("timeout", () => {
      req.destroy();
      file.close();
      try { fs.unlinkSync(dest); } catch(e) {}
      resolve({ ok: false, reason: "Timeout" });
    });
  });
}

const logos = [
  { name: "bajaj-finserv",      urls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Bajaj_Finserv_Logo.svg/320px-Bajaj_Finserv_Logo.svg.png", "https://www.bajajfinserv.in/favicon.ico"] },
  { name: "rbi",                urls: ["https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Reserve_Bank_of_India.svg/200px-Reserve_Bank_of_India.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Reserve_Bank_of_India_logo.svg/200px-Reserve_Bank_of_India_logo.svg.png"] },
  { name: "mufg",               urls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/MUFG_logo.svg/320px-MUFG_logo.svg.png", "https://www.mufg.jp/imgs/english/assets/img/common/logo.svg"] },
  { name: "principal",          urls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Principal_Financial_Group_logo.svg/320px-Principal_Financial_Group_logo.svg.png"] },
  { name: "sud-life",           urls: ["https://www.sudlife.in/assets/images/sud-logo.png", "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/SUD_Life_Logo.png/200px-SUD_Life_Logo.png"] },
  { name: "oaknorth",           urls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/OakNorth_Bank_logo.png/200px-OakNorth_Bank_logo.png"] },
  { name: "ifsca",              urls: ["https://ifsca.gov.in/Uploads/images/Logo-IFSCA.png", "https://upload.wikimedia.org/wikipedia/en/thumb/8/83/IFSCA_logo.png/200px-IFSCA_logo.png"] },
  { name: "tata-motors",         urls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/200px-Tata_logo.svg.png"] },
  { name: "mg-motor",            urls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/MG_Motor_logo.svg/200px-MG_Motor_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MG_Motor_logo.svg/200px-MG_Motor_logo.svg.png"] },
  { name: "volkswagen",          urls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/200px-Volkswagen_logo_2019.svg.png"] },
  { name: "uno-minda",          urls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Minda_Industries_Logo.png/200px-Minda_Industries_Logo.png", "https://www.unominda.com/wp-content/themes/unominda/images/logo.png"] },
  { name: "wirtgen",            urls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Wirtgen_Logo.png/200px-Wirtgen_Logo.png", "https://www.wirtgen-group.com/typo3conf/ext/wirtgen_corporate_theme/Resources/Public/images/logo/wirtgen-group-logo.svg"] },
  { name: "shell",              urls: ["https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Shell_logo.svg/200px-Shell_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Shell_logo.svg/200px-Shell_logo.svg.png"] },
  { name: "iocl",               urls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/IOCL-Logo.svg/200px-IOCL-Logo.svg.png", "https://iocl.com/images/logo.png"] },
  { name: "nestle",             urls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Nestle.svg/320px-Nestle.svg.png"] },
  { name: "rspl",               urls: ["https://rspl.co.in/public/website/images/rspl-group-logo.png", "https://www.rspl.co.in/public/website/images/logo.png"] },
  { name: "cosmo-first",        urls: ["https://www.cosmofirst.com/wp-content/uploads/2022/05/cosmo-first-logo-new.png", "https://cosmofirst.com/wp-content/uploads/2021/08/logo.png"] },
  { name: "glenmark",           urls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Glenmark_Pharmaceuticals_logo.png/320px-Glenmark_Pharmaceuticals_logo.png", "https://glenmarkpharma.com/wp-content/themes/glenmark/images/logo.png"] },
  { name: "sanofi",             urls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Sanofi_logo.svg/320px-Sanofi_logo.svg.png"] },
  { name: "indofil",            urls: ["https://www.indofil.com/wp-content/themes/indofil/img/logo.png", "https://www.indofil.com/images/logo.png"] },
  { name: "abb",                urls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/320px-ABB_logo.svg.png"] },
  { name: "atlas-copco",        urls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Atlas_Copco_Group_logo.svg/320px-Atlas_Copco_Group_logo.svg.png"] },
  { name: "usha-international", urls: ["https://www.usha.com/wp-content/uploads/2019/07/usha-logo.png", "https://usha.com/favicon.ico"] },
  { name: "toro",               urls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/The_Toro_Company_logo.svg/320px-The_Toro_Company_logo.svg.png"] },
  { name: "shree-malani",       urls: ["https://www.shreemalani.com/images/logo.png", "https://shreemalani.com/wp-content/uploads/logo.png"] },
  { name: "sekura",             urls: ["https://www.sekura.in/images/logo.png", "https://sekura.in/wp-content/uploads/logo.png"] },
  { name: "kpmg",               urls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/KPMG_blue_logo.svg/320px-KPMG_blue_logo.svg.png"] },
  { name: "pwc",                urls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/320px-PricewaterhouseCoopers_Logo.svg.png"] },
  { name: "omnicom",            urls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Omnicom_Logo.svg/320px-Omnicom_Logo.svg.png"] },
  { name: "concord-one",        urls: ["https://concordone.in/wp-content/uploads/logo.png", "https://www.concordone.in/images/logo.png"] },
  { name: "affle",              urls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Affle_India_logo.png/200px-Affle_India_logo.png", "https://affle.com/wp-content/uploads/2023/01/affle-logo.svg"] },
  { name: "indigene",           urls: ["https://indigene.com/wp-content/themes/indigene/images/logo.png", "https://www.indigene.com/wp-content/uploads/2019/03/indigene-logo.png"] },
  { name: "fytxt",              urls: ["https://www.fytxt.com/wp-content/uploads/logo.png", "https://fytxt.com/images/logo.png"] },
  { name: "k-raheja",           urls: ["https://krahejagroup.com/wp-content/uploads/2022/06/K-Raheja-Corp-logo.png", "https://www.krahejagroup.com/images/logo.png"] },
  { name: "metro-gsc",          urls: ["https://www.metro-gsc.in/images/logo.png", "https://metro-gsc.in/wp-content/uploads/logo.png"] },
  { name: "lexicon-mile",       urls: ["https://lexiconmile.edu.in/wp-content/uploads/2020/01/Lexicon-MILE-Logo.png"] },
  { name: "symbiosis",          urls: ["https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Symbiosis_International_University_%28Deemed_University%29_logo.png/200px-Symbiosis_International_University_%28Deemed_University%29_logo.png", "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Symbiosis_International_University_logo.png/200px-Symbiosis_International_University_logo.png"] },
  { name: "mit-pune",           urls: ["https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/MIT_group_institutions_logo.png/200px-MIT_group_institutions_logo.png", "https://www.mitpune.edu.in/images/logo.png"] },
  { name: "netherlands-embassy", urls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/320px-Flag_of_the_Netherlands.svg.png"] },
];

async function main() {
  let ok = 0;
  let fail = 0;
  const failed = [];

  for (const logo of logos) {
    const dest = path.join(OUTPUT_DIR, logo.name + ".png");

    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log("\x1b[90mSKIP " + logo.name + " (already exists)\x1b[0m");
      ok++;
      continue;
    }

    let downloaded = false;
    for (const url of logo.urls) {
      await sleep(1500);
      const result = await download(url, dest);
      if (result.ok) {
        console.log("\x1b[32mOK   " + logo.name + " (" + result.size + " bytes)\x1b[0m");
        ok++;
        downloaded = true;
        break;
      } else {
        console.log("\x1b[33m     " + logo.name + ": " + result.reason + "\x1b[0m");
      }
    }

    if (!downloaded) {
      console.log("\x1b[31mFAIL " + logo.name + "\x1b[0m");
      fail++;
      failed.push(logo.name);
    }
  }

  console.log("\n---------------------------------------------");
  console.log("\x1b[36mDone. " + ok + " OK, " + fail + " failed.\x1b[0m");
  console.log("Logos saved to: " + OUTPUT_DIR);
  if (failed.length > 0) {
    console.log("\nStill missing - save manually to public/logos/:");
    failed.forEach(function(n) { console.log("  " + n + ".png"); });
  }
  console.log("---------------------------------------------");
}

main();
