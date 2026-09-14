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

// Delay helper
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Download a single URL to a file
function download(url, dest) {
  return new Promise((resolve) => {
    const proto = url.startsWith("https") ? https : http;
    const file = fs.createWriteStream(dest);

    const req = proto.get(
      url,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
          Accept: "image/webp,image/png,image/svg+xml,image/*,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.9",
          Referer: "https://www.google.com/",
        },
        timeout: 15000,
      },
      (res) => {
        // Follow redirects
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.close();
          fs.unlinkSync(dest);
          download(res.headers.location, dest).then(resolve);
          return;
        }

        if (res.statusCode !== 200) {
          file.close();
          fs.unlinkSync(dest);
          resolve({ ok: false, reason: `HTTP ${res.statusCode}` });
          return;
        }

        res.pipe(file);
        file.on("finish", () => {
          file.close();
          const size = fs.statSync(dest).size;
          if (size < 500) {
            fs.unlinkSync(dest);
            resolve({ ok: false, reason: `Too small (${size} bytes)` });
          } else {
            resolve({ ok: true, size });
          }
        });
      }
    );

    req.on("error", (e) => {
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      resolve({ ok: false, reason: e.message });
    });

    req.on("timeout", () => {
      req.destroy();
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      resolve({ ok: false, reason: "Timeout" });
    });
  });
}

// Each logo: name + ordered list of URLs to try
const logos = [
  // BFSI
  {
    name: "bajaj-finserv",
    urls: [
      "https://www.bajajfinserv.in/favicon.ico",
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Bajaj_Finserv_Logo.svg",
      "https://img.etimg.com/photo/msid-90873291/bajaj-finserv.jpg",
    ],
  },
  {
    name: "rbi",
    urls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Reserve_Bank_of_India_logo.svg/200px-Reserve_Bank_of_India_logo.svg.png",
      "https://www.rbi.org.in/Scripts/Images/RBI_Logo1.gif",
    ],
  },
  {
    name: "mufg",
    urls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/MUFG_logo.svg/320px-MUFG_logo.svg.png",
      "https://www.mufg.jp/imgs/english/assets/img/common/logo.svg",
    ],
  },
  {
    name: "principal",
    urls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Principal_Financial_Group_logo.svg/320px-Principal_Financial_Group_logo.svg.png",
      "https://corporate.principal.com/content/dam/principal/logos/principal-logo.svg",
    ],
  },
  {
    name: "sud-life",
    urls: [
      "https://www.sudlife.in/assets/images/sud-logo.png",
      "https://upload.wikimedia.org/wikipedia/en/4/4e/SUD_Life_Logo.png",
    ],
  },
  {
    name: "oaknorth",
    urls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/OakNorth_Bank_logo.png/200px-OakNorth_Bank_logo.png",
      "https://www.oaknorth.co.uk/wp-content/themes/oaknorth/dist/images/logo.svg",
    ],
  },
  {
    name: "ifsca",
    urls: [
      "https://ifsca.gov.in/Uploads/images/Logo-IFSCA.png",
      "https://upload.wikimedia.org/wikipedia/en/8/83/IFSCA_logo.png",
    ],
  },

  // Automobile
  {
    name: "jsw-mg-motor",
    urls: [
      "https://www.mgmotor.co.in/images/mg-logo-white.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MG_Motor_logo.svg/200px-MG_Motor_logo.svg.png",
    ],
  },
  {
    name: "uno-minda",
    urls: [
      "https://www.unominda.com/wp-content/themes/unominda/images/logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/Minda_Industries_Logo.png",
    ],
  },
  {
    name: "wirtgen",
    urls: [
      "https://www.wirtgen-group.com/typo3conf/ext/wirtgen_corporate_theme/Resources/Public/images/logo/wirtgen-group-logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Wirtgen_Logo.png",
    ],
  },

  // Oil & Gas
  {
    name: "shell",
    urls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Shell_logo.svg/200px-Shell_logo.svg.png",
      "https://www.shell.com/favicon.ico",
    ],
  },
  {
    name: "iocl",
    urls: [
      "https://iocl.com/images/logo.png",
      "https://www.iocl.com/favicon.ico",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/IOCL-Logo.svg/200px-IOCL-Logo.svg.png",
    ],
  },

  // FMCG
  {
    name: "nestle",
    urls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Nestle.svg/320px-Nestle.svg.png",
      "https://www.nestle.in/favicon.ico",
    ],
  },
  {
    name: "rspl",
    urls: [
      "https://rspl.co.in/public/website/images/rspl-group-logo.png",
      "https://www.rspl.co.in/public/website/images/logo.png",
    ],
  },
  {
    name: "cosmo-first",
    urls: [
      "https://www.cosmofirst.com/wp-content/uploads/2022/05/cosmo-first-logo-new.png",
      "https://cosmofirst.com/wp-content/uploads/2021/08/logo.png",
    ],
  },

  // Pharma
  {
    name: "glenmark",
    urls: [
      "https://glenmarkpharma.com/wp-content/themes/glenmark/images/logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Glenmark_Pharmaceuticals_logo.png/320px-Glenmark_Pharmaceuticals_logo.png",
    ],
  },
  {
    name: "sanofi",
    urls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Sanofi_logo.svg/320px-Sanofi_logo.svg.png",
      "https://www.sanofi.com/favicon.ico",
    ],
  },
  {
    name: "indofil",
    urls: [
      "https://www.indofil.com/wp-content/themes/indofil/img/logo.png",
      "https://www.indofil.com/images/logo.png",
    ],
  },

  // Manufacturing
  {
    name: "abb",
    urls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/320px-ABB_logo.svg.png",
      "https://new.abb.com/favicon.ico",
    ],
  },
  {
    name: "atlas-copco",
    urls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Atlas_Copco_Group_logo.svg/320px-Atlas_Copco_Group_logo.svg.png",
      "https://www.atlascopco.com/favicon.ico",
    ],
  },
  {
    name: "usha-international",
    urls: [
      "https://www.usha.com/wp-content/uploads/2019/07/usha-logo.png",
      "https://usha.com/favicon.ico",
    ],
  },
  {
    name: "toro",
    urls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/The_Toro_Company_logo.svg/320px-The_Toro_Company_logo.svg.png",
      "https://www.thetorocompany.com/favicon.ico",
    ],
  },
  {
    name: "shree-malani",
    urls: [
      "https://www.shreemalani.com/images/logo.png",
      "https://shreemalani.com/wp-content/uploads/logo.png",
    ],
  },
  {
    name: "sekura",
    urls: [
      "https://www.sekura.in/images/logo.png",
      "https://sekura.in/wp-content/uploads/logo.png",
    ],
  },

  // Professional Services
  {
    name: "kpmg",
    urls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/KPMG_blue_logo.svg/320px-KPMG_blue_logo.svg.png",
      "https://home.kpmg/favicon.ico",
    ],
  },
  {
    name: "pwc",
    urls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/320px-PricewaterhouseCoopers_Logo.svg.png",
      "https://www.pwc.in/favicon.ico",
    ],
  },
  {
    name: "omnicom",
    urls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Omnicom_Logo.svg/320px-Omnicom_Logo.svg.png",
      "https://www.omnicommediagroup.com/wp-content/themes/omc/images/omnicom-logo.svg",
    ],
  },
  {
    name: "concord-one",
    urls: [
      "https://concordone.in/wp-content/uploads/logo.png",
      "https://www.concordone.in/images/logo.png",
    ],
  },

  // IT
  {
    name: "affle",
    urls: [
      "https://affle.com/wp-content/uploads/2023/01/affle-logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Affle_India_logo.png/200px-Affle_India_logo.png",
    ],
  },
  {
    name: "indigene",
    urls: [
      "https://indigene.com/wp-content/themes/indigene/images/logo.png",
      "https://www.indigene.com/wp-content/uploads/2019/03/indigene-logo.png",
    ],
  },
  {
    name: "fytxt",
    urls: [
      "https://www.fytxt.com/wp-content/uploads/logo.png",
      "https://fytxt.com/images/logo.png",
    ],
  },

  // Real Estate
  {
    name: "k-raheja",
    urls: [
      "https://krahejagroup.com/wp-content/uploads/2022/06/K-Raheja-Corp-logo.png",
      "https://www.krahejagroup.com/images/logo.png",
    ],
  },
  {
    name: "metro-gsc",
    urls: [
      "https://www.metro-gsc.in/images/logo.png",
      "https://metro-gsc.in/wp-content/uploads/logo.png",
    ],
  },

  // Education
  {
    name: "lexicon-mile",
    urls: [
      "https://lexiconmile.edu.in/wp-content/uploads/2020/01/Lexicon-MILE-Logo.png",
      "https://www.lexiconmile.edu.in/wp-content/uploads/logo.png",
    ],
  },
  {
    name: "symbiosis",
    urls: [
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Symbiosis_International_University_logo.png/200px-Symbiosis_International_University_logo.png",
      "https://www.siu.edu.in/images/logo/siu-logo.png",
    ],
  },
  {
    name: "mit-pune",
    urls: [
      "https://www.mitpune.edu.in/images/logo.png",
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/MIT_group_institutions_logo.png/200px-MIT_group_institutions_logo.png",
    ],
  },

  // Govt
  {
    name: "netherlands-embassy",
    urls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/200px-Flag_of_the_Netherlands.svg.png",
    ],
  },
];

async function main() {
  let ok = 0;
  let fail = 0;
  const failed = [];

  for (const logo of logos) {
    const dest = path.join(OUTPUT_DIR, `${logo.name}.png`);

    // Skip if already valid
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log(`\x1b[90mSKIP ${logo.name} (already exists)\x1b[0m`);
      ok++;
      continue;
    }

    let downloaded = false;
    for (const url of logo.urls) {
      // Polite delay between requests - avoids rate limiting
      await sleep(800);

      const result = await download(url, dest);
      if (result.ok) {
        console.log(`\x1b[32mOK   ${logo.name} (${result.size} bytes)\x1b[0m`);
        ok++;
        downloaded = true;
        break;
      } else {
        console.log(`\x1b[33m     ${logo.name}: ${result.reason}\x1b[0m`);
      }
    }

    if (!downloaded) {
      console.log(`\x1b[31mFAIL ${logo.name}\x1b[0m`);
      fail++;
      failed.push(logo.name);
    }
  }

  console.log("\n---------------------------------------------");
  console.log(`\x1b[36mDone. ${ok} OK, ${fail} failed.\x1b[0m`);
  console.log(`Logos saved to: ${OUTPUT_DIR}`);

  if (failed.length > 0) {
    console.log("\nFailed logos - manually save to public/logos/:");
    failed.forEach((n) => console.log(`  ${n}.png`));
  }
  console.log("---------------------------------------------");
}

main();
