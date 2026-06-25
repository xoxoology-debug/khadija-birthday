const password = "5225";

/* ================= SCREEN SWITCH ================= */
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

/* ================= PASSWORD CHECK ================= */
function checkPassword() {
  const input = document.getElementById("password").value;

  if (input === password) {
    showScreen("loadingScreen");

    setTimeout(() => {
      showScreen("welcomeScreen");
      startSlideshow(); // slideshow START here (IMPORTANT FIX)
    }, 2000);

  } else {
    alert("Wrong Password ❤️");
  }
}

/* ================= SLIDESHOW FIXED ================= */
const photos = [
  "photos/photo1.jpg",
  "photos/photo2.jpg",
  "photos/photo3.jpg",
  "photos/photo4.jpg",
  "photos/photo5.jpg"
];

let current = 0;
let slideshowStarted = false;

function startSlideshow() {
  if (slideshowStarted) return; // prevent double start
  slideshowStarted = true;

  const slide = document.getElementById("slideshow");
  if (!slide) return;

  // first image load
  slide.src = photos[0];

  setInterval(() => {
    current = (current + 1) % photos.length;
    slide.src = photos[current];
  }, 2500);
}

/* ================= GALLERY ================= */
function showGallery() {
  showScreen("galleryScreen");
}

/* ================= LETTER ================= */
function openLetter() {
  showScreen("letterScreen");
}

/* ================= AUTO START SAFETY ================= */
window.addEventListener("load", () => {
  // safe load (mobile + laptop)
  console.log("Website Ready ❤️");
});