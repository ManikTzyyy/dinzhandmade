// Menggunakan fetch untuk memuat footer dari folder 'element'
fetch('../content/footer.html') // Path relatif menuju folder 'element'
  .then(response => response.text())  // Mengambil konten HTML
  .then(data => {
    // Memasukkan konten footer ke dalam elemen dengan id 'footer-placeholder'
    document.getElementById('footer-placeholder').innerHTML = data;
  })
  .catch(error => {
    console.error('Error loading footer:', error);
  });
