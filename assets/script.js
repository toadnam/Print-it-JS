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
let bannerImg = document.querySelector(".banner-img");
let bannerTag = document.getElementById("tag");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");

let index = 0;
bannerImg.src = "./assets/images/slideshow/" + slides[0].image;
arrowRight.addEventListener("click", () => {
  index++;
  if (index > slides.length) {
    index = 0;
    index++;
  } else {
    bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
    bannerTag.innerHTML = slides[index].tagLine;
    let indexDot = 0;

    dots.forEach((dot) => {
      if (indexDot === index) {
        dot.classList.add("dot_selected");
      } else {
        dot.classList.remove("dot_selected");
      }
      indexDot++;
    });
  }
});
arrowLeft.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = slides.length;
    index--;
  } else {
    bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
    bannerTag.innerHTML = slides[index].tagLine;
    let indexDot = 0;

    dots.forEach((dot) => {
      if (indexDot === index) {
        dot.classList.add("dot_selected");
      } else {
        dot.classList.remove("dot_selected");
      }
      indexDot++;
    });
  }
  console.log(indexDot);
});
console.log(index);

console.log(bannerImg);
