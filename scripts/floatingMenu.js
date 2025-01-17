// Menggunakan fetch untuk memuat floating menu dari folder 'content'
fetch("../content/floating-menu.html") // Path relatif menuju file floating-menu.html
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text(); // Mengambil konten HTML sebagai teks
  })
  .then((data) => {
    // Memasukkan konten floating menu ke dalam elemen dengan id 'floating-social-placeholder'
    const placeholder = document.getElementById("floating-social-placeholder");
    if (placeholder) {
      placeholder.innerHTML = data;

      // Setelah konten dimuat, tambahkan event listener untuk tombol floating menu
      const floatingBtn = document.getElementById("floating-btn");
      const floatingMenu = document.getElementById("floating-menu");

      if (floatingBtn && floatingMenu) {
        floatingBtn.addEventListener("click", () => {
          // Toggle kelas "hidden" pada menu
          floatingMenu.classList.toggle("hidden");

          // Ubah ikon tombol
          const icon = floatingBtn.querySelector("i");
          if (icon) {
            icon.classList.toggle("fa-plus");
            icon.classList.toggle("fa-times");
          }
        });
      } else {
        console.error("Floating button or menu element is missing in the loaded HTML.");
      }
    } else {
      console.error("Placeholder element with id 'floating-social-placeholder' is not found.");
    }
  })
  .catch((error) => {
    console.error("Error loading floating menu:", error);
  });
