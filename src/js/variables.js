export let usedImgs = []; // использованные изображения при создании пар
export let sequence = []; // последовательность карточек для игры ПОВТОРИ ПУТЬ
// let errorCounter = 0;
export let repeatData = {}; // объект для перезапуска той же игры в случае проигрыша
export let lifes = 3;
export let hiddenPairs = 0; // количество загаданных пар
export let findedPairs = 0; // количество найденных пар
export let openedCardOne = {
	coords: '',
	img: ''
};
export let openedCardTwo = {
	coords: '',
	img: ''
};


// export { usedImgs, sequence, repeatData, lifes, hiddenPairs, findedPairs, openedCardOne, openedCardTwo }
