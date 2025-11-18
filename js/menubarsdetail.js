

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
import { getFirestore, doc, setDoc, collection } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";


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

const myListDetails = [
  {
    "id": "SR001",
    "name": "The Little Red Fox Espresso Cafe",
    "description": "A stylish espresso bar serving specialty coffee, cold brews, and light bites in the creative hub of Kandal Village. Known for its eco-conscious ethos and community vibe.",
    "address": "593 Hup Guan Street, Mondul 1 Village, Krong Siem Reap, Cambodia",
    "neighborhood": "Kandal Village",
    "phone": "+855 17 669 484",
    "website": "https://thelittleredfoxespresso.com",
    "facebook": "https://www.facebook.com/thelittleredfoxespresso",
    "rating": 4.7,
    "price_range": "$$",
    "focus": "Exceptional brews, eco-conscious, cozy setting",
    "operating_hours": "Thursday through Tuesday 7:00–17:00 (closed Wednesdays)",
    "latitude": 13.3523,
    "longitude": 103.8592,
    "image": "https://thelittleredfoxespresso.com/wp-content/uploads/2021/10/Cafe-Siem-Reap-The-Little-Red-Fox-Espresso-Door-Logo-scaled.jpg"
  },
  {
    "id": "SR002",
    "name": "Sister Srey Cafe",
    "description": "A lively riverside cafe with Western-inspired meals, healthy smoothies, and strong social values — supporting students and landmine clearance projects.",
    "address": "200 Pokambor St, Krong Siem Reap (near Old Market)",
    "neighborhood": "Riverside / Old Market Bridge",
    "phone": "+855 97 723 8007",
    "website": "https://sistersreycafe.com",
    "facebook": "https://www.facebook.com/sistersreycafe",
    "rating": 4.6,
    "price_range": "$$",
    "focus": "Social enterprise, supports local students and APOPO",
    "operating_hours": "7:00–18:00 (daily)",
    "latitude": 13.3542,
    "longitude": 103.8557,
    "image": "https://1.bp.blogspot.com/-ZX_0k0iI-IM/WcjeLIKuO-I/AAAAAAACHps/5076v5NHz2wnrcJ75jRHUCuoimN3Hy-ZACLcBGAs/s1600/L9994732-001.jpg"
  },
  {
    "id": "SR003",
    "name": "Brother Bong Cafe",
    "description": "A local favorite known for its in-house roasted beans, open-air bamboo setting, and award-winning baristas. Great for breakfast, brunch, and coffee lovers.",
    "address": "Street 20, Krong Siem Reap, Cambodia",
    "neighborhood": "East of Siem Reap River",
    "phone": "+855 10 254 350",
    "facebook": "https://www.facebook.com/brotherbongcafe",
    "rating": 4.8,
    "price_range": "$",
    "focus": "Cambodian-owned, eco-friendly, own roastery",
    "operating_hours": "7:00–17:00 (daily)",
    "latitude": 13.3538,
    "longitude": 103.8599,
    "image": "https://camboticket.com/blog/wp-content/uploads/2024/10/Brother-Bong-edited.jpg"
  },
  {
    "id": "SR004",
    "name": "The Bean Embassy",
    "description": "Cambodia’s top barista-led cafe and roastery offering a refined experience for true coffee enthusiasts. Provides training, workshops, and high-quality brews.",
    "address": "Chocolate Road, next to Haven, Krong Siem Reap",
    "neighborhood": "Wat Bo Village area",
    "phone": "+855 93 575 700",
    "facebook": "https://www.facebook.com/thebeanembassy",
    "rating": 4.9,
    "price_range": "$$",
    "focus": "Specialty roastery, barista training hub",
    "operating_hours": "7:30–18:00 (daily)",
    "latitude": 13.3536,
    "longitude": 103.8596,
    "image": "https://www.areacambodia.com/wp-content/uploads/2023/09/The-Bean-Embassy-Cambodia-Cafe-in-Krong-Siem-Reap.jpg"
  },
  {
    "id": "SR005",
    "name": "Footprint Cafes Siem Reap",
    "description": "A social enterprise and coworking cafe offering ethically sourced coffee, international food, and a positive community impact through education support.",
    "address": "Street 26, Wat Bo, Krong Siem Reap, Cambodia",
    "neighborhood": "Wat Bo",
    "phone": "+855 98 241 985",
    "website": "https://www.footprintcafes.org",
    "facebook": "https://www.facebook.com/footprintcafescambodia",
    "rating": 4.6,
    "price_range": "$$",
    "focus": "Ethical cafe, coworking-friendly, supports youth",
    "operating_hours": "7:30–18:00 (daily)",
    "latitude": 13.3564,
    "longitude": 103.8620,
    "image": "https://static2-viaggi.corriereobjects.it/wp-content/uploads/2020/11/18-com-1080x834.jpg?v=1605451288"
  },
  {
    "id": "SR010",
    "name": "Dialogue 26",
    "description": "A sophisticated cafe and bar that transitions from daytime co-working spot to an evening speakeasy. Offers great food, cocktails, and cozy ambience.",
    "address": "Street 27, Sangkat Sala Komreuk, Krong Siem Reap, Cambodia",
    "neighborhood": "Wat Bo Village",
    "phone": "+855 96 333 2026",
    "facebook": "https://www.facebook.com/dialogue26cambodia",
    "rating": 4.7,
    "price_range": "$$",
    "focus": "Brunch, co-working, speakeasy vibes",
    "operating_hours": "7:00–23:00 (daily)",
    "latitude": 13.3569,
    "longitude": 103.8623,
    "image": "https://www.areacambodia.com/wp-content/uploads/2023/09/Dialogue-Coffee-Shop-and-Bar-in-Siem-Reap-1.jpg"
  },
  {
    "id": "SR011",
    "name": "Brown Coffee Treeline",
    "description": "A modern Cambodian coffee chain offering both local and international beverages. This riverside Treeline location is calm, elegant, and scenic.",
    "address": "Corner of Street 23 and Street Achar Sva, Wat Bo Road, Krong Siem Reap",
    "neighborhood": "Wat Bo Road",
    "phone": "+855 23 988 381",
    "website": "https://www.browncoffee.com.kh",
    "facebook": "https://www.facebook.com/browncoffeeandbakery",
    "rating": 4.5,
    "price_range": "$$",
    "focus": "Modern Cambodian chain, riverside ambiance",
    "operating_hours": "6:30–21:00 (daily)",
    "latitude": 13.3562,
    "longitude": 103.8610,
    "image": "https://www.areacambodia.com/wp-content/uploads/2023/09/Brown-Coffee-and-Bakery-is-close-to-a-Caltex-gas-station-Thapul-NR6-in-Siem-Reap.jpg"
  },
  {
    "id": "SR012",
    "name": "The Village Bakery & Cafe",
    "description": "A beloved bakery-café in Kandal Village offering artisan breads, European pastries, and a small breakfast and lunch menu with a cozy local atmosphere.",
    "address": "575 Hap Guan Street, Mondul 1 Village, Krong Siem Reap",
    "neighborhood": "Kandal Village",
    "phone": "+855 92 223 864",
    "facebook": "https://www.facebook.com/thevillagecafesiemreap",
    "rating": 4.6,
    "price_range": "$$",
    "focus": "Bakery & cafe, bread and pastry specialists",
    "operating_hours": "7:00–19:30 (daily)",
    "latitude": 13.3525,
    "longitude": 103.8591,
    "image": "https://leightontravels.com/wp-content/uploads/2020/04/The-Village-Cafe-Siem-Reap-.jpeg"
  },

  {
    "restaurantId": "aX1zYpO3LmDh9qK7WbP2",
    "name": "Cuisine Wat Damnak",
    "cuisine": "Modern Khmer / Fine Dining",
    "address": "Wat Damnak Village, Sangkat Sala Kamreuk, Siem Reap, Cambodia",
    "neighborhood": "Wat Damnak Village, Siem Reap",
    "description": "A pioneering fine dining restaurant by Chef Joannès Rivière, serving elegant Cambodian tasting menus that celebrate local ingredients and seasonal produce in a charming wooden house setting.",
    "price_range": "High",
    "highlights": [
      "Rotating seasonal tasting menu every two weeks",
      "Locally sourced ingredients from Siem Reap region",
      "French-Cambodian fusion fine dining"
    ],
    "opening_hours": "Tuesday – Saturday, 6:30 PM – 10:00 PM (closed Sunday & Monday)",
    "contact": {
      "phone": "+855 92 215 454",
      "website": "https://www.cuisinewatdamnak.com"
    },
    "location": { "lat": 13.3478, "lng": 103.8627 },
    "image": "https://heremag-prod-app-deps-s3heremagassets-bfie27mzpk03.s3.amazonaws.com/wp-content/uploads/2019/05/05202608/CWD-Dining-room-upstairs-1200x792.jpg"
  },
  {
    "restaurantId": "qW9sRkT7HpLg3vB6YnJ8",
    "name": "Embassy by Chef Kimsan",
    "cuisine": "Contemporary Khmer",
    "address": "King’s Road Angkor, Mondul 1 Village, Krong Siem Reap, Cambodia",
    "neighborhood": "King’s Road Angkor",
    "description": "An exclusive fine dining venue led by the Kimsan twins, offering multi-course Khmer tasting menus that reinterpret Cambodian cuisine with artistic presentation.",
    "price_range": "High",
    "highlights": [
      "Multi-course Khmer tasting menu",
      "Run by the famous Kimsan twin chefs",
      "Elegant fine-dining atmosphere"
    ],
    "opening_hours": "Daily 12:00 PM – 2:30 PM, 6:00 PM – 10:00 PM",
    "contact": {
      "phone": "+855 17 999 772",
      "website": "https://www.embassy-restaurant.com"
    },
    "location": { "lat": 13.3556, "lng": 103.8593 },
    "image": "https://media-cdn.tripadvisor.com/media/photo-m/1280/2a/1f/bd/46/embassy-restaurant-table.jpg"
  },
  {
    "restaurantId": "pL4xNsE2VtFb8rY9JmC6",
    "name": "Chanrey Tree",
    "cuisine": "Khmer / Cambodian",
    "address": "Pokambor Ave, Riverside, Wat Bo Road, Siem Reap, Cambodia",
    "neighborhood": "Riverside, Wat Bo Road",
    "description": "A refined Khmer restaurant known for its elegant riverside ambiance and authentic Cambodian dishes presented with modern flair.",
    "price_range": "Moderate to High",
    "highlights": [
      "Signature fish amok and banana blossom salad",
      "Riverside garden setting",
      "Traditional recipes with creative presentation"
    ],
    "opening_hours": "Daily 11:00 AM – 10:00 PM",
    "contact": {
      "phone": "+855 63 767 997",
      "website": "https://www.thechanreytree.com"
    },
    "location": { "lat": 13.3534, "lng": 103.8605 },
    "image": "https://c1.staticflickr.com/1/494/19316596642_30c4aecc44_b.jpg"
  },
  {
    "restaurantId": "hK8mWdQ5BpFr6nV2ZxC3",
    "name": "Viroth’s Restaurant",
    "cuisine": "Khmer / International",
    "address": "Wat Bo Street, Siem Reap, Cambodia",
    "neighborhood": "Wat Bo Area",
    "description": "Stylish open-air dining with a blend of Khmer and international dishes, set amidst tropical gardens and contemporary décor.",
    "price_range": "Moderate",
    "highlights": [
      "Lush tropical garden ambiance",
      "Popular with tourists and locals",
      "Wide range of Khmer and Western dishes"
    ],
    "opening_hours": "Daily 11:00 AM – 10:30 PM",
    "contact": {
      "phone": "+855 63 963 390",
      "website": "https://www.viroth-villa.com/restaurant"
    },
    "location": { "lat": 13.3551, "lng": 103.8601 },
    "image": "https://www.viroth-villa.com/wp-content/uploads/2019/10/2017-12-09-Viroths-Restaurant-0385-Edit-2.jpg"
  },
  {
    "restaurantId": "nT7vPfC9LqWb1sK8JdE5",
    "name": "Mahob Khmer Cuisine",
    "cuisine": "Khmer / Fusion",
    "address": "Charles De Gaulle Blvd, Siem Reap, Cambodia",
    "neighborhood": "Charles De Gaulle Blvd",
    "description": "A beautiful wooden-house restaurant offering modern Khmer dishes with farm-to-table freshness and fusion influences.",
    "price_range": "Moderate to High",
    "highlights": [
      "Organic produce from its own farm",
      "Set in a traditional Khmer wooden house",
      "Creative fusion of local and modern styles"
    ],
    "opening_hours": "Daily 11:00 AM – 10:00 PM",
    "contact": {
      "phone": "+855 78 208 374",
      "website": "https://www.mahobkhmer.com"
    },
    "location": { "lat": 13.3642, "lng": 103.8618 },
    "image": "https://www.areacambodia.com/wp-content/uploads/2023/09/Mahob-Khmer-Cuisine-in-Siem-Reap.jpg"
  },
  {
    "restaurantId": "rB6nVfM4XqLp9tH2WcJ7",
    "name": "Footprint Café",
    "cuisine": "Café / International",
    "address": "Street 26, Wat Bo Area, Krong Siem Reap, Cambodia",
    "neighborhood": "Wat Bo Area",
    "description": "Community-focused café and restaurant that donates profits to local education projects while serving quality coffee and wholesome international dishes.",
    "price_range": "Low to Moderate",
    "highlights": [
      "Social enterprise supporting education",
      "Cozy coworking and reading atmosphere",
      "Western breakfast and Khmer food"
    ],
    "opening_hours": "Daily 7:30 AM – 6:00 PM",
    "contact": {
      "phone": "+855 81 205 440",
      "website": "https://www.footprintcafes.org"
    },
    "location": { "lat": 13.3536, "lng": 103.8633 },
    "image": "https://laptopfriendly.co/images/places/siem-reap/footprint-cafes/footprint-cafes--other.jpg"
  },
  {
    "restaurantId": "zE2yHkU9NmQf5pR4XaT8",
    "name": "Ox Club",
    "cuisine": "Steakhouse / European",
    "address": "Taphul Road, Krong Siem Reap, Cambodia",
    "neighborhood": "Central Siem Reap",
    "description": "Modern European-style steakhouse offering premium cuts, excellent wines, and cozy ambiance for casual fine dining.",
    "price_range": "Moderate",
    "highlights": [
      "Premium beef and wine selection",
      "Chic industrial interior design",
      "Popular among expats"
    ],
    "opening_hours": "Daily 11:00 AM – 11:00 PM",
    "contact": {
      "phone": "+855 12 218 333",
      "website": "https://www.facebook.com/oxclubsiemreap"
    },
    "location": { "lat": 13.3577, "lng": 103.8549 },
    "image": "https://www.areacambodia.com/wp-content/uploads/2023/09/Ox-Club-Restaurant-Siem-Reap.jpg"
  },
  {
    "restaurantId": "fM3kNsB8XvTq2pD7LrC4",
    "name": "Street Food & Pub Street Stalls",
    "cuisine": "Khmer Street Food",
    "address": "Pub Street, Old Market Area, Krong Siem Reap, Cambodia",
    "neighborhood": "Pub Street, Old Market Area",
    "description": "The heart of Siem Reap’s street-food culture with endless stalls serving Cambodian favorites, skewers, and international snacks.",
    "price_range": "Low",
    "highlights": [
      "Wide range of local street food",
      "Vibrant nightlife scene",
      "Budget-friendly eats"
    ],
    "opening_hours": "Daily 5:00 PM – Midnight",
    "contact": {
      "phone": null,
      "website": null
    },
    "location": { "lat": 13.3550, "lng": 103.8552 },
    "image": "https://www.holidify.com/images/cmsuploads/compressed/PubStreet_20190926121537_20190926121604.jpg"
  },


  {
    "hotelId": "aX1zYpO3LmDh9qK7WbP2",
    "name": "Shinta Mani Angkor",
    "description": "An award-winning boutique luxury hotel located in the heart of Siem Reap, designed by renowned architect Bill Bensley. Offers elegant Khmer-inspired rooms, world-class spa, and fine dining experiences.",
    "address": "Junction of Oum Khun and 14th Street, Krong Siem Reap, Cambodia",
    "price_range": "$150 - $300 per night",
    "rating": 4.9,
    "focus": "Luxury, Spa, Pool, Fine Dining",
    "facilities": [
      "Outdoor swimming pool",
      "Spa and wellness center",
      "Fine dining restaurant",
      "Airport shuttle",
      "Free WiFi"
    ],
    "contact": {
      "phone": "+855 63 761 998",
      "website": "https://shintamani.com",
      "email": "info@shintamani.com"
    },
    "location": { "lat": 13.3565, "lng": 103.8561 },
    "check_in": "2:00 PM",
    "check_out": "12:00 PM",
    "image": "https://secure.s.forbestravelguide.com/img/properties/shinta-mani-angkor/extra-large/shinta-mani-angkor-lap-pool.jpg"
  },
  {
    "hotelId": "pQ8nFsT6WzRf3kJ1UvE4",
    "name": "Golden Temple Hotel",
    "description": "A stylish 4-star hotel combining traditional Khmer aesthetics with modern comforts. Guests enjoy complimentary massage, airport pickup, and a warm, personal service experience.",
    "address": "7 Makara Street, Wat Bo Village, Krong Siem Reap, Cambodia",
    "price_range": "$80 - $150 per night",
    "rating": 4.8,
    "focus": "Family Friendly, Spa, Cultural Experience",
    "facilities": [
      "Outdoor pool",
      "Traditional spa treatments",
      "Complimentary massage and airport transfer",
      "Restaurant and bar",
      "Free bicycles"
    ],
    "contact": {
      "phone": "+855 63 761 800",
      "website": "https://www.goldentemplehotel.com",
      "email": "info@goldentemplehotel.com"
    },
    "location": { "lat": 13.3540, "lng": 103.8592 },
    "check_in": "2:00 PM",
    "check_out": "12:00 PM",
    "image": "https://www.areacambodia.com/wp-content/uploads/2023/09/The-Golden-Temple-Hotel-in-Siem-Reap.jpg"
  },
  {
    "hotelId": "nRt4KjY7FpUz2aVcXeH5",
    "name": "FCC Angkor by Avani",
    "description": "A historic colonial mansion turned luxury boutique hotel on the riverside. Features modern design blended with heritage charm, tropical gardens, and a saltwater pool.",
    "address": "Pokambor Avenue, next to the Royal Residence, Krong Siem Reap, Cambodia",
    "price_range": "$120 - $250 per night",
    "rating": 4.7,
    "focus": "Colonial Style, Riverside, Heritage",
    "facilities": [
      "Saltwater pool",
      "Fitness center",
      "Spa & wellness",
      "Fine dining restaurant",
      "Art gallery"
    ],
    "contact": {
      "phone": "+855 63 760 280",
      "website": "https://www.avanihotels.com/en/fcc-angkor-siem-reap",
      "email": "reservations.angkor@avanihotels.com"
    },
    "location": { "lat": 13.3618, "lng": 103.8590 },
    "check_in": "2:00 PM",
    "check_out": "12:00 PM",
    "image": "https://assets.avanihotels.com/image/upload/q_auto,f_auto/media/minor/avani/images/angkor-siem-reap/homepage/fcc_angkor_managed_by_avani_exterior_night_1920x1080.jpg"
  },
  {
    "hotelId": "bLm6RtG9SdQp4wAzErX3",
    "name": "Tara Angkor Hotel",
    "description": "A contemporary 4-star hotel conveniently located near Angkor Wat, offering modern rooms, a full-service spa, and excellent dining options.",
    "address": "Vithei Charles De Gaulle, Krong Siem Reap, Cambodia",
    "price_range": "$60 - $120 per night",
    "rating": 4.6,
    "focus": "Modern Comfort, Spa, Fitness Center",
    "facilities": [
      "Spa & wellness center",
      "Outdoor pool",
      "Fitness gym",
      "Conference facilities",
      "Restaurant & bar"
    ],
    "contact": {
      "phone": "+855 63 966 661",
      "website": "https://www.taraangkorhotel.com",
      "email": "info@taraangkorhotel.com"
    },
    "location": { "lat": 13.3657, "lng": 103.8632 },
    "check_in": "2:00 PM",
    "check_out": "12:00 PM",
    "image": "https://www.areacambodia.com/wp-content/uploads/2023/09/Tara-Angkor-Hotel-4-Star-Hotel-in-Siem-Reap.jpg"
  },
  {
    "hotelId": "tHs2MqL8ZpJd6xBnVyE5",
    "name": "Anantara Angkor Resort",
    "description": "An exquisite 5-star resort offering personalized luxury experiences including private tours, wellness programs, and fine dining near Angkor Wat.",
    "address": "National Road No. 6, Krong Siem Reap, Cambodia",
    "price_range": "$200 - $400 per night",
    "rating": 4.9,
    "focus": "Luxury, Cultural Tours, Wellness",
    "facilities": [
      "Outdoor pool and spa",
      "Private butler service",
      "Fitness center",
      "Cultural experiences",
      "Airport transfer"
    ],
    "contact": {
      "phone": "+855 63 966 788",
      "website": "https://www.anantara.com/en/angkor-siem-reap",
      "email": "angkor@anantara.com"
    },
    "location": { "lat": 13.3789, "lng": 103.8665 },
    "check_in": "3:00 PM",
    "check_out": "12:00 PM",
    "image": "https://res.cloudinary.com/enchanting/w_1600,h_700,c_fill,f_auto,q_70/artemis-mdm/22688930-9ce1-4337-b378-1d8c4d72b909.jpg"
  },
  {
    "hotelId": "qWe3AzN7KrLp8sGvTcM1",
    "name": "Hari Residence & Spa",
    "description": "A well-rated mid-range hotel featuring a rooftop pool and spa, offering excellent value in a central location close to Pub Street.",
    "address": "City Center, Krong Siem Reap, Cambodia",
    "price_range": "$50 - $90 per night",
    "rating": 4.5,
    "focus": "City Center, Pool, Affordable",
    "facilities": [
      "Rooftop pool",
      "Spa & massage services",
      "Restaurant",
      "Airport shuttle",
      "Free WiFi"
    ],
    "contact": {
      "phone": "+855 63 965 666",
      "website": "https://www.hariresidence.com",
      "email": "info@hariresidence.com"
    },
    "location": { "lat": 13.3542, "lng": 103.8559 },
    "check_in": "2:00 PM",
    "check_out": "12:00 PM",
    "image": "https://www.areacambodia.com/wp-content/uploads/2023/09/HARI-Residence-Spa-Luxury-Hotel-in-Siem-Reap.jpg"
  },
  {
    "hotelId": "uJr5NcE2XmQy9bFtGwH7",
    "name": "Memoire d’Angkor Boutique Hotel",
    "description": "An art-inspired boutique hotel close to the Old Market, known for its elegant design, friendly staff, and relaxing atmosphere.",
    "address": "Bakheng Road, Krong Siem Reap, Cambodia",
    "price_range": "$70 - $130 per night",
    "rating": 4.6,
    "focus": "Boutique, Art, Near Pub Street",
    "facilities": [
      "Art gallery and cultural exhibits",
      "Outdoor pool",
      "Spa & wellness center",
      "Restaurant and bar",
      "Airport shuttle"
    ],
    "contact": {
      "phone": "+855 63 969 168",
      "website": "https://www.memoiredangkor.com",
      "email": "info@memoiredangkor.com"
    },
    "location": { "lat": 13.3562, "lng": 103.8555 },
    "check_in": "2:00 PM",
    "check_out": "12:00 PM",
    "image": "https://www.walletcambodia.com/wp-content/uploads/memoire-dangkor-boutique-hotel.jpg"
  },
  {
    "hotelId": "yZn8LpQ3HwRs6kEvUcT9",
    "name": "Lotus Blanc Resort",
    "description": "A peaceful resort surrounded by lush gardens, offering a relaxing retreat with a large pool, spa, and family-friendly amenities.",
    "address": "National Road 6, Kruos Village, Krong Siem Reap, Cambodia",
    "price_range": "$90 - $160 per night",
    "rating": 4.7,
    "focus": "Resort, Pool, Garden",
    "facilities": [
      "Tropical garden and outdoor pool",
      "Spa & wellness center",
      "Fitness gym",
      "Multiple dining options",
      "Airport pickup"
    ],
    "contact": {
      "phone": "+855 63 969 999",
      "website": "https://www.lotusblancresort.com",
      "email": "info@lotusblancresort.com"
    },
    "location": { "lat": 13.3701, "lng": 103.8618 },
    "check_in": "2:00 PM",
    "check_out": "12:00 PM",
    "image": "https://lotus-blanc-resort.hotelinsiemreap.net/data/Photos/OriginalPhoto/9179/917993/917993053/siem-reap-lotus-blanc-hotel-resort-photo-28.JPEG"
  }
]

console.log(myListDetails);

const menuBarBtn = document.getElementById("btnMenu");
console.log(menuBarBtn);

menuBarBtn.addEventListener("click", async() =>{
       try {
    const siemReapCollection = collection(db, "siemReapMenu");

    for (const item of myListDetails) {
      // Use restaurantId, hotelId, or id as Firestore document ID
      const docId = item.restaurantId || item.hotelId || item.id;
      console.log("docId:", docId);

      if (!docId) continue; // skip if no valid id

      await setDoc(doc(siemReapCollection, docId), item);
      console.log(`✅ Uploaded: ${item.name}`);
    }

    console.log("🎉 All data uploaded successfully to 'siemReapMenu' collection!");
  } catch (error) {
    console.error("❌ Error uploading data:", error);
  }
});






