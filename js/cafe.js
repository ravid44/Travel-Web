import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
import { getFirestore, doc, setDoc, getDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";


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

// Your coffee shop data
const coffeeShop = [

  /*sCafe*/

  {
    /*
    "id": "A1b2C3d4E5f6G7h8I9j0",
    */
    "provinceId": "iXYpAdo3OZFh3jknWup1",
    "name": "The Little Red Fox Espresso Cafe",
    "neighborhood": "Kandal Village, Hap Guan Street",
    "address": "593 Hup Guan Street, Mondul 1 Village, Krong Siem Reap",
    "focus": "Exceptional brews, eco-conscious, cozy setting",
    "notes": "Has communal table, outdoor seating, and 'The Den'. Highly recommended for specialty coffee. Sort of hidden.",
    "operating_hours": "Thursday through Tuesday 7:00 to 17:00 (closed Wednesdays)",
    "image_placeholder": "https://thelittleredfoxespresso.com/wp-content/uploads/2021/10/Cafe-Siem-Reap-The-Little-Red-Fox-Espresso-Door-Logo-scaled.jpg"
  },
  {
    /*
    "id": "J1k2L3m4N5o6P7q8R9s0",
    */
    "provinceId": "iXYpAdo3OZFh3jknWup1",
    "name": "Sister Srey Cafe",
    "neighborhood": "Riverside, near Old Market Bridge",
    "address": "200 Pokambor St, Krong Siem Reap (near Old Market)",
    "focus": "Social enterprise, supports local students and APOPO (landmine clearance)",
    "notes": "Lively, airy shophouse, serves delicious food (Western-inspired, healthy options). No A/C but has fans. Often busy.",
    "operating_hours": "7:00 am – 6:00 pm (daily)",
    "image_placeholder": "https://1.bp.blogspot.com/-ZX_0k0iI-IM/WcjeLIKuO-I/AAAAAAACHps/5076v5NHz2wnrcJ75jRHUCuoimN3Hy-ZACLcBGAs/s1600/L9994732-001.jpg"
  },
  {
    /*
    "id": "T1u2V3w4X5y6Z7a8B9c0",
    */
    "provinceId": "iXYpAdo3OZFh3jknWup1",
    "name": "Brother Bong Cafe",
    "neighborhood": "East side of Siem Reap River (Across the river)",
    "address": "Street 20, Krong Siem Reap",
    "focus": "Cambodian owned and operated, award-winning barista, roasts their own coffee, eco-friendly",
    "notes": "Open-air cafe, communal atmosphere, affordable breakfast/brunch, uses bamboo straws.",
    "operating_hours": "7:00 to 17:00 (daily)",
    "image_placeholder": "https://camboticket.com/blog/wp-content/uploads/2024/10/Brother-Bong-edited.jpg"
  },
  {
    /*
    "id": "D1e2F3g4H5i6J7k8L9m0",
    */
    "provinceId": "iXYpAdo3OZFh3jknWup1",
    "name": "The Bean Embassy",
    "neighborhood": "Wat Bo Village area (Near Haven restaurant)",
    "address": "Next to Haven, Chocolate Road, Krong Siem Reap",
    "focus": "Specialty coffee roastery-café, SCA training and workshops",
    "notes": "Home to Cambodia's barista champion. Focuses on different brew methods. Good for working, but limited laptop seating.",
    "operating_hours": "7:30am to 6pm every day",
    "image_placeholder": "https://www.areacambodia.com/wp-content/uploads/2023/09/The-Bean-Embassy-Cambodia-Cafe-in-Krong-Siem-Reap.jpg"
  },
  {
    /*
    "id": "N1o2P3q4R5s6T7u8V9w0",
    */
    "provinceId": "iXYpAdo3OZFh3jknWup1",
    "name": "Footprint Cafes Siem Reap",
    "neighborhood": "Wat Bo",
    "address": "Street 26, Wat Bo, Krong Siem Reap",
    "focus": "Ethical cafe, social responsibility, supports local youth education/empowerment",
    "notes": "Coworking hub. Offers ethically sourced coffee and light bites. Wide range of food/drink options.",
    "operating_hours": "7:30am to 6pm every day",
    "image_placeholder": "https://static2-viaggi.corriereobjects.it/wp-content/uploads/2020/11/18-com-1080x834.jpg?v=1605451288"
  },

  {
    /*
    "id": "X1y2Z3a4B5c6D7e8F9g0",
    */
    "provinceId": "iXYpAdo3OZFh3jknWup1",
    "name": "Dialogue 26",
    "neighborhood": "Wat Bo Village (Street 26/27)",
    "address": "Street 27, Sangkat Sala Komreuk, Krong Siem Reap",
    "focus": "Multi-faceted cafe, classy brunch spot, co-working space",
    "notes": "Sophisticated setting, becomes a softly lit speakeasy at night. Features high-speed WiFi and ample power outlets. Laptop friendly.",
    "operating_hours": "7:00 AM to 11:00 PM (daily)",
    "image_placeholder": "https://www.areacambodia.com/wp-content/uploads/2023/09/Dialogue-Coffee-Shop-and-Bar-in-Siem-Reap-1.jpg"
  },
  {
    /*
    "id": "G1h2I3j4K5l6M7n8O9p0",
    */
    "provinceId": "iXYpAdo3OZFh3jknWup1",
    "name": "Brown Coffee Treeline",
    "neighborhood": "Wat Bo Road",
    "address": "Corner of Street 23 and Street Achar Sva, Wat Bo Road, Krong Siem Reap",
    "focus": "Local Cambodian chain, spacious, modern design",
    "notes": "One of two Siem Reap locations (the other on National Road 6). Has ample outdoor riverside seating and air-conditioned indoor spaces. Full menu of beverages and food.",
    "operating_hours": "6:30 AM to 9:00 PM (daily)",
    "image_placeholder": "https://www.areacambodia.com/wp-content/uploads/2023/09/Brown-Coffee-and-Bakery-is-close-to-a-Caltex-gas-station-Thapul-NR6-in-Siem-Reap.jpg"
  },

  /*phnom penh cafe*/

  {
    "name": "Brown Coffee - Phnom Penh Riverside",
    "provinceId": "ZFpogBIP5lCwDFdeAOjE",
    "address": "Preah Sisowath Quay, Daun Penh, Phnom Penh",
    "description": "A stylish modern café by the river, serving premium espresso and pastries with a view of the Tonle Sap.",
    "location": { "lat": 11.5735, "lng": 104.9283 },
    "image_placeholder": "https://www.browncoffee.com.kh/uploads/ximg/others/f7994acfcf9485bd40999add0d6e9032.jpg",
    "facebook": "https://www.facebook.com/browncoffee.kh",
    "website": "https://www.browncoffee.com.kh"
  },
  {
    "name": "The Shop 240",
    "description": "European-style café serving artisan coffee, healthy brunch options, and fresh baked goods in a peaceful garden setting.",
    "address": "Street 240, Daun Penh, Phnom Penh",
    "focus": "Brunch & Artisan Coffee",
    "image_placeholder": "https://media-cdn.tripadvisor.com/media/photo-s/0d/e0/e2/89/the-shop-240-inside.jpg",
    "provinceId": "ZFpogBIP5lCwDFdeAOjE"
  },
  {
    "name": "Lotus Coffee & Brunch",
    "description": "Bright, modern café with a calm ambiance, serving freshly brewed coffee and fusion breakfast dishes all day.",
    "address": "Street 310, BKK1, Phnom Penh",
    "focus": "Coffee & All-Day Brunch",
    "image_placeholder": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/0d/2d/8b/lotus-coffee.jpg",
    "provinceId": "ZFpogBIP5lCwDFdeAOjE"
  },

  /*preah vihea cafe*/
  {
    "name": "Preah Vihear Coffee House",
    "provinceId": "hv6SU5rcg3iournCTZWe",
    "address": "National Road 62, Tbeng Meanchey City, Preah Vihear",
    "description": "A cozy local café serving Cambodian coffee, iced drinks, and snacks near the city center.",
    "location": { "lat": 13.8095, "lng": 104.9806 },
    "image_placeholder": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/45/69/e6/inside-our-bar.jpg",
    "facebook": "https://www.facebook.com/preahvihearcoffeehouse",
    "website": ""
  },
  {
    "name": "Phka Doung Café",
    "provinceId": "hv6SU5rcg3iournCTZWe",
    "address": "Street 1, Tbeng Meanchey Market, Preah Vihear",
    "description": "A flower-themed café offering espresso, frappes, and local desserts in a peaceful garden setting.",
    "location": { "lat": 13.8082, "lng": 104.9818 },
    "image_placeholder": "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    "facebook": "https://www.facebook.com/phkadoungcafe",
    "website": ""
  },
  {
    "name": "Koh Ker Coffee & Bakery",
    "provinceId": "hv6SU5rcg3iournCTZWe",
    "address": "Koh Ker Village, Srayang Commune, Kulen District, Preah Vihear",
    "description": "A small stopover café near the Koh Ker temple complex, offering fresh bakery items and iced coffee.",
    "location": { "lat": 13.7850, "lng": 104.5200 },
    "image_placeholder": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    "facebook": "https://www.facebook.com/kohkercoffeebakery",
    "website": ""
  },

  /*koh kong cafe*/
  {
    "name": "Koh Kong Riverside Café",
    "provinceId": "H485lIC4QMsegbRftb1j",
    "address": "Riverfront Road, Khemarak Phoumin City, Koh Kong",
    "description": "A scenic riverside café serving espresso, smoothies, and Khmer desserts with views of the Tatai River.",
    "location": { "lat": 11.6155, "lng": 102.9847 },
    "image_placeholder": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    "facebook": "https://www.facebook.com/kohkongriversidecafe",
    "website": ""
  },
  {
    "name": "Tatai View Coffee",
    "provinceId": "H485lIC4QMsegbRftb1j",
    "address": "Tatai Commune, Koh Kong District",
    "description": "A peaceful coffee stop overlooking the Tatai River, perfect for travelers heading to the waterfalls.",
    "location": { "lat": 11.6250, "lng": 103.0705 },
    "image_placeholder": "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    "facebook": "https://www.facebook.com/tataiviewcoffee",
    "website": ""
  },
  {
    "name": "Jungle Bean Café",
    "provinceId": "H485lIC4QMsegbRftb1j",
    "address": "Street 3, Khemarak Phoumin City, Koh Kong",
    "description": "Eco-friendly café using organic beans from the Cardamom Mountains, with vegan options and handmade pastries.",
    "location": { "lat": 11.6138, "lng": 102.9869 },
    "image_placeholder": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    "facebook": "https://www.facebook.com/junglebeancafe",
    "website": ""
  },

  /* Kampong Cham */
  {
    "name": "Smile Café Kampong Cham",
    "description": "A cozy riverside café known for its good coffee, pastries, and Mekong views. Popular with travelers and locals alike.",
    "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    "location": { "lat": 11.9934, "lng": 105.4558 },
    "provinceId": "wQovHNdLBaWc6tJBtoCa",
    "typeOfPlace": "Café / Riverside / Bakery",
    "provinceName": "Kampong Cham"
  },
  {
    "name": "Mekong Café",
    "description": "Located along the Kampong Cham riverside, this café offers fresh brews, smoothies, and relaxing outdoor seating with a view of the Kizuna Bridge.",
    "image": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    "location": { "lat": 11.9941, "lng": 105.4560 },
    "provinceId": "wQovHNdLBaWc6tJBtoCa",
    "typeOfPlace": "Coffee / Scenic / Chill Spot",
    "provinceName": "Kampong Cham"
  },
  {
    "name": "Lotus Café",
    "description": "A stylish café offering espresso drinks, bubble tea, and desserts in a relaxing, plant-filled atmosphere near the town center.",
    "image": "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    "location": { "lat": 11.9905, "lng": 105.4592 },
    "provinceId": "wQovHNdLBaWc6tJBtoCa",
    "typeOfPlace": "Café / Desserts / Drinks",
    "provinceName": "Kampong Cham"
  },
  {
    "name": "Coffee Today",
    "description": "A modern-style café serving quality coffee, milk tea, and light snacks with comfortable indoor seating — a favorite among students.",
    "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
    "location": { "lat": 11.9892, "lng": 105.4635 },
    "provinceId": "wQovHNdLBaWc6tJBtoCa",
    "typeOfPlace": "Modern Café / Drinks / Study Spot",
    "provinceName": "Kampong Cham"
  },
  {
    "name": "Phka Café",
    "description": "A charming garden café with a mix of Khmer and Western drinks and snacks. Loved for its quiet ambiance and outdoor seating.",
    "image": "https://images.unsplash.com/photo-1541167760496-1628856ab772",
    "location": { "lat": 11.9920, "lng": 105.4589 },
    "provinceId": "wQovHNdLBaWc6tJBtoCa",
    "typeOfPlace": "Garden Café / Relax / Local Cuisine",
    "provinceName": "Kampong Cham"
  },
  {
    "name": "Moon River Café",
    "description": "A small but popular riverside café offering Cambodian coffee, fruit juices, and a lovely sunset view over the Mekong River.",
    "image": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
    "location": { "lat": 11.9950, "lng": 105.4540 },
    "provinceId": "wQovHNdLBaWc6tJBtoCa",
    "typeOfPlace": "Riverside Café / Coffee / Viewpoint",
    "provinceName": "Kampong Cham"
  },

  /* Kampong Chhnang */

  {
    "name": "Chhnang Riverside Café",
    "description": "A relaxing café overlooking the Tonle Sap River, serving fresh brews, smoothies, and pastries. A perfect sunset spot in Kampong Chhnang City.",
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    "location": { "lat": 12.2504, "lng": 104.6671 },
    "provinceId": "abc123KampongChhnangId",
    "typeOfPlace": "Riverside Café / Coffee / Bakery",
    "provinceName": "Kampong Chhnang"
  },
  {
    "name": "Moonlight Café",
    "description": "A cozy local café with a mix of traditional Cambodian coffee and modern espresso drinks. Popular among students and young locals.",
    "image": "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb",
    "location": { "lat": 12.2540, "lng": 104.6638 },
    "provinceId": "abc123KampongChhnangId",
    "typeOfPlace": "Local Café / Drinks / Chill Spot",
    "provinceName": "Kampong Chhnang"
  },
  {
    "name": "The Pottery Café",
    "description": "A creative café themed around Kampong Chhnang’s famous pottery. Offers coffee, desserts, and locally crafted souvenirs.",
    "image": "https://images.unsplash.com/photo-1527168027773-0cc890c4f42f",
    "location": { "lat": 12.2471, "lng": 104.6665 },
    "provinceId": "abc123KampongChhnangId",
    "typeOfPlace": "Café / Art / Culture",
    "provinceName": "Kampong Chhnang"
  },
  {
    "name": "Sabay Sabay Café",
    "description": "A peaceful riverside café offering Khmer-style coffee, fruit shakes, and a laid-back garden atmosphere.",
    "image": "https://images.unsplash.com/photo-1549399542-7e3f8b79c341",
    "location": { "lat": 12.2522, "lng": 104.6649 },
    "provinceId": "abc123KampongChhnangId",
    "typeOfPlace": "Garden Café / Local Drinks / Relax",
    "provinceName": "Kampong Chhnang"
  },
  {
    "name": "Coffee Bloom Chhnang",
    "description": "A stylish modern café offering espresso drinks, bubble tea, and pastries in a minimalist setting — ideal for work or meetings.",
    "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
    "location": { "lat": 12.2509, "lng": 104.6612 },
    "provinceId": "abc123KampongChhnangId",
    "typeOfPlace": "Modern Café / Pastry / Work Spot",
    "provinceName": "Kampong Chhnang"
  },
  {
    "name": "Tonle View Café",
    "description": "Set right by the Tonle Sap River, this café offers excellent coffee, fresh coconuts, and a breezy terrace for watching the boats go by.",
    "image": "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    "location": { "lat": 12.2550, "lng": 104.6655 },
    "provinceId": "abc123KampongChhnangId",
    "typeOfPlace": "Riverside Café / View / Relax",
    "provinceName": "Kampong Chhnang"
  },

  /* kampong spur */

   {
    "name": "Speu Coffee House",
    "description": "A cozy café in the heart of Kampong Speu serving fresh roasted Cambodian coffee and homemade pastries.",
    "image": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    "location": { "lat": 11.4539, "lng": 104.5203 },
    "provinceId": "abc123KampongSpeuId",
    "typeOfPlace": "Coffee Shop / Bakery / Local Café",
    "provinceName": "Kampong Speu"
  },
  {
    "name": "The Bean Station",
    "description": "Modern coffee shop offering espresso-based drinks, smoothies, and desserts with a relaxed atmosphere.",
    "image": "https://images.unsplash.com/photo-1510626176961-4b37d6af1f4e",
    "location": { "lat": 11.4525, "lng": 104.5228 },
    "provinceId": "abc123KampongSpeuId",
    "typeOfPlace": "Coffee Shop / Dessert / Modern Café",
    "provinceName": "Kampong Speu"
  },
  {
    "name": "Kiri Coffee & Bakery",
    "description": "A charming bakery café offering locally grown coffee, fresh bread, and a peaceful garden setting.",
    "image": "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    "location": { "lat": 11.3304, "lng": 104.3421 },
    "provinceId": "abc123KampongSpeuId",
    "typeOfPlace": "Café / Bakery / Garden",
    "provinceName": "Kampong Speu"
  },
  {
    "name": "Brew & Leaf Café",
    "description": "A relaxing spot for both tea and coffee lovers, featuring handcrafted beverages and light meals.",
    "image": "https://images.unsplash.com/photo-1470337458703-46ad1756a187",
    "location": { "lat": 11.4530, "lng": 104.5207 },
    "provinceId": "abc123KampongSpeuId",
    "typeOfPlace": "Coffee Shop / Tea / Relax",
    "provinceName": "Kampong Speu"
  },
  {
    "name": "Highland Breeze Café",
    "description": "Mountain-view café offering organic highland coffee, pastries, and panoramic views of Kirirom National Park.",
    "image": "https://images.unsplash.com/photo-1523942839745-7848d4a4a0d5",
    "location": { "lat": 11.3728, "lng": 104.0765 },
    "provinceId": "abc123KampongSpeuId",
    "typeOfPlace": "Mountain Café / Scenic View / Nature",
    "provinceName": "Kampong Speu"
  },
  {
    "name": "Urban Roast Kampong Speu",
    "description": "Trendy café with an urban touch, offering premium roasted beans, fast Wi-Fi, and air-conditioned seating.",
    "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    "location": { "lat": 11.4547, "lng": 104.5199 },
    "provinceId": "abc123KampongSpeuId",
    "typeOfPlace": "Modern Café / Wi-Fi / Chill Spot",
    "provinceName": "Kampong Speu"
  },

  /*kampot cafe*/
 
  {
    "name": "Green House Café",
     "provinceId": "4m2jr9GgyHPYyncMiCBh",
    "address": "Street 26, Kampot Town",
    "description": "Eco-friendly café with indoor plants and organic coffee sourced locally.",
    "location": { "lat": 10.6120, "lng": 104.1825 },
    "image_placeholder": "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    "facebook": "",
    "website": ""
  },
  {
    "name": "Rustic Coffee Kampot",
     "provinceId": "4m2jr9GgyHPYyncMiCBh",
    "address": "Riverside Road, Kampot",
    "description": "Café with riverside views and handcrafted coffee specialties.",
    "location": { "lat": 10.6135, "lng": 104.1830 },
    "image_placeholder": "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    "facebook": "",
    "website": ""
  },
  {
    "name": "The Wooden Cup",
    "provinceId": "4m2jr9GgyHPYyncMiCBh",
    "address": "Street 238, Kampot Town",
    "description": "Café with wooden interiors, offering espresso and local pastries.",
    "location": { "lat": 10.6118, "lng": 104.1808 },
    "image_placeholder": "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    "facebook": "",
    "website": ""
  },
  {
    "name": "Riverside Coffee Kampot",
    "provinceId": "4m2jr9GgyHPYyncMiCBh",
    "address": "Riverside Promenade, Kampot",
    "description": "Chill café by the river, perfect for breakfast and fresh coffee.",
    "location": { "lat": 10.6127, "lng": 104.1815 },
    "image_placeholder": "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
    "facebook": "",
    "website": ""
  },
  {
    "name": "Kampot Bean",
     "provinceId": "4m2jr9GgyHPYyncMiCBh",
    "address": "Street 49, Kampot Town",
    "description": "Local coffee roaster café serving single-origin beans and homemade cakes.",
    "location": { "lat": 10.6112, "lng": 104.1820 },
    "image_placeholder": "https://images.unsplash.com/photo-1510626176961-4b4b3b1b4e5b",
    "facebook": "",
    "website": ""
  },
  {
    "name": "Sunset Café Kampot",
     "provinceId": "4m2jr9GgyHPYyncMiCBh",
    "address": "Riverside, Kampot Town",
    "description": "Café with a terrace view for sunset, offering cold brew and pastries.",
    "location": { "lat": 10.6140, "lng": 104.1828 },
    "image_placeholder": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    "facebook": "",
    "website": ""
  },
  {
    "name": "Lotus Coffee Kampot",
     "provinceId": "4m2jr9GgyHPYyncMiCBh",
    "address": "Street 102, Kampot Town",
    "description": "Small café with a calm ambiance, specializing in aromatic coffee blends.",
    "location": { "lat": 10.6108, "lng": 104.1805 },
    "image_placeholder": "https://images.unsplash.com/photo-1470337458703-46ad1756a187",
    "facebook": "",
    "website": ""
  },
  {
    "name": "Old Market Coffee House",
     "provinceId": "4m2jr9GgyHPYyncMiCBh",
    "address": "Street 12, Old Market, Kampot",
    "description": "Cozy coffee house near the old market, popular for breakfast and fresh brews.",
    "location": { "lat": 10.6115, "lng": 104.1810 },
    "image_placeholder": "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
    "facebook": "",
    "website": ""
  },

  /*rathanakiri cafe*/
  {
    "name": "Highland Coffee & Bakery",
    "provinceId": "VL2FhUUtpl3VuGuj8x4t",
    "address": "Banlung City Center, Ratanakiri Province",
    "description": "A popular spot in Banlung serving locally grown coffee from the highlands, with fresh bakery items and a relaxed vibe.",
    "location": { "lat": 13.7395, "lng": 107.0032 },
    "image_placeholder": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    "facebook": "https://www.facebook.com/highlandcoffeebakeryratanakiri",
    "website": ""
  },
  {
    "name": "Banlung Mountain View Café",
    "provinceId": "VL2FhUUtpl3VuGuj8x4t",
    "address": "Phsar Road, Banlung, Ratanakiri",
    "description": "A scenic café overlooking the green hills, offering organic coffee, smoothies, and homemade desserts.",
    "location": { "lat": 13.7452, "lng": 107.0021 },
    "image_placeholder": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    "facebook": "https://www.facebook.com/banlungmountainviewcafe",
    "website": ""
  },
  {
    "name": "Yeak Loam Lake Café",
    "provinceId": "VL2FhUUtpl3VuGuj8x4t",
    "address": "Yeak Loam Lake, Yeak Loam Commune, Banlung District",
    "description": "A peaceful café located near the famous Yeak Loam Lake, offering iced coffee, coconuts, and light snacks by the water.",
    "location": { "lat": 13.7204, "lng": 107.0239 },
    "image_placeholder": "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    "facebook": "https://www.facebook.com/yeakloamlakecafe",
    "website": ""
  },

  /*mondulkiri cafe*/
  {
    "name": "Mondulkiri Coffee Farm Café",
    "provinceId": "umqpSDiZgvwVJGq1QkO0",
    "address": "Busra Road, Sen Monorom Town, Mondulkiri",
    "description": "A cozy café attached to a local coffee plantation, serving fresh highland brews and homemade pastries.",
    "location": { "lat": 12.4518, "lng": 107.1882 },
    "image_placeholder": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    "facebook": "https://www.facebook.com/mondulkiricoffeefarmcafe",
    "website": ""
  },
  {
    "name": "Highland Coffee Mondulkiri",
    "provinceId": "umqpSDiZgvwVJGq1QkO0",
    "address": "Sen Monorom Town Center, Mondulkiri",
    "description": "Coffee shop with panoramic views of Mondulkiri hills, serving freshly brewed coffee.",
    "location": { "lat": 12.4505, "lng": 107.1875 },
    "image_placeholder": "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    "facebook": "",
    "website": ""
  },
  {
    "name": "Bamboo Café Mondulkiri",
    "provinceId": "umqpSDiZgvwVJGq1QkO0",
    "address": "Near Sen Monorom Market, Mondulkiri",
    "description": "Rustic café surrounded by bamboo forests, perfect for relaxing and enjoying specialty coffee.",
    "location": { "lat": 12.4522, "lng": 107.1890 },
    "image_placeholder": "https://images.unsplash.com/photo-1510626176961-4b4b3b1b4e5b",
    "facebook": "",
    "website": ""
  },
  {
    "name": "The Coffee Hut Mondulkiri",
    "provinceId": "umqpSDiZgvwVJGq1QkO0",
    "address": "National Road 76, Sen Monorom, Mondulkiri",
    "description": "Small café with homemade cakes and aromatic coffee blends.",
    "location": { "lat": 12.4498, "lng": 107.1865 },
    "image_placeholder": "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    "facebook": "",
    "website": ""
  },
  {
    "name": "Highland Roast Café",
    "provinceId": "umqpSDiZgvwVJGq1QkO0",
    "address": "Phnom Sambok Rd, Sen Monorom, Mondulkiri",
    "description": "Café roasting its own beans with a panoramic view of Mondulkiri highlands.",
    "location": { "lat": 12.4530, "lng": 107.1878 },
    "image_placeholder": "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    "facebook": "",
    "website": ""
  },
  {
    "name": "Coffee & Nature Mondulkiri",
    "provinceId": "umqpSDiZgvwVJGq1QkO0",
    "address": "Near Bousra Waterfall, Mondulkiri",
    "description": "Café combining natural scenery with freshly brewed coffee and snacks.",
    "location": { "lat": 12.4580, "lng": 107.1930 },
    "image_placeholder": "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
    "facebook": "",
    "website": ""
  },
  {
    "name": "Sen Monorom Coffee House",
    "provinceId": "umqpSDiZgvwVJGq1QkO0",
    "address": "Central Sen Monorom, Mondulkiri",
    "description": "Local coffee house popular with tourists and locals for its high-quality coffee.",
    "location": { "lat": 12.4510, "lng": 107.1885 },
    "image_placeholder": "https://images.unsplash.com/photo-1470337458703-46ad1756a187",
    "facebook": "",
    "website": ""
  },
  {
    "name": "Forest View Café",
    "provinceId": "umqpSDiZgvwVJGq1QkO0",
    "address": "Near Mondulkiri Elephant Sanctuary",
    "description": "Café with forest views and peaceful ambiance, serving specialty coffee and tea.",
    "location": { "lat": 12.4600, "lng": 107.1900 },
    "image_placeholder": "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    "facebook": "",
    "website": ""
  },
  {
    "name": "Elephant Hill Coffee",
    "provinceId": "umqpSDiZgvwVJGq1QkO0",
    "address": "Road to Sen Monorom, Mondulkiri",
    "description": "Unique café near hills and elephant sanctuary, offering highland coffee varieties.",
    "location": { "lat": 12.4575, "lng": 107.1920 },
    "image_placeholder": "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
    "facebook": "",
    "website": ""
  },

  /* Kampong Thom */
  {
    "name": "Tonle Sap Café",
    "provinceId": "abc123KampongThomId",
    "address": "National Road 6, Kampong Thom City",
    "description": "Riverside café offering fresh coffee, smoothies, and pastries, with a cozy seating area overlooking the Tonle Sap River.",
    "location": { "lat": 12.7120, "lng": 104.8881 },
    "image_placeholder": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    "facebook": "https://www.facebook.com/tonlesapcafe",
    "website": "https://www.tonlesapcafe.com"
  },
  {
    "name": "Phnom Sampov Coffee House",
    "provinceId": "abc123KampongThomId",
    "address": "Sampov Mountain, Kampong Thom Province",
    "description": "Cozy coffee house with mountain views, serving freshly brewed local coffee and homemade desserts.",
    "location": { "lat": 12.7035, "lng": 104.9200 },
    "image_placeholder": "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    "facebook": "https://www.facebook.com/phnomSampovCafe",
    "website": ""
  },
  {
    "name": "Kampong Thom Central Café",
    "provinceId": "abc123KampongThomId",
    "address": "Street 3, Kampong Thom City Center",
    "description": "Modern café offering a variety of coffee drinks, teas, and light meals. Ideal for students and remote workers.",
    "location": { "lat": 12.7135, "lng": 104.8925 },
    "image_placeholder": "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    "facebook": "",
    "website": ""
  },
  {
    "name": "Lotus Café & Bakery",
    "provinceId": "abc123KampongThomId",
    "address": "Market Road, Kampong Thom City",
    "description": "Small bakery and café famous for freshly baked croissants, coffee, and homemade cakes.",
    "location": { "lat": 12.7102, "lng": 104.8890 },
    "image_placeholder": "https://images.unsplash.com/photo-1501117716987-c8e1ecb2106b",
    "facebook": "",
    "website": ""
  },
  {
    "name": "Riverfront Coffee Kampong Thom",
    "provinceId": "abc123KampongThomId",
    "address": "Tonle Sap Riverside, Kampong Thom City",
    "description": "Riverside café with a relaxing atmosphere, serving traditional Cambodian coffee and local snacks.",
    "location": { "lat": 12.7150, "lng": 104.8875 },
    "image_placeholder": "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
    "facebook": "",
    "website": ""
  },
  {
    "name": "Sombok Coffee House",
    "provinceId": "abc123KampongThomId",
    "address": "Street 5, Kampong Thom Town",
    "description": "Friendly neighborhood café known for specialty coffee drinks, smoothies, and a quiet atmosphere for working or studying.",
    "location": { "lat": 12.7172, "lng": 104.8908 },
    "image_placeholder": "https://images.unsplash.com/photo-1551776235-dde6d4829808",
    "facebook": "",
    "website": ""
  },


  /*btb cafe*/
  {
    "name": "Kinyei Café",
    "provinceId": "whQqHO2LWKVBg7eQEZIp",
    "address": "Street 1, Svay Por, Battambang City",
    "description": "A well-known social enterprise café offering locally roasted coffee, smoothies, and light breakfasts in a friendly setting.",
    "location": { "lat": 13.1041, "lng": 103.1993 },
    "image_placeholder": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    "facebook": "https://www.facebook.com/kinyei",
    "website": "https://www.kinyei.org"
  },
  {
    "name": "Choco L’art Café",
    "provinceId": "whQqHO2LWKVBg7eQEZIp",
    "address": "Street 117, Battambang City",
    "description": "An artistic café serving hand-crafted chocolates, coffee, and smoothies in a relaxed gallery-style environment.",
    "location": { "lat": 13.1038, "lng": 103.2002 },
    "image_placeholder": "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    "facebook": "https://www.facebook.com/chocolartcafe",
    "website": ""
  },
  {
    "name": "Café Eden",
    "provinceId": "whQqHO2LWKVBg7eQEZIp",
    "address": "Street 2.5, Battambang City",
    "description": "A cozy Western-Khmer fusion café popular with travelers, offering espresso, cakes, and healthy brunch options.",
    "location": { "lat": 13.1018, "lng": 103.1989 },
    "image_placeholder": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    "facebook": "https://www.facebook.com/cafeedenbattambang",
    "website": ""
  },

  /*takeo cafe*/
  {
    "name": "Takeo Riverside Café",
    "provinceId": "N8RrDjJ3tFVxfKyO3oxe",
    "address": "Riverside Road, Daun Keo City, Takeo",
    "description": "A peaceful riverside café offering Khmer and Western-style coffee, smoothies, and breakfast with a view of the Takeo River.",
    "location": { "lat": 10.9903, "lng": 104.7839 },
    "image_placeholder": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    "facebook": "https://www.facebook.com/takeoriversidecafe",
    "website": ""
  },
  {
    "name": "Phka Chhouk Café",
    "provinceId": "N8RrDjJ3tFVxfKyO3oxe",
    "address": "Street 2, Daun Keo City, Takeo Province",
    "description": "A cozy café in the city center serving local-style iced coffee, milk tea, and light snacks with friendly service.",
    "location": { "lat": 10.9875, "lng": 104.7847 },
    "image_placeholder": "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    "facebook": "https://www.facebook.com/phkachhoukcafe",
    "website": ""
  },
  {
    "name": "Angkor Beans Coffee",
    "provinceId": "N8RrDjJ3tFVxfKyO3oxe",
    "address": "National Road 2, Samrong District, Takeo Province",
    "description": "Modern coffee shop using Cambodian-grown beans, popular among travelers heading to Phnom Penh or Kep.",
    "location": { "lat": 10.9331, "lng": 104.7859 },
    "image_placeholder": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    "facebook": "https://www.facebook.com/angkorbeanscoffee",
    "website": ""
  },

  /*preah sihanouk cafe*/


  {
    "name": "Pos Cafe",
    "provinceId": "0UV6sMLSAyWi46msLA4Y",
    "address": "St. 131, Opposite Hun Sen Primary School, Sangkat 3, Sihanoukville",
    "description": "Quiet café with a local feel.",
    "location": { "lat": null, "lng": null },
    "image_placeholder": "/images/pos_cafe.jpg",
    "facebook": "",
    "website": ""
  },
  {
    "name": "We One Cafe",
    "provinceId": "0UV6sMLSAyWi46msLA4Y",
    "address": "14 Mithona Street, Sihanoukville",
    "description": "Smaller café, good for remote working.",
    "location": { "lat": null, "lng": null },
    "image_placeholder": "/images/we_one_cafe.jpg",
    "facebook": "",
    "website": ""
  },
  {
    "name": "Espresso Kampuchea Sihanoukville",
    "provinceId": "0UV6sMLSAyWi46msLA4Y",
    "address": "No. 168, Sopheak Mongkul St., Sihanoukville",
    "description": "Specialty coffee environment for enthusiasts.",
    "location": { "lat": null, "lng": null },
    "image_placeholder": "/images/espresso_kampuchea.jpg",
    "facebook": "",
    "website": ""
  },
  {
    "name": "HLH Café",
    "provinceId": "0UV6sMLSAyWi46msLA4Y",
    "address": "168 Phu Road, Sihanoukville",
    "description": "Café and milk tea hybrids, cozy space.",
    "location": { "lat": null, "lng": null },
    "image_placeholder": "/images/hlh_cafe.jpg",
    "facebook": "",
    "website": ""
  },
  {
    "name": "Escape Coffee Shop",
    "provinceId": "0UV6sMLSAyWi46msLA4Y",
    "address": "Serendipity Beach St., Sangkat 3, Sihanoukville",
    "description": "Beach-adjacent café vibe, ideal for sunset views.",
    "location": { "lat": null, "lng": null },
    "image_placeholder": "/images/escape_coffee.jpg",
    "facebook": "",
    "website": ""
  },
  {
    "name": "Café Mango",
    "provinceId": "0UV6sMLSAyWi46msLA4Y",
    "address": "Serendipity Beach St., Sangkat 4, Sihanoukville",
    "description": "Beach area café with a chill atmosphere.",
    "location": { "lat": null, "lng": null },
    "image_placeholder": "/images/cafe_mango.jpg",
    "facebook": "",
    "website": ""
  },
  {
    "name": "Port Café",
    "provinceId": "0UV6sMLSAyWi46msLA4Y",
    "address": "Village 3, Sangkat 1, Sihanoukville",
    "description": "Scenic view café, good for relaxing by the waterfront.",
    "location": { "lat": null, "lng": null },
    "image_placeholder": "/images/port_cafe.jpg",
    "facebook": "",
    "website": ""
  },
  {
    "name": "Q & A Books & Café",
    "provinceId": "0UV6sMLSAyWi46msLA4Y",
    "address": "No. 95, Ekareach St., Sihanoukville",
    "description": "Café with books, cozy atmosphere for reading and coffee.",
    "location": { "lat": null, "lng": null },
    "image_placeholder": "/images/qa_cafe.jpg",
    "facebook": "",
    "website": ""
  },
  {
    "name": "Brown Coffee (Sihanoukville branch)",
    "provinceId": "0UV6sMLSAyWi46msLA4Y",
    "address": "Sihanoukville (chain branch; check local street for exact site)",
    "description": "Well-known regional coffee chain with modern café spaces.",
    "location": { "lat": null, "lng": null },
    "image_placeholder": "https://asset.tovtrip.com/uploads/0000/107/2023/03/03/photo-2023-03-03-14-34-30.jpg",
    "facebook": "",
    "website": ""
  },



  /*kep cafe*/
  {
    "name": "Crab Shack Coffee",
    "provinceId": "B6TqzA7YhN8sFmZ2pXoK",
    "address": "Kep Beach Road, Kep Town",
    "description": "A charming beachfront café serving fresh Khmer coffee, iced drinks, and light snacks with views of the Gulf of Thailand.",
    "location": { "lat": 10.4865, "lng": 104.3301 },
    "image_placeholder": "",
    "facebook": "https://www.facebook.com/crabshackcoffee",
    "website": ""
  },
  {
    "name": "Pepper & Bean Café",
    "provinceId": "B6TqzA7YhN8sFmZ2pXoK",
    "address": "Near Kep Market, Kep Town",
    "description": "Local café offering artisanal coffee, homemade pastries, and specialty teas in a cozy setting.",
    "location": { "lat": 10.4852, "lng": 104.3312 },
    "image_placeholder": "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    "facebook": "https://www.facebook.com/pepperandbeankep",
    "website": ""
  },
  {
    "name": "Kep Gardens Café",
    "provinceId": "B6TqzA7YhN8sFmZ2pXoK",
    "address": "Kep National Park Road, Kep Town",
    "description": "Eco-friendly café surrounded by lush greenery, serving pour-over coffee, smoothies, and light Cambodian snacks.",
    "location": { "lat": 10.4890, "lng": 104.3295 },
    "image_placeholder": "images/kepcafe1.jpg",
    "facebook": "https://www.facebook.com/kepgardenscafe",
    "website": ""
  },

  /*mondul cafe*/
  {
    "name": "Coffee Mountain View",
    "address": "Busra Road, Sen Monorom, Mondulkiri",
    "focus": "Local coffee and mountain scenery",
    "description": "A cozy cafe overlooking the hills of Mondulkiri, serving fresh local beans with a panoramic view.",
    "image_placeholder": "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    "facebook": "https://www.facebook.com/coffeemountainview",
    "website": "",
    "provinceId": "abc123MondulkiriId",
  },
  {
    "name": "Phnom Doh Kromom Cafe",
    "address": "Phnom Doh Kromom Hill, Sen Monorom, Mondulkiri",
    "focus": "Nature cafe and local food",
    "description": "Located at the top of Phnom Doh Kromom hill, this cafe offers fresh brews with a peaceful view of the forest and town below.",
    "image_placeholder": "https://images.unsplash.com/photo-1470337458703-46ad1756a187",
    "facebook": "https://www.facebook.com/phnomdohkromomcafe",
    "website": "",
    "provinceId": "abc123MondulkiriId",
  },
  {
    "name": "Jungle Bean Coffee",
    "address": "Street 76, Sen Monorom, Mondulkiri",
    "focus": "Organic coffee and bakery",
    "description": "A warm and modern spot offering organic coffee sourced from Mondulkiri farms, plus fresh pastries and cakes.",
    "image_placeholder": "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    "facebook": "https://www.facebook.com/junglebeancoffee",
    "website": "https://junglebeancoffee.com",
    "provinceId": "abc123MondulkiriId",
  },

  /*banteay cafe*/
  {
    "name": "Golden Bean Cafe",
    "address": "National Road 5, Sisophon City, Banteay Meanchey",
    "focus": "Premium coffee and breakfast",
    "description": "Golden Bean Cafe is a stylish coffee spot in the heart of Sisophon, offering high-quality espresso, local pastries, and a calm work-friendly atmosphere.",
    "image_placeholder": "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    "facebook": "https://www.facebook.com/goldenbeancafe",
    "website": "",
    "provinceId": "abc123BanteayMeancheyId",
  },
  {
    "name": "Bayon Coffee Corner",
    "address": "Street 1, near Central Market, Sisophon, Banteay Meanchey",
    "focus": "Local coffee and Khmer desserts",
    "description": "A friendly corner cafe known for its strong Cambodian-style coffee and traditional desserts, popular with both locals and travelers.",
    "image_placeholder": "https://images.unsplash.com/photo-1523942839745-7848d4c12a4f",
    "facebook": "https://www.facebook.com/bayoncoffeecorner",
    "website": "",
    "provinceId": "abc123BanteayMeancheyId",
  },
  {
    "name": "Angkor Aroma Cafe",
    "address": "O'Chrov District, Poipet City, Banteay Meanchey",
    "focus": "Coffee and international snacks",
    "description": "Angkor Aroma Cafe offers a blend of local and international flavors, with premium coffee, smoothies, and light meals, perfect for travelers passing through Poipet.",
    "image_placeholder": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    "facebook": "https://www.facebook.com/angkoraromacafe",
    "website": "https://angkoraromacafe.com",
    "provinceId": "abc123BanteayMeancheyId",
  },

  /* kandal */

   {
    "name": "Kandal Coffee House",
    "address": "Street 123, Ta Khmau City, Kandal",
    "focus": "Coffee and pastries",
    "description": "A cozy café serving locally roasted coffee, pastries, and light snacks in a relaxing environment.",
    "image_placeholder": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    "facebook": "https://www.facebook.com/kandalcoffeehouse",
    "website": "https://kandalcoffeehouse.com",
    "provinceId": "abc123KandalId"
  },
  {
    "name": "Riverside Brew Café",
    "address": "Riverside Road, Ta Khmau City, Kandal",
    "focus": "Specialty coffee and smoothies",
    "description": "Enjoy freshly brewed specialty coffee while overlooking the river. Light meals and desserts available.",
    "image_placeholder": "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    "facebook": "https://www.facebook.com/riversidebrewcafe",
    "website": "",
    "provinceId": "abc123KandalId"
  },
  {
    "name": "Green Bean Café",
    "address": "Central Market Area, Ta Khmau, Kandal",
    "focus": "Organic coffee and vegan snacks",
    "description": "Serving organic, fair-trade coffee along with vegan cakes and snacks, perfect for a healthy break.",
    "image_placeholder": "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    "facebook": "https://www.facebook.com/greenbeancafe",
    "website": "",
    "provinceId": "abc123KandalId"
  },
  {
    "name": "Sunset Coffee & Lounge",
    "address": "Riverside Blvd, Ta Khmau, Kandal",
    "focus": "Coffee and cocktails",
    "description": "A café-lounge hybrid offering coffee during the day and cocktails in the evening with a beautiful sunset view.",
    "image_placeholder": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    "facebook": "https://www.facebook.com/sunsetcoffeekandal",
    "website": "",
    "provinceId": "abc123KandalId"
  },
  {
    "name": "Cafe Aroma Kandal",
    "address": "National Road 2, Ta Khmau, Kandal",
    "focus": "Coffee and local snacks",
    "description": "Popular among locals, this café serves aromatic coffee with traditional Cambodian snacks and desserts.",
    "image_placeholder": "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    "facebook": "https://www.facebook.com/cafearomakandal",
    "website": "",
    "provinceId": "abc123KandalId"
  },
  {
    "name": "The Cozy Cup",
    "address": "Street 45, Ta Khmau, Kandal",
    "focus": "Coffee, tea, and pastries",
    "description": "Small, friendly café serving specialty coffee, herbal teas, and freshly baked pastries in a cozy atmosphere.",
    "image_placeholder": "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    "facebook": "",
    "website": "",
    "provinceId": "abc123KandalId"
  },
  
  /* Kratié */
  {
    "name": "Mekong Sunrise Café",
    "address": "Riverside Road, Kratié City, Kratié",
    "focus": "Coffee and light breakfasts",
    "description": "Riverside café serving freshly brewed coffee, smoothies, and breakfast items with views of the Mekong River.",
    "image_placeholder": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    "facebook": "",
    "website": "",
    "provinceId": "abc123KratieId"
  },
  {
    "name": "Lotus Bean Coffee",
    "address": "Street 12, Kratié City, Kratié",
    "focus": "Specialty coffee and pastries",
    "description": "Cozy café focusing on artisanal coffee and homemade pastries, perfect for morning and afternoon breaks.",
    "image_placeholder": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    "facebook": "",
    "website": "",
    "provinceId": "abc123KratieId"
  },
  {
    "name": "Riverbank Café",
    "address": "Street 5, Kratié City, Kratié",
    "focus": "Coffee, tea, and desserts",
    "description": "Relaxing café along the riverbank offering a selection of coffees, teas, and light desserts.",
    "image_placeholder": "https://images.unsplash.com/photo-1509474524576-8f4f37790caa",
    "facebook": "",
    "website": "",
    "provinceId": "abc123KratieId"
  },
  {
    "name": "Coffee Horizon",
    "address": "Street 20, Kratié City, Kratié",
    "focus": "Coffee and breakfast",
    "description": "Modern café serving specialty coffee, breakfast plates, and fresh juices in a bright and airy setting.",
    "image_placeholder": "https://images.unsplash.com/photo-1504754524776-8f4f37790cab",
    "facebook": "",
    "website": "",
    "provinceId": "abc123KratieId"
  },
  {
    "name": "Bean & Leaf Kratié",
    "address": "Central Market Area, Kratié City",
    "focus": "Coffee, sandwiches, and pastries",
    "description": "Popular café for locals and tourists offering hand-crafted coffees, sandwiches, and pastries.",
    "image_placeholder": "https://images.unsplash.com/photo-1504754524776-8f4f37790cac",
    "facebook": "",
    "website": "",
    "provinceId": "abc123KratieId"
  },
  {
    "name": "Mekong Brew",
    "address": "Street 18, Kratié City, Kratié",
    "focus": "Coffee and desserts",
    "description": "Specialty coffee shop with Mekong River views, serving espresso drinks, pastries, and light meals.",
    "image_placeholder": "https://images.unsplash.com/photo-1504754524776-8f4f37790cad",
    "facebook": "",
    "website": "",
    "provinceId": "abc123KratieId"
  },

  



];

console.log(coffeeShop);

const myCafe = document.getElementById("btnCafe");


myCafe.addEventListener("click", async () => {
  try {
    for (const cafe of coffeeShop) {
      // Sanitize name for Firestore doc ID
      const safeName = cafe.name.replace(/[^\w\s]/gi, '').replace(/\s+/g, '_').toLowerCase();
      const docId = `${safeName}_${cafe.provinceId}`;

      const docRef = doc(db, "cafeShopCambo", docId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log(`⚠️ Already exists, skipping: ${cafe.name}`);
        continue; // skip existing document
      }

      // Use existing id or fallback to docId
      const cafeId = cafe.id || docId;

      await setDoc(docRef, {
        id: cafeId,
        name: cafe.name,
        address: cafe.address || null,
        operating_hours: cafe.operating_hours || null,
        image_placeholder: cafe.image_placeholder || null,
        focus: cafe.focus || null,
        neighborhood: cafe.neighborhood || null,
        notes: cafe.notes || null,
        provinceId: cafe.provinceId,
        location: cafe.location || null,
        created_at: serverTimestamp(),
        updated_at: serverTimestamp()
      });

      console.log(`✅ Added new cafe: ${cafe.name}`);
    }

    alert("✅ All cafes uploaded to 'allCafe'!");
  } catch (error) {
    console.error("❌ Error uploading cafes:", error);
    alert("❌ Failed to upload cafes. Check console.");
  }
});