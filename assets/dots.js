/** Display the dots */
let container = document.querySelector("#banner .dots");
let theDiv = "";
for (let i = 0; i < slides.length; i++) {
	if (i !== 0) {
		theDiv += `<div id="` + i + `"class='dot'> </div>`;
	} else if(i === 0) {
		theDiv += `<div id="` + i + `"class='dot dot_selected'> </div>`;
	}
}
container.innerHTML = theDiv;


/** Function Toggle selected dot */
function switchSelectedDot(acualImage) {
	let dots = document.querySelector(".dots");
	for (const child of dots.children) {
		if (parseInt(child.id) === acualImage) {
			child.classList.add("dot_selected");
		} else if (parseInt(child.id) !== acualImage) {
			child.classList.remove("dot_selected");
		}
	}
}