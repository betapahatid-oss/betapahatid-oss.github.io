
// Scroll to Projects
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

// Shrink header on scroll
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) header.classList.add("shrink");
  else header.classList.remove("shrink");
});

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem("theme","dark");
  } else {
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem("theme","light");
  }
});

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Typing effect
const typingEl = document.getElementById("typing");
const words = ["IT Professional", "Web Developer", "Database Designer", "Mobile App Creator"];
let wordIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typingEl.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  } else {
    typingEl.textContent = currentWord.substring(0, charIndex++);
    if (charIndex > currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? 80 : 120);
}
typeEffect();
const csPopup = document.getElementById('csPopup');
const openBtn = document.getElementById('openCs');
const closeBtn = document.getElementById('closeCs');

// Tombol buka
openBtn.addEventListener('click', () => {
    csPopup.classList.add('show');
    openBtn.style.display = 'none';
});

// Tombol tutup
closeBtn.addEventListener('click', () => {
    csPopup.classList.remove('show');
    openBtn.style.display = 'flex';
});

// Pop-up otomatis muncul setelah 5 detik
window.addEventListener('load', () => {
    setTimeout(() => {
        csPopup.classList.add('show');
        openBtn.style.display = 'none';
    }, 10000);
});
// Saat ini belum ada interaksi khusus di footer
// Bisa dipakai nanti untuk animasi tambahan
console.log("Footer aktif 🚀");
