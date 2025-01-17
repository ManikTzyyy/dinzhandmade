document.addEventListener("DOMContentLoaded", () => {
  // 1. Memuat navbar secara dinamis
  const navbarContainer = document.getElementById("navbar");
  fetch("../content/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      navbarContainer.innerHTML = data;

      // 2. Menentukan halaman aktif berdasarkan URL
      const currentPath = window.location.pathname;
      const links = navbarContainer.querySelectorAll(".nav-link");
      links.forEach((link) => {
        const page = link.getAttribute("data-page");
        if (currentPath.includes(page)) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });

      // 3. Menambahkan fungsi toggle menu
      const menuToggle = document.getElementById("menuToggle");
      const navList = document.getElementById("navList");
      const menuIcon = document.getElementById("menuIcon");

      menuToggle.addEventListener("click", () => {
        navList.classList.toggle("active"); // Menampilkan / menyembunyikan nav-list
        menuIcon.classList.toggle("fa-bars-staggered");
        menuIcon.classList.toggle("fa-times"); // Mengubah ikon menjadi silang
      });

      // 4. Menambahkan scroll listener untuk efek navbar
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          navbarContainer.classList.add("scrolled");
        } else {
          navbarContainer.classList.remove("scrolled");
        }
      });

      // 5. Menambahkan Intersection Observer untuk highlight section aktif
      const navLinks = document.querySelectorAll(".nav-list a"); // Semua link navbar
      const options = {
        root: null,
        threshold: 0.9,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Hapus class 'active' dari semua link
            navLinks.forEach((link) => link.classList.remove("active"));

            // Tambahkan class 'active' ke link yang sesuai
            const activeLink = document.querySelector(
              `.nav-list a[href="#${entry.target.id}"]`
            );
            if (activeLink) {
              activeLink.classList.add("active");
            }
          }
        });
      }, options);

      // Daftar elemen yang akan di-observe
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => observer.observe(section));
    })
    .catch((error) => console.error("Error loading navbar:", error));
});
