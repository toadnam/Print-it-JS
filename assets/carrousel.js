/* Function Counter */

counter.i = 0;
function counter(arrow) {
	if (arrow.className === "arrow_left") {
		(counter.i === 0) ? (counter.i = 3) : counter.i--;
	} else if(arrow.className === "arrow_right") {
		(counter.i === 3) ? (counter.i = 0) : counter.i++;
	}
	return counter.i;
}

/** Function display image, tagline */
function clickOnArrow(arrow) {
	let banner = document.getElementById("the_banner");
	let banner_tagLine = document.querySelector("#banner .arrow p");

	/** Set the image index   */
	let j = counter(arrow);

	/**Toggle index and Display next/previous img  */
	let imgSrc = "./assets/images/slideshow/" + slides[j].image;

	/** Set image src and tagline index */
	banner.setAttribute('src', imgSrc);
	banner_tagLine.innerHTML = slides[j].tagLine;

	switchSelectedDot(j);
}


/* Call to functions */

let previousImg = document.querySelector('.arrow_left');
previousImg.addEventListener('click', function () {
	let x = clickOnArrow(previousImg);
});

let nextImg = document.querySelector('.arrow_right');
nextImg.addEventListener('click', function () {
	clickOnArrow(nextImg);
});

