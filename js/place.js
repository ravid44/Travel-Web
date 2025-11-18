import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
import { getFirestore, doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCwZvlhgluWctDaCy_hEiVOsDO9AbVLpnA",
  authDomain: "web-travel-19d2c.firebaseapp.com",
  projectId: "web-travel-19d2c",
  storageBucket: "web-travel-19d2c.firebasestorage.app",
  messagingSenderId: "850178211857",
  appId: "1:850178211857:web:c22077d5d1c892f7b071b0",
  measurementId: "G-JF6LPNDYF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const places = [
  {
    "name": "Angkor Wat",
    "description": "The massive 12th-century temple complex and Cambodia’s iconic UNESCO World Heritage site.",
    "image": "https://i.pinimg.com/1200x/0b/88/52/0b8852b1a7d8b4967427ef35f81f83e7.jpg",
    "location": { "lat": 13.4125, "lng": 103.866667 },
    "provinceId": "iXYpAdo3OZFh3jknWup1",
    "typeOfPlace": "Temple",
    "provinceName": "Siem Reap",
    "documentLink": "https://en.wikipedia.org/wiki/Angkor_Wat"

  },

  {
    "name": "Preah Khan Temple",
    "description": "Preah Khan was constructed to commemorate King Jayavarman VII’s victory over the Chams, who had invaded Angkor in 1177.",
    "image": "https://i.pinimg.com/1200x/22/70/fe/2270fe671576af2217f3c5978d1aae3b.jpg",
    "location": { "lat": 13.4592, "lng": 103.8716 },
    "provinceId": "iXYpAdo3OZFh3jknWup1",
    "typeOfPlace": "Temple",
    "provinceName": "Siem Reap",
    "documentLink": "https://en.wikipedia.org/wiki/Preah_Khan"


  },

  {
    "name": "Phnom Bakheng",
    "description": "Hilltop temple offering panoramic sunset views over Angkor and the surrounding jungle. :contentReference[oaicite:0]{index=0}",
    "image": "https://i.pinimg.com/1200x/d4/a5/6a/d4a56ad81802bb5cd1e42135429d4bcd.jpg",
    "location": { "lat": 13.4128, "lng": 103.8663 },
    "provinceId": "iXYpAdo3OZFh3jknWup1",
    "typeOfPlace": "Temple / Viewpoint",
    "provinceName": "Siem Reap",
    "documentLink": "https://en.wikipedia.org/wiki/Phnom_Bakheng"



  },
  {
    "name": "Ta Prohm",
    "description": "Jungle-entangled temple, famously featured in Tomb Raider, blending nature and ruins.",
    "image": "https://i.pinimg.com/1200x/0b/e5/fe/0be5fe7da535bdc6438bb85cde2fbe31.jpg",
    "location": { "lat": 13.4300, "lng": 103.8790 },
    "provinceId": "iXYpAdo3OZFh3jknWup1",
    "typeOfPlace": "Temple",
    "provinceName": "Siem Reap",
    "documentLink": "https://en.wikipedia.org/wiki/Ta_Prohm"


  },
  {
    "name": "Bayon Temple",
    "description": "Temple inside Angkor Thom, known for its many smiling stone faces.",
    "image": "https://i.pinimg.com/1200x/29/0c/49/290c49fb0639b9e66665317c8e704c40.jpg",
    "location": { "lat": 13.4410, "lng": 103.8620 },
    "provinceId": "iXYpAdo3OZFh3jknWup1",
    "typeOfPlace": "Temple",
    "provinceName": "Siem Reap",
    "documentLink": "https://en.wikipedia.org/wiki/Bayon"

  },
  {
    "name": "Phnom Kulen",
    "description": "Sacred mountain in Siem Reap province with waterfalls, ancient carvings and a huge reclining Buddha.",
    "image": "https://i.pinimg.com/1200x/ab/08/fe/ab08fe92778c03d69420585358152596.jpg",
    "location": { "lat": 13.6333, "lng": 103.8667 },
    "provinceId": "iXYpAdo3OZFh3jknWup1",
    "typeOfPlace": "Nature / Temple",
    "provinceName": "Siem Reap",
    "documentLink": " https://en.wikipedia.org/wiki/Phnom_Kulen"

  },
  {
    "name": "Angkor Village Hotel",
    "description": "Boutique hotel in Siem Reap designed with Khmer aesthetics, convenient to temple zone.",
    "image": "https://i.pinimg.com/736x/1d/77/c7/1d77c751a773e551bfff555c1052b342.jpg",
    "location": { "lat": 13.3610, "lng": 103.8590 },
    "provinceId": "iXYpAdo3OZFh3jknWup1",
    "typeOfPlace": "Hotel",
    "provinceName": "Siem Reap"
  },


  /*Phnom Penh*/



  {
    "name": "Royal Palace, Phnom Penh",
    "description": "Royal residence and complex in Phnom Penh, with the Silver Pagoda and Khmer traditional architecture.",
    "image": "https://i.pinimg.com/1200x/46/ba/d5/46bad5288c1770be0efdc0d6412e880c.jpg",
    "location": { "lat": 11.5540, "lng": 104.9270 },
    "provinceId": "ZFpogBIP5lCwDFdeAOjE",
    "typeOfPlace": "Palace / Temple",
    "provinceName": "Phnom Penh"

  },
  {
    "name": "Tuol Sleng Genocide Museum (S-21)",
    "description": "Former Khmer Rouge security prison turned into a memorial museum of the regime’s atrocities.",
    "image": "https://i.pinimg.com/736x/4c/c7/3e/4cc73e98ca013e7d63c69201da79a65d.jpg",
    "location": { "lat": 11.5720, "lng": 104.8870 },
    "provinceId": "ZFpogBIP5lCwDFdeAOjE",
    "typeOfPlace": "Museum / Historic",
    "provinceName": "Phnom Penh"


  },
  {
    "name": "Sisowath Quay",
    "description": "Riverside promenade along the Mekong in Phnom Penh with cafés, shops and street life.",
    "image": "https://i.pinimg.com/736x/cf/84/86/cf84868e297d406d535edd7b7642e5eb.jpg",
    "location": { "lat": 11.5710, "lng": 104.9320 },
    "provinceId": "ZFpogBIP5lCwDFdeAOjE",
    "typeOfPlace": "Café / Street / Promenade",
    "provinceName": "Phnom Penh"
  },



  /*preah vihea*/

  {
    "name": "Koh Ker",
    "description": "Remote archaeological site with pyramid-style temple ruins in Preah Vihear province.",
    "image": "https://i.pinimg.com/736x/fa/eb/fd/faebfd6d0e1fbaea1b709b621dca4af7.jpg",
    "location": { "lat": 13.8020, "lng": 104.9920 },
    "provinceId": "hv6SU5rcg3iournCTZWe",
    "typeOfPlace": "Temple / Historic",
    "provinceName": "Preah Vihear"


  },
  {
    "name": "Prasat Preah Vihear",
    "description": "Mountaintop Hindu/Buddhist temple near the Cambodia-Thailand border with dramatic views. :contentReference[oaicite:1]{index=1}",
    "image": "https://i.pinimg.com/736x/f0/54/20/f05420683efa14f3481501429b420656.jpg",
    "location": { "lat": 13.9167, "lng": 105.8333 },
    "provinceId": "hv6SU5rcg3iournCTZWe",
    "typeOfPlace": "Temple",
    "provinceName": "Preah Vihear"

  },

  /*koh kong*/

  {
    "name": "Central Cardamom Mountains National Park",
    "description": "Protected forested range spanning Koh Kong, Pursat and Kampong Speu provinces. :contentReference[oaicite:2]{index=2}",
    "image": "https://i.pinimg.com/1200x/01/65/c4/0165c467b54d1e41d9ed81d7dfa21467.jpg",
    "location": { "lat": 11.8420, "lng": 104.4500 },
    "provinceId": "H485lIC4QMsegbRftb1j",
    "typeOfPlace": "National Park / Nature",
    "provinceName": "Koh Kong"



  },
  {
    "name": "Botum Sakor National Park",
    "description": "Largest national park in Cambodia on the southwestern coast, with forests and coastal habitats.",
    "image": "https://i.pinimg.com/1200x/42/83/fd/4283fdefa2bd7718f71301c86b6e1dec.jpg",
    "location": { "lat": 10.8000, "lng": 103.1000 },
    "provinceId": "H485lIC4QMsegbRftb1j",
    "typeOfPlace": "National Park / Nature",
    "provinceName": "Koh Kong"
  },



  /*kampot pro*/

  {
    "name": "Preah Monivong (Bokor) National Park",
    "description": "Mountainous park in Kampot province including Bokor Hill Station, waterfalls and forest paths. :contentReference[oaicite:3]{index=3}",
    "image": "https://i.pinimg.com/736x/93/dc/ac/93dcac2b654f65ecca51c7b8212c44ec.jpg",
    "location": { "lat": 10.6500, "lng": 104.1500 },
    "provinceId": "4m2jr9GgyHPYyncMiCBh",
    "typeOfPlace": "National Park / Nature",
    "provinceName": "Kampot"

  },
  {
    "name": "Bokor Hill Station",
    "description": "Abandoned French colonial resort on Bokor Mountain, within Bokor National Park.",
    "image": "https://i.pinimg.com/736x/d1/b0/4e/d1b04e67f4c6d43aec5df6b8163ead26.jpg",
    "location": { "lat": 10.6167, "lng": 104.1700 },
    "provinceId": "4m2jr9GgyHPYyncMiCBh",
    "typeOfPlace": "Historic / Scenic",
    "provinceName": "Kampot"

  },



  /*rathanakiri*/

  {
    "name": "Lake Yeak Laom",
    "description": "Volcanic crater lake near Banlung in Ratanakiri, with clear water and forest surroundings. :contentReference[oaicite:4]{index=4}",
    "image": "https://i0.wp.com/helloangkor.com/wp-content/uploads/2019/05/Yak_Loum.jpg?fit=1395%2C1011&ssl=1",
    "location": { "lat": 13.7000, "lng": 106.9830 },
    "provinceId": "VL2FhUUtpl3VuGuj8x4t",
    "typeOfPlace": "Nature / Lake",
    "provinceName": "Ratanakiri"
  },
  {
    "name": "Virachey National Park",
    "description": "Remote northeastern park with jungles, rivers, waterfalls and wildlife. :contentReference[oaicite:5]{index=5}",
    "image": "https://www.aseanbiodiversity.org/wp-content/uploads/2024/03/Virachey-NP_by-Choun-Phirom-3.jpg",
    "location": { "lat": 13.8500, "lng": 106.8000 },
    "provinceId": "VL2FhUUtpl3VuGuj8x4t",
    "typeOfPlace": "National Park / Nature",
    "provinceName": "Ratanakiri"
  },


  /*mondulkiri*/

  {
    "name": "Phnom Nam Lyr",
    "description": "Prominent basalt hill in Mondulkiri province, sacred to Bunong people. :contentReference[oaicite:6]{index=6}",
    "image": "https://live.staticflickr.com/1087/592428800_aea54f2114_b.jpg",
    "location": { "lat": 12.5670, "lng": 107.4183 },
    "provinceId": "umqpSDiZgvwVJGq1QkO0",
    "typeOfPlace": "Hill / Nature",
    "provinceName": "Mondulkiri"
  },
  {
    "name": "Senmonorom",
    "description": "Capital town of Mondulkiri, gateway for trekking, forest visits and indigenous culture.",
    "image": "https://cdn.kiripost.com/static/images/Watermark01-17_-_Senmonorom_Mondul.2e16d0ba.fill-960x540.jpg",
    "location": { "lat": 12.4712, "lng": 107.2386 },
    "provinceId": "umqpSDiZgvwVJGq1QkO0",
    "typeOfPlace": "Town / Nature",
    "provinceName": "Mondulkiri"
  },


  /*btb*/

  {
    "name": "Bamboo Train (Battambang)",
    "description": "Locally built bamboo platform on rails used as a novelty ride through rice fields. ",
    "image": "https://i.pinimg.com/736x/0e/bd/c2/0ebdc2685cbf097a91c80665c751a34f.jpg",
    "location": { "lat": 13.1000, "lng": 103.2000 },
    "provinceId": "whQqHO2LWKVBg7eQEZIp",
    "typeOfPlace": "Novelty / Experience",
    "provinceName": "Battambang"
  },
  {
    "name": "Phnom Sampov",
    "description": "Mountain temple complex with caves, pagodas, and a viewpoint over Battambang’s countryside; home to the famous bat cave at sunset.",
    "image": "https://www.gocambodia.tours/wp-content/uploads/2016/12/On-the-top-of-Phnom-Sampeou-Mountain.jpg",
    "location": { "lat": 12.9581, "lng": 103.0825 },
    "provinceId": "whQqHO2LWKVBg7eQEZIp",
    "typeOfPlace": "Temple / Nature / Viewpoint",
    "provinceName": "Battambang"

  },
  {
    "name": "Wat Banan Temple",
    "description": "Ancient hilltop Angkorian temple from the 11th century with a panoramic view and peaceful surroundings.",
    "image": "https://www.gocambodia.tours/wp-content/uploads/2016/12/Phnom-Banan-Temple.jpg",
    "location": { "lat": 12.9543, "lng": 103.0806 },
    "provinceId": "whQqHO2LWKVBg7eQEZIp",
    "typeOfPlace": "Temple / Historic / Scenic",
    "provinceName": "Battambang"
  },
  {
    "name": "Battambang Provincial Museum",
    "description": "Small but rich museum displaying sculptures and relics from nearby Angkorian sites.",
    "image": "https://blog.takemetour.com/wp-content/uploads/2019/10/Governors-residence-battambang-640x429.jpg",
    "location": { "lat": 13.0972, "lng": 103.1976 },
    "provinceId": "whQqHO2LWKVBg7eQEZIp",
    "typeOfPlace": "Museum / Culture",
    "provinceName": "Battambang"
  },
  {
    "name": "Wat Ek Phnom",
    "description": "11th-century temple ruins surrounded by lotus ponds and a large modern Buddha statue.",
    "image": "https://www.vivutravel.com/images/des-cambodia1/cambodia-tour-battambang.jpg",
    "location": { "lat": 13.1533, "lng": 103.2022 },
    "provinceId": "whQqHO2LWKVBg7eQEZIp",
    "typeOfPlace": "Temple / Historic / Cultural",
    "provinceName": "Battambang"
  },
  {
    "name": "Battambang Old Town",
    "description": "Historic French colonial quarter along the Sangker River with preserved architecture, cafés, and art galleries.",
    "image": "https://www.shutterstock.com/image-photo/battambang-cambodia-january-29-2013-600nw-1136248910.jpg",
    "location": { "lat": 13.0990, "lng": 103.1985 },
    "provinceId": "whQqHO2LWKVBg7eQEZIp",
    "typeOfPlace": "Town / Architecture / Culture",
    "provinceName": "Battambang"
  },
  {
    "name": "Phare Ponleu Selpak",
    "description": "Non-profit arts school known for its circus performances and creative programs for local youth.",
    "image": "https://www.justin-klein.com/blogmedia/post-images/2013/24486-Phare-Ponleu-Selpak-0677.jpg",
    "location": { "lat": 13.0847, "lng": 103.2019 },
    "provinceId": "whQqHO2LWKVBg7eQEZIp",
    "typeOfPlace": "Art / Performance / Culture",
    "provinceName": "Battambang"
  },
  {
    "name": "Ek Phnom Lake",
    "description": "Scenic lake near Wat Ek Phnom, great for relaxing, fishing, and enjoying local food stalls.",
    "image": "https://i.pinimg.com/1200x/69/9e/f3/699ef319414264b7d1d5f6924013b5f1.jpg",
    "location": { "lat": 13.1550, "lng": 103.2037 },
    "provinceId": "whQqHO2LWKVBg7eQEZIp",
    "typeOfPlace": "Lake / Nature / Leisure",
    "provinceName": "Battambang"
  },
  {
    "name": "Baset Temple",
    "description": "A lesser-known Angkorian-era temple located in a quiet countryside setting west of Battambang town.",
    "image": "https://visitlocaltravel.com/blog/wp-content/uploads/2023/12/Baset-Temple.png",
    "location": { "lat": 13.0768, "lng": 103.1262 },
    "provinceId": "whQqHO2LWKVBg7eQEZIp",
    "typeOfPlace": "Temple / Historic",
    "provinceName": "Battambang"
  },
  {
    "name": "Bat Cave at Phnom Sampov",
    "description": "Natural cave where millions of bats fly out at sunset — a breathtaking sight near Phnom Sampov hill.",
    "image": "https://moi-static.sgp1.digitaloceanspaces.com/uploads/post/feature_image/121917/4c6fb3e4-5b9c-4d6e-a277-8c435e917e4c-feature-feature.jpg",
    "location": { "lat": 12.9577, "lng": 103.0809 },
    "provinceId": "whQqHO2LWKVBg7eQEZIp",
    "typeOfPlace": "Cave / Nature / Wildlife",
    "provinceName": "Battambang"
  },


  {
    "name": "Phnom Sorsia",
    "description": "Hill and cave pagoda complex near Kampot with caves, temples and scenic views.",
    "image": "https://cambotours.com/uploads/phnom-sorsia-kampot.jpg",
    "location": { "lat": 10.6120, "lng": 104.2550 },
    "provinceId": "4m2jr9GgyHPYyncMiCBh",
    "typeOfPlace": "Temple / Nature",
    "provinceName": "Kampot"
  },

  /*takeo*/
  {
    "name": "Tonlé Bati",
    "description": "Lake and temple ruins south of Phnom Penh, a relaxing weekend escape. ",
    "image": "https://i.pinimg.com/1200x/bb/b0/e8/bbb0e8a483cc44af57ef8cbcf5d0683b.jpg",
    "location": { "lat": 11.4375, "lng": 104.9333 },
    "provinceId": "N8RrDjJ3tFVxfKyO3oxe",
    "typeOfPlace": "Nature / Temple",
    "provinceName": "Takeo"
  },


  {
    "name": "Kampot Pepper Farm",
    "description": "Famed pepper plantations around Kampot producing world-recognized pepper.",
    "image": "https://i.pinimg.com/1200x/17/37/fa/1737fafb1f231c9be57afdc4d41e4c6b.jpg",
    "location": { "lat": 10.6500, "lng": 104.1333 },
    "provinceId": "4m2jr9GgyHPYyncMiCBh",
    "typeOfPlace": "Agriculture / Farm",
    "provinceName": "Kampot"
  },

  /*preah sihanouk*/

  {
    "name": "Koh Rong",
    "description": "Tropical island off the coast of Preah Sihanouk, known for beaches and marine life.",
    "image": "https://i.pinimg.com/1200x/e5/26/88/e52688f2a7314beef92d16381fe055ef.jpg",
    "location": { "lat": 10.7280, "lng": 103.1660 },
    "provinceId": "0UV6sMLSAyWi46msLA4Y",
    "typeOfPlace": "Island / Beach",
    "provinceName": "Preah Sihanouk"

  },



  /*kep*/

  {
    "name": "Kep Beach",
    "description": "Main sandy beach of Kep town, famous for its calm waters, seafood stalls, and relaxed atmosphere.",
    "image": "https://i.pinimg.com/1200x/68/00/e6/6800e689bfb0c6648d0ecfc6b2502e60.jpg",
    "location": { "lat": 10.4868, "lng": 104.3187 },
    "provinceId": "B6TqzA7YhN8sFmZ2pXoK",
    "typeOfPlace": "Beach / Recreation",
    "provinceName": "Kep"
  },
  {
    "name": "Kep Crab Market",
    "description": "Bustling seafood market by the sea, known for fresh crabs cooked on the spot and oceanfront dining.",
    "image": "https://twocantravel.com/wp-content/uploads/2018/09/Kep-Crab-Market-2.jpg",
    "location": { "lat": 10.4827, "lng": 104.3126 },
    "provinceId": "B6TqzA7YhN8sFmZ2pXoK",
    "typeOfPlace": "Market / Food / Seaside",
    "provinceName": "Kep"
  },
  {
    "name": "Kep National Park",
    "description": "Protected hillside park with hiking trails, jungle views, and scenic viewpoints overlooking the Gulf of Thailand.",
    "image": "https://cambotours.com/uploads/kep_national_park.jpg",
    "location": { "lat": 10.4917, "lng": 104.3083 },
    "provinceId": "B6TqzA7YhN8sFmZ2pXoK",
    "typeOfPlace": "National Park / Nature",
    "provinceName": "Kep"
  },
  {
    "name": "Rabbit Island (Koh Tonsay)",
    "description": "Small island off Kep’s coast with palm-fringed beaches, bungalows, and crystal-clear swimming spots.",
    "image": "https://thumbs.dreamstime.com/b/koh-tonsay-rabbit-island-kep-city-cambodia-khmer-language-small-square-kilometer-km-coast-152455017.jpg",
    "location": { "lat": 10.4419, "lng": 104.3181 },
    "provinceId": "B6TqzA7YhN8sFmZ2pXoK",
    "typeOfPlace": "Island / Beach / Nature",
    "provinceName": "Kep"
  },
  {
    "name": "Kep Sailing Club",
    "description": "Beachfront club offering kayaking, paddleboarding, and scenic dining by the sea.",
    "image": "https://wnfdiary.com/wp-content/uploads/2021/06/Kep-Sailing-Club-Bar-4.jpg",
    "location": { "lat": 10.4815, "lng": 104.3142 },
    "provinceId": "B6TqzA7YhN8sFmZ2pXoK",
    "typeOfPlace": "Recreation / Restaurant",
    "provinceName": "Kep"
  },
  {
    "name": "Kep Butterfly Garden",
    "description": "A serene garden showcasing various butterfly species and local flora, perfect for families and nature lovers.",
    "image": "https://visitlocaltravel.com/blog/wp-content/uploads/2024/01/Kep-Butterfly-Garden-2.png",
    "location": { "lat": 10.4891, "lng": 104.3140 },
    "provinceId": "B6TqzA7YhN8sFmZ2pXoK",
    "typeOfPlace": "Nature / Garden / Education",
    "provinceName": "Kep"
  },
  {
    "name": "Wat Samathi Pagoda",
    "description": "Hilltop Buddhist temple surrounded by jungle, offering panoramic views of Kep and the sea.",
    "image": "https://thumbs.dreamstime.com/b/kep-cambodia-wat-samathi-pagoda-stupa-krong-kaeb-asia-aerial-drone-photo-kep-cambodia-wat-samathi-pagoda-stupa-krong-kaeb-201804878.jpg",
    "location": { "lat": 10.4895, "lng": 104.3047 },
    "provinceId": "B6TqzA7YhN8sFmZ2pXoK",
    "typeOfPlace": "Temple / Viewpoint / Nature",
    "provinceName": "Kep"
  },
  {
    "name": "Secret Lake (Tomnop Tek Krolar)",
    "description": "Man-made reservoir surrounded by farms and mountains, popular for picnics and countryside views.",
    "image": "https://i.pinimg.com/1200x/9a/0a/23/9a0a23adfd4d29f20d4071dfeb69e7b8.jpg",
    "location": { "lat": 10.5351, "lng": 104.2965 },
    "provinceId": "B6TqzA7YhN8sFmZ2pXoK",
    "typeOfPlace": "Lake / Nature / Countryside",
    "provinceName": "Kep"
  },
  {
    "name": "Kep Independence Monument",
    "description": "Historic landmark symbolizing Cambodia’s independence, located near the beach promenade.",
    "image": "https://i.pinimg.com/1200x/d9/f2/4d/d9f24d8c58e15e774364a8d5da22e34d.jpg",
    "location": { "lat": 10.4839, "lng": 104.3168 },
    "provinceId": "B6TqzA7YhN8sFmZ2pXoK",
    "typeOfPlace": "Monument / Historic",
    "provinceName": "Kep"
  },





  /* mondulkiri */

  {
    "name": "Bousra Waterfall",
    "description": "Most famous waterfall in Mondulkiri with multiple tiers surrounded by lush forest, located near Sen Monorom.",
    "image": "https://i.pinimg.com/736x/8f/f0/84/8ff084284ad8b3a7abf7e3bf4dd7430b.jpg",
    "location": { "lat": 12.4689, "lng": 107.2850 },
    "provinceId": "abc123MondulkiriId",
    "typeOfPlace": "Waterfall / Nature",
    "provinceName": "Mondulkiri"

  },
  {
    "name": "Sen Monorom Town",
    "description": "Charming capital of Mondulkiri province, surrounded by green hills and the starting point for eco-tours and elephant treks.",
    "image": "https://i.pinimg.com/1200x/a2/6b/03/a26b037aeb1bb82e22e37b453ea007a1.jpg",
    "location": { "lat": 12.4558, "lng": 107.1882 },
    "provinceId": "abc123MondulkiriId",
    "typeOfPlace": "Town / Culture / Nature",
    "provinceName": "Mondulkiri"
  },
  {
    "name": "Elephant Valley Project",
    "description": "Rescue and rehabilitation sanctuary for elephants where visitors can observe them in their natural jungle habitat.",
    "image": "https://cambotours.com/userfiles/thumbs/mondulkiri-valley-project.jpg",
    "location": { "lat": 12.4640, "lng": 107.1737 },
    "provinceId": "abc123MondulkiriId",
    "typeOfPlace": "Sanctuary / Wildlife / Experience",
    "provinceName": "Mondulkiri"
  },
  {
    "name": "Sea Forest Viewpoint (Phnom Doh Kromom)",
    "description": "Scenic mountain viewpoint near Sen Monorom offering a stunning panoramic view over the 'sea forest' hills.",
    "image": "https://www.apsartour.com/uploads/images/Gallery/Sea_Forest_Mondulkiri/standard_sl-sea-forest-pic1.jpg",
    "location": { "lat": 12.4487, "lng": 107.1984 },
    "provinceId": "abc123MondulkiriId",
    "typeOfPlace": "Mountain / Viewpoint / Nature",
    "provinceName": "Mondulkiri"
  },
  {
    "name": "Leng Khin Waterfall",
    "description": "Beautiful multi-tiered waterfall hidden in the forest, accessible via a scenic dirt road from Sen Monorom.",
    "image": "https://www.mondulkiriproject.org/wp-content/uploads/2023/02/big-waterfall.jpg",
    "location": { "lat": 12.5196, "lng": 107.2782 },
    "provinceId": "abc123MondulkiriId",
    "typeOfPlace": "Waterfall / Nature",
    "provinceName": "Mondulkiri"
  },
  {
    "name": "Dak Dam Waterfall",
    "description": "Quiet waterfall located in Dak Dam village, perfect for swimming and relaxing in nature.",
    "image": "https://helloangkor.com/wp-content/uploads/2019/07/Dak-Dam-Waterfall-in-Mondulkiri-Cambodia-Beautiful-Nature-2-4-screenshot.png",
    "location": { "lat": 12.3424, "lng": 107.4188 },
    "provinceId": "abc123MondulkiriId",
    "typeOfPlace": "Waterfall / Nature",
    "provinceName": "Mondulkiri"
  },
  {
    "name": "Puluk Waterfall",
    "description": "Remote and less-visited waterfall offering peace and quiet for nature lovers and photographers.",
    "image": "https://i.pinimg.com/1200x/83/91/a9/8391a9867f2ef9b4c96c9cf2ab1267cb.jpg",
    "location": { "lat": 12.5527, "lng": 107.2901 },
    "provinceId": "abc123MondulkiriId",
    "typeOfPlace": "Waterfall / Nature / Hidden Gem",
    "provinceName": "Mondulkiri"
  },
  {
    "name": "Monorom Waterfall",
    "description": "A popular and easily accessible waterfall close to Sen Monorom town, perfect for a short visit or picnic.",
    "image": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/waterfall-of-sen-monorom-pablo-mendez.jpg",
    "location": { "lat": 12.4715, "lng": 107.2153 },
    "provinceId": "abc123MondulkiriId",
    "typeOfPlace": "Waterfall / Leisure / Family",
    "provinceName": "Mondulkiri"
  },
  {
    "name": "Orang Village",
    "description": "Traditional Phnong ethnic village where visitors can experience local culture and rural lifestyle.",
    "image": "https://www.backpackadventures.org/wp-content/uploads/2023/02/Cambodia183.jpg?x86996",
    "location": { "lat": 12.5060, "lng": 107.2890 },
    "provinceId": "abc123MondulkiriId",
    "typeOfPlace": "Village / Cultural / Experience",
    "provinceName": "Mondulkiri"
  },
  {
    "name": "Romanear Waterfall",
    "description": "Tall, scenic waterfall with a natural pool, located deep in the forest of Mondulkiri province.",
    "image": "https://i.pinimg.com/1200x/f1/90/0e/f1900e3a89b1c847e9e96b99f3cf6cc4.jpg",
    "location": { "lat": 12.5303, "lng": 107.3232 },
    "provinceId": "abc123MondulkiriId",
    "typeOfPlace": "Waterfall / Nature",
    "provinceName": "Mondulkiri"
  },




  /*banteaymean*/
  {
    "name": "Banteay Chhmar Temple",
    "description": "Massive Angkorian temple complex from the 12th century, featuring intricate carvings and faces similar to Bayon Temple in Angkor Thom.",
    "image": "https://www.angkorphotographytours.com/wp-content/uploads/2018/01/ta-prohm-banteay-chhmar.jpg",
    "location": { "lat": 13.7553, "lng": 102.5310 },
    "provinceId": "abc123BanteayMeancheyId",
    "typeOfPlace": "Temple / Historic / Cultural",
    "provinceName": "BanteayMeanchey"
  },
  {
    "name": "Banteay Torp Temple",
    "description": "Smaller Angkorian-era temple ruins near Banteay Chhmar, known for its three standing towers and rural setting.",
    "image": "https://visitlocaltravel.com/blog/wp-content/uploads/2024/03/Banteay-Torp-Temple.png",
    "location": { "lat": 13.6935, "lng": 102.5795 },
    "provinceId": "abc123BanteayMeancheyId",
    "typeOfPlace": "Temple / Historic",
    "provinceName": "BanteayMeanchey"
  },
  {
    "name": "Sisophon City",
    "description": "Provincial capital of Banteay Meanchey with local markets, pagodas, and access to nearby attractions.",
    "image": "https://i.pinimg.com/1200x/12/0c/b1/120cb1e61a8693ef2a5dc92f7758b1f8.jpg",
    "location": { "lat": 13.5850, "lng": 102.9770 },
    "provinceId": "abc123BanteayMeancheyId",
    "typeOfPlace": "City / Market / Culture",
    "provinceName": "BanteayMeanchey"
  },
  {
    "name": "Phnom Bak and Phnom Chenh Cheeb",
    "description": "Twin hills offering panoramic views, ancient stupas, and peaceful countryside scenery.",
    "image": "https://asset.tovtrip.com/uploads/0000/109/2023/03/01/3-8.jpg",
    "location": { "lat": 13.6400, "lng": 102.6700 },
    "provinceId": "abc123BanteayMeancheyId",
    "typeOfPlace": "Mountain / Temple / Viewpoint",
    "provinceName": "BanteayMeanchey"
  },


  /* kampong chhnang */

  {
    "name": "Phnom Santouch",
    "description": "A sacred hill with temples, Buddha statues, and panoramic views of Kampong Chhnang’s countryside.",
    "image": "https://angkorfocus.com/userfiles/phnom-santouch-kampong-chhnang-2.jpg",
    "location": { "lat": 12.2833, "lng": 104.6667 },
    "provinceId": "abc123KampongChhnangId",
    "typeOfPlace": "Hill / Temple / Viewpoint",
    "provinceName": "Kampong Chhnang"

  },
  {
    "name": "Kampong Chhnang Floating Village",
    "description": "Picturesque floating village on the Tonlé Sap River where homes, schools, and shops rest on water.",
    "image": "https://www.asiakingtravel.com/cuploads/files/Kampong-Chhnang/Kampong-Chhnang-Best-time-to-go.jpg",
    "location": { "lat": 12.2500, "lng": 104.6667 },
    "provinceId": "abc123KampongChhnangId",
    "typeOfPlace": "Floating Village / Cultural",
    "provinceName": "Kampong Chhnang"
  },
  {
    "name": "Phnom Krang Romeas",
    "description": "Rocky mountain offering caves, pagodas, and great views over rice fields and forests.",
    "image": "https://angkorfocus.com/userfiles/Phnom-Krang-Romeas.jpg",
    "location": { "lat": 12.2000, "lng": 104.7167 },
    "provinceId": "abc123KampongChhnangId",
    "typeOfPlace": "Mountain / Temple / Nature",
    "provinceName": "Kampong Chhnang"
  },

  {
    "name": "Andoung Russey Pottery Village",
    "description": "Traditional pottery village where locals have crafted clay pots and jars for generations.",
    "image": "https://www.asiakingtravel.com/cuploads/files/Andong-russey-pottery-village-2.jpg",
    "location": { "lat": 12.2333, "lng": 104.6667 },
    "provinceId": "abc123KampongChhnangId",
    "typeOfPlace": "Cultural / Handicraft / Village",
    "provinceName": "Kampong Chhnang"
  },

  {
    "name": "Phnom Neang Kang Rey",
    "description": "Hill named after a Khmer legend, featuring a pagoda and scenic countryside vistas.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLsmhyFoCPnTShcG_hxb_teQcLypdGI7Ly1YvWM1n0MQPOdJobyZoZO0L74TMV4IVlfQ19-2hEoSKQJ2DE5nMg8XzItw5h9NBOWmgD7TMwwL_QPNJcQPLXGojkUK9PfPv-1iF156__7l4/w1200-h630-p-k-no-nu/01.JPG",
    "location": { "lat": 12.2000, "lng": 104.6333 },
    "provinceId": "abc123KampongChhnangId",
    "typeOfPlace": "Hill / Temple / Cultural",
    "provinceName": "Kampong Chhnang"
  },

  /* kampongcham */
  {
    "name": "Kizuna Bridge",
    "description": "Cambodia’s first bridge across the Mekong River, connecting Kampong Cham with Tboung Khmum. A popular sunset spot for locals and tourists.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Kizuna_Bridge_in_Kampong_Cham.jpg",
    "location": { "lat": 11.9918, "lng": 105.4545 },
    "provinceId": "wQovHNdLBaWc6tJBtoCa",
    "typeOfPlace": "Bridge / Landmark / Scenic View",
    "provinceName": "Kampong Cham"
  },
  {
    "name": "Wat Nokor Bachey Temple",
    "description": "An ancient laterite and sandstone temple complex dating back to the 11th century, blending Angkorian and modern Buddhist architecture.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Wat_Nokor_Bachey_Temple_in_Kampong_Cham.jpg",
    "location": { "lat": 11.9871, "lng": 105.4632 },
    "provinceId": "wQovHNdLBaWc6tJBtoCa",
    "typeOfPlace": "Temple / Historical Site / Cultural",
    "provinceName": "Kampong Cham"
  },
  {
    "name": "Phnom Pros and Phnom Srei",
    "description": "Twin hills known as ‘Man Hill and Woman Hill,’ rich in legend and offering panoramic views of the countryside.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Phnom_Pros_and_Phnom_Srei_Kampong_Cham.jpg",
    "location": { "lat": 12.0012, "lng": 105.4678 },
    "provinceId": "wQovHNdLBaWc6tJBtoCa",
    "typeOfPlace": "Hill / Nature / Legend Site",
    "provinceName": "Kampong Cham"
  },
  {
    "name": "Han Chey Mountain",
    "description": "A scenic hilltop pagoda overlooking the Mekong River, home to ancient ruins and a massive reclining Buddha statue.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/05/Hanchey_Mountain_Pagoda.jpg",
    "location": { "lat": 12.0560, "lng": 105.4983 },
    "provinceId": "wQovHNdLBaWc6tJBtoCa",
    "typeOfPlace": "Mountain / Pagoda / Scenic View",
    "provinceName": "Kampong Cham"
  },
  {
    "name": "Prey Nokor Knong",
    "description": "An archaeological site believed to date back to the pre-Angkorian era, surrounded by scenic rural landscapes.",
    "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    "location": { "lat": 12.0156, "lng": 105.4875 },
    "provinceId": "wQovHNdLBaWc6tJBtoCa",
    "typeOfPlace": "Historical / Archaeological / Cultural",
    "provinceName": "Kampong Cham"
  },
  {
    "name": "Kampong Cham Riverside Park",
    "description": "A peaceful riverside promenade lined with palm trees, local restaurants, and open-air cafés — ideal for evening walks.",
    "image": "https://images.unsplash.com/photo-1564540574859-0dfb639859ae",
    "location": { "lat": 11.9930, "lng": 105.4556 },
    "provinceId": "wQovHNdLBaWc6tJBtoCa",
    "typeOfPlace": "Park / Riverside / Recreation",
    "provinceName": "Kampong Cham"
  },


  /* kampongspur */
  {
    "name": "Phnom Aural",
    "description": "Cambodia’s highest mountain (1,813 m), located in the Cardamom Range. A destination for trekking, birdwatching, and nature adventures.",
    "image": "https://i.ytimg.com/vi/xB4KZ2dZYIM/maxresdefault.jpg",
    "location": { "lat": 12.0133, "lng": 104.0436 },
    "provinceId": "abc123KampongSpeuId",
    "typeOfPlace": "Mountain / Nature / Trekking",
    "provinceName": "Kampong Speu"
  },
  {
    "name": "Kirirom National Park",
    "description": "Cool highland park featuring pine forests, waterfalls, and picnic areas, a popular retreat near Phnom Penh.",
    "image": "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/4f/27.jpg",
    "location": { "lat": 11.3650, "lng": 104.0450 },
    "provinceId": "abc123KampongSpeuId",
    "typeOfPlace": "National Park / Nature / Picnic",
    "provinceName": "Kampong Speu"
  },
  {
    "name": "Kirirom Waterfall",
    "description": "A small but beautiful waterfall within Kirirom National Park, surrounded by pine trees and ideal for relaxation.",
    "image": "https://waytovietnam.com/storage/images/C1Nxj02qRzoKmIn154DnGBPW7jZIobB9fkwvPXvq.jpeg",
    "location": { "lat": 11.3800, "lng": 104.0300 },
    "provinceId": "abc123KampongSpeuId",
    "typeOfPlace": "Waterfall / Nature / Park",
    "provinceName": "Kampong Speu"
  },
  {
    "name": "Chreav Waterfall",
    "description": "A scenic waterfall hidden in the forests of Kampong Speu, accessible through local villages and mountain paths.",
    "image": "https://www.shutterstock.com/image-photo/waterfall-chreav-mountain-kompong-speu-600nw-1162438471.jpg",
    "location": { "lat": 11.4500, "lng": 104.1500 },
    "provinceId": "abc123KampongSpeuId",
    "typeOfPlace": "Waterfall / Nature / Adventure",
    "provinceName": "Kampong Speu"
  },


  /* KampongThom */

  {
    "name": "Sambor Prei Kuk",
    "description": "UNESCO World Heritage archaeological site featuring pre-Angkorian temple ruins dating from the 7th century Chenla Kingdom.",
    "image": "https://i.pinimg.com/1200x/a7/b4/3b/a7b43b7d3d75dbb1c2f4cbda0f26c2a5.jpg",
    "location": { "lat": 12.7358, "lng": 105.0986 },
    "provinceId": "abc123KampongThomId",
    "typeOfPlace": "Temple / Archaeological / Historic"
  },
  {
    "name": "Phnom Santuk",
    "description": "Hilltop pagoda with hundreds of steps leading to a shrine, offering stunning panoramic views of the countryside.",
    "image": "https://i.pinimg.com/1200x/28/8d/ff/288dff63c3db569ae7de67fdf6dfc913.jpg",
    "location": { "lat": 12.6461, "lng": 105.0556 },
    "provinceId": "abc123KampongThomId",
    "typeOfPlace": "Mountain / Temple / Viewpoint"
  },
  {
    "name": "Phnom Santuk Pagoda",
    "description": "Sacred temple complex on Phnom Santuk hill, known for its reclining Buddha statues and ancient carvings.",
    "image": "https://i.pinimg.com/1200x/58/3d/0d/583d0d23eb37ef4ff259fd4215e7d170.jpg",
    "location": { "lat": 12.6422, "lng": 105.0550 },
    "provinceId": "abc123KampongThomId",
    "typeOfPlace": "Temple / Religious / Cultural"
  },
  {
    "name": "Andet Temple (Prasat Andet)",
    "description": "A pre-Angkorian brick temple built in the 7th century under King Jayavarman I, showing early Khmer architecture.",
    "image": "https://i.pinimg.com/1200x/6c/24/b9/6c24b9a091f244dbd89692783a39237a.jpg",
    "location": { "lat": 12.7800, "lng": 105.0800 },
    "provinceId": "abc123KampongThomId",
    "typeOfPlace": "Temple / Archaeological / Historic"
  },
  {
    "name": "Phnom Kulen Wildlife Sanctuary (Kampong Thom side)",
    "description": "Part of the northern Cardamom ecosystem, home to diverse wildlife and lush forests.",
    "image": "https://i.pinimg.com/1200x/b7/89/a8/b789a89e60c25aeb24d8c44a49e2c646.jpg",
    "location": { "lat": 12.8500, "lng": 105.2500 },
    "provinceId": "abc123KampongThomId",
    "typeOfPlace": "Nature / Wildlife / Forest"
  },
  {
    "name": "Baray Andet Reservoir",
    "description": "Ancient baray (water reservoir) built during the Chenla period, used for irrigation and spiritual purposes.",
    "image": "https://i.pinimg.com/1200x/4c/91/f0/4c91f0a3a0e04d45a3b6e8e66e0c14b0.jpg",
    "location": { "lat": 12.7800, "lng": 105.0700 },
    "provinceId": "abc123KampongThomId",
    "typeOfPlace": "Historic / Lake / Archaeological"
  },
  {
    "name": "Prey Pros Community Resort",
    "description": "A relaxing lakeside area with picnic spots, local restaurants, and boat rides near Kampong Thom town.",
    "image": "https://i.pinimg.com/1200x/5f/7c/7f/5f7c7fa76ad6da0a2c35c9633ce8711d.jpg",
    "location": { "lat": 12.7000, "lng": 105.1100 },
    "provinceId": "abc123KampongThomId",
    "typeOfPlace": "Lake / Park / Picnic"
  },
  {
    "name": "Stueng Sen Riverfront",
    "description": "Peaceful riverside promenade in Kampong Thom city, ideal for evening walks and local food stalls.",
    "image": "https://i.pinimg.com/1200x/4c/3a/78/4c3a78cdb74c77f3f78c6636b7d90a46.jpg",
    "location": { "lat": 12.7133, "lng": 105.0936 },
    "provinceId": "abc123KampongThomId",
    "typeOfPlace": "River / Urban / Experience"
  },
  {
    "name": "Prasat Kok Roka",
    "description": "Small yet well-preserved temple from the pre-Angkorian period located near Kampong Thom city.",
    "image": "https://i.pinimg.com/1200x/ab/84/7a/ab847a9ad06b9d0b8f6a0295b540f3cf.jpg",
    "location": { "lat": 12.7500, "lng": 105.1000 },
    "provinceId": "abc123KampongThomId",
    "typeOfPlace": "Temple / Archaeological / Cultural"
  },
  {
    "name": "Sambor Prei Kuk Forest Trails",
    "description": "Lush forest paths surrounding the Sambor Prei Kuk temples, ideal for biking and hiking among ruins and nature.",
    "image": "https://i.pinimg.com/1200x/d0/16/2e/d0162e0f98a7a640d0c71b02e16b5dd2.jpg",
    "location": { "lat": 12.7400, "lng": 105.0930 },
    "provinceId": "abc123KampongThomId",
    "typeOfPlace": "Nature / Hiking / Archaeological"
  },
  {
    "name": "Phnom Edtharoes and Phnom Edtharom Temples",
    "description": "Twin hilltop temples offering panoramic views of the countryside, located near Kandal Stung district.",
    "image": "https://i.pinimg.com/1200x/53/dc/64/53dc6413a58f5dbd59ef92e32b70737d.jpg",
    "location": { "lat": 11.3333, "lng": 104.8667 },
    "provinceId": "abc123KandalId",
    "typeOfPlace": "Temple / Mountain / Viewpoint"
  },
  {
    "name": "Phnom Prasith",
    "description": "Historic pagoda situated on a hill with ancient ruins and beautiful rural scenery, popular for local pilgrimages.",
    "image": "https://i.pinimg.com/1200x/d1/71/d8/d171d81a23d72f25e10a4d56acfe7206.jpg",
    "location": { "lat": 11.5847, "lng": 104.7542 },
    "provinceId": "abc123KandalId",
    "typeOfPlace": "Temple / Historical / Religious"
  },
  {
    "name": "Koh Dach (Silk Island)",
    "description": "Island on the Mekong River famous for traditional silk weaving, handicrafts, and peaceful rural life near Phnom Penh.",
    "image": "https://i.pinimg.com/1200x/04/7c/7d/047c7dfaf99426b70c3cf1f0e52dcf16.jpg",
    "location": { "lat": 11.7020, "lng": 104.9590 },
    "provinceId": "abc123KandalId",
    "typeOfPlace": "Island / Cultural / Handicraft"
  },
  {
    "name": "Wat Phnom Thon Moni",
    "description": "A tranquil hilltop temple located in Kandal Stung, offering scenic views and a glimpse into local Buddhist traditions.",
    "image": "https://i.pinimg.com/1200x/45/7a/5d/457a5d3b2313a1bc4cfa4bfbef1bfa6b.jpg",
    "location": { "lat": 11.3750, "lng": 104.8500 },
    "provinceId": "abc123KandalId",
    "typeOfPlace": "Temple / Religious / Cultural"
  },
  {
    "name": "Wat Phnom Srey Phnom Pros",
    "description": "Popular temple complex known for its twin hilltop pagodas—one for men and one for women—symbolizing harmony and balance.",
    "image": "https://i.pinimg.com/1200x/d5/ae/ef/d5aeefc9a0340d0f94cb987e5c92611a.jpg",
    "location": { "lat": 11.6000, "lng": 104.7833 },
    "provinceId": "abc123KandalId",
    "typeOfPlace": "Temple / Religious / Mountain"
  },
  {
    "name": "Takhmao River Park",
    "description": "Peaceful riverside area in Takhmao city with walking paths, gardens, and local food vendors along the Bassac River.",
    "image": "https://i.pinimg.com/1200x/84/02/71/840271d081eae059ebcd09d6ef5a90cf.jpg",
    "location": { "lat": 11.4500, "lng": 104.9500 },
    "provinceId": "abc123KandalId",
    "typeOfPlace": "Park / River / Urban"
  },
  {
    "name": "Wat Prek Leap",
    "description": "Prominent riverside pagoda near the Mekong River known for its peaceful environment and scenic boat views.",
    "image": "https://i.pinimg.com/1200x/68/44/3a/68443a777e77b97a0cbd3a7f09a27f82.jpg",
    "location": { "lat": 11.6333, "lng": 104.9333 },
    "provinceId": "abc123KandalId",
    "typeOfPlace": "Temple / Religious / River"
  },
  {
    "name": "Kien Svay Floating Restaurants",
    "description": "Famous floating restaurants along the river where visitors can enjoy local Khmer dishes and relax on the water.",
    "image": "https://i.pinimg.com/1200x/34/cc/55/34cc55d6a43a79293db6c44c8d708f4a.jpg",
    "location": { "lat": 11.4930, "lng": 104.9880 },
    "provinceId": "abc123KandalId",
    "typeOfPlace": "Restaurant / Experience / River"
  },
  {
    "name": "Prek Thmey Bridge Viewpoint",
    "description": "Modern bridge with a wide view of the Bassac River and great photo opportunities at sunset.",
    "image": "https://i.pinimg.com/1200x/7e/2a/1f/7e2a1f7d6dd1a3d3b94d0de2f4724717.jpg",
    "location": { "lat": 11.4210, "lng": 104.9510 },
    "provinceId": "abc123KandalId",
    "typeOfPlace": "Bridge / Viewpoint / River"
  },
  {
    "name": "Wat Prasat Neang Khmao",
    "description": "Ancient temple known as the 'Black Virgin Temple,' featuring old laterite structures and historical Khmer art.",
    "image": "https://i.pinimg.com/1200x/79/d4/b1/79d4b1f33dffb74691b2a5f3eb25a5b3.jpg",
    "location": { "lat": 11.3340, "lng": 104.7770 },
    "provinceId": "abc123KandalId",
    "typeOfPlace": "Temple / Archaeological / Historic"
  },
  {
    "name": "Kampi Dolphin Pool",
    "description": "Famous spot on the Mekong River to view the rare Irrawaddy dolphins in their natural habitat near Kampi village.",
    "image": "https://i.pinimg.com/1200x/1d/3d/8a/1d3d8a6a3ee6e4a26f6cbf63a4a832d1.jpg",
    "location": { "lat": 12.6580, "lng": 106.0210 },
    "provinceId": "abc123KratieId",
    "typeOfPlace": "Wildlife / River / Experience"
  },
  {
    "name": "Mekong River Dolphin Observation Park",
    "description": "Observation area built along the Mekong for dolphin watching, surrounded by peaceful nature and fishing villages.",
    "image": "https://i.pinimg.com/1200x/a5/86/49/a586497b1832cbcb0f5872b37339a00e.jpg",
    "location": { "lat": 12.6560, "lng": 106.0200 },
    "provinceId": "abc123KratieId",
    "typeOfPlace": "Wildlife / River / Park"
  },
  {
    "name": "Koh Trong Island",
    "description": "Beautiful island in the Mekong River opposite Kratié town, known for eco-homestays, cycling paths, and green rice fields.",
    "image": "https://i.pinimg.com/1200x/d7/11/3b/d7113b04d5637b46cbb25320a9859d35.jpg",
    "location": { "lat": 12.4864, "lng": 106.0261 },
    "provinceId": "abc123KratieId",
    "typeOfPlace": "Island / Cultural / Eco-tourism"
  },
  {
    "name": "Phnom Sombok Pagoda",
    "description": "Hilltop Buddhist pagoda overlooking the Mekong River, offering stunning views and a peaceful environment.",
    "image": "https://i.pinimg.com/1200x/3a/b3/b5/3ab3b57a993527c13c80d89dfe4c83b8.jpg",
    "location": { "lat": 12.5514, "lng": 106.0411 },
    "provinceId": "abc123KratieId",
    "typeOfPlace": "Temple / Hill / Viewpoint"
  },
  {
    "name": "Sambok Mountain",
    "description": "A sacred hill near Kratié town, surrounded by forests and offering scenic views of the Mekong plains.",
    "image": "https://i.pinimg.com/1200x/34/4d/9e/344d9e29d5d1bfcf79292837f6b260d7.jpg",
    "location": { "lat": 12.5530, "lng": 106.0430 },
    "provinceId": "abc123KratieId",
    "typeOfPlace": "Mountain / Nature / Viewpoint"
  },
  {
    "name": "100-Column Pagoda (Wat Sorsor Moi Roy)",
    "description": "Historic pagoda near Sambour district with 100 columns, built to honor the legendary princess Neang Neak.",
    "image": "https://i.pinimg.com/1200x/1d/17/56/1d1756b3f2f2e7a776a540d2d7c9a1f1.jpg",
    "location": { "lat": 12.9292, "lng": 105.9592 },
    "provinceId": "abc123KratieId",
    "typeOfPlace": "Temple / Cultural / Historic"
  },
  {
    "name": "Kratié Riverfront",
    "description": "Peaceful river promenade in Kratié town with restaurants, local markets, and scenic sunset views over the Mekong.",
    "image": "https://i.pinimg.com/1200x/7a/0f/bf/7a0fbf8c1b7d6c64f5f99362a8278c1e.jpg",
    "location": { "lat": 12.4885, "lng": 106.0197 },
    "provinceId": "abc123KratieId",
    "typeOfPlace": "River / Urban / Experience"
  },
  {
    "name": "Kampi Rapids (Sambok Rapids)",
    "description": "Natural rapids and small waterfalls near the Kampi dolphin area, ideal for picnics and relaxation.",
    "image": "https://i.pinimg.com/1200x/16/ef/9a/16ef9a9aefac155d316787a216d2ff2a.jpg",
    "location": { "lat": 12.6620, "lng": 106.0280 },
    "provinceId": "abc123KratieId",
    "typeOfPlace": "Nature / River / Picnic"
  },
  {
    "name": "Chhlong Town",
    "description": "Historic riverside town with French colonial buildings, ancient temples, and charming views of the Mekong River.",
    "image": "https://i.pinimg.com/1200x/a5/94/3d/a5943d1bb4e90a251e19c32d18d3f47b.jpg",
    "location": { "lat": 12.2340, "lng": 105.9510 },
    "provinceId": "abc123KratieId",
    "typeOfPlace": "Historic / Town / Cultural"
  },
  {
    "name": "Kampi Village",
    "description": "Traditional riverside village near the dolphin pool, known for fishing, small markets, and authentic local life.",
    "image": "https://i.pinimg.com/1200x/63/73/a1/6373a140fb99913f3e9438d40121a94b.jpg",
    "location": { "lat": 12.6575, "lng": 106.0168 },
    "provinceId": "abc123KratieId",
    "typeOfPlace": "Village / Cultural / River"
  },
  {
    "name": "Phnom Kulen National Park (Oddar Meanchey side)",
    "description": "Part of the sacred Kulen mountain range extending into Oddar Meanchey, known for lush forests, waterfalls, and ancient ruins.",
    "image": "https://i.pinimg.com/1200x/2b/67/3d/2b673d724d0594ac5ac991a342c2ab8b.jpg",
    "location": { "lat": 14.2000, "lng": 104.2000 },
    "provinceId": "abc123OddarMeancheyId",
    "typeOfPlace": "Nature / Mountain / National Park"
  },
  {
    "name": "Anlong Veng Historical Site",
    "description": "Historic area linked to the final stronghold of the Khmer Rouge regime, with museums and memorials preserving Cambodia’s modern history.",
    "image": "https://i.pinimg.com/1200x/4f/1a/bb/4f1abb70c51c8d53d5b71abedc7b70cd.jpg",
    "location": { "lat": 14.2520, "lng": 104.0940 },
    "provinceId": "abc123OddarMeancheyId",
    "typeOfPlace": "Historical / Cultural / Memorial"
  },
  {
    "name": "Pol Pot House",
    "description": "The final residence of Khmer Rouge leader Pol Pot in Anlong Veng, preserved as a somber historical site.",
    "image": "https://i.pinimg.com/1200x/d2/1d/67/d21d67cb5999ef49ce3f7a21a92b4bb2.jpg",
    "location": { "lat": 14.2460, "lng": 104.0910 },
    "provinceId": "abc123OddarMeancheyId",
    "typeOfPlace": "Historic / Memorial / Cultural"
  },
  {
    "name": "Ta Mok House (Anlong Veng)",
    "description": "House of Ta Mok, a senior Khmer Rouge commander, now turned into a museum displaying relics and photographs from the regime.",
    "image": "https://i.pinimg.com/1200x/85/2f/6f/852f6f8709b70bdf31a1a8a50b2fd153.jpg",
    "location": { "lat": 14.2565, "lng": 104.0970 },
    "provinceId": "abc123OddarMeancheyId",
    "typeOfPlace": "Museum / Historical / Cultural"
  },
  {
    "name": "Anlong Veng Peace Observatory",
    "description": "Viewpoint near the Dangrek Mountains offering panoramic views of Cambodia and Thailand’s border area.",
    "image": "https://i.pinimg.com/1200x/fb/da/5b/fbda5b1d9f6d8f1b11a7bfa5534d84d0.jpg",
    "location": { "lat": 14.2760, "lng": 104.0840 },
    "provinceId": "abc123OddarMeancheyId",
    "typeOfPlace": "Viewpoint / Nature / Historical"
  },
  {
    "name": "Dangrek Mountain Range",
    "description": "Mountain range forming the border with Thailand, known for beautiful landscapes and trekking opportunities.",
    "image": "https://i.pinimg.com/1200x/ea/79/df/ea79df98e2739a624a9cc94b89c3a272.jpg",
    "location": { "lat": 14.2833, "lng": 104.0833 },
    "provinceId": "abc123OddarMeancheyId",
    "typeOfPlace": "Mountain / Nature / Adventure"
  },
  {
    "name": "Wat Samrong Knong",
    "description": "Buddhist temple complex with peaceful surroundings, serving as a community center and spiritual site in Oddar Meanchey.",
    "image": "https://i.pinimg.com/1200x/a8/e4/2a/a8e42a5baf3c23c7901b7cbaf7d6cf65.jpg",
    "location": { "lat": 14.1500, "lng": 104.1330 },
    "provinceId": "abc123OddarMeancheyId",
    "typeOfPlace": "Temple / Religious / Cultural"
  },
  {
    "name": "Trapeang Tav Reservoir",
    "description": "Large reservoir surrounded by scenic countryside, ideal for local picnics and birdwatching.",
    "image": "https://i.pinimg.com/1200x/61/d0/90/61d090af01c716b0f48a5c7ef40a7b4a.jpg",
    "location": { "lat": 14.1900, "lng": 104.1600 },
    "provinceId": "abc123OddarMeancheyId",
    "typeOfPlace": "Lake / Nature / Picnic"
  },
  {
    "name": "Banteay Chhmar Temple (West Extension)",
    "description": "Outer areas of the Banteay Chhmar complex extend partially into Oddar Meanchey province, known for intricate Angkorian carvings.",
    "image": "https://i.pinimg.com/1200x/6d/9f/92/6d9f924d88a8e9dcde3e89bbdc8b81c5.jpg",
    "location": { "lat": 14.0850, "lng": 103.0970 },
    "provinceId": "abc123OddarMeancheyId",
    "typeOfPlace": "Temple / Archaeological / Historic"
  },
  {
    "name": "Samraong City Park",
    "description": "Public park in the heart of Samraong town, a relaxing spot for locals with small gardens and open spaces.",
    "image": "https://i.pinimg.com/1200x/5e/f7/ab/5ef7abf7bb5b34a64d3790831b524de1.jpg",
    "location": { "lat": 14.1815, "lng": 104.0867 },
    "provinceId": "abc123OddarMeancheyId",
    "typeOfPlace": "Urban / Park / Community"
  },
  {
    "name": "Pailin Gem Mines",
    "description": "Pailin is famous for its ruby and sapphire mines, offering tours to observe gem extraction and local mining culture.",
    "image": "https://i.pinimg.com/1200x/3b/1c/55/3b1c5540f930d73b3e2f1a1526d9c123.jpg",
    "location": { "lat": 12.8550, "lng": 102.6150 },
    "provinceId": "abc123PailinId",
    "typeOfPlace": "Cultural / Historic / Mining"
  },
  {
    "name": "Wat Phnom Yat",
    "description": "Hilltop temple with panoramic views of Pailin town, known for serene atmosphere and Buddhist ceremonies.",
    "image": "https://i.pinimg.com/1200x/5f/2b/8a/5f2b8a1a7ef9b6eabc5da6c8b8b1c123.jpg",
    "location": { "lat": 12.8600, "lng": 102.6180 },
    "provinceId": "abc123PailinId",
    "typeOfPlace": "Temple / Religious / Cultural"
  },
  {
    "name": "Pailin Waterfall",
    "description": "Scenic waterfall surrounded by forested hills, perfect for picnics and short hikes.",
    "image": "https://i.pinimg.com/1200x/6b/2c/fd/6b2cfd7f01f8dc9c9d92c5f1f4a8e2e1.jpg",
    "location": { "lat": 12.8700, "lng": 102.6200 },
    "provinceId": "abc123PailinId",
    "typeOfPlace": "Nature / Waterfall / Scenic"
  },
  {
    "name": "Phnom Kravanh Forest",
    "description": "Protected forest area offering trekking, wildlife observation, and serene nature experiences.",
    "image": "https://i.pinimg.com/1200x/4c/6a/2f/4c6a2f7c6fcd9f8a8b1b2e4f8a7d8c6e.jpg",
    "location": { "lat": 12.8750, "lng": 102.6050 },
    "provinceId": "abc123PailinId",
    "typeOfPlace": "Nature / Forest / Trekking"
  },
  {
    "name": "Pailin Town Market",
    "description": "Bustling local market offering fresh produce, local food, handicrafts, and a glimpse into daily life in Pailin.",
    "image": "https://i.pinimg.com/1200x/7a/3f/d2/7a3fd2e6cbb3a1b9f4d5d6b3e2c1f7a9.jpg",
    "location": { "lat": 12.8605, "lng": 102.6170 },
    "provinceId": "abc123PailinId",
    "typeOfPlace": "Market / Cultural / Local"
  },
  {
    "name": "Wat Phnom Yat Pagoda Hill",
    "description": "Small hill with pagoda atop, offering views of Pailin city and surroundings, especially during sunrise.",
    "image": "https://i.pinimg.com/1200x/8d/2e/4f/8d2e4f3d1f2b6e4a7d1b8f5c3f2e1c7d.jpg",
    "location": { "lat": 12.8610, "lng": 102.6185 },
    "provinceId": "abc123PailinId",
    "typeOfPlace": "Temple / Scenic / Cultural"
  },
  {
    "name": "Bokor Mountain Viewpoint (Pailin side)",
    "description": "A scenic viewpoint near the Bokor mountain foothills, offering views of forests and the Pailin plains.",
    "image": "https://i.pinimg.com/1200x/3f/2e/6d/3f2e6d7b9f3c1a6f9d3b2e5f7c4d8b1c.jpg",
    "location": { "lat": 12.8800, "lng": 102.6300 },
    "provinceId": "abc123PailinId",
    "typeOfPlace": "Viewpoint / Nature / Scenic"
  },
  {
    "name": "Sivutha Pagoda",
    "description": "Historic Buddhist pagoda in Prey Veng town, known for its local ceremonies and serene atmosphere.",
    "image": "https://i.pinimg.com/1200x/5a/3f/8e/5a3f8e7d1f6b4c2d8a1b3f4d5e6c7a8b.jpg",
    "location": { "lat": 11.4833, "lng": 105.1333 },
    "provinceId": "abc123PreyVengId",
    "typeOfPlace": "Temple / Cultural"
  },
  {
    "name": "Prey Veng Rice Fields",
    "description": "Vast rice fields surrounding the province, offering scenic views and a glimpse into traditional Cambodian agriculture.",
    "image": "https://i.pinimg.com/1200x/3b/2e/6d/3b2e6d4f1c2b5a7d9e1f3c6b8d7e9f0a.jpg",
    "location": { "lat": 11.5000, "lng": 105.1500 },
    "provinceId": "abc123PreyVengId",
    "typeOfPlace": "Nature / Agriculture / Scenic"
  },
  {
    "name": "Wat Botum Pagoda",
    "description": "A beautiful pagoda with traditional Khmer architecture, frequented by locals for prayer and festivals.",
    "image": "https://i.pinimg.com/1200x/6c/4f/3a/6c4f3a2b1d4e6a7b8f9c3d2e1f4b5a6c.jpg",
    "location": { "lat": 11.4900, "lng": 105.1400 },
    "provinceId": "abc123PreyVengId",
    "typeOfPlace": "Temple / Cultural"
  },
  {
    "name": "Ta Prok Pagoda",
    "description": "Small riverside pagoda, known for its peaceful environment and riverside walks.",
    "image": "https://i.pinimg.com/1200x/7d/3e/6f/7d3e6f5c1f2b8a9d3c4e6b7f8a1c2d3e.jpg",
    "location": { "lat": 11.4950, "lng": 105.1450 },
    "provinceId": "abc123PreyVengId",
    "typeOfPlace": "Temple / Nature"
  },
  {
    "name": "Prey Veng Riverside",
    "description": "Scenic riverside along the Mekong tributaries, ideal for walks, local food stalls, and sunset views.",
    "image": "https://i.pinimg.com/1200x/8e/4f/3b/8e4f3b2c1a2d4b5c6e7f8a9b0c1d2e3f.jpg",
    "location": { "lat": 11.4850, "lng": 105.1350 },
    "provinceId": "abc123PreyVengId",
    "typeOfPlace": "Nature / Scenic / Cultural"
  },
  {
    "name": "O’Kena Pagoda",
    "description": "Traditional Buddhist pagoda known for local festivals and Khmer architecture.",
    "image": "https://i.pinimg.com/1200x/9f/2b/4d/9f2b4d3e1c2a5b6f7d8c9e0f1a2b3c4d.jpg",
    "location": { "lat": 11.4920, "lng": 105.1380 },
    "provinceId": "abc123PreyVengId",
    "typeOfPlace": "Temple / Cultural"
  },

  /* Pursat */

  {
    "name": "Phnom Pros",
    "description": "Small mountain and temple site offering panoramic views of Pursat town and surrounding countryside.",
    "image": "https://i.pinimg.com/1200x/1a/2b/3c/1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d.jpg",
    "location": { "lat": 12.5333, "lng": 103.9167 },
    "provinceId": "abc123PursatId",
    "typeOfPlace": "Temple / Viewpoint",
    "provinceName": "Pursat"
  },
  {
    "name": "Tonle Sap Riverfront",
    "description": "Scenic riverfront area in Pursat town along the Tonle Sap River, perfect for walks and local life observation.",
    "image": "https://i.pinimg.com/1200x/2b/3c/4d/2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e.jpg",
    "location": { "lat": 12.5330, "lng": 103.9200 },
    "provinceId": "abc123PursatId",
    "typeOfPlace": "Nature / Scenic / Cultural",
    "provinceName": "Pursat"
  },
  {
    "name": "Phnom Kravanh",
    "description": "Largest mountain in Pursat Province with natural forest, waterfalls, and trekking opportunities.",
    "image": "https://i.pinimg.com/1200x/3c/4d/5e/3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f.jpg",
    "location": { "lat": 12.3500, "lng": 103.6500 },
    "provinceId": "abc123PursatId",
    "typeOfPlace": "Mountain / Nature / Trekking",
    "provinceName": "Pursat"
  },

]


const buttonPlaces = document.getElementById("myBtnPlaces");
console.log(buttonPlaces);

buttonPlaces.addEventListener("click", async () => {
  const provinceFilterInput = document.getElementById("filterProvince"); // the input used for filtering
  //const currentProvince = provinceFilterInput.value.trim(); // get current province being viewed

  try {
    for (const myData of places) {
      const docRef = doc(db, "placesCambo", myData.name);

      await setDoc(docRef, {
        name: myData.name,
        documentLink: myData.documentLink,
        provinceName: myData.provinceName,
        description: myData.description,
        location: myData.location,
        image: myData.image,
        provinceId: myData.provinceId,
        typeOfPlace: myData.typeOfPlace,
        updated_at: serverTimestamp(),
        created_at: serverTimestamp()
      }, { merge: true });

      console.log(`✅ Saved/Updated: ${myData.name} | ProvinceId: ${myData.provinceId}`);
    }

    alert("✅ Upload/Update complete!");

    // Reload places for the currently filtered province
    if (currentProvince) {
      loadPlacesByProvince(currentProvince);
    }
  } catch (error) {
    console.error("❌ Error uploading/updating data:", error);
    alert("❌ Failed to upload/update data");
  }
});
