document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const closeMenuBtn = document.getElementById("close-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  hamburgerBtn.addEventListener("click", function () {
    mobileMenu.classList.add("show");
  });

  closeMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.remove("show");
  });
});
