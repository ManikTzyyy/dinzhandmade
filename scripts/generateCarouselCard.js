const data = [
    {
      img: "./assets/img/model1.webp",
      name: "Name 1",
      info: "Info 1",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "./assets/img/model2.webp",
      name: "Name 2",
      info: "Info 2",
      comment: "Ipsam numquam mollitia ducimus dignissimos quasi doloremque.",
    },
    {
      img: "./assets/img/model3.webp",
      name: "Name 3",
      info: "Info 3",
      comment: "Dolorum voluptatum adipisci quaerat nostrum porro vero.",
    },
    {
      img: "./assets/img/model4.webp",
      name: "Name 4",
      info: "Info 4",
      comment: "Veritatis dolorum voluptatum adipisci quaerat nostrum.",
    },
    {
      img: "./assets/img/model5.webp",
      name: "Name 5",
      info: "Info 5",
      comment: "Porro vero enim tempore ea nulla illo voluptas.",
    },
    {
      img: "./assets/img/model6.webp",
      name: "Name 6",
      info: "Info 6",
      comment: "Mollitia ducimus dignissimos quasi doloremque minima.",
    },
  ];
  
  const carouselTrack = document.querySelector(".carousel-track");
  
  // Function to create content dynamically
  function createContent(data) {
    const slidesPerRow = 3; // Number of content items per slide
  
    for (let i = 0; i < data.length; i += slidesPerRow) {
      const group = data.slice(i, i + slidesPerRow);
  
      const slide = document.createElement("div");
      slide.classList.add("carousel-slide", "row");
  
      group.forEach((item) => {
        const content = `
          <div class="content column">
            <div class="header row">
              <div class="img-wrapper">
                <img src="${item.img}" alt="${item.name}" />
              </div>
              <div class="name-wrapper">
                <p class="name">${item.name}</p>
                <p>${item.info}</p>
              </div>
            </div>
            <p class="comment">${item.comment}</p>
          </div>
        `;
        slide.innerHTML += content;
      });
  
      carouselTrack.appendChild(slide);
    }
  }
  
  // Generate content and slides
  createContent(data);
  
  // Carousel functionality
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  let currentIndexC = 0;
  
  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndexC * 100}%)`;
  }
  
  prevButton.addEventListener("click", () => {
    currentIndexC = currentIndexC == 0 ? slides.length - 1 : currentIndexC - 1;
    updateCarousel();
  });
  
  nextButton.addEventListener("click", () => {
    currentIndexC = currentIndexC == slides.length - 1 ? 0 : currentIndexC + 1;
    updateCarousel();
  });
  