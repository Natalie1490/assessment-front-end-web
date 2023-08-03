console.log("hello world");

const form = document.querySelector('form')

function handleSubmit(evt) {
	evt.preventDefault();
	alert('Form submitted sucessfully!');
}
form.addEventListener('submit', handleSubmit);

const cat = document.querySelector('img')

function catmouseover(evt) {
	alert('You Rock!');
}
cat.addEventListener('mouseover', catmouseover);