
import { area, lifeCounter, actionWordBlock, screens, imgs, losing, winning } from "./elements.js";

let hiddenPairs = 0; // количество загаданных пар
let findedPairs = 0;
let lifes = 3;
let usedImgs = [];
let sequence = []; // последовательность карточек для игры ПОВТОРИ ПУТЬ
let openedCardOne = {
	coords: '',
	img: ''
};
let openedCardTwo = {
	coords: '',
	img: ''
};

export function showScreen(targetScreen) {
	screens.forEach(screen => screen.classList.add('_hidden'));
	targetScreen.classList.remove('_hidden');
}

export function resetGame() {
	area.innerHTML = '';
	usedImgs = [];
	sequence = [];
	openedCardOne = {
		coords: '',
		img: ''
	};
	openedCardTwo = {
		coords: '',
		img: ''
	};
	hiddenPairs = 0;
	findedPairs = 0;
	lifes = 3;
	lifeCounter.innerHTML = lifes;
}


// заполнение сетки карточкам для игры НАЙДИ ПАРУ
export function fillingGridPair(gridRows, gridCols) {
	let cells = [...document.querySelectorAll('.cell[data-coords]')]; // получаем все ячейки

	for (let i = 0; i < (gridCols*gridRows)/2; i++) {

		let img = '';
		while (!img && usedImgs.length !== imgs.length) {
			let randomImg = _getRandomFromArray(imgs); // получаем картинку
			if (!usedImgs.includes(randomImg)) {
				img = randomImg;
			}
		}

		let pair = createPair(img); // создаем пару карточек
		pair.forEach(card => {
			shuffle(cells).forEach(cell => {
				if (cell.innerHTML === '') {
					cell.appendChild(card);
				}
			})
		})
	}
}

// создание пар для игры НАЙДИ ПАРУ
export function createPair(img) {
	let res = [];

	res.push(createCard(img));
	res.push(createCard(img));

	usedImgs.push(img);

	return res;
}


export function initEventsPair() {
	let cards = document.querySelectorAll('.card');

	cards.forEach(card => {
		card.addEventListener('click', function() {
			this.classList.add('_opened-deg');

			if (openedCardOne.coords === '' && openedCardOne.img === '') {
				openedCardOne.coords = this.parentNode.getAttribute('data-coords');
				openedCardOne.img = this.querySelector('.card-content').innerHTML;
				openedCardOne.elem = this;
			} else {
				area.style.pointerEvents = 'none'; // блокируем поле на время демонстрации карточек
				openedCardTwo.coords = this.parentNode.getAttribute('data-coords');
				openedCardTwo.img = this.querySelector('.card-content').innerHTML;
				openedCardTwo.elem = this;
				if (openedCardOne.coords === openedCardTwo.coords) {
					area.style.pointerEvents = 'auto'; // возвращаем взаимосдействие с полем/карточками
					return;
				}
				setTimeout(() => {
					// карточки совпали
					if ((openedCardOne.img === openedCardTwo.img) && (openedCardOne.coords !== openedCardTwo.coords)) {

						openedCardOne.elem.classList.add('_finded');
						openedCardTwo.elem.classList.add('_finded');

						[openedCardOne.elem, openedCardTwo.elem].forEach(x => {
							hideEffectCard(x)
						})

						openedCardOne.coords = '';
						openedCardOne.img = '';
						openedCardTwo.coords = '';
						openedCardTwo.img = '';

						findedPairs++;
						if (findedPairs === hiddenPairs) {
							area.classList.add('area-hide');
							setTimeout(() => {
								showScreen(winning);
							}, 500)
						}

					} else {
						console.log(lifes);
						[openedCardOne.elem, openedCardTwo.elem].forEach(card => {
							card.classList.remove('_opened-deg');
						})
						openedCardOne.coords = '';
						openedCardOne.img = '';
						openedCardTwo.coords = '';
						openedCardTwo.img = '';
						detectError();
						if (lifes === 0) {
							showScreen(losing);
						}
					}
					area.style.pointerEvents = 'auto'; // возвращаем взаимосдействие с полем/карточками
				}, 800)
			}
		})
	})
}



// заполнение сетки карточкам для игры ПОВТОРИ ПУТЬ
export function fillingGridSequence(gridRows, gridCols) {
	let cells = [...document.querySelectorAll('.cell[data-coords]')]; // получаем все ячейки

	for (let i = 0; i < gridCols*gridRows; i++) {

		let img = '';
		while (!img && usedImgs.length !== imgs.length) {
			let randomImg = _getRandomFromArray(imgs); // получаем картинку
			if (!usedImgs.includes(randomImg)) {
				img = randomImg;
				usedImgs.push(img);
			}
		}

		let card = createCard(img);

		cells.forEach(cell => {
			if (cell.innerHTML === '') {
				cell.appendChild(card);
			}
		})
	}
}




export function startSequence() {
	let cells = [...document.querySelectorAll('.cell[data-coords]')]; // получаем все ячейки

	setTimeout(() => {
		shuffle(cells).forEach((cell, i) => {
			setTimeout(() => {
				cell.children[0].classList.add('_pathed');
				sequence.push(cell.getAttribute('data-coords'))
			}, 1000*i)
		})

		setTimeout(() => {
			cells.forEach(cell => cell.children[0].classList.remove('_pathed'));
			initEventsSequence()
		}, (1000*cells.length)+500)
	}, 1000)
}

export function initEventsSequence() {
	let cells = [...document.querySelectorAll('.cell[data-coords]')]; // получаем все ячейки
	let clickCounter = 0;
	setActionWord('Повтори путь');

	cells.forEach(cell => {
		cell.addEventListener('click', function() {
			if (cell.getAttribute('data-coords') === sequence[clickCounter]) {
				cell.children[0].classList.add('_pathed');
				clickCounter++;

				if (clickCounter === sequence.length) {
					// alert('Верно!');
					setTimeout(() => {
						showScreen(winning);
					}, 500)
				}
			} else {
				// alert('Неправильная последовательность!');
				cell.children[0].classList.add('_error');
				detectError();
				setTimeout(() => {
					cell.children[0].classList.remove('_error');
				}, 500);
				if (lifes === 0) {
					showScreen(losing);
				}
			}
		})
	})
}



// получение координаты центра элемента
export function getCenterOfElement(elem) {
	const rect = elem.getBoundingClientRect();
	return {
		left: rect.left + (rect.width / 2),
		top: rect.top +(rect.height / 2)
	};
}


export function hideEffectCard(card) {
	class Star extends mojs.CustomShape {
		getShape () {
			return '<path d="M5.51132201,34.7776271 L33.703781,32.8220808 L44.4592855,6.74813038 C45.4370587,4.30369752 47.7185293,3 50,3 C52.2814707,3 54.5629413,4.30369752 55.5407145,6.74813038 L66.296219,32.8220808 L94.488678,34.7776271 C99.7034681,35.1035515 101.984939,41.7850013 97.910884,45.2072073 L75.9109883,63.1330483 L82.5924381,90.3477341 C83.407249,94.4217888 80.4739296,97.6810326 77.0517236,97.6810326 C76.0739505,97.6810326 74.9332151,97.3551083 73.955442,96.7032595 L49.8370378,81.8737002 L26.044558,96.7032595 C25.0667849,97.3551083 23.9260495,97.6810326 22.9482764,97.6810326 C19.3631082,97.6810326 16.2668266,94.4217888 17.4075619,90.3477341 L23.9260495,63.2960105 L2.08911601,45.2072073 C-1.98493875,41.7850013 0.296531918,35.1035515 5.51132201,34.7776271 Z" />';
		}
	}
	mojs.addShape( 'star', Star );

	const burst = new mojs.Burst({
		left: 0, top: 0,
		radius:   { 6: 72 },
		angle:    45,
		children: {
			shape:        'star',
			radius:       72/2.2,
			fill:         '#FD7932',
			degreeShift:  'stagger(0,0)',
			duration:     1300,
			easing:       'quad.out',
		},
		onComplete() {
			this.el.parentNode.removeChild(this.el);
		}
	});

	burst
		.tune(getCenterOfElement(card))
		.setSpeed(3)
		.replay();
}


// создание карточки с картинкой
export function createCard(img) {
	let card = document.createElement('div');
	let front = document.createElement('div');
	let back = document.createElement('div');
	let content = document.createElement('div');

	card.classList.add('card');
	front.classList.add('card-front');
	back.classList.add('card-back');
	content.classList.add('card-content');

	content.innerHTML = img;

	front.appendChild(content);
	card.appendChild(front);
	card.appendChild(back);

	return card;
}

// получение случайного элемента из массива
export function _getRandomFromArray(items){
	return items[Math.floor(Math.random()*items.length)];
}

// перемешивание элементов массива
export function shuffle(arr) {
	var j, x, index;
	for (index = arr.length - 1; index > 0; index--) {
		j = Math.floor(Math.random() * (index + 1));
		x = arr[index];
		arr[index] = arr[j];
		arr[j] = x;
	}
	return arr;
}

// создание сетки по заданным параметрам. строки и столбцы
export function generateGrid(rows, cols) {
	let cellsCount = rows*cols;
	hiddenPairs = cellsCount/2;
	let sizeCellClass = cellsCount > 11 ? 'cell-xs' : cellsCount > 6 ? 'cell-sm' : 'cell-md';

	for (let i = 0; i < rows; i++) {
		let row = document.createElement('div');
		row.classList.add('row');

		for (let j = 0; j < cols; j++) {
			let cell = document.createElement('div');
			cell.classList.add('cell');
			cell.classList.add(sizeCellClass);
			cell.setAttribute('data-coords', (i + 1) + '-' + (j + 1));

			row.appendChild(cell);
		}

		area.appendChild(row);
	}
}

export function detectError() {
	lifeCounter.innerHTML = --lifes;
	lifeCounter.classList.add('_break');
	setTimeout(() => {
		lifeCounter.classList.remove('_break');
	}, 1000);
}

export function setActionWord(word) {
	actionWordBlock.classList.add('action-word__hidden');
	setTimeout(() => {
		actionWordBlock.innerHTML = word;
		actionWordBlock.classList.remove('action-word__hidden');
	}, 100)
}
