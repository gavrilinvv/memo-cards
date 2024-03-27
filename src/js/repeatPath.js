import { area, playground, btnToMainPage, btnToTryAgain, btnToChangeDifficulty } from "./elements.js";
import { showScreen, generateGrid, _getRandomFromArray, setActionWord, resetGame, fillingGridSequence, startSequence } from "./utils.js";


let repeatData = {}; // объект для перезапуска той же игры в случае проигрыша
let sequence = []; // последовательность карточек для игры ПОВТОРИ ПУТЬ

// старт игры ПОВТОРИ ПУТЬ
export function startSequenceGame(mode) {
	// reset
	resetGame();
	area.classList.remove('area-hide');

	repeatData.mode = mode;
	repeatData.game = 'sequence';
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

	// countdown.classList.add('_hidden');
	btnToMainPage.forEach(btn => btn.classList.remove('_hidden'));
	showScreen(playground);

	generateGrid(gridRows, gridCols);
	fillingGridSequence(gridRows, gridCols);

	let cards = document.querySelectorAll('.card');

	cards.forEach(card => card.classList.add('_opened'))
	startSequence();
	setActionWord('Запоминай');
}
