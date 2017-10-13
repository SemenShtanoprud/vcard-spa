var $closer = document.querySelector('.section-closer');

var $linkOpener = document.querySelectorAll('.opener');
var $_about = document.querySelector('.content-about'),
	$_contact = document.querySelector('.content-contact');

$closer.addEventListener('click', function () {
	addClass($_about, 'hidden');
	addClass($_contact, 'hidden');
});

for (let i = 0; i < $linkOpener.length; i++) {
	let $_link = $linkOpener[i];
	$_link.addEventListener('click', function (event) {
		let _sec = event.srcElement.getAttribute('data-section');
		let _selector = '.content-' + _sec;
		removeClass(document.querySelector(_selector), 'hidden');
	});
}

function getClassNames ($element) {
	return $element.className.split(' ');
}

function addClass ($element, classString) {
	if(getClassNames($element).indexOf(classString) == -1)
		$element.className += ' ' + classString;
}

function removeClass ($element, name) {
	console.log($element);
	$element.classList.remove(name);
}