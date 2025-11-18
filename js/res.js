import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
import {
    getFirestore,
    collection,
    addDoc,
    setDoc,
    query,
    where,
    getDocs,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";




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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const restaurant = [

    {
        "provinceId": "iXYpAdo3OZFh3jknWup1",
        "name": "Embassy by Chef Kimsan",
        "cuisine": "Contemporary Khmer",
        "neighborhood": "King’s Road Angkor, Siem Reap",
        "short_description": "Elegant restaurant offering multi-course Khmer tasting menus crafted by the Kimsan twin chefs.",
        "price_range": "High",
        "notes": "Focused on premium ingredients and presentation.",
        "image_placeholder": "images/sRes1.jpg",
        "provinceName": "Siem Reap"
    },
    {
        "provinceId": "iXYpAdo3OZFh3jknWup1",
        "name": "Chanrey Tree",
        "cuisine": "Khmer / Cambodian",
        "neighborhood": "Riverside, Wat Bo Road",
        "short_description": "Refined Khmer restaurant featuring traditional recipes with a modern presentation in a riverside setting.",
        "price_range": "Moderate to High",
        "notes": "Famous for fish amok and banana blossom salad.",
        "image_placeholder": "https://c1.staticflickr.com/1/494/19316596642_30c4aecc44_b.jpg",
        "provinceName": "Siem Reap"
    },
    {
        "provinceId": "iXYpAdo3OZFh3jknWup1",
        "name": "Viroth’s Restaurant",
        "cuisine": "Khmer / International",
        "neighborhood": "Wat Bo Area, Siem Reap",
        "short_description": "Stylish open-air restaurant offering Khmer and Western favorites in a lush tropical garden.",
        "price_range": "Moderate",
        "notes": "Popular with both locals and tourists.",
        "image_placeholder": "https://www.viroth-villa.com/wp-content/uploads/2019/10/2017-12-09-Viroths-Restaurant-0385-Edit-2.jpg",
        "provinceName": "Siem Reap"
    },

    /* pp */

    {
        "provinceId": "ZFpogBIP5lCwDFdeAOjE",
        "name": "Malis Restaurant Phnom Penh",
        "address": "136 Norodom Blvd (corner of Street 41), Phnom Penh",
        "focus": "Fine dining, traditional Khmer cuisine",
        "description": "Malis is one of Phnom Penh’s most iconic restaurants, offering authentic Cambodian cuisine with a refined touch in a lush garden setting.",
        "image_placeholder": "https://www.malis-restaurant.com/wp-content/uploads/2020/06/Malis-Phnom-Penh-Exterior.jpg",
        "facebook": "https://www.facebook.com/MalisRestaurant",
        "website": "https://www.malis-restaurant.com",
        "contact": {
            "phone": "+855 15 814 888",
            "email": "reservation@malis-restaurant.com"
        },
        "rating": 4.8,
        "price_range": "$20 - $50 per person",
        "provinceName": "Phnom Penh"
    },
    {
        "provinceId": "ZFpogBIP5lCwDFdeAOjE",
        "name": "Topaz Restaurant",
        "address": "162 Norodom Blvd, Phnom Penh",
        "focus": "French fine dining, wine cellar",
        "description": "Topaz is a long-standing fine dining restaurant in Phnom Penh, serving authentic French cuisine with impeccable service and a world-class wine list.",
        "image_placeholder": "https://www.topaz-restaurant.com/wp-content/uploads/2020/08/Topaz-Facade.jpg",
        "facebook": "https://www.facebook.com/TopazPhnomPenh",
        "website": "https://www.topaz-restaurant.com",
        "contact": {
            "phone": "+855 81 333 279",
            "email": "info@topaz-restaurant.com"
        },
        "rating": 4.7,
        "price_range": "$30 - $80 per person",
        "provinceName": "Phnom Penh"
    },
    {
        "provinceId": "ZFpogBIP5lCwDFdeAOjE",
        "name": "Backyard Café",
        "address": "11B Street 246, Phnom Penh",
        "focus": "Vegan, healthy, organic café",
        "description": "Backyard Café offers a peaceful, plant-based dining experience with a menu full of smoothies, salads, and raw desserts in the heart of Phnom Penh.",
        "image_placeholder": "https://www.backyardcafephnompenh.com/wp-content/uploads/2021/02/backyard-cafe-interior.jpg",
        "facebook": "https://www.facebook.com/backyardcafepp",
        "website": "https://www.backyardcafephnompenh.com",
        "contact": {
            "phone": "+855 77 943 135",
            "email": "hello@backyardcafephnompenh.com"
        },
        "rating": 4.6,
        "price_range": "$8 - $25 per person",
        "provinceName": "Phnom Penh"
    },

    /* mondul */

    {
        "provinceId": "abc123MondulkiriId",
        "name": "Bamboo Bistro",
        "address": "Sen Monorom Town Center, Mondulkiri",
        "focus": "Local Khmer cuisine, organic ingredients",
        "description": "Bamboo Bistro serves traditional Khmer dishes using fresh local ingredients, offering a cozy and rustic dining atmosphere.",
        "image_placeholder": "https://images.unsplash.com/photo-1598514982188-1a2d7f1e1c2a",
        "facebook": "https://www.facebook.com/bamboobistromondulkiri",
        "website": "",
        "contact": {
            "phone": "+855 12 345 678",
            "email": "info@bamboobistro.com"
        },
        "rating": 4.5,
        "price_range": "$5 - $15 per person",
        "provinceName": "Mondulkiri"
    },
    {
        "provinceId": "abc123MondulkiriId",
        "name": "Highland Café",
        "address": "Near Bou Sra Waterfall, Mondulkiri",
        "focus": "Coffee, light meals, smoothies",
        "description": "Highland Café is a popular stop for travelers visiting Bou Sra Waterfall, offering freshly brewed coffee, healthy snacks, and scenic views.",
        "image_placeholder": "https://images.unsplash.com/photo-1590080878415-3f20a2c5f8a1",
        "facebook": "https://www.facebook.com/highlandcafemondulkiri",
        "website": "",
        "contact": {
            "phone": "+855 98 765 432",
            "email": "contact@highlandcafe.com"
        },
        "rating": 4.4,
        "price_range": "$3 - $12 per person",
        "provinceName": "Mondulkiri"
    },
    {
        "provinceId": "abc123MondulkiriId",
        "name": "Elephant Valley Restaurant",
        "address": "Elephant Valley Project Area, Mondulkiri",
        "focus": "Organic meals, local specialties",
        "description": "A serene restaurant inside the Elephant Valley Project, offering visitors healthy meals while supporting elephant conservation and local communities.",
        "image_placeholder": "https://images.unsplash.com/photo-1581090700227-7c2e8b98b8ea",
        "facebook": "https://www.facebook.com/elephantvalleyrestaurant",
        "website": "",
        "contact": {
            "phone": "+855 97 234 567",
            "email": "info@elephantvalleyrestaurant.com"
        },
        "rating": 4.6,
        "price_range": "$6 - $20 per person",
        "provinceName": "Mondulkiri"
    },

    /* Banteay Meanchey */

    {
        "provinceId": "abc123BanteayMeancheyId",
        "name": "Mekong Riverside Restaurant",
        "address": "Serei Saophoan Town Center, Banteay Meanchey",
        "focus": "Khmer cuisine, riverside dining",
        "description": "A cozy riverside restaurant offering traditional Khmer dishes, fresh seafood, and scenic views of the Mekong.",
        "image_placeholder": "https://images.unsplash.com/photo-1598514982188-1a2d7f1e1c2a",
        "facebook": "https://www.facebook.com/mekongriversiderestaurant",
        "website": "",
        "contact": {
            "phone": "+855 12 345 001",
            "email": "info@mekongriverside.com"
        },
        "rating": 4.5,
        "price_range": "$5 - $15 per person"
    },
    {
        "provinceId": "abc123BanteayMeancheyId",
        "name": "Borderland Café",
        "address": "Near Poipet Market, Banteay Meanchey",
        "focus": "Coffee, snacks, light meals",
        "description": "A casual café for travelers near the Thai border, serving coffee, pastries, and light meals with a friendly atmosphere.",
        "image_placeholder": "https://images.unsplash.com/photo-1590080878415-3f20a2c5f8a1",
        "facebook": "https://www.facebook.com/borderlandcafebm",
        "website": "",
        "contact": {
            "phone": "+855 98 765 002",
            "email": "contact@borderlandcafe.com"
        },
        "rating": 4.3,
        "price_range": "$2 - $10 per person"
    },
    {
        "provinceId": "abc123BanteayMeancheyId",
        "name": "Golden Mango Restaurant",
        "address": "Serei Saophoan City, Banteay Meanchey",
        "focus": "Fusion Khmer & Thai cuisine",
        "description": "Golden Mango blends Khmer and Thai culinary styles, offering flavorful dishes in a modern, comfortable setting.",
        "image_placeholder": "https://images.unsplash.com/photo-1581090700227-7c2e8b98b8ea",
        "facebook": "https://www.facebook.com/goldenmangorestaurantbm",
        "website": "",
        "contact": {
            "phone": "+855 97 234 003",
            "email": "info@goldenmangorestaurant.com"
        },
        "rating": 4.6,
        "price_range": "$6 - $18 per person"
    },

    /* btb */

    {
        "provinceId": "whQqHO2LWKVBg7eQEZIp",
        "name": "The Rice Field Restaurant",
        "address": "Street 1, Battambang City Center",
        "focus": "Khmer traditional cuisine",
        "description": "Enjoy authentic Khmer dishes while overlooking lush rice fields. Known for friendly service and fresh ingredients.",
        "image_placeholder": "https://images.unsplash.com/photo-1576765607923-b7f2293e9e4f",
        "facebook": "https://www.facebook.com/ricefieldrestaurant",
        "website": "",
        "contact": {
            "phone": "+855 12 345 101",
            "email": "info@ricefieldrestaurant.com"
        },
        "rating": 4.6,
        "price_range": "$5 - $15 per person"
    },
    {
        "provinceId": "whQqHO2LWKVBg7eQEZIp",
        "name": "French Corner Café",
        "address": "Street 57, Old French Quarter, Battambang",
        "focus": "French-inspired cuisine, coffee",
        "description": "A charming café serving French pastries, coffee, and fusion dishes in a relaxed colonial-style atmosphere.",
        "image_placeholder": "https://images.unsplash.com/photo-1589308078051-6a8c6f0f58f2",
        "facebook": "https://www.facebook.com/frenchcornerbattambang",
        "website": "",
        "contact": {
            "phone": "+855 97 765 202",
            "email": "contact@frenchcornerbb.com"
        },
        "rating": 4.5,
        "price_range": "$3 - $12 per person"
    },
    {
        "provinceId": "whQqHO2LWKVBg7eQEZIp",
        "name": "Golden Mango Bistro",
        "address": "Street 23, Battambang City",
        "focus": "Khmer & Thai fusion",
        "description": "Golden Mango Bistro offers a modern take on Khmer and Thai dishes, with fresh ingredients and a cozy dining environment.",
        "image_placeholder": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        "facebook": "https://www.facebook.com/goldenmangobistrobb",
        "website": "",
        "contact": {
            "phone": "+855 93 234 303",
            "email": "info@goldenmangobistro.com"
        },
        "rating": 4.7,
        "price_range": "$6 - $18 per person"
    },

    /*Kampong Cham*/

    {
        "name": "Mekong Riverside Restaurant",
        "description": "A riverside eatery offering fresh seafood and traditional Khmer dishes with scenic Mekong views.",
        "address": "Street 1, Kampong Cham City, Kampong Cham",
        "focus": "Seafood & Khmer cuisine",
        "image_placeholder": "https://i.pinimg.com/564x/ab/cd/12/abcd1234567890.jpg",
        "provinceId": "wQovHNdLBaWc6tJBtoCa"
    },
    {
        "name": "Cham Garden Restaurant",
        "description": "A cozy restaurant surrounded by greenery, serving Cambodian favorites and vegetarian options.",
        "address": "Street 5, Kampong Cham City, Kampong Cham",
        "focus": "Khmer & Vegetarian",
        "image_placeholder": "https://i.pinimg.com/564x/12/34/56/123456abcdef7890.jpg",
        "provinceId": "wQovHNdLBaWc6tJBtoCa"
    },
    {
        "name": "Phnom Srei Dining",
        "description": "Traditional Cambodian restaurant known for its flavorful soups, grilled meats, and friendly service.",
        "address": "Central Market Area, Kampong Cham",
        "focus": "Traditional Khmer",
        "image_placeholder": "https://i.pinimg.com/564x/98/76/54/987654abcd1234.jpg",
        "provinceId": "wQovHNdLBaWc6tJBtoCa"
    },

    /*Kampong Chhnang*/

    {
        "name": "Tonle Sap Riverside Restaurant",
        "description": "A charming riverside eatery serving fresh fish, traditional Khmer dishes, and local specialties.",
        "address": "Riverside Street, Kampong Chhnang City, Kampong Chhnang",
        "focus": "Seafood & Khmer cuisine",
        "image_placeholder": "https://i.pinimg.com/564x/aa/bb/cc/aabbcc1234567890.jpg",
        "provinceId": "abc123KampongChhnangId"
    },
    {
        "name": "Pottery Village Dining",
        "description": "Cozy restaurant near the famous pottery villages, offering traditional Cambodian meals and vegetarian options.",
        "address": "Pottery Village Road, Kampong Chhnang City, Kampong Chhnang",
        "focus": "Khmer & Vegetarian",
        "image_placeholder": "https://i.pinimg.com/564x/dd/ee/ff/ddeeff1234567890.jpg",
        "provinceId": "abc123KampongChhnangId"
    },
    {
        "name": "Floating Market Restaurant",
        "description": "Traditional Cambodian restaurant known for its flavorful soups, grilled meats, and floating market ambiance.",
        "address": "Floating Market Area, Kampong Chhnang",
        "focus": "Traditional Khmer",
        "image_placeholder": "https://i.pinimg.com/564x/11/22/33/112233abcdef1234.jpg",
        "provinceId": "abc123KampongChhnangId"
    },

    /* Kampong Speu */

    {
        "name": "Speu Riverside Restaurant",
        "description": "A scenic riverside restaurant serving fresh local seafood and traditional Khmer dishes.",
        "address": "Riverside Street, Kampong Speu City, Kampong Speu",
        "focus": "Seafood & Khmer cuisine",
        "image_placeholder": "https://i.pinimg.com/564x/aa/bb/cc/aabbcc1234567890.jpg",
        "provinceId": "abc123KampongSpeuId",
        "provinceName": "Kampong Speu"
    },
    {
        "name": "Mountain View Khmer Eatery",
        "description": "Cozy restaurant with a view of nearby hills, offering traditional Cambodian meals and vegetarian options.",
        "address": "Hill Road, Kampong Speu City, Kampong Speu",
        "focus": "Khmer & Vegetarian",
        "image_placeholder": "https://i.pinimg.com/564x/dd/ee/ff/ddeeff1234567890.jpg",
        "provinceId": "abc123KampongSpeuId",
        "provinceName": "Kampong Speu"
    },
    {
        "name": "Ancient Temple Restaurant",
        "description": "Traditional Khmer restaurant near historical temples, known for flavorful soups, grilled meats, and friendly service.",
        "address": "Temple Area, Kampong Speu",
        "focus": "Traditional Khmer",
        "image_placeholder": "https://i.pinimg.com/564x/11/22/33/112233abcdef1234.jpg",
        "provinceId": "abc123KampongSpeuId",
        "provinceName": "Kampong Speu"
    },

    /* Kampong Thom */

    {
        "name": "Sambor Riverside Restaurant",
        "description": "Riverside restaurant offering fresh seafood and traditional Khmer dishes with a view of the Mekong.",
        "address": "Riverside Road, Kampong Thom City, Kampong Thom",
        "focus": "Seafood & Khmer cuisine",
        "image_placeholder": "https://i.pinimg.com/564x/aa/bb/cc/aabbcc1234567890.jpg",
        "provinceId": "abc123KampongThomId",
        "provinceName": "Kampong Thom"
    },
    {
        "name": "Forest Edge Khmer Eatery",
        "description": "Cozy eatery near forested areas serving authentic Cambodian meals and vegetarian-friendly options.",
        "address": "Forest Road, Kampong Thom City, Kampong Thom",
        "focus": "Khmer & Vegetarian",
        "image_placeholder": "https://i.pinimg.com/564x/dd/ee/ff/ddeeff1234567890.jpg",
        "provinceId": "abc123KampongThomId",
        "provinceName": "Kampong Thom"

    },
    {
        "name": "Ancient Temple Dining",
        "description": "Traditional Cambodian restaurant near archaeological sites, known for soups, grilled meats, and local specialties.",
        "address": "Temple Area, Kampong Thom",
        "focus": "Traditional Khmer",
        "image_placeholder": "https://i.pinimg.com/564x/11/22/33/112233abcdef1234.jpg",
        "provinceId": "abc123KampongThomId",
        "provinceName": "Kampong Thom"
    },

    /*​​ kampot */

    {
        "name": "Rikitikitavi Restaurant",
        "description": "Riverside dining offering Khmer and Western fusion dishes with a relaxing sunset view over the Kampot River.",
        "address": "Riverside Road, Kampot City, Kampot",
        "focus": "Khmer & Western Fusion",
        "image_placeholder": "https://i.pinimg.com/564x/0d/62/8d/0d628d4e61f44bfb15e3b94dfb536f55.jpg",
        "provinceId": "4m2jr9GgyHPYyncMiCBh",
        "provinceName": "kampot"
    },
    {
        "name": "Pepper Plantation Kitchen",
        "description": "Farm-to-table restaurant featuring Kampot pepper in every dish, surrounded by lush greenery and plantation views.",
        "address": "Pepper Farm Road, Kampot Province",
        "focus": "Local Farm Cuisine",
        "image_placeholder": "https://i.pinimg.com/564x/3e/d7/7b/3ed77b9b7ed8b8a547cb87a36a47b8a8.jpg",
        "provinceId": "4m2jr9GgyHPYyncMiCBh",
        "provinceName": "kampot"
    },
    {
        "name": "Bokor View Restaurant",
        "description": "Casual open-air restaurant at the base of Bokor Mountain serving fresh seafood and Cambodian barbecue.",
        "address": "National Road 3, near Bokor Hill, Kampot",
        "focus": "Seafood & Barbecue",
        "image_placeholder": "https://i.pinimg.com/564x/94/2b/3d/942b3d7b3d6b47b2a5ab9e3a1a8e5b09.jpg",
        "provinceId": "4m2jr9GgyHPYyncMiCBh",
        "provinceName": "kampot"
    },

    /* Kep */

    {
        "name": "Kep Crab Market Restaurant",
        "description": "Famous seaside restaurant located within the iconic Crab Market, offering freshly caught crab cooked with Kampot pepper.",
        "address": "Crab Market, Kep Beach, Kep Province",
        "focus": "Seafood & Local Cuisine",
        "image_placeholder": "https://i.pinimg.com/564x/4b/9c/13/4b9c13f24bca26a2b1e3eafee1b2e83c.jpg",
        "provinceId": "B6TqzA7YhN8sFmZ2pXoK",
        "provinceName": "Kep"
    },
    {
        "name": "The Sailing Club Kep",
        "description": "Upscale beachfront restaurant serving international and Khmer dishes with ocean views, popular for sunset dining.",
        "address": "Kep Beach Road, Kep Province",
        "focus": "Khmer & International Fusion",
        "image_placeholder": "https://i.pinimg.com/564x/a1/7f/5b/a17f5b1c9d7637a5cbec3ef2d7a2bdf9.jpg",
        "provinceId": "B6TqzA7YhN8sFmZ2pXoK",
        "provinceName": "Kep"
    },
    {
        "name": "Veranda Natural Resort Restaurant",
        "description": "Hilltop restaurant surrounded by tropical gardens offering healthy organic meals and panoramic views of Kep Bay.",
        "address": "Phum Thmey Village, Kep Province",
        "focus": "Organic & Healthy Dining",
        "image_placeholder": "https://i.pinimg.com/564x/dc/45/8b/dc458be8c513a1d7307581fcd72a45db.jpg",
        "provinceId": "B6TqzA7YhN8sFmZ2pXoK",
        "provinceName": "Kep"
    },

    /* koh kong */

    {
        "name": "Mangrove View Seafood Restaurant",
        "description": "Waterfront restaurant surrounded by mangroves offering freshly caught seafood and stunning sunset views over the river.",
        "address": "Riverside Road, Koh Kong City, Koh Kong Province",
        "focus": "Seafood & Khmer Cuisine",
        "image_placeholder": "https://i.pinimg.com/564x/67/ab/3c/67ab3c9fcb9d7de34a5a13bb2dbf7135.jpg",
        "provinceId": "H485lIC4QMsegbRftb1j",
        "provinceName": "Koh Kong"

    },
    {
        "name": "Baan Peakmai Thai Restaurant",
        "description": "Cozy Thai–Cambodian fusion restaurant offering flavorful curries, stir-fries, and noodle dishes near the Thai border.",
        "address": "Street 3, Koh Kong City, Koh Kong Province",
        "focus": "Thai & Khmer Fusion",
        "image_placeholder": "https://i.pinimg.com/564x/34/fd/90/34fd906a36a774a7c781b3c37e9554a8.jpg",
        "provinceId": "H485lIC4QMsegbRftb1j",
        "provinceName": "Koh Kong"
    },
    {
        "name": "Bokor Bay Bistro",
        "description": "Casual open-air bistro serving Western breakfasts, grilled seafood, and coffee with ocean views of Koh Kong Bay.",
        "address": "National Road 48, Koh Kong Bay Area, Koh Kong Province",
        "focus": "Western & Seafood Grill",
        "image_placeholder": "https://i.pinimg.com/564x/58/21/3f/58213f4d9420b41b4c38da8913c6e6b4.jpg",
        "provinceId": "H485lIC4QMsegbRftb1j",
        "provinceName": "Koh Kong"
    },

    /* Kratié */
    {
        "name": "Mekong Delight Restaurant",
        "description": "Riverside restaurant offering a variety of Khmer dishes and fresh fish from the Mekong River, perfect for families and tourists.",
        "address": "Street 5, Kratié City, Kratié",
        "focus": "Khmer Cuisine & Seafood",
        "image_placeholder": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
        "facebook": "https://www.facebook.com/mekongdelightkratie",
        "website": "https://mekongdelightkratie.com",
        "provinceId": "abc123KratieId",
        "provinceName": "Kratié"
    },
    {
        "name": "Lotus Garden Restaurant",
        "description": "Serving traditional Khmer food with vegetarian options in a garden setting overlooking the Mekong River.",
        "address": "Street 7, Kratié City, Kratié",
        "focus": "Khmer & Vegetarian",
        "image_placeholder": "https://images.unsplash.com/photo-1551218808-94e220e084d2",
        "facebook": "https://www.facebook.com/lotusgardenkratie",
        "website": "https://lotusgardenkratie.com",
        "provinceId": "abc123KratieId",
        "provinceName": "Kratié"
    },
    {
        "name": "Sunset Mekong Bistro",
        "description": "Casual bistro offering local Khmer specialties, seafood, and cocktails with a scenic sunset view over the Mekong River.",
        "address": "Riverside Road, Kratié City, Kratié",
        "focus": "Khmer & Seafood with Sunset View",
        "image_placeholder": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
        "facebook": "https://www.facebook.com/sunsetmekongbistro",
        "website": "https://sunsetmekongbistro.com",
        "provinceId": "abc123KratieId",
        "provinceName": "Kratié"
    },

    /* kandal */
    {
        "name": "Tonle Riverside Restaurant",
        "description": "Riverside dining serving Khmer specialties and fresh seafood with a view of the river in a cozy atmosphere.",
        "address": "Riverside Road, Ta Khmau City, Kandal",
        "focus": "Khmer & Seafood",
        "image_placeholder": "https://images.unsplash.com/photo-1604908177520-5cbe518746f6",
        "facebook": "https://www.facebook.com/tonleriversiderestaurant",
        "website": "https://tonleriversiderestaurant.com",
        "provinceId": "abc123KandalId",
        "provinceName": "Kandal"
    },
    {
        "name": "Green Lotus Dining",
        "description": "Modern Cambodian restaurant offering local dishes with a fusion twist, set in a peaceful garden environment.",
        "address": "Street 8, Ta Khmau, Kandal",
        "focus": "Khmer Fusion / Garden Setting",
        "image_placeholder": "https://images.unsplash.com/photo-1579631628368-3f4de5b1aa19",
        "facebook": "https://www.facebook.com/greenlotusdining",
        "website": "",
        "provinceId": "abc123KandalId",
        "provinceName": "Kandal"
    },
    {
        "name": "Kandal Town Eatery",
        "description": "Casual restaurant serving traditional Khmer dishes, rice bowls, and freshly made juices for a local flavor experience.",
        "address": "Street 12, Ta Khmau City, Kandal",
        "focus": "Khmer Street Food",
        "image_placeholder": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        "facebook": "",
        "website": "",
        "provinceId": "abc123KandalId",
        "provinceName": "Kandal"
    },
    {
        "name": "Lotus Garden Restaurant",
        "description": "A boutique restaurant offering local and international cuisine with vegetarian and vegan options in a tranquil garden setting.",
        "address": "Street 5, Ta Khmau, Kandal",
        "focus": "International & Vegetarian",
        "image_placeholder": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
        "facebook": "",
        "website": "",
        "provinceId": "abc123KandalId",
        "provinceName": "Kandal"
    },
    {
        "name": "Riverside Terrace Café & Restaurant",
        "description": "Combination café and restaurant offering coffee, smoothies, and Khmer dishes with river views and evening seating.",
        "address": "Riverside Boulevard, Ta Khmau, Kandal",
        "focus": "Café & Khmer Dining",
        "image_placeholder": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
        "facebook": "",
        "website": "",
        "provinceId": "abc123KandalId",
        "provinceName": "Kandal"
    },
    {
        "name": "Spice & Herb Kandal",
        "description": "Specialty restaurant focusing on traditional Cambodian flavors, using fresh herbs and spices in all dishes.",
        "address": "Street 14, Ta Khmau, Kandal",
        "focus": "Traditional Khmer",
        "image_placeholder": "https://images.unsplash.com/photo-1541542684-23e1f7bdbd56",
        "facebook": "",
        "website": "",
        "provinceId": "abc123KandalId",
        "provinceName": "Kandal"
    },


    /* Preah Sihanouk */

    {
        "name": "Food Village Sihanouk",
        "description": "Healthy‑eatery serving fresh produce, seafood pizza and creative bowls in a modern setting in Sihanoukville.",
        "address": "Village 5, Sangkat 4, Sihanoukville City, Preah Sihanouk Province, Cambodia",
        "focus": "Healthy Western & Seafood Fusion",
        "image_placeholder": "https://cdn.thecrazytourist.com/wp-content/uploads/2018/09/ccimage-shutterstock_553544986.jpg",
        "facebook": "https://www.facebook.com/foodvillagesihanouk",
        "website": "https://foodvillagesihanouk.com",
        "provinceId": "0UV6sMLSAyWi46msLA4Y",
        "provinceName": "Preah Sihanouk"
    },
    {
        "name": "People's Restaurant",
        "description": "Casual dining spot offering Khmer and Western dishes in the heart of Sihanoukville city, great for lunch or family dinner.",
        "address": "Ekareach St., Sihanoukville City, Preah Sihanouk Province, Cambodia",
        "focus": "Khmer & Western Comfort Food",
        "image_placeholder": "https://example.com/images/peoples‑restaurant‑sihanouk.jpg",
        "facebook": "https://www.facebook.com/peoplesrestaurantsihanouk",
        "website": "",
        "provinceId": "0UV6sMLSAyWi46msLA4Y",
        "provinceName": "Preah Sihanouk"

    },
    {
        "name": "Koh Pos Restaurant",
        "description": "BBQ and French‑Khmer fusion cuisine served in a relaxed indoor‑outdoor space in downtown Sihanoukville.",
        "address": "23 Tola St., Village 4, Sangkat 4, Sihanoukville City, Preah Sihanouk Province, Cambodia",
        "focus": "BBQ / Khmer‑French Fusion",
        "image_placeholder": "https://example.com/images/kohpos‑restaurant‑sihanouk.jpg",
        "facebook": "https://www.facebook.com/kohposrestaurant",
        "website": "",
        "provinceId": "0UV6sMLSAyWi46msLA4Y",
        "provinceName": "Preah Sihanouk"
    }

];


const btnRes = document.getElementById("btnRest");

btnRes.addEventListener("click", async () => {
  try {
    const collectionRef = collection(db, "restaurantsCambodia");

    for (const rest of restaurant) {
      // 🔹 Find existing restaurant by name
      const q = query(collectionRef, where("name", "==", rest.name));
      const querySnapshot = await getDocs(q);

      let docRef;
      let existingData = {};

      if (!querySnapshot.empty) {
        // 🔹 Update existing document
        docRef = querySnapshot.docs[0].ref;
        existingData = querySnapshot.docs[0].data();
        console.log(`🟡 Updating existing: ${rest.name}`);
      } else {
        // 🔹 Add new restaurant
        docRef = await addDoc(collectionRef, {
          created_at: serverTimestamp()
        });
        console.log(`✅ Added new: ${rest.name}`);
      }

      // 🔹 Always update or add data
      await setDoc(
        docRef,
        {
          restaurantId: existingData.restaurantId || docRef.id,
          provinceId: rest.provinceId || "",
          provinceName: rest.provinceName || "Unknown Province", // ✅ always update or add
          name: rest.name,
          cuisine: rest.cuisine || rest.focus || "",
          neighborhood: rest.neighborhood || "",
          short_description: rest.short_description || rest.description || "",
          image: rest.image_placeholder || rest.image || "",
          price_range: rest.price_range || rest.price || "",
          notes: rest.notes || "",
          facebook: rest.facebook || "",
          website: rest.website || "",
          contact: rest.contact || {},
          rating: rest.rating || null,
          created_at: existingData.created_at || serverTimestamp(),
          updated_at: serverTimestamp()
        },
        { merge: true } // ✅ Keeps old data, only updates changed fields
      );
    }

    alert("✅ Restaurants synced successfully (added + updated)!");
  } catch (error) {
    console.error("❌ Error syncing restaurants:", error);
    alert("❌ Failed to sync restaurants. Check console.");
  }
});





