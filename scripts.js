const BODY = document.querySelector('body');
const BOARD = document.querySelector('.board');
const RESET = document.querySelector('.reset');
const SIZE = document.querySelector('input');
const RAINBOW = document.querySelector('.rainbow');
const BLACK = document.querySelector('.black');


createDiv(16);

let currentColor = 'colorBlack';

let PIXELS = document.querySelectorAll('.board-square');

SIZE.addEventListener('change', changeGridSize);

PIXELS.forEach(pix => {pix.addEventListener("mouseenter", colorBlack, 'false');
});

RAINBOW.addEventListener('click', () => {
		PIXELS.forEach(pix => {pix.removeEventListener('mouseenter', colorBlack, 'false');
			pix.addEventListener('mouseenter', colorRainbow, 'false');
		});
	
});

BLACK.addEventListener('click', () => {
		PIXELS.forEach(pix => {pix.removeEventListener('mouseenter', colorRainbow, 'false');
			pix.addEventListener('mouseenter', colorBlack, 'false');
		});
});

RESET.addEventListener('click', () => {removeColor(PIXELS)});


function createDiv(num) {
	for (let i = 0; i < num; i++) {
		let div = document.createElement('div');
		div.className = 'board-square';
		BOARD.appendChild(div);
	}
}

function removeColor(elementList) {
	elementList.forEach(element => {element.style.backgroundColor = ''});
}

function changeGridSize(e) {
	let num = e.target.value;

	if (num > 100) {
		return 
	}
	let size = 400 / num;
	BOARD.innerHTML = "";
	BOARD.style.gridTemplateColumns = `repeat(${num},${size}px)`;
	BOARD.style.gridTemplateRows = `repeat(${num},${size}px)`;

	createDiv(num*num);
	PIXELS = document.querySelectorAll('.board-square');
	PIXELS.forEach(pix => {pix.addEventListener("mouseenter", colorBlack, 'false');
	});
}

function colorBlack(e) {
	e.target.style.backgroundColor = 'black';
}

function colorRainbow(e) {
	e.target.style.backgroundColor = randomRGBGen();
}

function colorGreyScale(e) {
//	e.target.style.backgroundColor = // random greyscale gen
}

function randomRGBGen() { 
	return `rgba(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.random().toFixed(1)})`
}


