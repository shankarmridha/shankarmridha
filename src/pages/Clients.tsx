import { useState } from "react";
import { Link } from "react-router-dom";
import Testimonials from "@/components/Testimonials";

export interface ClientItem {
  name: string;
  sector: string[];
  logo: string;
  fallback?: string;
  logoClass?: string;
}

export const clients: ClientItem[] = [
  {
    "name": "ABB",
    "sector": [
      "Manufacturing"
    ],
    "logo": "/logos/abb.png",
    "fallback": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/320px-ABB_logo.svg.png"
  },
  {
    "name": "Acko General Insurance Ltd",
    "sector": [
      "BFSI"
    ],
    "logo": "/logos/acko.png",
    "fallback": ""
  },
  {
    "name": "ACT Fibernet",
    "sector": [
      "Telecom"
    ],
    "logo": "/logos/act-fibernet.png",
    "fallback": ""
  },
  {
    "name": "Affle 3i",
    "sector": [
      "IT",
      "GCC"
    ],
    "logo": "/logos/affle.png",
    "fallback": ""
  },
  {
    "name": "Amanora School",
    "sector": [
      "Education"
    ],
    "logo": "/logos/amanora-school.jpg",
    "fallback": "",
    "logoClass": "scale-145 sm:scale-160"
  },
  {
    "name": "Analytix",
    "sector": [
      "IT"
    ],
    "logo": "/logos/analytix.png",
    "fallback": "",
    "logoClass": "scale-145 sm:scale-160"
  },
  {
    "name": "ANSYS Software Pvt Ltd",
    "sector": [
      "IT"
    ],
    "logo": "/logos/ansys.png",
    "fallback": ""
  },
  {
    "name": "Apraava Energy Pvt Ltd",
    "sector": [
      "Power"
    ],
    "logo": "/logos/apraava-energy.png",
    "fallback": ""
  },
  {
    "name": "Armor Défense",
    "sector": [
      "IT"
    ],
    "logo": "/logos/armor-defense.png",
    "fallback": ""
  },
  {
    "name": "ASAP Solutions Pvt. Ltd.",
    "sector": [
      "IT"
    ],
    "logo": "/logos/asap-solutions.jpg",
    "fallback": ""
  },
  {
    "name": "Atlas Copco",
    "sector": [
      "Manufacturing"
    ],
    "logo": "/logos/atlas-copco.jfif",
    "fallback": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Atlas_Copco_Group_logo.svg/320px-Atlas_Copco_Group_logo.svg.png"
  },
  {
    "name": "Atotech Development Centre Pvt Ltd",
    "sector": [
      "Manufacturing"
    ],
    "logo": "/logos/atotech.jpeg",
    "fallback": ""
  },
  {
    "name": "AXA Global Business Services Ltd",
    "sector": [
      "BFSI",
      "GCC"
    ],
    "logo": "/logos/axa.jpg",
    "fallback": ""
  },
  {
    "name": "Bajaj Finserv",
    "sector": [
      "BFSI"
    ],
    "logo": "/logos/bajaj-finserv.png",
    "fallback": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Bajaj_Finserv_Logo.svg/320px-Bajaj_Finserv_Logo.svg.png",
    "logoClass": "scale-135 sm:scale-150"
  },
  {
    "name": "Bharat Petroleum Corporation Ltd (BPCL)",
    "sector": [
      "Power"
    ],
    "logo": "/logos/bpcl.jpeg",
    "fallback": ""
  },
  {
    "name": "Birla Opus Paints (Grasim Industries Ltd)",
    "sector": [
      "Manufacturing"
    ],
    "logo": "/logos/birla-opus.jpeg",
    "fallback": ""
  },
  {
    "name": "Bishop School",
    "sector": [
      "Education"
    ],
    "logo": "/logos/bishop-school.jpeg",
    "fallback": ""
  },
  {
    "name": "Brevo (Formerly Sendinblue)",
    "sector": [
      "IT"
    ],
    "logo": "/logos/brevo.png",
    "fallback": ""
  },
  {
    "name": "Bricks Architecture College Pune",
    "sector": [
      "Education"
    ],
    "logo": "/logos/bricks-architecture-college.png",
    "fallback": ""
  },
  {
    "name": "Burns & McDonnell Engineering India Pvt Ltd",
    "sector": [
      "Manufacturing"
    ],
    "logo": "/logos/burns-mcdonnell.png",
    "fallback": "",
    "logoClass": "scale-135 sm:scale-145"
  },
  {
    "name": "BYLD",
    "sector": [
      "Education"
    ],
    "logo": "/logos/byld.png",
    "fallback": ""
  },
  {
    "name": "CABWW",
    "sector": [
      "Engineering",
      "GCC"
    ],
    "logo": "/logos/cabww.png",
    "fallback": ""
  },
  {
    "name": "Capgemini Consulting India Pvt Ltd",
    "sector": [
      "IT",
      "GCC"
    ],
    "logo": "/logos/capgemini.png",
    "fallback": "",
    "logoClass": "scale-115 max-w-[150px] !object-contain"
  },
  {
    "name": "Central Bank of India",
    "sector": [
      "BFSI"
    ],
    "logo": "/logos/central-bank.png",
    "fallback": "",
    "logoClass": "scale-140 sm:scale-155"
  },
  {
    "name": "Concord One",
    "sector": [
      "Professional Services"
    ],
    "logo": "/logos/concord-one.jfif",
    "fallback": ""
  },
  {
    "name": "Cosmo First",
    "sector": [
      "FMCG"
    ],
    "logo": "/logos/cosmo-first.png",
    "fallback": ""
  },
  {
    "name": "Dale Carnegie",
    "sector": [
      "Education"
    ],
    "logo": "/logos/dale-carnegie.png",
    "fallback": ""
  },
  {
    "name": "Deloitte Touche Tohmatsu India LLP",
    "sector": [
      "Professional Services",
      "GCC"
    ],
    "logo": "/logos/deloitte.png",
    "fallback": ""
  },
  {
    "name": "DHR Holding India Pvt Ltd (Danaher / Hach)",
    "sector": [
      "Pharma"
    ],
    "logo": "/logos/danaher.png",
    "fallback": ""
  },
  {
    "name": "DNV",
    "sector": [
      "Professional Services",
      "GCC"
    ],
    "logo": "/logos/dnv.jpg",
    "fallback": "",
    "logoClass": "scale-120 max-w-[150px] !object-contain"
  },
  {
    "name": "Driv India",
    "sector": [
      "Automobile"
    ],
    "logo": "/logos/driv-india.jpg",
    "fallback": "",
    "logoClass": "scale-125 sm:scale-135"
  },
  {
    "name": "DS Group",
    "sector": [
      "FMCG"
    ],
    "logo": "/logos/ds-group.png",
    "fallback": ""
  },
  {
    "name": "Eaton",
    "sector": [
      "Manufacturing",
      "GCC"
    ],
    "logo": "/logos/eaton.jpg",
    "fallback": "",
    "logoClass": "scale-125 max-w-[150px] !object-contain"
  },
  {
    "name": "ENGIE Energy India Pvt Ltd",
    "sector": [
      "Power"
    ],
    "logo": "/logos/engie.png",
    "fallback": ""
  },
  {
    "name": "Enrich Salons and Academy",
    "sector": [
      "Professional Services"
    ],
    "logo": "/logos/enrich.png",
    "fallback": ""
  },
  {
    "name": "Evolent Health International Pvt Ltd",
    "sector": [
      "Pharma",
      "Healthcare"
    ],
    "logo": "/logos/evolent-health.png",
    "fallback": ""
  },
  {
    "name": "Federal Bank",
    "sector": [
      "BFSI"
    ],
    "logo": "/logos/federal-bank.png",
    "fallback": "",
    "logoClass": "scale-140 sm:scale-155"
  },
  {
    "name": "Fresenius Kabi India Pvt Ltd",
    "sector": [
      "Pharma"
    ],
    "logo": "/logos/fresenius-kabi.png",
    "fallback": ""
  },
  {
    "name": "Fytxt",
    "sector": [
      "IT"
    ],
    "logo": "/logos/fytxt.png",
    "fallback": ""
  },
  {
    "name": "Gallagher Insurance Brokers Pvt Ltd",
    "sector": [
      "BFSI"
    ],
    "logo": "/logos/gallagher.jpeg",
    "fallback": ""
  },
  {
    "name": "Generali Central",
    "sector": [
      "BFSI"
    ],
    "logo": "/logos/generali-central.jpg",
    "fallback": "",
    "logoClass": "scale-125 sm:scale-135"
  },
  {
    "name": "Gera Builders",
    "sector": [
      "Real Estate"
    ],
    "logo": "/logos/gera-builders.png",
    "fallback": ""
  },
  {
    "name": "Glenmark",
    "sector": [
      "Pharma"
    ],
    "logo": "/logos/glenmark.png",
    "fallback": "",
    "logoClass": "scale-140 sm:scale-155"
  },
  {
    "name": "HealOne Healthcare Hospital",
    "sector": [
      "Healthcare"
    ],
    "logo": "/logos/Healone-Logo.jpg",
    "fallback": ""
  },
  {
    "name": "Hindustan Coca-Cola Beverages Pvt Ltd",
    "sector": [
      "FMCG"
    ],
    "logo": "/logos/coca-cola.png",
    "fallback": ""
  },
  {
    "name": "Hindustan Petroleum Corporation Ltd (HPCL)",
    "sector": [
      "Power"
    ],
    "logo": "/logos/hpcl.jpeg",
    "fallback": ""
  },
  {
    "name": "Hyundai",
    "sector": [
      "Automobile"
    ],
    "logo": "/logos/hyundai.jpg",
    "fallback": "",
    "logoClass": "scale-120 max-w-[150px] !object-contain"
  },
  {
    "name": "IBS College",
    "sector": [
      "Education"
    ],
    "logo": "/logos/ibs-college.png",
    "fallback": ""
  },
  {
    "name": "ICSI",
    "sector": [
      "Education"
    ],
    "logo": "/logos/icsi.png",
    "fallback": ""
  },
  {
    "name": "IFSCA",
    "sector": [
      "BFSI",
      "Govt"
    ],
    "logo": "/logos/ifsca.jfif",
    "fallback": "",
    "logoClass": "scale-145 sm:scale-160"
  },
  {
    "name": "Indigene",
    "sector": [
      "IT"
    ],
    "logo": "/logos/indigene.png",
    "fallback": ""
  },
  {
    "name": "Indofil Ltd",
    "sector": [
      "Pharma"
    ],
    "logo": "/logos/indofil.png",
    "fallback": ""
  },
  {
    "name": "Ingram Micro",
    "sector": [
      "IT"
    ],
    "logo": "/logos/ingram-micro.jpg",
    "fallback": "",
    "logoClass": "scale-120 max-w-[150px] !object-contain"
  },
  {
    "name": "IOCL",
    "sector": [
      "Power"
    ],
    "logo": "/logos/iocl.png",
    "fallback": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/IOCL-Logo.svg/200px-IOCL-Logo.svg.png",
    "logoClass": "scale-130 sm:scale-140"
  },
  {
    "name": "ISBM College",
    "sector": [
      "Education"
    ],
    "logo": "/logos/isbm-college.png",
    "fallback": "",
    "logoClass": "scale-130 sm:scale-140"
  },
  {
    "name": "ITC Infotech",
    "sector": [
      "IT",
      "GCC"
    ],
    "logo": "/logos/itc-infotech.jpg",
    "fallback": ""
  },
  {
    "name": "JSW MG Motor",
    "sector": [
      "Automobile"
    ],
    "logo": "/logos/mg-motor.png",
    "fallback": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MG_Motor_logo.svg/320px-MG_Motor_logo.svg.png"
  },
  {
    "name": "K Raheja",
    "sector": [
      "Real Estate"
    ],
    "logo": "/logos/k-raheja.jfif",
    "fallback": ""
  },
  {
    "name": "Karam Safety Pvt Ltd",
    "sector": [
      "Manufacturing"
    ],
    "logo": "/logos/karam-safety.jpeg",
    "fallback": ""
  },
  {
    "name": "KKINSUGI",
    "sector": [
      "Professional Services"
    ],
    "logo": "/logos/kkinsugi.png",
    "fallback": ""
  },
  {
    "name": "KPMG",
    "sector": [
      "Professional Services",
      "GCC"
    ],
    "logo": "/logos/kpmg.png",
    "fallback": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/KPMG_blue_logo.svg/320px-KPMG_blue_logo.svg.png"
  },
  {
    "name": "Lexicon MILE",
    "sector": [
      "Education"
    ],
    "logo": "/logos/lexicon-mile.png",
    "fallback": "",
    "logoClass": "scale-140 sm:scale-155"
  },
  {
    "name": "Lexicon Schools",
    "sector": [
      "Education"
    ],
    "logo": "/logos/lexicon-schools.png",
    "fallback": ""
  },
  {
    "name": "Mahindra Automobiles",
    "sector": [
      "Automobile"
    ],
    "logo": "/logos/mahindra.png",
    "fallback": ""
  },
  {
    "name": "Marks & Spencer UK",
    "sector": [
      "Retail"
    ],
    "logo": "/logos/marks-and-spencer.jpg",
    "fallback": "",
    "logoClass": "scale-125 sm:scale-135"
  },
  {
    "name": "Maruti Suzuki India Ltd",
    "sector": [
      "Automobile"
    ],
    "logo": "/logos/maruti-suzuki.png",
    "fallback": ""
  },
  {
    "name": "Metro GSC",
    "sector": [
      "GCC",
      "Retail"
    ],
    "logo": "/logos/metro-gsc.png",
    "fallback": ""
  },
  {
    "name": "MIT College of Management",
    "sector": [
      "Education"
    ],
    "logo": "/logos/mit-pune.jfif",
    "fallback": ""
  },
  {
    "name": "Motocare India Pvt Ltd",
    "sector": [
      "Automobile"
    ],
    "logo": "/logos/motocare.jpeg",
    "fallback": ""
  },
  {
    "name": "MUFG",
    "sector": [
      "BFSI",
      "GCC"
    ],
    "logo": "/logos/mufg.png",
    "fallback": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/MUFG_logo.svg/320px-MUFG_logo.svg.png"
  },
  {
    "name": "Nestle",
    "sector": [
      "FMCG"
    ],
    "logo": "/logos/nestle.png",
    "fallback": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Nestle.svg/320px-Nestle.svg.png"
  },
  {
    "name": "Netherland Embassy",
    "sector": [
      "Govt"
    ],
    "logo": "/logos/netherlands-embassy.jfif",
    "fallback": "",
    "logoClass": "scale-145 sm:scale-160"
  },
  {
    "name": "Oaknorth Bank",
    "sector": [
      "BFSI",
      "GCC"
    ],
    "logo": "/logos/oaknorth.png",
    "fallback": ""
  },
  {
    "name": "Omnicom Media Group",
    "sector": [
      "Professional Services"
    ],
    "logo": "/logos/omnicom.png",
    "fallback": ""
  },
  {
    "name": "PPFAS Mutual Fund",
    "sector": [
      "BFSI"
    ],
    "logo": "/logos/ppfas.png",
    "fallback": ""
  },
  {
    "name": "Principal Financial Group",
    "sector": [
      "GCC",
      "BFSI"
    ],
    "logo": "/logos/principal.png",
    "fallback": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Principal_Financial_Group_logo.svg/320px-Principal_Financial_Group_logo.svg.png"
  },
  {
    "name": "PWC",
    "sector": [
      "Professional Services",
      "GCC"
    ],
    "logo": "/logos/pwc.png",
    "fallback": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/320px-PricewaterhouseCoopers_Logo.svg.png"
  },
  {
    "name": "QualityKiosk Technologies Pvt Ltd",
    "sector": [
      "IT"
    ],
    "logo": "/logos/qualitykiosk.jpeg",
    "fallback": "",
    "logoClass": "scale-135 sm:scale-145"
  },
  {
    "name": "Quest Global Services Pte Ltd",
    "sector": [
      "IT"
    ],
    "logo": "/logos/quest-global.jpeg",
    "fallback": ""
  },
  {
    "name": "Ralph Lauren",
    "sector": [
      "Retail"
    ],
    "logo": "/logos/ralph-lauren.png",
    "fallback": "",
    "logoClass": "scale-135 sm:scale-145"
  },
  {
    "name": "RBI",
    "sector": [
      "BFSI"
    ],
    "logo": "/logos/rbi.jfif",
    "fallback": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Reserve_Bank_of_India_logo.svg/200px-Reserve_Bank_of_India_logo.svg.png"
  },
  {
    "name": "Reliance BP Mobility",
    "sector": [
      "Power"
    ],
    "logo": "/logos/reliance-bp.png",
    "fallback": ""
  },
  {
    "name": "Reliance Jio",
    "sector": [
      "Telecom"
    ],
    "logo": "/logos/reliance-jio.png",
    "fallback": ""
  },
  {
    "name": "RSPL Ltd",
    "sector": [
      "FMCG"
    ],
    "logo": "/logos/rspl.png",
    "fallback": ""
  },
  {
    "name": "Sakal Media Group",
    "sector": [
      "Media"
    ],
    "logo": "/logos/sakal.jpg",
    "fallback": ""
  },
  {
    "name": "Sandoz Pvt Ltd",
    "sector": [
      "Pharma"
    ],
    "logo": "/logos/sandoz.png",
    "fallback": "",
    "logoClass": "scale-120 max-w-[150px] !object-contain"
  },
  {
    "name": "Sanofi",
    "sector": [
      "Pharma"
    ],
    "logo": "/logos/sanofi.png",
    "fallback": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Sanofi_logo.svg/320px-Sanofi_logo.svg.png"
  },
  {
    "name": "SBI Cards and Payment Services Ltd",
    "sector": [
      "BFSI"
    ],
    "logo": "/logos/sbi-cards.png",
    "fallback": "",
    "logoClass": "scale-135 sm:scale-150"
  },
  {
    "name": "SBM Offshore",
    "sector": [
      "Power",
      "GCC"
    ],
    "logo": "/logos/sbm-offshore.png",
    "fallback": "",
    "logoClass": "scale-125 sm:scale-135"
  },
  {
    "name": "Sekura India",
    "sector": [
      "Manufacturing"
    ],
    "logo": "/logos/sekura.png",
    "fallback": ""
  },
  {
    "name": "Shell",
    "sector": [
      "Power"
    ],
    "logo": "/logos/shell.png",
    "fallback": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Shell_logo.svg/200px-Shell_logo.svg.png"
  },
  {
    "name": "Shivaji College Kolhapur",
    "sector": [
      "Education"
    ],
    "logo": "/logos/shivaji-college.jpg",
    "fallback": ""
  },
  {
    "name": "Shree Malani",
    "sector": [
      "Manufacturing"
    ],
    "logo": "/logos/shree-malani.png",
    "fallback": ""
  },
  {
    "name": "Somerfield Stores UK",
    "sector": [
      "Retail"
    ],
    "logo": "/logos/somerfield-stores.png",
    "fallback": ""
  },
  {
    "name": "Sprint USA",
    "sector": [
      "Telecom"
    ],
    "logo": "/logos/sprint.png",
    "fallback": ""
  },
  {
    "name": "SUD Life",
    "sector": [
      "BFSI"
    ],
    "logo": "/logos/sud-life.jfif",
    "fallback": "",
    "logoClass": "scale-125 sm:scale-135"
  },
  {
    "name": "Symbiosis DLC",
    "sector": [
      "Education"
    ],
    "logo": "/logos/symbiosis.jfif",
    "fallback": "",
    "logoClass": "scale-145 sm:scale-160"
  },
  {
    "name": "Tata Motors",
    "sector": [
      "Automobile"
    ],
    "logo": "/logos/tata-motors.png",
    "fallback": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/200px-Tata_logo.svg.png"
  },
  {
    "name": "Tata Power - NPL",
    "sector": [
      "Power"
    ],
    "logo": "/logos/tata-power.jpg",
    "fallback": ""
  },
  {
    "name": "Tata Power Renewable Energy",
    "sector": [
      "Power"
    ],
    "logo": "/logos/tata-power.jpg",
    "fallback": ""
  },
  {
    "name": "The House of Shubhashish",
    "sector": [
      "Retail"
    ],
    "logo": "/logos/shubhashish.jpeg",
    "fallback": ""
  },
  {
    "name": "The Mentor Park",
    "sector": [
      "Education"
    ],
    "logo": "/logos/the-mentor-park.png",
    "fallback": ""
  },
  {
    "name": "The Ramco Cements Ltd",
    "sector": [
      "Manufacturing"
    ],
    "logo": "/logos/ramco-cements.png",
    "fallback": ""
  },
  {
    "name": "The Toro Company",
    "sector": [
      "Manufacturing",
      "GCC",
      "IT"
    ],
    "logo": "/logos/toro.png",
    "fallback": ""
  },
  {
    "name": "The World Bank",
    "sector": [
      "GCC",
      "BFSI"
    ],
    "logo": "/logos/world-bank.png",
    "fallback": ""
  },
  {
    "name": "Times Education",
    "sector": [
      "Education"
    ],
    "logo": "/logos/times-education.png",
    "fallback": ""
  },
  {
    "name": "Times of India",
    "sector": [
      "Media"
    ],
    "logo": "/logos/times-of-india.jpg",
    "fallback": ""
  },
  {
    "name": "Total Energies",
    "sector": [
      "Power"
    ],
    "logo": "/logos/total-energies.jpg",
    "fallback": ""
  },
  {
    "name": "TVS Credit Services Ltd",
    "sector": [
      "BFSI"
    ],
    "logo": "/logos/tvs-credit.png",
    "fallback": ""
  },
  {
    "name": "uKnowva",
    "sector": [
      "IT"
    ],
    "logo": "/logos/uknowva.jpg",
    "fallback": "",
    "logoClass": "scale-125 sm:scale-135"
  },
  {
    "name": "UNext Learning",
    "sector": [
      "Education"
    ],
    "logo": "/logos/unext.jpeg",
    "fallback": ""
  },
  {
    "name": "Uno Minda",
    "sector": [
      "Automobile"
    ],
    "logo": "/logos/uno-minda.png",
    "fallback": "",
    "logoClass": "scale-125 sm:scale-135"
  },
  {
    "name": "Usha International",
    "sector": [
      "Manufacturing"
    ],
    "logo": "/logos/usha-international.png",
    "fallback": "",
    "logoClass": "scale-125 sm:scale-135"
  },
  {
    "name": "Vardhaman",
    "sector": [
      "Manufacturing"
    ],
    "logo": "/logos/vardhaman.png",
    "fallback": ""
  },
  {
    "name": "Vistaar Systems Pvt Ltd",
    "sector": [
      "IT"
    ],
    "logo": "/logos/vistaar.jpeg",
    "fallback": ""
  },
  {
    "name": "Volkswagen",
    "sector": [
      "Automobile"
    ],
    "logo": "/logos/volkswagen.png",
    "fallback": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/200px-Volkswagen_logo_2019.svg.png"
  },
  {
    "name": "Volkswagen IT",
    "sector": [
      "IT",
      "GCC",
      "Automobile"
    ],
    "logo": "/logos/volkswagen.png",
    "fallback": ""
  },
  {
    "name": "Wirtgen India",
    "sector": [
      "Automobile"
    ],
    "logo": "/logos/wirtgen.png",
    "fallback": ""
  },
  {
    "name": "Zenex Animal Health India Pvt Ltd",
    "sector": [
      "Pharma"
    ],
    "logo": "/logos/zenex.jpeg",
    "fallback": ""
  },
  {
    "name": "Zensar Technologies",
    "sector": [
      "IT"
    ],
    "logo": "/logos/zensar.png",
    "fallback": ""
  },
  {
    "name": "Zydus Wellness Products Ltd",
    "sector": [
      "FMCG"
    ],
    "logo": "/logos/zydus-wellness.png",
    "fallback": ""
  }
];

const sectors = [
  "All",
  "BFSI",
  "GCC",
  "Automobile",
  "Pharma",
  "Manufacturing",
  "Engineering",
  "IT",
  "FMCG",
  "Real Estate",
  "Professional Services",
  "Media",
  "Power",
  "Education",
  "Retail",
  "Telecom",
  "Govt",
  "Healthcare",
];

const speakers = [
  { name: "RBI", role: "Keynote Speaker" },
  { name: "Lexicon MILE Management College", role: "Keynote Speaker" },
  { name: "Symbiosis DLC", role: "Keynote Speaker" },
  { name: "MIT College of Management", role: "Keynote Speaker" },
  { name: "Amanora School", role: "Keynote Speaker" },
  { name: "Times Education", role: "Keynote Speaker" },
  { name: "ISBM College", role: "Keynote Speaker" },
  { name: "IBS College", role: "Keynote Speaker" },
  { name: "uKnowva", role: "Keynote Speaker" },
  { name: "ICSI — Institute of Company Secretaries of India", role: "Keynote Speaker" },
  { name: "Art Auctions", role: "Keynote Speaker" },
  { name: "Fidelitus Art Gallery", role: "Keynote Speaker" },
  { name: "Chocolate Carnival", role: "Keynote Speaker" },
  { name: "World Art Day", role: "Keynote Speaker" },
  { name: "Shivaji College Kolhapur", role: "Keynote Speaker" },
  { name: "Rotary Club of Pune", role: "Keynote Speaker" },
];

const Clients = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All"
    ? clients
    : clients.filter((c) => c.sector.includes(filter));

  return (
    <main>
      {/* HERO */}
      <section className="bg-midnight flex items-center justify-center" style={{ minHeight: "40vh" }}>
        <div className="text-center px-6 py-28">
          <h1 className="font-display text-4xl md:text-5xl text-ivory mb-4">
            Organisations I Have Worked With
          </h1>
          <p className="font-mono text-gold text-sm">
            200+ Programmes &nbsp;|&nbsp; 17 Sectors &nbsp;|&nbsp; Pan-India
          </p>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="bg-ivory py-20 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {sectors.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`font-body text-sm px-4 py-2 rounded border transition-colors ${
                  filter === s
                    ? "bg-gold text-midnight border-gold font-medium"
                    : "bg-transparent text-midnight border-midnight/30 hover:border-gold"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtered.map((c) => (
              <div
                key={c.name}
                className="bg-white border border-midnight/10 rounded-lg p-5 flex flex-col items-center justify-between min-h-[140px] gap-3 hover:shadow-md transition-shadow text-center"
              >
                <div className="flex-1 flex items-center justify-center w-full min-h-[64px] max-h-[72px] px-1 overflow-visible">
                  {c.logo ? (
                    <img
                      src={c.logo}
                      alt={c.name + " logo"}
                      className={`h-12 sm:h-14 w-auto max-w-[140px] max-h-[60px] object-contain transition-transform duration-200 ${
                        c.logoClass || ""
                      }`}
                      onError={(e) => {
                        const t = e.target as HTMLImageElement;
                        if (c.fallback && t.src !== c.fallback) {
                          t.src = c.fallback;
                        } else {
                          t.style.display = "none";
                          const fb = t.parentElement?.querySelector(".logo-fallback") as HTMLElement;
                          if (fb) fb.style.display = "flex";
                        }
                      }}
                    />
                  ) : null}
                  <div
                    className="logo-fallback w-12 h-12 rounded-full bg-sapphire items-center justify-center"
                    style={{ display: c.logo ? "none" : "flex" }}
                  >
                    <span className="text-gold font-mono font-bold text-base">{c.name.charAt(0)}</span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1 w-full">
                  <span className="font-body font-medium text-midnight text-xs text-center leading-tight line-clamp-2">
                    {c.name}
                  </span>
                  <div className="flex flex-wrap justify-center gap-1">
                    {c.sector.map((sec) => (
                      <span key={sec} className="font-mono text-gold text-[10px] bg-sapphire/5 px-1.5 py-0.5 rounded">
                        {sec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="font-body italic text-body-light/60 text-sm text-center mt-12">
            Partial list ({clients.length} organisations across 17 sectors). Includes clients served as a Dale Carnegie certified facilitator
            and through Naya Code&trade; engagements.
          </p>
        </div>
      </section>

      {/* SPEAKING */}
      <section className="bg-sapphire py-20 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-display text-3xl text-ivory text-center mb-14">
            Keynote &amp; Speaking Engagements
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {speakers.map((s) => (
              <div key={s.name} className="bg-midnight border-l-4 border-gold rounded-lg p-6">
                <p className="font-body font-medium text-ivory text-sm">{s.name}</p>
                <p className="font-mono text-gold text-xs mt-1">{s.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="bg-midnight py-12 text-center">
        <Link to="/contact" className="inline-block bg-gold text-midnight font-body font-medium text-sm px-6 py-3 rounded hover:opacity-90 transition-opacity">
          Work With Me
        </Link>
      </section>
    </main>
  );
};

export default Clients;
