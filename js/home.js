
//header
// Load header dynamically

// /js/home.js
fetch('../html/header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;

    // Get nav elements
    const homePage = document.getElementById("home");
    const desPage = document.getElementById("destinations");
    const contactPage = document.getElementById("contactUS");
    const loginBtn = document.querySelector(".loginELement");
    const addBtn = document.getElementById("addIcon");
    const myUserInfor = document.getElementById("userInfor");




    // ✅ Add event listeners instead of auto redirecting
    homePage?.addEventListener("click", () => {
      window.location.href = "../home.html";
    });

    desPage?.addEventListener("click", () => {
      window.location.href = "../html/province.html";
    });

    contactPage?.addEventListener("click", () => {
      window.location.href = "../html/contactus.html";
    });


    loginBtn?.addEventListener("click", () => {
      window.location.href = "../html/login.html";
    });

    addBtn?.addEventListener("click", () => {
      window.location.href = "../html/addprovinces.html";
    });

    const getUserName = localStorage.getItem("loggedInUser");
    if (getUserName) {
      const fGetUserInfor = JSON.parse(getUserName);
      myUserInfor.textContent = `Hello! ${fGetUserInfor.firstName} ${fGetUserInfor.lastName}`;
    }

      // Assuming you already have:
      
      const logOutBtn = document.getElementById("myUserLogOut");

      logOutBtn.addEventListener("click", () => {
        const getUserName = localStorage.getItem("loggedInUser");

        if (!getUserName) {
          alert("You are not logged in.");
          return;
        }

        const confirmLogout = confirm("Are you sure you want to log out?");
        if (!confirmLogout) return;

        // Clear user-related data
        localStorage.removeItem("loggedInUser");
        localStorage.removeItem("favoritePlaces");
        localStorage.removeItem("lastProvinceId"); // optional if you track last viewed province

        // Clear displayed username
        if (myUserInfor) {
          myUserInfor.textContent = "";
        }

        // Clear favorites section in the page
        const placeDataDiv = document.getElementById("placeData");
        if (placeDataDiv) {
          placeDataDiv.innerHTML = "<p>You have logged out.</p>";
        }

        alert("You have successfully logged out.");

        // Optional: redirect to homepage or login page
        window.location.href = "../home.html";
      });


  })
  .catch(err => console.error("Error loading header:", err));





// footer
fetch('../html/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch(error => console.error('Error loading header:', error));


// slider
const slider = document.getElementById("slides");
const images = slider.querySelectorAll("img");
let index = 0;

console.log("slider:", slider);
console.log("images:", images);

// Auto slide function
function nextSlide() {
  index++;
  if (index >= images.length) {
    index = 0; // loop back to first
  }
  slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(nextSlide, 3000);

/*


// popup
const countries = [
  { name: "Cambodia", flag: "https://flagcdn.com/w20/kh.png" },
  { name: "United States", flag: "https://flagcdn.com/w20/us.png" },
  { name: "United Kingdom", flag: "https://flagcdn.com/w20/gb.png" },
  { name: "France", flag: "https://flagcdn.com/w20/fr.png" },
  { name: "Germany", flag: "https://flagcdn.com/w20/de.png" },
  { name: "Japan", flag: "https://flagcdn.com/w20/jp.png" },
  { name: "China", flag: "https://flagcdn.com/w20/cn.png" }

];

const countryDropdown = document.getElementById("countryDropdown");
const selected = countryDropdown.querySelector(".select-selected");
const itemsContainer = countryDropdown.querySelector(".select-items");

// Populate countries
countries.forEach(c => {
  const div = document.createElement("div");
  const img = document.createElement("img"); img.src = c.flag;
  div.appendChild(img);
  div.appendChild(document.createTextNode(c.name));
  itemsContainer.appendChild(div);

  div.addEventListener("click", () => {
    selected.innerHTML = "";
    selected.appendChild(img.cloneNode());
    selected.appendChild(document.createTextNode(c.name));
    itemsContainer.style.display = "none";
    countryDropdown.dataset.value = c.name;
  });
});

// Toggle dropdown
selected.addEventListener("click", () => {
  itemsContainer.style.display = itemsContainer.style.display === "flex" ? "none" : "flex";
});

// Close dropdown if click outside
document.addEventListener("click", e => {
  if (!countryDropdown.contains(e.target)) itemsContainer.style.display = "none";
});

// Form submission
const popup = document.getElementById("popup");
const form = document.getElementById("popupForm");

const name = document.getElementById("name").value;
const gender = document.getElementById("gender").value;
const email = document.getElementById("email").value;
const country = countryDropdown.dataset.value || "Unknown";

form.addEventListener("submit", e => {
  e.preventDefault();
  popup.style.display = "none";
});



// siem reap

let mySiemReap = document.querySelector("#siemReapNav");
console.log(mySiemReap);

mySiemReap.addEventListener("click", () => {
  window.location.href = "../html/siemreap.html";
});

// Koh Rong

let myKohRong = document.querySelector(".kohRong");

myKohRong.addEventListener("click", () => {
  window.location.href = "../html/kohrong.html";

});

let myCity = document.getElementById("myPhnomPenh");

myCity.addEventListener("click", () => {
  window.location.href = "../html/phnompenh.html";
});

*/












