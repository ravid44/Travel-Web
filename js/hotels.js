// ==================== 🔥 Import Firebase Libraries ====================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
import { getFirestore, doc, setDoc, getDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";


// ==================== 🔥 Firebase Config ====================
const firebaseConfig = {
  apiKey: "AIzaSyCwZvlhgluWctDaCy_hEiVOsDO9AbVLpnA",
  authDomain: "web-travel-19d2c.firebaseapp.com",
  projectId: "web-travel-19d2c",
  storageBucket: "web-travel-19d2c.firebasestorage.app",
  messagingSenderId: "850178211857",
  appId: "1:850178211857:web:c22077d5d1c892f7b071b0",
  measurementId: "G-JF6LPNDYF9"
};

// ==================== 🚀 Initialize Firebase ====================
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// ==================== 🏨 Hotels Data ====================
const srHotels = [
  /* ---------- SIEM REAP ---------- */
  {
    "provinceId": "iXYpAdo3OZFh3jknWup1",
    "name": "Shinta Mani Angkor",
    "description": "A luxury boutique hotel located in the heart of Siem Reap, offering elegant Khmer-style rooms, spa services, and a relaxing pool.",
    "address": "Junction of Oum Khun and 14th Street, Siem Reap",
    "location": { "lat": 13.3565, "lng": 103.8561 },
    "price_range": "$150 - $300 per night",
    "rating": 4.9,
    "focus": "Luxury, Spa, Pool, Fine Dining",
    "image_placeholder": "https://secure.s.forbestravelguide.com/img/properties/shinta-mani-angkor/extra-large/shinta-mani-angkor-lap-pool.jpg",
    "provinceName": "Siem Reap"
  },

  {
    "provinceId": "iXYpAdo3OZFh3jknWup1",
    "name": "Golden Temple Hotel",
    "description": "A stylish hotel with a warm Khmer welcome, known for its beautiful décor, free massage, and excellent service.",
    "address": "7 Makara Street, Wat Bo Village, Siem Reap",
    "location": { "lat": 13.3540, "lng": 103.8592 },
    "price_range": "$80 - $150 per night",
    "rating": 4.8,
    "focus": "Family Friendly, Spa, Cultural Experience",
    "image_placeholder": "https://www.areacambodia.com/wp-content/uploads/2023/09/The-Golden-Temple-Hotel-in-Siem-Reap.jpg",
    "provinceName": "Siem Reap"
  },
  {
    "provinceId": "iXYpAdo3OZFh3jknWup1",
    "name": "FCC Angkor by Avani",
    "description": "Set in a renovated colonial mansion, this riverside hotel features a saltwater pool and tropical gardens.",
    "address": "Pokambor Avenue, next to the Royal Residence, Siem Reap",
    "location": { "lat": 13.3618, "lng": 103.8590 },
    "price_range": "$120 - $250 per night",
    "rating": 4.7,
    "focus": "Colonial Style, Riverside, Heritage",
    "image_placeholder": "https://assets.avanihotels.com/image/upload/q_auto,f_auto/media/minor/avani/images/angkor-siem-reap/homepage/fcc_angkor_managed_by_avani_exterior_night_1920x1080.jpg",
    "provinceName": "Siem Reap"
  },

  /* ---------- KAMPOT ---------- */
  {
    "name": "Rikitikitavi Hotel",
    "address": "Riverside Road, Kampot Town, Kampot Province",
    "focus": "Riverside boutique hotel",
    "description": "A charming riverside hotel offering cozy rooms, a rooftop restaurant, and stunning sunset views over the Kampot River.",
    "image_placeholder": "images/kH1.jpg",
    "facebook": "https://www.facebook.com/rikitikitavikampot",
    "website": "https://www.rikitikitavi-kampot.com",
    "contact": {
      "phone": "+855 77 666 452",
      "email": "info@rikitikitavi-kampot.com"
    },
    "provinceId": "4m2jr9GgyHPYyncMiCBh",
    "provinceName": "Kampot"
  },
  {
    "name": "Kampot Riverside Hotel",
    "address": "Street Riverside, near Old Bridge, Kampot",
    "focus": "Modern comfort with river views",
    "description": "A popular hotel in central Kampot offering clean, spacious rooms, air conditioning, and a terrace overlooking the river.",
    "image_placeholder": "",
    "facebook": "https://www.facebook.com/kampotriversidehotel",
    "website": "https://kampotriversidehotel.com",
    "contact": {
      "phone": "+855 87 454 333",
      "email": "contact@kampotriversidehotel.com"
    },
    "provinceId": "4m2jr9GgyHPYyncMiCBh",
    "provinceName": "Kampot"
  },
  {
    "name": "The Columns Hotel",
    "address": "Street 735, Kampot City Center, Kampot",
    "focus": "Colonial-style boutique hotel",
    "description": "Located in the old French quarter, The Columns offers elegant rooms with colonial charm, modern amenities, and excellent service.",
    "image_placeholder": "https://www.asiadirect.nl/wp-content/uploads/2020/11/Cambodja-Kampot-The-Columns-Hotel-20.jpg",
    "facebook": "https://www.facebook.com/thecolumnshotelkampot",
    "website": "https://thecolumnshotel.com",
    "contact": {
      "phone": "+855 92 887 001",
      "email": "reservations@thecolumnshotel.com"
    },
    "provinceId": "4m2jr9GgyHPYyncMiCBh",
    "provinceName": "Kampot"
  },

  /* ---------- KEP ---------- */
  {
    "name": "Veranda Natural Resort",
    "address": "Kep Hillside Road, Kep Province",
    "focus": "Eco-luxury resort with sea view",
    "description": "Nestled in the hills of Kep National Park, Veranda Natural Resort offers eco-friendly bungalows with breathtaking ocean views, an infinity pool, and organic dining.",
    "image_placeholder": "https://www.thehotelguru.com/_images/de/3f/de3ff5154435a8b6f6c4008749cc9fa1/veranda-natural-reso-1180x560.jpg",
    "facebook": "https://www.facebook.com/verandanaturalresort",
    "website": "https://www.verandanaturalresort.com",
    "contact": {
      "phone": "+855 77 777 064",
      "email": "info@verandakep.com"
    },
    "provinceId": "B6TqzA7YhN8sFmZ2pXoK",
    "provinceName": "Kep"

  },
  {
    "name": "Knai Bang Chatt Resort",
    "address": "Phum Thmey, Sangkat Prey Thom, Kep Province",
    "focus": "Seaside luxury retreat",
    "description": "A peaceful seaside resort featuring restored 1960s villas, infinity pools, and fine dining with fresh seafood and organic ingredients.",
    "image_placeholder": "https://www.myboutiquehotel.com/photos/117457/knai-bang-chatt-resort-kep-009-1697564057-1110x700.jpg",
    "facebook": "https://www.facebook.com/knaibangchatt",
    "website": "https://www.knaibangchatt.com",
    "contact": {
      "phone": "+855 36 633 3588",
      "email": "reservations@knaibangchatt.com"
    },
    "provinceId": "B6TqzA7YhN8sFmZ2pXoK",
    "provinceName": "Kep"
  },
  {
    "name": "Sabbay Kep Hotel",
    "address": "Street 33A, Kep City, Kep Province",
    "focus": "Cozy hotel with pool and garden",
    "description": "A modern yet affordable stay in central Kep with a beautiful garden, outdoor pool, and easy access to the crab market and beach.",
    "image_placeholder": "images/kepHo3.jpg",
    "facebook": "https://www.facebook.com/sabbaykephotel",
    "website": "",
    "contact": {
      "phone": "+855 95 577 229",
      "email": "contact@sabbaykep.com"
    },
    "provinceId": "B6TqzA7YhN8sFmZ2pXoK",
    "provinceName": "Kep"
  },

  /* kandal */
  {
    "name": "Tonle Sap Riverside Hotel",
    "address": "Riverside Road, Ta Khmau City, Kandal",
    "focus": "Riverside hotel with restaurant",
    "description": "A charming hotel by the river offering modern rooms, local and international cuisine, and a relaxing riverside view.",
    "image_placeholder": "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
    "facebook": "https://www.facebook.com/tonlesapriversidehotel",
    "website": "https://tonlesapriversidehotel.com",
    "contact": {
      "phone": "+855 23 456 789",
      "email": "info@tonlesapriversidehotel.com"
    },
    "provinceId": "abc123KandalId",
    "provinceName": "Kandal"
  },
  {
    "name": "Kandal City Hotel",
    "address": "Street 12, Ta Khmau City, Kandal",
    "focus": "City hotel with business facilities",
    "description": "Modern hotel located in the city center, ideal for business travelers with conference rooms and free Wi-Fi.",
    "image_placeholder": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    "facebook": "https://www.facebook.com/kandalcityhotel",
    "website": "",
    "contact": {
      "phone": "+855 23 654 321",
      "email": "contact@kandalcityhotel.com"
    },
    "provinceId": "abc123KandalId",
    "provinceName": "Kandal"
  },
  {
    "name": "Green Leaf Guesthouse",
    "address": "Street 8, Ta Khmau, Kandal",
    "focus": "Budget guesthouse with garden",
    "description": "Affordable guesthouse with a cozy garden, providing clean rooms and local breakfast options.",
    "image_placeholder": "https://images.unsplash.com/photo-1551776235-dde6d4829808",
    "facebook": "",
    "website": "",
    "contact": {
      "phone": "+855 23 778 990",
      "email": "info@greenleafguesthouse.com"
    },
    "provinceId": "abc123KandalId",
    "provinceName": "Kandal"
  },
  {
    "name": "Sunrise Hotel Kandal",
    "address": "National Road 2, Ta Khmau, Kandal",
    "focus": "Hotel with pool and restaurant",
    "description": "A comfortable hotel offering a swimming pool, in-house restaurant, and spacious rooms for families and travelers.",
    "image_placeholder": "https://images.unsplash.com/photo-1501117716987-c8e1ecb2106b",
    "facebook": "https://www.facebook.com/sunrisehotelkandal",
    "website": "",
    "contact": {
      "phone": "+855 23 889 112",
      "email": "info@sunrisehotelkandal.com"
    },
    "provinceId": "abc123KandalId",
    "provinceName": "Kandal"
  },
  {
    "name": "Riverside Comfort Hotel",
    "address": "Riverside Boulevard, Ta Khmau, Kandal",
    "focus": "Comfortable riverside hotel",
    "description": "Hotel with riverside views, offering modern amenities, family rooms, and a small café on-site.",
    "image_placeholder": "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "facebook": "",
    "website": "",
    "contact": {
      "phone": "+855 23 998 223",
      "email": "info@riversidecomfort.com"
    },
    "provinceId": "abc123KandalId",
    "provinceName": "Kandal"
  },
  {
    "name": "Lotus Garden Hotel",
    "address": "Street 5, Ta Khmau, Kandal",
    "focus": "Boutique hotel with garden",
    "description": "Boutique hotel offering a peaceful garden, elegant rooms, and personalized service for travelers seeking tranquility.",
    "image_placeholder": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    "facebook": "",
    "website": "",
    "contact": {
      "phone": "+855 23 776 334",
      "email": "info@lotusgardenhotel.com"
    },
    "provinceId": "abc123KandalId",
    "provinceName": "Kandal"
  },
  {
    "name": "Cozy Stay Kandal",
    "address": "Street 14, Ta Khmau, Kandal",
    "focus": "Budget hotel with local cuisine",
    "description": "A friendly budget hotel providing clean rooms, local breakfast, and convenient access to city attractions.",
    "image_placeholder": "https://images.unsplash.com/photo-1551776235-dde6d4829808",
    "facebook": "",
    "website": "",
    "contact": {
      "phone": "+855 23 665 778",
      "email": "info@cozystaykandal.com"
    },
    "provinceId": "abc123KandalId",
    "provinceName": "Kandal"
  },

  /* Kratié */
  {
    "name": "Riverside Lodge Kratié",
    "address": "Street 7, Kratié City, Kratié",
    "focus": "Riverside hotel with breakfast",
    "description": "A charming riverside hotel offering clean rooms, complimentary breakfast, and beautiful Mekong views.",
    "image_placeholder": "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
    "facebook": "",
    "website": "",
    "contact": {
      "phone": "+855 42 555 112",
      "email": "info@riversidelodgekratie.com"
    },
    "provinceId": "abc123KratieId",
    "provinceName": "Kratié"
  },
  {
    "name": "Mekong View Hotel",
    "address": "Street 12, Kratié City, Kratié",
    "focus": "Hotel with river views and restaurant",
    "description": "Offers modern rooms with Mekong River views, on-site dining, and easy access to local attractions.",
    "image_placeholder": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    "facebook": "",
    "website": "",
    "contact": {
      "phone": "+855 42 555 113",
      "email": "info@mekongviewhotel.com"
    },
    "provinceId": "abc123KratieId",
    "provinceName": "Kratié"
  },
  {
    "name": "Kratié Guesthouse",
    "address": "Street 5, Kratié City, Kratié",
    "focus": "Budget guesthouse",
    "description": "Simple and affordable guesthouse providing clean rooms, friendly service, and convenient city access.",
    "image_placeholder": "https://images.unsplash.com/photo-1551776235-dde6d4829808",
    "facebook": "",
    "website": "",
    "contact": {
      "phone": "+855 42 555 114",
      "email": "info@kratieguesthouse.com"
    },
    "provinceId": "abc123KratieId",
    "provinceName": "Kratié"
  },
  {
    "name": "Lotus River Hotel",
    "address": "Street 9, Kratié City, Kratié",
    "focus": "Mid-range hotel with restaurant",
    "description": "Comfortable hotel featuring riverside views, a restaurant serving local cuisine, and friendly staff.",
    "image_placeholder": "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "facebook": "",
    "website": "",
    "contact": {
      "phone": "+855 42 555 115",
      "email": "info@lotusriverhotel.com"
    },
    "provinceId": "abc123KratieId",
    "provinceName": "Kratié"
  },
  {
    "name": "Sunset Inn Kratié",
    "address": "Street 11, Kratié City, Kratié",
    "focus": "Hotel with sunset views",
    "description": "Cozy inn providing scenic sunset views over the Mekong, clean rooms, and local breakfast options.",
    "image_placeholder": "https://images.unsplash.com/photo-1501117716987-c8e1ecb2106b",
    "facebook": "",
    "website": "",
    "contact": {
      "phone": "+855 42 555 116",
      "email": "info@sunsetinnkratie.com"
    },
    "provinceId": "abc123KratieId",
    "provinceName": "Kratié"
  },



  /* ---------- KOH KONG ---------- */
  {
    "name": "Apex Koh Kong Hotel",
    "address": "Street 3, Smach Meanchey, Koh Kong Province",
    "focus": "City hotel with pool and restaurant",
    "description": "A comfortable hotel in the heart of Koh Kong City offering modern rooms, a large outdoor swimming pool, and an in-house restaurant serving Khmer and Western food.",
    "image_placeholder": "https://angkorfocus.com/userfiles/Tour-apex-kohkong-hotel-pool-view-2.jpg",
    "facebook": "https://www.facebook.com/apexkohkonghotel",
    "website": "https://www.apexkohkonghotel.com",
    "contact": {
      "phone": "+855 97 555 7711",
      "email": "info@apexkohkonghotel.com"
    },
    "provinceId": "H485lIC4QMsegbRftb1j"
  },
  {
    "name": "Koh Andet Eco Resort",
    "address": "Tatai River, Koh Kong Province",
    "focus": "Luxury floating eco-resort",
    "description": "A unique eco-friendly resort located along the Tatai River, offering luxury floating villas surrounded by lush rainforest and tranquil waters.",
    "image_placeholder": "https://www.fleewinter.com/cambodiaimages/ykk004/pic6.jpg",
    "facebook": "https://www.facebook.com/kohandetecoresort",
    "website": "https://www.kohandetresort.com",
    "contact": {
      "phone": "+855 88 245 9000",
      "email": "booking@kohandetresort.com"
    },
    "provinceId": "H485lIC4QMsegbRftb1j"
  },
  {
    "name": "Canvas & Orchids Retreat",
    "address": "Tatai Riverbank, Koh Kong Province",
    "focus": "Sustainable riverside glamping",
    "description": "An award-winning eco-lodge blending comfort and sustainability, featuring luxury floating tents, eco-tours, and organic dining experiences.",
    "image_placeholder": "https://images.squarespace-cdn.com/content/v1/52c9f4ebe4b02c7007cdd86a/1636639743996-3DSQ426TFUABUGVMTKHB/exotic-holiday-floating-tents-and-tropical-sunset.jpg?format=750w",
    "facebook": "https://www.facebook.com/canvasandorchids",
    "website": "https://www.canvasandorchids.com",
    "contact": {
      "phone": "+855 93 320 855",
      "email": "info@canvasandorchids.com"
    },
    "provinceId": "H485lIC4QMsegbRftb1j"
  },

  /* ---------- BATTAMBANG ---------- */
  {
    "name": "Bambu Hotel Battambang",
    "address": "Street 202, Romchek 4, Ratanak Village, Battambang",
    "focus": "Boutique hotel with pool and restaurant",
    "description": "Bambu Hotel offers stylish accommodation blending modern comfort and traditional Khmer design, featuring a saltwater pool and on-site restaurant.",
    "image_placeholder": "images/btbH1.jpg",
    "facebook": "https://www.facebook.com/bambuhotelbattambang",
    "website": "https://www.bambuhotel.com",
    "contact": {
      "phone": "+855 53 953 882",
      "email": "info@bambuhotel.com"
    },
    "provinceId": "whQqHO2LWKVBg7eQEZIp"
  },
  {
    "name": "Classy Hotel & Spa",
    "address": "Street 159D, Romchek 4 Village, Ratanak Commune, Battambang",
    "focus": "Modern hotel with city view and spa services",
    "description": "Classy Hotel & Spa provides elegant rooms with panoramic city views, a fitness center, rooftop pool, and relaxing spa facilities.",
    "image_placeholder": "images/btbH2.jpg",
    "facebook": "https://www.facebook.com/classyhotelbattambang",
    "website": "https://www.classyhotel.com",
    "contact": {
      "phone": "+855 53 953 240",
      "email": "booking@classyhotel.com"
    },
    "provinceId": "whQqHO2LWKVBg7eQEZIp"
  },
  {
    "name": "Battambang Resort",
    "address": "Wat Ko Village, Battambang City, Battambang Province",
    "focus": "Nature resort with lakeside villas",
    "description": "A peaceful retreat surrounded by tropical gardens and a private lake, offering spacious bungalows, a pool, and a relaxing atmosphere just outside the city.",
    "image_placeholder": "images/btbH3.jpg",
    "facebook": "https://www.facebook.com/battambangresort",
    "website": "https://www.battambangresort.com",
    "contact": {
      "phone": "+855 12 510 100",
      "email": "info@battambangresort.com"
    },
    "provinceId": "whQqHO2LWKVBg7eQEZIp"
  },

  /* mondulkiri */
  {
    "name": "Mayura Hill Resort",
    "address": "Hilltop Road, Sen Monorom City Center, Mondulkiri Province",
    "focus": "Scenic hill‑top resort with lush forest views",
    "description": "A resort offering comfortable rooms, large grounds, and panoramic views of the Mondulkiri Highlands. Ideal for nature lovers and families looking for peaceful surroundings.",
    "image_placeholder": "https://www.cambodiafirms.com/wp-content/uploads/2022/05/pool-view-morning.jpg",
    "facebook": "https://www.facebook.com/MayuraHillResortMondulkiri",
    "website": "https://www.mayurahillresort.com",
    "contact": {
      "phone": "+855 12 345 678",
      "email": "info@mayurahillresort.com"
    },
    "provinceId": "abc123MondulkiriId"
  },
  {
    "name": "Emario Mondulkiri Resort",
    "address": "Phnom O’Reang, Sen Monorom City, Mondulkiri Province",
    "focus": "Modern resort in the heart of the highlands",
    "description": "A stylish resort set within easy reach of the town’s attractions and jungle treks, featuring a pool, spa and contemporary design amidst forested hills.",
    "image_placeholder": "https://ezstatic1.ezweb.online/ezweb_2157/soem-ratha/resort/mondoulkiri/r42.jpg",
    "facebook": "https://www.facebook.com/EmarioResortMondulkiri",
    "website": "https://www.emariomondulkiri.com",
    "contact": {
      "phone": "+855 77 888 999",
      "email": "reservations@emariomondulkiri.com"
    },
    "provinceId": "abc123MondulkiriId"
  },
  {
    "name": "Nature Lodge Mondulkiri",
    "address": "Valley Road, 2 km outside Sen Monorom Town, Mondulkiri Province",
    "focus": "Eco lodge immersed in rainforest and spring‑fed streams",
    "description": "A tranquil eco lodge surrounded by 6 hectares of virgin forest and natural spring, offering bungalow‐style lodging, nature walks, and a unique escape from city life.",
    "image_placeholder": "https://www.naturelodgecambodia.com/assets/images/img-e1319-1.jpg",
    "facebook": "https://www.facebook.com/NatureLodgeMondulkiri",
    "website": "https://www.naturelodgemondulkiri.com",
    "contact": {
      "phone": "+855 92 123 456",
      "email": "stay@naturelodgemondulkiri.com"
    },
    "provinceId": "abc123MondulkiriId"
  },

  /* Preah Sihanouk */
  {
    "name": "Sokha Beach Resort",
    "address": "Street 2 Thnou, Sangkat 4, Sihanoukville City, Preah Sihanouk Province",
    "focus": "Luxury beachfront resort with lagoon‑style pools",
    "description": "A five‑star resort on the white‑sand beach of Sihanoukville offering expansive pools, lush gardens, multiple restaurants and full service spa.",
    "image_placeholder": "https://pix10.agoda.net/hotelImages/445/44559/44559_15081316300034221715.jpg?s=1024x768",
    "facebook": "https://www.facebook.com/SokhaBeachResortPS",
    "website": "https://www.sokhabeach.com",
    "contact": {
      "phone": "+855 34 935 999",
      "email": "reservations@sokhabeach.com"
    },
   "provinceId": "0UV6sMLSAyWi46msLA4Y"
  },
  {
    "name": "Independence Hotel Resort & Spa",
    "address": "Independence Beach, Sihanoukville City, Preah Sihanouk Province",
    "focus": "Iconic seaside resort with historic architecture",
    "description": "An iconic resort perched above the Gulf of Thailand offering panoramic sea views, large pools, beach access and premium amenities, blending vintage charm with modern comfort.",
    "image_placeholder": "https://pix10.agoda.net/property/41463867/781461797/cfa5cc25036bafac9bbba867b43e37fb.jpeg?ce=0&s=1024x768",
    "facebook": "https://www.facebook.com/IndependenceHotelResortSpa",
    "website": "https://www.independencehotel.com.kh",
    "contact": {
      "phone": "+855 34 930 000",
      "email": "info@independencehotel.com.kh"
    },
   "provinceId": "0UV6sMLSAyWi46msLA4Y"
  },
  {
    "name": "Novotel Sihanoukville Holiday Resort",
    "address": "Independence Beach Road, Sihanoukville City, Preah Sihanouk Province",
    "focus": "Modern resort with family‑friendly facilities on the beach",
    "description": "Contemporary beachfront resort opened in 2024/2025 offering spacious rooms, multiple dining outlets, two swimming pools and direct beach access – ideal for families and groups.",
    "image_placeholder": "https://www.ahstatic.com/photos/a611_rsr001_00_p_2048x1536.jpg",
    "facebook": "https://www.facebook.com/NovotelSihanoukvilleHolidayResort",
    "website": "https://www.novotelsihanoukville.com",
    "contact": {
      "phone": "+855 34 900 100",
      "email": "reservations@novotelsihanoukville.com"
    },
   "provinceId": "0UV6sMLSAyWi46msLA4Y"
  },

  /* Banteay Meanchey */
  {
    "name": "Banteay Meanchey Grand Hotel",
    "provinceId": "abc123BanteayMeancheyId",
    "address": "Street 1, Sisophon Town, Banteay Meanchey",
    "description": "Luxury hotel offering comfortable rooms, a swimming pool, and fine dining.",
    "location": { "lat": 13.5841, "lng": 102.9837 },
    "image_placeholder": "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    "email": "info@bmcgrandhotel.com",
    "phoneNumber": "+855 54 123 456",
    "website": "https://bmcgrandhotel.com",
    "facebook": ""
  },
  {
    "name": "Sisophon Boutique Hotel",
    "provinceId": "abc123BanteayMeancheyId",
    "address": "Street 5, Sisophon Town, Banteay Meanchey",
    "description": "Charming boutique hotel with modern amenities and personalized service.",
    "location": { "lat": 13.5855, "lng": 102.9812 },
    "image_placeholder": "https://images.unsplash.com/photo-1496412705862-e0088f16f791",
    "email": "contact@sisophonboutique.com",
    "phoneNumber": "+855 54 654 321",
    "website": "",
    "facebook": ""
  },
  {
    "name": "Meanchey Riverside Hotel",
    "provinceId": "abc123BanteayMeancheyId",
    "address": "Riverside Road, Sisophon, Banteay Meanchey",
    "description": "Riverside hotel offering scenic views, comfortable rooms, and a café.",
    "location": { "lat": 13.5867, "lng": 102.9850 },
    "image_placeholder": "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
    "email": "",
    "phoneNumber": "+855 54 987 654",
    "website": "",
    "facebook": ""
  },
  {
    "name": "Happy Stay Hotel",
    "provinceId": "abc123BanteayMeancheyId",
    "address": "Street 8, Sisophon Town, Banteay Meanchey",
    "description": "Affordable hotel with clean rooms, friendly service, and free Wi-Fi.",
    "location": { "lat": 13.5830, "lng": 102.9825 },
    "image_placeholder": "https://images.unsplash.com/photo-1505691723518-36a34f5e4b22",
    "email": "info@happystay.com",
    "phoneNumber": "+855 54 234 567",
    "website": "",
    "facebook": ""
  },
  {
    "name": "Banteay Meanchey Plaza Hotel",
   "provinceId": "abc123BanteayMeancheyId",
    "address": "Street 10, Sisophon Town, Banteay Meanchey",
    "description": "Modern hotel with conference rooms, a restaurant, and spacious suites.",
    "location": { "lat": 13.5870, "lng": 102.9805 },
    "image_placeholder": "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    "email": "contact@bmcplazahotel.com",
    "phoneNumber": "+855 54 345 678",
    "website": "https://bmcplazahotel.com",
    "facebook": ""
  },
  {
    "name": "Sisophon Comfort Hotel",
    "provinceId": "abc123BanteayMeancheyId",
    "address": "Street 12, Sisophon Town, Banteay Meanchey",
    "description": "Comfortable hotel with family rooms, breakfast included, and convenient location.",
    "location": { "lat": 13.5845, "lng": 102.9818 },
    "image_placeholder": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    "email": "info@sisophoncomfort.com",
    "phoneNumber": "+855 54 456 789",
    "website": "",
    "facebook": ""
  },

  /* Kampong Cham */

  {
    "name": "Kampong Cham Riverside Hotel",
    "provinceId": "wQovHNdLBaWc6tJBtoCa",
    "address": "Riverside Street, Kampong Cham Town",
    "description": "Hotel with riverside views, comfortable rooms, and a relaxing atmosphere.",
    "location": { "lat": 11.9592, "lng": 105.4858 },
    "image_placeholder": "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    "email": "info@kc-riverside.com",
    "phoneNumber": "+855 42 123 456",
    "website": "https://kc-riverside.com",
    "facebook": ""
  },
  {
    "name": "Cham Palace Hotel",
   "provinceId": "wQovHNdLBaWc6tJBtoCa",
    "address": "Street 7, Kampong Cham Town",
    "description": "Luxury hotel offering spacious rooms, fine dining, and modern facilities.",
    "location": { "lat": 11.9605, "lng": 105.4842 },
    "image_placeholder": "https://images.unsplash.com/photo-1496412705862-e0088f16f791",
    "email": "contact@champalace.com",
    "phoneNumber": "+855 42 654 321",
    "website": "https://champalace.com",
    "facebook": ""
  },
  {
    "name": "Cham Comfort Hotel",
    "provinceId": "wQovHNdLBaWc6tJBtoCa",
    "address": "Street 10, Kampong Cham Town",
    "description": "Comfortable and affordable hotel with friendly service and free Wi-Fi.",
    "location": { "lat": 11.9580, "lng": 105.4860 },
    "image_placeholder": "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
    "email": "info@chamcomfort.com",
    "phoneNumber": "+855 42 987 654",
    "website": "",
    "facebook": ""
  },
  {
    "name": "Riverside Boutique Hotel",
    "provinceId": "wQovHNdLBaWc6tJBtoCa",
    "address": "Street 5, Kampong Cham Town",
    "description": "Charming boutique hotel with scenic river views and cozy rooms.",
    "location": { "lat": 11.9610, "lng": 105.4835 },
    "image_placeholder": "https://images.unsplash.com/photo-1505691723518-36a34f5e4b22",
    "email": "contact@riversideboutique.com",
    "phoneNumber": "+855 42 234 567",
    "website": "",
    "facebook": ""
  },
  {
    "name": "Cham Horizon Hotel",
   "provinceId": "wQovHNdLBaWc6tJBtoCa",
    "address": "Street 12, Kampong Cham Town",
    "description": "Modern hotel with rooftop restaurant, conference facilities, and spacious suites.",
    "location": { "lat": 11.9575, "lng": 105.4850 },
    "image_placeholder": "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    "email": "info@chamhorizon.com",
    "phoneNumber": "+855 42 345 678",
    "website": "https://chamhorizon.com",
    "facebook": ""
  },
  {
    "name": "Cham City Hotel",
    "provinceId": "wQovHNdLBaWc6tJBtoCa",
    "address": "Street 3, Kampong Cham Town",
    "description": "Convenient city hotel with family rooms, breakfast included, and modern amenities.",
    "location": { "lat": 11.9600, "lng": 105.4870 },
    "image_placeholder": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    "email": "info@chamcityhotel.com",
    "phoneNumber": "+855 42 456 789",
    "website": "",
    "facebook": ""
  },

  /* Kampong Chhnang */
   {
    "name": "Sovann Phum Hotel and Restaurant",
    "provinceId": "abc123KampongChhnangId",
    "address": "Riverside Road, Kampong Chhnang City",
    "description": "A comfortable riverside hotel offering air-conditioned rooms, a restaurant, and views of the Tonle Sap River. Convenient for city travelers.",
    "location": { "lat": 12.2508, "lng": 104.6673 },
    "image_placeholder": "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "email": "info@sovannphumhotel.com",
    "phoneNumber": "+855 26 987 1234",
    "website": "",
    "facebook": ""
  },
  {
    "name": "Sovann Phum Hotel Kampong Chhnang",
    "provinceId": "abc123KampongChhnangId",
    "address": "National Road 5, Near City Center, Kampong Chhnang",
    "description": "Modern hotel located near the city center with free Wi-Fi, parking, and comfortable rooms ideal for families or business travelers.",
    "location": { "lat": 12.2515, "lng": 104.6648 },
    "image_placeholder": "https://images.unsplash.com/photo-1501117716987-c8e1ecb2106b",
    "email": "contact@sovannphumchhnang.com",
    "phoneNumber": "+855 26 988 3210",
    "website": "",
    "facebook": ""
  },
  {
    "name": "Phkay Proeuk Hotel",
    "provinceId": "abc123KampongChhnangId",
    "address": "Near Kampong Chhnang Market, City Center",
    "description": "A local-style hotel with spacious rooms and friendly staff. Located close to the market and the riverside area.",
    "location": { "lat": 12.2497, "lng": 104.6625 },
    "image_placeholder": "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
    "email": "info@phkayproeuk.com",
    "phoneNumber": "+855 26 972 4455",
    "website": "",
    "facebook": ""
  },
  {
    "name": "Raksmey Sokha New York Hotel",
    "provinceId": "abc123KampongChhnangId",
    "address": "Street 2, Kampong Chhnang Town",
    "description": "A clean and comfortable hotel offering air-conditioned rooms, free Wi-Fi, and a small café for guests in Kampong Chhnang town.",
    "location": { "lat": 12.2531, "lng": 104.6652 },
    "image_placeholder": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    "email": "raksmeysokha@gmail.com",
    "phoneNumber": "+855 26 991 4522",
    "website": "",
    "facebook": ""
  },
  {
    "name": "Chantha Guesthouse",
    "provinceId": "abc123KampongChhnangId",
    "address": "Near Tonle Sap Ferry Dock, Kampong Chhnang",
    "description": "A cozy guesthouse offering affordable accommodation with private rooms, located near the Tonle Sap ferry dock.",
    "location": { "lat": 12.2522, "lng": 104.6633 },
    "image_placeholder": "https://images.unsplash.com/photo-1560067174-894de4e8c37d",
    "email": "chanthaguesthouse@gmail.com",
    "phoneNumber": "+855 26 999 4412",
    "website": "",
    "facebook": ""
  },
  {
    "name": "Garden Guesthouse & Café",
    "provinceId": "abc123KampongChhnangId",
    "address": "Street 5, Kampong Chhnang City",
    "description": "A small eco-friendly guesthouse with a garden café, perfect for travelers seeking tranquility and local hospitality.",
    "location": { "lat": 12.2503, "lng": 104.6610 },
    "image_placeholder": "https://images.unsplash.com/photo-1551776235-dde6d4829808",
    "email": "gardenstay@gmail.com",
    "phoneNumber": "+855 26 955 8721",
    "website": "",
    "facebook": ""
  },
  {
    "name": "Sambath Hotel Kampong Chhnang",
    "provinceId": "abc123KampongChhnangId",
    "address": "National Road 5, Downtown Kampong Chhnang",
    "description": "A well-known hotel offering comfortable rooms, conference facilities, and an on-site restaurant. Suitable for both tourists and business guests.",
    "location": { "lat": 12.2545, "lng": 104.6668 },
    "image_placeholder": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    "email": "info@sambathhotel.com",
    "phoneNumber": "+855 26 991 1150",
    "website": "",
    "facebook": ""
  },

  /* Kampong Speu */
  {
    "name": "Kirirom Hillside Resort",
    "provinceId": "abc123KampongSpeuId",
    "address": "Kirirom National Park, Phnom Sruoch District, Kampong Speu",
    "description": "A popular mountain resort offering cottages, villas, swimming pool, and stunning natural surroundings inside Kirirom National Park.",
    "location": { "lat": 11.3639, "lng": 104.0428 },
    "image_placeholder": "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "email": "info@kiriromresort.com",
    "phoneNumber": "+855 78 888 444",
    "website": "https://www.kiriromresort.com",
    "facebook": "https://www.facebook.com/kiriromresort"
  },
  {
    "name": "Phnom Aural Eco Lodge",
    "provinceId": "abc123KampongSpeuId",
    "address": "Aural District, Kampong Speu Province",
    "description": "Eco-friendly lodge located at the foot of Phnom Aural, Cambodia’s highest peak. Ideal for nature lovers and hikers.",
    "location": { "lat": 12.0166, "lng": 104.0466 },
    "image_placeholder": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    "email": "info@phnomauralecolodge.com",
    "phoneNumber": "+855 85 555 320",
    "website": "",
    "facebook": ""
  },
  {
    "name": "Speu City Hotel",
    "provinceId": "abc123KampongSpeuId",
    "address": "National Road 4, Kampong Speu City Center",
    "description": "A modern hotel featuring clean rooms, air conditioning, and breakfast service. Convenient for travelers and business guests.",
    "location": { "lat": 11.4538, "lng": 104.5201 },
    "image_placeholder": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    "email": "booking@speucityhotel.com",
    "phoneNumber": "+855 92 998 221",
    "website": "",
    "facebook": ""
  },
  {
    "name": "Green Garden Guesthouse",
    "provinceId": "abc123KampongSpeuId",
    "address": "Street 2, Kampong Speu Town",
    "description": "A cozy and affordable guesthouse surrounded by greenery, offering a relaxing stay with a small garden café.",
    "location": { "lat": 11.4551, "lng": 104.5195 },
    "image_placeholder": "https://images.unsplash.com/photo-1560067174-894de4e8c37d",
    "email": "greengarden.kh@gmail.com",
    "phoneNumber": "+855 93 111 505",
    "website": "",
    "facebook": ""
  },
  {
    "name": "Vimean Sokha Hotel",
    "provinceId": "abc123KampongSpeuId",
    "address": "NR4, Kampong Speu City, Kampong Speu Province",
    "description": "A mid-range hotel offering large rooms, restaurant service, and easy access to main city attractions.",
    "location": { "lat": 11.4560, "lng": 104.5180 },
    "image_placeholder": "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "email": "vimeansokhahotel@gmail.com",
    "phoneNumber": "+855 17 446 777",
    "website": "",
    "facebook": ""
  },

  /* Kampong Thom */
  {
    "name": "Sokha Kampong Thom Hotel",
    "provinceId": "abc123KampongThomId",
    "address": "NR6, Kampong Thom City, Kampong Thom Province",
    "description": "A modern hotel offering comfortable rooms, an on-site restaurant, and easy access to city attractions.",
    "location": { "lat": 12.7130, "lng": 104.8880 },
    "image_placeholder": "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "email": "info@sokhakampongthom.com",
    "phoneNumber": "+855 65 123 456",
    "website": "",
    "facebook": ""
  },
  {
    "name": "Tonle Sap Riverside Hotel",
    "provinceId": "abc123KampongThomId",
    "address": "Riverside Boulevard, Kampong Thom City",
    "description": "Riverside hotel with scenic views, cozy rooms, and a café. Ideal for tourists and business travelers.",
    "location": { "lat": 12.7125, "lng": 104.8895 },
    "image_placeholder": "https://images.unsplash.com/photo-1501117716987-c8e1ecb2106b",
    "email": "contact@tonlesapriverside.com",
    "phoneNumber": "+855 65 654 321",
    "website": "",
    "facebook": ""
  },
  {
    "name": "Phnom Sampov Hotel",
    "provinceId": "abc123KampongThomId",
    "address": "Sampov Mountain Road, Kampong Thom Province",
    "description": "Small hotel near Phnom Sampov, offering budget-friendly accommodation with beautiful mountain views.",
    "location": { "lat": 12.7035, "lng": 104.9200 },
    "image_placeholder": "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
    "email": "info@phnomsampovhotel.com",
    "phoneNumber": "+855 65 987 654",
    "website": "",
    "facebook": ""
  },
  {
    "name": "Lotus Riverside Hotel",
    "provinceId": "abc123KampongThomId",
    "address": "Market Street, Kampong Thom City",
    "description": "A riverside hotel offering clean rooms, local cuisine, and easy access to nearby shops and attractions.",
    "location": { "lat": 12.7102, "lng": 104.8890 },
    "image_placeholder": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    "email": "lotusriverside@hotel.com",
    "phoneNumber": "+855 65 321 789",
    "website": "",
    "facebook": ""
  },
  {
    "name": "Sombok Hotel",
    "provinceId": "abc123KampongThomId",
    "address": "Street 5, Kampong Thom City",
    "description": "Well-known hotel offering spacious rooms, free Wi-Fi, and friendly service for tourists and families.",
    "location": { "lat": 12.7172, "lng": 104.8908 },
    "image_placeholder": "https://images.unsplash.com/photo-1551776235-dde6d4829808",
    "email": "sombokhotel@gmail.com",
    "phoneNumber": "+855 65 456 987",
    "website": "",
    "facebook": ""
  },
  {
    "name": "Green Lotus Hotel",
    "provinceId": "abc123KampongThomId",
    "address": "Tonle Sap Street, Kampong Thom City",
    "description": "Eco-friendly hotel with riverside views, garden seating, and local hospitality.",
    "location": { "lat": 12.7150, "lng": 104.8875 },
    "image_placeholder": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    "email": "greenlotushotel@gmail.com",
    "phoneNumber": "+855 65 789 123",
    "website": "",
    "facebook": ""
  },
  {
    "name": "Royal Kampong Thom Hotel",
    "provinceId": "abc123KampongThomId",
    "address": "NR6, Downtown Kampong Thom",
    "description": "Mid-range hotel offering modern amenities, conference facilities, and convenient city access.",
    "location": { "lat": 12.7145, "lng": 104.8888 },
    "image_placeholder": "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "email": "royalkampongthom@gmail.com",
    "phoneNumber": "+855 65 987 321",
    "website": "",
    "facebook": ""
  }



];

// ==================== ⬆️ Upload Button Logic ====================
const myBtnHotels = document.getElementById("btnHotels");

myBtnHotels.addEventListener("click", async () => {
  try {
    for (const hotel of srHotels) {
      // 🔹 Create safe Firestore document ID
      const safeName = hotel.name.replace(/[^\w\s]/gi, '').replace(/\s+/g, '_').toLowerCase();
      const docId = `${safeName}_${hotel.provinceId}`;

      const docRef = doc(db, "hotelCambodia", docId);
      const docSnap = await getDoc(docRef);

      // 🔹 Keep old created_at if exists
      const existingData = docSnap.exists() ? docSnap.data() : {};
      const hotelId = existingData.hotelId || hotel.hotelId || docId;

      // ✅ Ensure provinceName always has a value
      const provinceName = hotel.provinceName || "Unknown Province";

      await setDoc(
        docRef,
        {
          hotelId,
          name: hotel.name,
          provinceName, // ✅ this will now always update or add
          description: hotel.description,
          address: hotel.address || null,
          location: hotel.location || null,
          image: hotel.image_placeholder || null,
          rating: hotel.rating || null,
          price_range: hotel.price_range || null,
          focus: hotel.focus || null,
          facebook: hotel.facebook || null,
          website: hotel.website || null,
          contact: hotel.contact || null,
          provinceId: hotel.provinceId,
          created_at: existingData.created_at || serverTimestamp(),
          updated_at: serverTimestamp()
        },
        { merge: true } // ✅ safely update only changed fields
      );

      console.log(`✅ Synced hotel: ${hotel.name} (${provinceName})`);
    }

    alert("✅ All hotel documents updated with provinceName!");
  } catch (error) {
    console.error("❌ Error updating hotels:", error);
    alert("❌ Failed to update hotels. Check console for details.");
  }
});

