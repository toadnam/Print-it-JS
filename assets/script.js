// Gestion du slider
	// Définition des variables pour les flèches gauche et droite, les images, le texte, les bullets points et les slides de la bannière :
const leftArrow = document.querySelector('#left_arrow')
const rightArrow = document.querySelector('#right_arrow')
const imageBanner = document.querySelector(".banner-img")
const texteBanner = document.querySelector("#banner p")
const dotsBanner = document.querySelectorAll(".dot")
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

let index = 0

	//fonction de défilement au clic de la flèche droite :
rightArrow.addEventListener("click", () => {
		if (index < 3) {
			index++
			dotsBanner[index].classList.add("dot_selected")
			dotsBanner[index-1].classList.remove("dot_selected")
			imageBanner.src = "./assets/images/slideshow/"+slides[index].image
			texteBanner.innerHTML = slides[index].tagLine			
		}else{
			index = 0
			dotsBanner[3].classList.remove("dot_selected")
			dotsBanner[0].classList.add("dot_selected")
			imageBanner.src = "./assets/images/slideshow/"+slides[0].image
			texteBanner.innerHTML = slides[0].tagLine
		}	
	})

	// fonction de défilement au clic de la flèche gauche :
leftArrow.addEventListener("click", () => {
		if(index > 0){
			index --
			dotsBanner[index].classList.add("dot_selected")
			dotsBanner[index+1].classList.remove("dot_selected")
			imageBanner.src = "./assets/images/slideshow/"+slides[index].image
			texteBanner.innerHTML = slides[index].tagLine
		}else{
			index = 3
			dotsBanner[0].classList.remove("dot_selected")
			dotsBanner[3].classList.add("dot_selected")
			imageBanner.src = "./assets/images/slideshow/"+slides[3].image
			texteBanner.innerHTML = slides[3].tagLine
		}
	})
