document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  hamburgerBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("show"); // Toggle class show pada menu
    overlay.classList.toggle("show"); // Toggle class show pada overlay
  });

  // Menutup menu saat overlay diklik
  overlay.addEventListener("click", function () {
    mobileMenu.classList.remove("show"); // Hilangkan class show pada menu
    overlay.classList.remove("show"); // Hilangkan class show pada overlay
  });
});

