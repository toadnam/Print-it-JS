const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
/*
  const dots = document.querySelector("dots");
  function showDots() {
	for (let i = 0; i < slides.length; i++) {
	  const dot = document.createElement("div");
	  dot.classList.add("dot");
	  dots.appendChild(dot);
	  console.log(dot);
	  console.log(dots);
	}
  }
  showDots();
  */
let index = 0;
img = slides[1].image;
document.querySelector(".arrow_right").addEventListener("click", () => {
  if (index < 0) {
    index = slides.length;
  } else if (index > slides.length) {
    index = 0;
  } else {
    img = slides[index].image;
    index++;
  }
});
console.log(index);
console.log(img);
