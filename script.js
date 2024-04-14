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
//Récupérer le class dots
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
	//mettre à jour l'image
	bannerImg.src = slides[currentIndex].image
	//mettre à jour le texte
	bannerText.innerHTML = slides[currentIndex].tagLine
	//Mettre à jours les dots
	upDateDots()
}

//fonction créant les bullet points pour chaque image du carousel
function createDots(){
	//création de la liste de bullet points
	let ul = document.createElement("ul")
	// Ajout de la classe dots à ul
	ul.classList.add("dots")
	dots.appendChild(ul)
	//boucle permettant de récupérer le nombre de bullet points à ajouter
	for(let i=0; i < slides.length; i++){
		let li = document.createElement("li")
		ul.appendChild(li)
		// Ajout de la classe dot à tous les li
		li.classList.add("dot") 
	}
}

//fonction permettant de mettre à jour les bullet points en fonction de l'image à l'écran
function upDateDots (){
	// Récupérer toutes les class dot
	let allDot = document.querySelectorAll(".dot")
	// Appliquer la class dol_selected au bon bullet point
	allDot.forEach((dot, index) => {
		if (index === currentIndex) {
			dot.classList.add("dot_selected")
		} else {
			dot.classList.remove("dot_selected")
		}
	})
}

//ajout du déclenchement de l'image suivant au click sur la flèche de droite
arrow_right.addEventListener("click",() => {
	currentIndex = (currentIndex + 1) % slides.length;
	carousel()
})

//ajout du déclenchement de l'image suivant au click sur la flèche de gauche
arrow_left.addEventListener("click",() => {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	carousel()
})

//Appeler les fonctions
createDots()
carousel()
