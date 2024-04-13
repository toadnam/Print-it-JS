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
]

//console.log(slides.tagLine[0])

//eventlistener sur chacune des fleches du carrousel
let arrow_left = document.querySelector(".arrow_left")
let arrow_right = document.querySelector(".arrow_right")

//arrow_left.addEventListener("click",()=>{
//	console.log(arrow_left)
//})

//arrow_right.addEventListener("click",()=>{
//	console.log(arrow_right)
//})

//Ajout des bullet points au slider

let ul = document.createElement("ul")
//ul.classList.add("dot")
let dots = document.querySelector(".dots")

dots.appendChild(ul)




//définir l'index actuel du carousel
let currentIndex = 0

//Récupérer la div banner
let bannerDiv = document.getElementById("banner")

//Récupérer l'image à l'intérieur de la div
let bannerImg = bannerDiv.getElementsByClassName("banner-img")[0]

//Récupérer la balise p à l'intérieur de la div
let bannerText = bannerDiv.getElementsByTagName("p")[0]


//fonction permettant de mettre à jour le carousel
function carousel(){
slides.forEach(slide => {	
	//mettre à jour l'image
	bannerImg.src = slides[currentIndex].image
	//mettre à jour le texte
	bannerText.innerHTML = slides[currentIndex].tagLine
	//passer à l'élément suivant
	currentIndex = (currentIndex + 1) % slides.length
})}

//fonction pour afficher autant de bullet point qu'il y a d'images dans le slider
function createDots(){
for(let i=0; i < slides.length; i++){
	let li = document.createElement("li")
	let dot = document.querySelector(".dot")
	ul.appendChild(li)
	let div = document.querySelector(".dots")
	div.classList.remove("dots")
	ul.classList.add("dots")
	li.classList.add("dot")
}


//Ajout du click sur la flèche de droite
arrow_right.addEventListener("click",() => {
	currentIndex = (currentIndex + 1) % slides.length;
	carousel()
	})

//Ajout du click sur la flèche de gauche
arrow_left.addEventListener("click",() => {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length
	carousel()
})
}
createDots()

//récupérer tous les bullet points
let li = document.querySelector("ul > li")

//fonction pour mettre à jour les bullet points
function upDateDots (){
		//parcourir tous les bullet points
	for (let i=0; i<li.length; i++){
		//supprimer la classe dot du bullet point actif
		li[currentIndex].classList.remove("dot")
		//supprimer la classe dot_selected de tous les bullet points
		li.classList.remove("dot_selected")
	}
		//ajouter la classe au bullet point affiché
		li[currentIndex].classList.add("dot_selected")
}

//Mettre à jour les bullet points à chaque changement de slide

upDateDots()