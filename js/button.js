
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import {
    getFirestore,
    collection,
    setDoc,
    doc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";


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

const provinces = [
    {
        "name": "Banteay Meanchey",
        "description": "Northwestern province on the Thai border, known for agriculture and border trade.",
        "location": { "lat": 13.5833, "lng": 102.9833 },
        "image": "https://i.pinimg.com/1200x/8a/ac/71/8aac7117935667daa4dc8df8c7f6725d.jpg",
        "provinceId": "abc123BanteayMeancheyId",
        
    },
    {
        "name": "Battambang",
        "description": "Large agricultural province in the northwest famous for rice fields and French colonial architecture.",
        "location": { "lat": 13.09545, "lng": 103.182907 },
        "image": "https://i.pinimg.com/1200x/64/62/12/6462129f59627e6e530a6c582b521707.jpg",
        "provinceId": "whQqHO2LWKVBg7eQEZIp",
        
    },
    {
        "name": "Kampong Cham",
        "description": "Riverine province east of the Mekong famed for rural life and river transport.",
        "location": { "lat": 11.9869, "lng": 105.4500 },
        "image": "https://i.pinimg.com/1200x/ce/f9/99/cef999df5469cfc888a8dc4ef59398c4.jpg",
        "provinceId": "wQovHNdLBaWc6tJBtoCa",
         
    },
    {
        "name": "Kampong Chhnang",
        "description": "Central province on the Tonle Sap with pottery traditions and floating villages.",
        "location": { "lat": 12.2500, "lng": 104.6667 },
        "image": "https://i.pinimg.com/1200x/4c/3f/d3/4c3fd3a5216bdf231e20ad6106ca527b.jpg",
        "provinceId": "abc123KampongChhnangId",
        
    },
    {
        "name": "Kampong Speu",
        "description": "Province southwest of Phnom Penh known for farming and historical temples.",
        "location": { "lat": 11.4500, "lng": 104.0500 },
        "image": "https://i.ytimg.com/vi/1KopaSG9v_g/maxresdefault.jpg",
        "provinceId": "abc123KampongSpeuId",
    },
    {
        "name": "Kampong Thom",
        "description": "Large central province with archaeological sites and access to forested areas.",
        "location": { "lat": 12.7000, "lng": 104.9000 },
        "image": "https://2.bp.blogspot.com/-Bh6zQLw5Nz0/VWnr_9TwYUI/AAAAAAAAAiA/_m6khlIiC48/s1600/Kampong%2BThom.jpg",
        "provinceId": "abc123KampongThomId",
    },
    {
        "name": "Kampot",
        "description": "Coastal southern province famous for pepper plantations and Bokor Mountain.",
        "location": { "lat": 10.594242, "lng": 104.164032 },
        "image": "https://i.pinimg.com/originals/73/85/e5/7385e574222b90ba96160ef59ad36b3f.jpg",
        "provinceId": "4m2jr9GgyHPYyncMiCBh"
    },
    {
        "name": "Kandal",
        "description": "Province surrounding Phnom Penh on several sides, heavily agricultural and suburban.",
        "location": { "lat": 11.9667, "lng": 104.8000 },
        "image": "https://everipedia-storage.s3-accelerate.amazonaws.com/ProfilePics/6969493451.PNG",
        "provinceId": "abc123KandalId",
    },
    {
        "name": "Kep",
        "description": "Small coastal province known for seaside resorts, crab markets and nearby islands.",
        "location": { "lat": 10.4833, "lng": 104.3333 },
        "image": "https://i.pinimg.com/736x/f6/1e/d7/f61ed7d0e8113dd81d5eda611898fe6c.jpg",
        "provinceId": "B6TqzA7YhN8sFmZ2pXoK"
        
    },
    {
        "name": "Koh Kong",
        "description": "Coastal and forested southwest province with islands, mangroves and border with Thailand.",
        "location": { "lat": 11.6167, "lng": 102.9833 },
        "image": "https://i.pinimg.com/1200x/50/c5/25/50c525a5c5de77f347259b4fc63f82b5.jpg",
        "provinceId": "H485lIC4QMsegbRftb1j"
    },
    {
        "name": "Kratié",
        "description": "Northeastern Mekong province known for river dolphins and riverside scenery.",
        "location": { "lat": 12.4931, "lng": 106.0000 },
        "image": "https://i.pinimg.com/736x/b3/b1/78/b3b178cb619e7c442afddf77560291a9.jpg",
        "provinceId": "abc123KratieId",
    },
    {
        "name": "Mondulkiri",
        "description": "Sparsely populated eastern highland province with forests, waterfalls and ethnic minorities.",
        "location": { "lat": 12.5000, "lng": 107.5000 },
        "image": "https://i.pinimg.com/736x/d4/cc/04/d4cc04eb7db0e155cc6313b8bdc892ac.jpg",
        "provinceId": "abc123MondulkiriId"
    },
    {
        "name": "Oddar Meanchey",
        "description": "Northern border province with forests and historic Khmer sites near Thailand.",
        "location": { "lat": 13.9000, "lng": 103.5000 },
        "image": "https://i.pinimg.com/1200x/3a/a0/e2/3aa0e28d4ce67028fe5bd4e51741fb5c.jpg",
        "provinceId": "abc123OddarMeancheyId",
    },
    {
        "name": "Pailin",
        "description": "Small western province near the Thai border, known historically for gem mining.",
        "location": { "lat": 12.8500, "lng": 102.6167 },
        "image": "https://visitlocaltravel.com/blog/wp-content/uploads/2024/02/Pailin-Privince.png",
        "provinceId": "abc123PailinId",
    },
    {
        "name": "Phnom Penh",
        "description": "Capital municipality and national hub for government, culture, and the Mekong riverside.",
        "location": { "lat": 11.562108, "lng": 104.888535 },
        "image": "https://i.pinimg.com/1200x/5a/7a/cf/5a7acfb329a0269d48cb529b3020c12e.jpg",
        "provinceId": "ZFpogBIP5lCwDFdeAOjE"
    },
    {
        "name": "Preah Vihear",
        "description": "Northern province known for the mountaintop Preah Vihear Temple and limestone plateau.",
        "location": { "lat": 13.8333, "lng": 105.8333 },
        "image": "https://i.pinimg.com/736x/d2/9f/2a/d29f2a7a2d64c8054bfa635fffcba76f.jpg",
        "provinceId": "hv6SU5rcg3iournCTZWe"
    },
    {
        "name": "Prey Veng",
        "description": "Southeastern agricultural province on the Mekong floodplain with rice production.",
        "location": { "lat": 11.4800, "lng": 104.9000 },
        "image": "https://i.pinimg.com/1200x/ae/c3/80/aec380d1f7d1885a190c5b56fdb4280f.jpg",
        "provinceId": "abc123PreyVengId",
    },
    {
        "name": "Pursat",
        "description": "Western province along the Tonle Sap drainage with fishing and rural landscapes.",
        "location": { "lat": 12.5000, "lng": 103.5000 },
        "image": "https://i.pinimg.com/736x/3d/37/a7/3d37a78801fb6cf1cdb5aff930cf7e9b.jpg",
        "provinceId": "abc123PursatId",
    },
    {
        "name": "Ratanakiri",
        "description": "Remote northeastern province with red-soil hills, forests and indigenous communities.",
        "location": { "lat": 13.7500, "lng": 106.9833 },
        "image": "https://i.pinimg.com/1200x/34/9d/c6/349dc60225e312691f59a4a33d4c6159.jpg",
        "provinceId": "VL2FhUUtpl3VuGuj8x4t"
    },
    {
        "name": "Siem Reap",
        "description": "Home to the Angkor temple complex and a major tourism center in the northwest.",
        "location": { "lat": 13.3633, "lng": 103.8560 },
        "image": "https://i.pinimg.com/1200x/15/f1/f8/15f1f86aa91225ae1985350c2e26be33.jpg",
        "provinceId": "iXYpAdo3OZFh3jknWup1",
        
    },
    {
        "name": "Sihanoukville (Preah Sihanouk)",
        "description": "Coastal province with beaches and a fast-growing port city (also called Sihanoukville).",
        "location": { "lat": 10.627543, "lng": 103.522141 },
        "image": "https://i.pinimg.com/1200x/ea/23/0f/ea230fdcb11149a6f8e255a230d114c9.jpg",
        "provinceId": "0UV6sMLSAyWi46msLA4Y"
    },
    {
        "name": "Stung Treng",
        "description": "Northern river province on the Mekong with access to riverine wilderness and fisheries.",
        "location": { "lat": 13.5250, "lng": 105.9667 },
        "image": "https://i.pinimg.com/1200x/f8/27/01/f82701b4f4489f802b527b43d66f9203.jpg",

    },

    {
        "name": "Svay Rieng",
        "description": "Southeastern border province next to Vietnam, with rice farming and border crossings.",
        "location": { "lat": 11.1000, "lng": 105.1667 },
        "image": "https://i.pinimg.com/1200x/fd/78/80/fd78805f8ce862135726b6fc7f51aafc.jpg"
    },
    {
        "name": "Takeo",
        "description": "Southern province with ancient temple ruins and rich agricultural land near Phnom Penh.",
        "location": { "lat": 10.9833, "lng": 104.7833 },
        "image": "https://i.pinimg.com/736x/a9/17/27/a91727df320fd756e48ff0b215b1fee2.jpg",
    },
    
];

console.log(provinces);

// ✅ Upload All Provinces
const myProvinces = document.getElementById("myBtn");

myProvinces.addEventListener("click", async () => {
    try {
        for (const province of provinces) {

            const docRef = doc(db, "provincesCambodia", province.name);
            console.log("docRefProvince:", docRef);

            await setDoc(docRef, {
                name: province.name,
                description: province.description,
                location: province.location,
                image: province.image,
                provinceId: province.provinceId || docRef.id,
                map: province.map || "",
                created_at: serverTimestamp(),
                updated_at: serverTimestamp()
            }, { merge: true }); // ✅

            console.log(`✅ Province uploaded: ${province.name} (ID: ${docRef.id})`);
        }

        alert("✅ All provinces uploaded successfully with provinceId!");
    } catch (error) {
        console.error("❌ Error uploading provinces:", error);
        alert("Failed to upload provinces.");
    }
});









