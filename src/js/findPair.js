// функции для игры НАЙДИ ПАРУ
// function startCountdown(i) {
// 	i = i-1;
// 	let elem = document.querySelector('.countdown__light-3');
// 	elem.style.visibility = 'visible';
// 	var int = setInterval(() => {
// 		let elem = document.querySelector('.countdown__light-' + i);
// 		elem.style.visibility = 'visible';
// 		if (i === 1) {
// 			clearInterval(int);
// 			setTimeout(() => {
// 				countdown.classList.add('_hidden');
// 				lifeCounter.classList.remove('_hidden');
// 				btnToMainPage.forEach(btn => btn.classList.remove('_hidden'));
// 			}, 800)
// 		}
// 		i--;
// 	}, 1000);
// }

import { area, playground, btnToTryAgain, btnToChangeDifficulty } from "./elements.js";
import { showScreen, generateGrid, _getRandomFromArray, setActionWord, resetGame, fillingGridPair, initEventsPair } from "./utils.js";

let repeatData = {}; // объект для перезапуска той же игры в случае проигрыша

// старт игры НАЙДИ ПАРУ
export function startPairGame(mode) {
	// reset
	resetGame();
	area.classList.remove('area-hide');
	// countdown.classList.remove('_hidden');

	// document.querySelector('.countdown__light-1').style.visibility = 'hidden';
	// document.querySelector('.countdown__light-2').style.visibility = 'hidden';
	// document.querySelector('.countdown__light-3').style.visibility = 'hidden';

	repeatData.mode = mode;
	repeatData.game = 'pair';
	// проставляем режим для кнопки "попробовать снова"
	btnToTryAgain.forEach(btn => {
		btn.setAttribute('data-mode', repeatData.mode);
		btn.setAttribute('data-game', repeatData.game);
	})

	// проставляем название игры для кнопки "сменить сетку"
	btnToChangeDifficulty.forEach(btn => {
		btn.setAttribute('data-game', repeatData.game);
	})

	let gridRows = mode.split('x')[0];
	let gridCols = mode.split('x')[1];

	// btnToMainPage.forEach(btn => btn.classList.add('_hidden'));
	showScreen(playground);
	// startCountdown(3);

	generateGrid(gridRows, gridCols);
	fillingGridPair(gridRows, gridCols);
	firstShow();
	setActionWord('Запоминай');
}


// первый показ всех карточек
export function firstShow() {
	let cards = document.querySelectorAll('.card');

	cards.forEach(card => {
		card.classList.add('_opened-deg');
	})

	setTimeout(() => {
		cards.forEach(card => {
			card.classList.remove('_opened-deg');
		})
		initEventsPair();
		setActionWord('Найди пары');
	}, 3000)
}
