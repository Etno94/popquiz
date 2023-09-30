import { coords } from './data.js';

let containerEl = document.getElementById('popcorn');

function addIconOnClick() {
  if (!coords.length) return;
  let iCoords = Math.floor(Math.random() * (coords.length - 1));
  if (coords[iCoords]) {
    appendIcon(coords[iCoords]);
    coords.splice(iCoords, 1);
  }
  checkTotalIcons();
}

function appendIcon(coords) {
  var newCandle = document.createElement('div');
  newCandle.classList.add('candle');
  newCandle.setAttribute('style', `transform: translate(${coords})`);
  containerEl.appendChild(newCandle);
}

containerEl.addEventListener('click', addIconOnClick);

function checkTotalIcons() {
  if (!coords.length) {
    containerEl.classList.add('shown');
  }
}

// Automated for testing
while (coords.length) {
  addIconOnClick();
}

/*


*/
