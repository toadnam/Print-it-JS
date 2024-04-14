const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span> en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span> pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span> de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span> avec découpe laser sur mesure</span>"
	}
];

//eventlistener sur chacune des fleches du carrousel
let arrow_left = document.querySelector(".arrow_left")
let arrow_right = document.querySelector(".arrow_right")

let dots = document.querySelector(".dots")

//définir l'index actuel du carousel
let currentIndex = 0
//Récupérer l'image à l'intérieur de la div
let bannerImg = document.querySelector(".banner-img")
//Récupérer la balise p à l'intérieur de la div
let bannerText = document.querySelector("#banner p")
//tableau pour stocker les bullets points




//fonction permettant de mettre à jour le carousel
function carousel(){
	bannerImg.src = slides[currentIndex].image
	bannerText.innerHTML = slides[currentIndex].tagLine
	//Mettre à jours les dots
	upDateDots()
}

function createDots(){
	let ul = document.createElement("ul")
	ul.classList.add("dots") // Ajout de la classe dots à ul
	dots.appendChild(ul)

	for(let i=0; i < slides.length; i++){
		let li = document.createElement("li")
		ul.appendChild(li)
		li.classList.add("dot") // Ajout de la classe dot à tous les li
	}
}

function upDateDots (){
	let allDot = document.querySelectorAll(".dot")
	allDot.forEach((dot, index) => {
		if (index === currentIndex) {
			dot.classList.add("dot_selected")
		} else {
			dot.classList.remove("dot_selected")
		}
	})
}

arrow_right.addEventListener("click",() => {
	currentIndex = (currentIndex + 1) % slides.length;
	carousel()
})

arrow_left.addEventListener("click",() => {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	carousel()
})

createDots()
carousel()
