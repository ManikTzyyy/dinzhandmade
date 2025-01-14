// Pilih elemen yang diperlukan
const displayImage = document.querySelector('#product-display .content-wrapper .img-wrapper.display img');
const displayTitle = document.querySelector('#product-display .content-wrapper .img-wrapper.display h1');
const boxImages = document.querySelectorAll('#product-display .content-wrapper .box-wrapper .img-wrapper');

// Function untuk mengupdate gambar dan judul
function updateDisplay(imgSrc, imgAlt) {
  displayImage.src = imgSrc;
  displayTitle.textContent = imgAlt; // Menggunakan atribut alt untuk teks judul
}

// Tambahkan event listener ke setiap gambar dalam box-wrapper
boxImages.forEach((box) => {
  box.addEventListener('click', () => {
    // Hapus kelas "active" dari semua box
    boxImages.forEach((item) => item.classList.remove('active'));

    // Tambahkan kelas "active" pada box yang diklik
    box.classList.add('active');

    // Ambil data dari gambar dalam box yang diklik
    const img = box.querySelector('img');
    const imgSrc = img.src;
    const imgAlt = img.alt;

    // Perbarui tampilan display
    updateDisplay(imgSrc, imgAlt);
  });
});
