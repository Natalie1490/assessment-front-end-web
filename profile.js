const favcolor = document.querySelector('#color')

function color(evt) {
    evt.preventDefault();
	alert('Purple');
}
favcolor.addEventListener('click', color);

const favplace = document.querySelector('#place')

function place(evt) {
    evt.preventDefault();
	alert('New York');
}
favplace.addEventListener('click', place);

const favritual = document.querySelector('#ritual')

function ritual(evt) {
    evt.preventDefault();
	alert('Eat, Sleep, and Repeat');
}
favritual.addEventListener('click', ritual);


console.log("Hey gurl")