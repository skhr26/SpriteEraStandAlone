/**
 * Navigation Categories with Dropdowns, Breaking Ticker & Footer Links
 */

export const navCategories = [
  { name: "होम", href: "#", active: true },
  { name: "ताजा खबर", href: "#latest" },
  { name: "देश", href: "#india" },
  { name: "विदेश", href: "#world" },
  { 
    name: "महाराष्ट्र", 
    href: "#maharashtra", 
    hasDropdown: true,
    subItems: [
      { name: "मुंबई", href: "#mumbai" },
      { name: "पुणे", href: "#pune" },
      { name: "नागपुर", href: "#nagpur" },
      { name: "नासिक", href: "#nashik" },
      { name: "छत्रपति संभाजीनगर", href: "#sambhajinagar" },
      { name: "ठाणे", href: "#thane" }
    ]
  },
  { 
    name: "मध्य प्रदेश", 
    href: "#madhya-pradesh", 
    hasDropdown: true,
    subItems: [
      { name: "भोपाल", href: "#bhopal" },
      { name: "इंदौर", href: "#indore" },
      { name: "ग्वालियर", href: "#gwalior" },
      { name: "जबलपुर", href: "#jabalpur" },
      { name: "उज्जैन", href: "#ujjain" }
    ]
  },
  { 
    name: "उत्तर प्रदेश", 
    href: "#uttar-pradesh", 
    hasDropdown: true,
    subItems: [
      { name: "लखनऊ", href: "#lucknow" },
      { name: "कानपुर", href: "#kanpur" },
      { name: "वाराणसी", href: "#varanasi" },
      { name: "प्रयागराज", href: "#prayagraj" },
      { name: "अयोध्या", href: "#ayodhya" },
      { name: "नोएडा", href: "#noida" }
    ]
  },
  { name: "खेल", href: "#sports" },
  { name: "मनोरंजन", href: "#entertainment" },
  { name: "बिज़नेस", href: "#business" },
  { 
    name: "एस्ट्रो", 
    href: "#astro", 
    hasDropdown: true,
    subItems: [
      { name: "दैनिक राशिफल", href: "#daily-horoscope" },
      { name: "साप्ताहिक राशिफल", href: "#weekly-horoscope" },
      { name: "पंचांग", href: "#panchang" },
      { name: "अंकज्योतिष", href: "#numerology" }
    ]
  },
  { 
    name: "छत्तीसगढ़", 
    href: "#chhattisgarh", 
    hasDropdown: true,
    subItems: [
      { name: "रायपुर", href: "#raipur" },
      { name: "बिलासपुर", href: "#bilaspur" },
      { name: "दुर्ग-भिलाई", href: "#durg" },
      { name: "बस्तर", href: "#bastar" }
    ]
  }
];

export const moreMenuItems = [
  { name: "ऑटो", href: "#auto" },
  { name: "टेक्नोलॉजी", href: "#tech" },
  { name: "करियर", href: "#career" },
  { name: "वायरल", href: "#viral" },
  { name: "वेब स्टोरीज़", href: "#webstories" },
  { name: "फोटो गैलरी", href: "#photos" }
];

// Exact Ticker Headlines from User Screenshot
export const breakingNewsTicker = [
  "दरगाह-राघोपुर-बिदुपुर 6-लेन पुल, जानें खासियत",
  "NCP के दोनों गुटों का नहीं होगा विलय! संजय राउत बोले- आखिरी सांस तक BJP के साथ नहीं जा सकते शरद पवार",
  "पंजाब में AAP ने एक मंत्री समेत 7 विधायकों के टिकट क्यों काटे? जानें इसके पीछे का कारण",
  "IND vs NZ 4th ODI Live Score: न्यूजीलैंड को लगा सातवां झटका, मिचेल सैंटनर 24 रन बनाकर आउट",
  "Gold Rate Today: सोने की कीमतों में गिरावट जारी, दिल्ली में ₹1.39 लाख के पार 24 कैरेट गोल्ड"
];

export const trendingTags = [
  "#INDvsNZ",
  "#ChhathPuja2026",
  "#DelhiAirPollution",
  "#GoldSilverRate",
  "#MaharashtraElection",
  "#StockMarketCrash"
];

// Exact Footer Navigation Structure matching screenshot media_1794584679445_1724c3cb.png
export const footerNavSections = [
  {
    title: "Section",
    links: [
      { name: "देश", href: "#india" },
      { name: "विदेश", href: "#world" },
      { name: "खेल", href: "#sports" },
      { name: "लाइफस्टाइल", href: "#lifestyle" },
      { name: "बिज़नेस", href: "#business" },
      { name: "वेब स्टोरीज़", href: "#webstories" }
    ]
  },
  {
    title: "States",
    links: [
      { name: "महाराष्ट्र", href: "#maharashtra" },
      { name: "उत्तर प्रदेश", href: "#uttar-pradesh" },
      { name: "मध्य प्रदेश", href: "#madhya-pradesh" },
      { name: "दिल्ली NCR", href: "#delhi" },
      { name: "बिहार", href: "#bihar" },
      { name: "छत्तीसगढ़", href: "#chhattisgarh" }
    ]
  },
  {
    title: "Maharashtra",
    links: [
      { name: "मुंबई", href: "#mumbai" },
      { name: "पुणे", href: "#pune" },
      { name: "नागपुर", href: "#nagpur" },
      { name: "ठाणे", href: "#thane" },
      { name: "नासिक", href: "#nashik" },
      { name: "अकोला", href: "#akola" },
      { name: "वर्धा", href: "#wardha" },
      { name: "चंद्रपुर", href: "#chandrapur" }
    ]
  },
  {
    title: "More",
    links: [
      { name: "वायरल", href: "#viral" },
      { name: "करियर", href: "#career" },
      { name: "ऑटो", href: "#auto" },
      { name: "टेक", href: "#technology" },
      { name: "धर्म", href: "#dharm" },
      { name: "वीडियो", href: "#videos" },
      { name: "फोटो", href: "#photos" }
    ]
  },
  {
    title: "Group Site",
    links: [
      { name: "ई-पेपर हिंदी", href: "https://epaper.navbharatlive.com/", external: true },
      { name: "ई-पेपर मराठी", href: "https://epaper.navarashtra.com/", external: true },
      { name: "मराठी समाचार", href: "https://navarashtra.com/", external: true }
    ]
  }
];

export const footerLegalLinks = [
  { name: "About Us", href: "#about" },
  { name: "Contact Us", href: "#contact" },
  { name: "Privacy Policy", href: "#privacy" },
  { name: "Disclaimer", href: "#disclaimer" },
  { name: "Terms & Conditions", href: "#terms" },
  { name: "RSS", href: "#rss" },
  { name: "Sitemap", href: "#sitemap" }
];
