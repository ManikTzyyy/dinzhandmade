const fashionData = [
  {
    title: "Stylish Outfit",
    image: "../assets/img/model1.webp",
  },
  {
    title: "Trendy Look",
    image: "../assets/img/model2.webp",
  },
];

const mediaData = [
  {
    title: "Breaking News",
    image: "../assets/img/model2.webp",
    link: "#",
  },
  {
    title: "Latest Trends",
    image: "../assets/img/model3.webp",
    link: "#",
  },
];

function generateContent(sectionId, data, isMedia = false) {
  const section = document.getElementById(sectionId);
  const container = section.querySelector(".content-wrapper-scroller");

  data.forEach((item) => {
    const imgWrapper = document.createElement("div");
    imgWrapper.className = "img-wrapper";

    const textWrapper = document.createElement("div");
    textWrapper.className = "text-wrapper column";

    const title = document.createElement("p");
    title.textContent = item.title;
    textWrapper.appendChild(title);

    if (isMedia && item.link) {
      const link = document.createElement("a");
      link.href = item.link;
      link.textContent = "Read More";
      textWrapper.appendChild(link);
    }

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.title;

    imgWrapper.appendChild(textWrapper);
    imgWrapper.appendChild(image);
    container.appendChild(imgWrapper);
  });
}

generateContent("fashion", fashionData);
generateContent("spotlight", mediaData, true);
