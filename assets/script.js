const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const bannerImg = document.querySelector('.banner-img');
const tagline = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

let currentSlide = 0;

// Créer les bullet points
slides.forEach((_, index) => {
    const dot = document.createElement('div'); 
    dot.classList.add('dot');
    if (index === 0) {
        dot.classList.add('dot_selected');
    }
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlide(currentSlide);
    });
});

// Fonction pour mettre à jour l'image, le texte et les points
function updateSlide(index) {
    const slide = slides[index];
    bannerImg.src = `./assets/images/slideshow/${slide.image}`;
    tagline.innerHTML = slide.tagLine;

    dots.forEach((dot, i) => {
        dot.classList.toggle('dot_selected', i === index);
    });
}

// Gestion des flèches
leftArrow.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide(currentSlide);
});

rightArrow.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide(currentSlide);
});