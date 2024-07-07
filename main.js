let sections = document.querySelectorAll('.main-right >.section');
let sum = document.querySelector('.summary');
let skills = document.querySelector('.skills');
let code = document.querySelector('.section.code');
let edu = document.querySelector('.education');
let lang = document.querySelector('.languages');

function removeActive() {
	sections.forEach(function(item) {
		item.classList.remove('active');
	});
}

document.body.addEventListener('click', function(event) {

	if (event.target.classList.contains('sum')) {
		removeActive();
		sum.classList.add('active');
	}
	else if (event.target.classList.contains('skill')) {
		removeActive();
		skills.classList.add('active');
	}
	else if (event.target.classList.contains('code')) {
		removeActive();
		code.classList.add('active');
	}
	else if (event.target.classList.contains('edu')) {
		removeActive();
		edu.classList.add('active');
	}
	else if (event.target.classList.contains('lang')) {
		removeActive();
		lang.classList.add('active');
	}
});

