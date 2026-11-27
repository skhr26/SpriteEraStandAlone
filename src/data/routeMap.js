/**
 * Route Mapping Configuration (Navbharat Live Official URLs)
 * Maps between Hindi Category Names and Exact Official URLs
 */

export const categoryToRoute = {
  'होम': '/',
  'ताजा खबर': '/latest-news',
  'ताज़ा खबर': '/latest-news',
  'देश': '/india',
  'विदेश': '/world',
  'महाराष्ट्र': '/state/maharashtra',
  'मध्य प्रदेश': '/state/madhya-pradesh',
  'उत्तर प्रदेश': '/state/uttar-pradesh',
  'छत्तीसगढ़': '/state/chhattisgarh',
  'दिल्ली NCR': '/state/delhi-ncr',
  'दिल्ली': '/state/delhi-ncr',
  'बिहार': '/state/bihar',
  'खेल': '/sports',
  'मनोरंजन': '/entertainment',
  'बिज़नेस': '/business',
  'बिज़नेस': '/business',
  'एस्ट्रो': '/astro',
  'दैनिक राशिफल': '/astro/aaj-ka-rashifal',
  'आज का राशिफल': '/astro/aaj-ka-rashifal',
  'साप्ताहिक राशिफल': '/astro/saptahik-rashifal',
  'पंचांग': '/astro/panchang',
  'अंकज्योतिष': '/astro/ank-jyotish',
  'अंक ज्योतिष': '/astro/ank-jyotish',
  'राशिफल': '/astro/aaj-ka-rashifal',
  'धर्म': '/dharm',
  'वायरल': '/viral',
  'करियर': '/career',
  'ऑटो': '/auto',
  'टेक': '/tech',
  'टेक्नोलॉजी': '/tech',
  'लाइफस्टाइल': '/lifestyle',
  'लाइफ़स्टाइल': '/lifestyle',
  'वीडियो': '/video',
  'फोटो': '/photo',
  'फोटो गैलरी': '/photo',
  'वेब स्टोरीज़': '/ampstories/web-stories',
  'वेब स्टोरीज': '/ampstories/web-stories',

  // Maharashtra Cities
  'मुंबई': '/state/maharashtra/mumbai',
  'पुणे': '/state/maharashtra/pune',
  'नागपुर': '/state/maharashtra/nagpur',
  'नासिक': '/state/maharashtra/nashik',
  'छत्रपति संभाजीनगर': '/state/maharashtra/sambhajinagar',
  'ठाणे': '/state/maharashtra/thane',
  'वर्धा': '/state/maharashtra/wardha',
  'अकोला': '/state/maharashtra/akola',
  'चंद्रपुर': '/state/maharashtra/chandrapur',

  // Madhya Pradesh Cities
  'भोपाल': '/state/madhya-pradesh/bhopal',
  'इंदौर': '/state/madhya-pradesh/indore',
  'ग्वालियर': '/state/madhya-pradesh/gwalior',
  'जबलपुर': '/state/madhya-pradesh/jabalpur',
  'उज्जैन': '/state/madhya-pradesh/ujjain',

  // Uttar Pradesh Cities
  'लखनऊ': '/state/uttar-pradesh/lucknow',
  'कानपुर': '/state/uttar-pradesh/kanpur',
  'वाराणसी': '/state/uttar-pradesh/varanasi',
  'प्रयागराज': '/state/uttar-pradesh/prayagraj',
  'अयोध्या': '/state/uttar-pradesh/ayodhya',
  'नोएडा': '/state/uttar-pradesh/noida',

  // Chhattisgarh Cities
  'रायपुर': '/state/chhattisgarh/raipur',
  'बिलासपुर': '/state/chhattisgarh/bilaspur',
  'दुर्ग-भिलाई': '/state/chhattisgarh/durg',
  'बस्तर': '/state/chhattisgarh/bastar',
};

export const pathToCategory = {
  '/': 'होम',
  '/latest-news': 'ताजा खबर',
  '/taazakhabar': 'ताजा खबर',
  '/india': 'देश',
  '/world': 'विदेश',
  '/state/maharashtra': 'महाराष्ट्र',
  '/maharashtra': 'महाराष्ट्र',
  '/state/madhya-pradesh': 'मध्य प्रदेश',
  '/madhya-pradesh': 'मध्य प्रदेश',
  '/state/uttar-pradesh': 'उत्तर प्रदेश',
  '/uttar-pradesh': 'उत्तर प्रदेश',
  '/state/chhattisgarh': 'छत्तीसगढ़',
  '/chhattisgarh': 'छत्तीसगढ़',
  '/state/delhi-ncr': 'दिल्ली NCR',
  '/delhi-ncr': 'दिल्ली NCR',
  '/state/bihar': 'बिहार',
  '/bihar': 'बिहार',
  '/sports': 'खेल',
  '/sports/cricket': 'खेल',
  '/entertainment': 'मनोरंजन',
  '/business': 'बिज़नेस',
  '/astro': 'एस्ट्रो',
  '/astro/aaj-ka-rashifal': 'दैनिक राशिफल',
  '/astro/daily-horoscope': 'दैनिक राशिफल',
  '/astro/saptahik-rashifal': 'साप्ताहिक राशिफल',
  '/astro/weekly-horoscope': 'साप्ताहिक राशिफल',
  '/astro/panchang': 'पंचांग',
  '/panchang': 'पंचांग',
  '/astro/ank-jyotish': 'अंकज्योतिष',
  '/astro/numerology': 'अंकज्योतिष',
  '/rashifal': 'दैनिक राशिफल',
  '/dharm': 'धर्म',
  '/viral': 'वायरल',
  '/career': 'करियर',
  '/auto': 'ऑटो',
  '/tech': 'टेक',
  '/technology': 'टेक',
  '/lifestyle': 'लाइफस्टाइल',
  '/video': 'वीडियो',
  '/videos': 'वीडियो',
  '/photo': 'फोटो',
  '/photos': 'फोटो',
  '/ampstories/web-stories': 'वेब स्टोरीज़',
  '/web-stories': 'वेब स्टोरीज़',
  '/aurpadho-webstories': 'वेब स्टोरीज़',

  // Maharashtra Cities
  '/state/maharashtra/mumbai': 'मुंबई',
  '/mumbai': 'मुंबई',
  '/state/maharashtra/pune': 'पुणे',
  '/pune': 'पुणे',
  '/state/maharashtra/nagpur': 'नागपुर',
  '/nagpur': 'नागपुर',
  '/state/maharashtra/nashik': 'नासिक',
  '/nashik': 'नासिक',
  '/state/maharashtra/thane': 'ठाणे',
  '/thane': 'ठाणे',
  '/state/maharashtra/sambhajinagar': 'छत्रपति संभाजीनगर',
  '/state/maharashtra/wardha': 'वर्धा',
  '/wardha': 'वर्धा',
  '/state/maharashtra/akola': 'अकोला',
  '/akola': 'अकोला',
  '/state/maharashtra/chandrapur': 'चंद्रपुर',
  '/chandrapur': 'चंद्रपुर',

  // MP Cities
  '/state/madhya-pradesh/bhopal': 'भोपाल',
  '/bhopal': 'भोपाल',
  '/state/madhya-pradesh/indore': 'इंदौर',
  '/indore': 'इंदौर',
  '/state/madhya-pradesh/gwalior': 'ग्वालियर',
  '/gwalior': 'ग्वालियर',
  '/state/madhya-pradesh/jabalpur': 'जबलपुर',
  '/jabalpur': 'जबलपुर',
  '/state/madhya-pradesh/ujjain': 'उज्जैन',
  '/ujjain': 'उज्जैन',

  // UP Cities
  '/state/uttar-pradesh/lucknow': 'लखनऊ',
  '/lucknow': 'लखनऊ',
  '/state/uttar-pradesh/kanpur': 'कानपुर',
  '/kanpur': 'कानपुर',
  '/state/uttar-pradesh/varanasi': 'वाराणसी',
  '/varanasi': 'वाराणसी',
  '/state/uttar-pradesh/prayagraj': 'प्रयागराज',
  '/prayagraj': 'प्रयागराज',
  '/state/uttar-pradesh/ayodhya': 'अयोध्या',
  '/ayodhya': 'अयोध्या',
  '/state/uttar-pradesh/noida': 'नोएडा',
  '/noida': 'नोएडा',

  // CG Cities
  '/state/chhattisgarh/raipur': 'रायपुर',
  '/raipur': 'रायपुर',
  '/state/chhattisgarh/bilaspur': 'बिलासपुर',
  '/bilaspur': 'बिलासपुर',
  '/state/chhattisgarh/durg': 'दुर्ग-भिलाई',
  '/durg': 'दुर्ग-भिलाई',
  '/state/chhattisgarh/bastar': 'बस्तर',
  '/bastar': 'बस्तर',
};

/**
 * Returns Category Name from either path or search params
 */
export function getCategoryFromPath(pathname, searchParam) {
  if (searchParam) return searchParam;
  
  const normalized = pathname.toLowerCase().replace(/\/$/, '') || '/';
  if (pathToCategory[normalized]) {
    return pathToCategory[normalized];
  }

  // Check sub-paths
  const parts = normalized.split('/').filter(Boolean);
  if (parts.length > 0) {
    const directKey = '/' + parts[parts.length - 1];
    if (pathToCategory[directKey]) {
      return pathToCategory[directKey];
    }
  }

  return 'ताजा खबर';
}

/**
 * Returns Official URL for a given category name
 */
export function getRouteForCategory(categoryName) {
  if (!categoryName) return '/';
  return categoryToRoute[categoryName] || `/aur-padho?category=${encodeURIComponent(categoryName)}`;
}
