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

//eventlistener sur chacune des fleches du carrousel
let arrow_left = document.querySelector(".arrow_left")
let arrow_right = document.querySelector(".arrow_right")

arrow_left.addEventListener("click",()=>{
	console.log(arrow_left)
})

arrow_right.addEventListener("click",()=>{
	console.log(arrow_right)
})

//Ajout des bullet points au slider

let nombreDeBulletPoints = slides.length
console.log(nombreDeBulletPoints)


let ul = document.createElement("ul")
ul.classList.add("dot")
let dots = document.querySelector(".dots")

dots.appendChild(ul)

//fonction pour afficher autant de bullet point qu'il y a d'images dans le slider
for(let i=0; i < nombreDeBulletPoints; i++){
	let li = document.createElement("li")
	let dot = document.querySelector(".dot")
	dot.appendChild(li)
	
}

//activer le bullet point en cours de visionnage
let dot = document.querySelector(".dot")
for(let i = 0; i < slides.length; i++ ){
	const dotSelected = document.createElement("div")
	dotSelected.classList.add("dot_selected")
	dot.appendChild(dotSelected)

}

//affichage du carrousel
let imgCarrousel = slides.image
let i=0
let index = slides[i]
imgCarrousel.src ="./assets/images/slideshow/" + slides[index].image
imgCarrousel.classList.add("activeImg")
console.log(imgCarrousel)
