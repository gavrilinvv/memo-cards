import "./../scss/style.scss";
import { startMenu, modeMenu, pairMenu, sequenceMenu, otherGames, btnToModes, btnToMainPage, btnToTryAgain, btnToChangeDifficulty, btnToPairMenu, btnToSequenceMenu, btnToPairGame, btnToSequenceGame, btnToOtherGames } from "./elements.js";
import { showScreen } from "./utils.js";
import * as findPair from "./findPair";
import * as repeatPath from "./repeatPath";

btnToModes.forEach(btn => {
	btn.addEventListener('click', () => showScreen(modeMenu))
})

btnToMainPage.forEach(btn => {
	btn.addEventListener('click', () => showScreen(startMenu))
})

btnToTryAgain.forEach(btn => {
	btn.addEventListener('click', e => {
		// определяем игру и режим, запускаем ту же игру на той же сложности
		let mode = e.target.getAttribute('data-mode');
		let game = e.target.getAttribute('data-game');
		if (game === 'pair')		findPair.startPairGame(mode);
		if (game === 'sequence')	repeatPath.startSequenceGame(mode);

	})
})

btnToChangeDifficulty.forEach(btn => {
	btn.addEventListener('click', e => {
		// определяем игру, открываем опции этой игры
		let game = e.target.getAttribute('data-game');
		if (game === 'pair')		showScreen(pairMenu);
		if (game === 'sequence')	showScreen(sequenceMenu);

	})
})

btnToPairMenu.addEventListener('click', () => showScreen(pairMenu))

btnToSequenceMenu.addEventListener('click', () => showScreen(sequenceMenu))

btnToOtherGames.addEventListener('click', () => showScreen(otherGames))

btnToPairGame.forEach(btn => {
	btn.addEventListener('click', e => {
		let mode = e.target.getAttribute('data-mode');
		findPair.startPairGame(mode);
	})
})

btnToSequenceGame.forEach(btn => {
	btn.addEventListener('click', e => {
		let mode = e.target.getAttribute('data-mode');
		repeatPath.startSequenceGame(mode);
	})
})
