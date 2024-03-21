document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const closeMenuBtn = document.getElementById("close-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("overlay");

  hamburgerBtn.addEventListener("click", function () {
    mobileMenu.classList.add("show");
    overlay.style.display = "block"; // Tampilkan overlay saat menu dibuka
  });

  closeMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.remove("show");
    overlay.style.display = "none"; // Sembunyikan overlay saat menu ditutup
  });

  // Menutup menu saat overlay diklik
  overlay.addEventListener("click", function (event) {
    // Periksa apakah yang diklik adalah overlay dan bukan bagian dari menu
    if (event.target === overlay) {
      mobileMenu.classList.remove("show");
      overlay.style.display = "none"; // Sembunyikan overlay saat overlay diklik
    }
  });

  // Menutup menu saat konten di luar menu diklik
  document.addEventListener("click", function (event) {
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickInsideHamburger = hamburgerBtn.contains(event.target);
    if (!isClickInsideMenu && !isClickInsideHamburger) {
      mobileMenu.classList.remove("show");
      overlay.style.display = "none"; // Sembunyikan overlay saat konten di luar menu diklik
    }
  });
});
