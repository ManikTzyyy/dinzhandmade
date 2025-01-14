const images = [
    './assets/img/hero-1.webp',
    './assets/img/hero-2.webp',
    './assets/img/hero-3.webp',
  ];
  
  let currentIndex = 0;
  
  const imgElement = document.querySelector('#hero .img-wrapper img');
  const circles = document.querySelectorAll('#hero .v-dot .circle');
  
  // Function to update the active image and circle
  function updateImage(index) {
    currentIndex = index;
  
    // Update the image with fade effect
    imgElement.classList.remove('fade');
    setTimeout(() => {
      imgElement.src = images[currentIndex];
      imgElement.classList.add('fade');
    }, 500);
  
    // Update active circle
    circles.forEach((circle, i) => {
      if (i === currentIndex) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });
  }
  
  // Auto-change images every 3 seconds
  let autoChange = setInterval(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    updateImage(nextIndex);
  }, 7000);
  
  // Add click event to circles
  circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
      clearInterval(autoChange); // Stop auto-change on manual click
      updateImage(index);
      // Restart auto-change
      autoChange = setInterval(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        updateImage(nextIndex);
      }, 3000);
    });
  });
  