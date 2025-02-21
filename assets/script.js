const leftArrow = document.querySelector('#left_arrow')
const rightArrow = document.querySelector('#right_arrow')
const imageBanner = document.querySelector(".banner-img")
const texteBanner = document.querySelector("#banner p")
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
let index2 = 3
leftArrow.addEventListener("click", () => {
    	console.log("Vous avez cliqué sur la flèche gauche")
		index2--
		console.log(index2)
		imageBanner.src = "./assets/images/slideshow/"+slides[index2].image
    })
rightArrow.addEventListener("click", () => {
    	console.log("Vous avez cliqué sur la flèche droite")
		index++
		console.log(index)
		imageBanner.src = "./assets/images/slideshow/"+slides[index].image
		texteBanner.innerHTML = slides[index].tagLine
	})

