const BODY = document.querySelector('body');
const BOARD = document.querySelector('.board');
const RESET = document.querySelector('.reset');
const SIZE = document.querySelector('input');

createDiv(16);

let PIXELS = document.querySelectorAll('.board-square');

SIZE.addEventListener('change', changeGridSize);

PIXELS.forEach(pix => {pix.addEventListener("mouseenter", function(e) {
		e.target.classList.add("black");
			}, 'false');
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
	elementList.forEach(element => {element.classList.remove("black")});
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
	PIXELS.forEach(pix => {pix.addEventListener("mouseenter", function(e) {
			e.target.classList.add("black");
				}, 'false');
	});
}
