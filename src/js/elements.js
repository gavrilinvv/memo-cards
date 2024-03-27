const area = document.querySelector('.area');
const app = document.querySelector('#app');

// screens
const startMenu = document.querySelector('.start-menu');
const modeMenu = document.querySelector('.mode-menu');
const pairMenu = document.querySelector('.pair-menu');
const sequenceMenu = document.querySelector('.sequence-menu');
const playground = document.querySelector('.playground');
const losing = document.querySelector('.losing');
const winning = document.querySelector('.winning');
const otherGames = document.querySelector('.other-games');

// elements
const lifeCounter = document.querySelector('.life-counter');
const actionWordBlock = document.querySelector('.action-word');

//btns
const btnToModes = document.querySelectorAll('.js-to-modes');
const btnToMainPage = document.querySelectorAll('.js-to-mainpage');
const btnToTryAgain = document.querySelectorAll('.js-to-try-again');
const btnToChangeDifficulty = document.querySelectorAll('.js-to-change-difficulty');

const btnToPairMenu = document.querySelector('.js-to-pair-menu');
const btnToSequenceMenu = document.querySelector('.js-to-sequence-menu');

const btnToPairGame = document.querySelectorAll('.js-to-pair-game');
const btnToSequenceGame = document.querySelectorAll('.js-to-sequence-game');

const btnToOtherGames = document.querySelector('.js-to-other-games');

const screens = [startMenu, modeMenu, pairMenu, sequenceMenu, playground, losing, winning, otherGames];

const imgs = ['🥶', '🍩', '😋', '😎', '😈', '👽', '👾', '😉', '🦀', '🦴', '🚀', '⏰', '🐘', '🎱', '🍉', '🍇', '🐳'];

export { area, startMenu, modeMenu, pairMenu, sequenceMenu, playground, losing, winning, otherGames, lifeCounter, actionWordBlock, btnToModes, btnToMainPage, btnToTryAgain, btnToChangeDifficulty, btnToPairMenu, btnToSequenceMenu, btnToPairGame, btnToSequenceGame, btnToOtherGames, screens, imgs }
