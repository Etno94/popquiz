import { coords } from './data.js';

let iconCount = 0;

let containerEl = document.getElementById('figure');

function mouseCoordinates(event) {
  var rect = containerEl.getBoundingClientRect();
  // var body = document.getBoundingClientRect();
  var coordX = event.clientX; // - rect.left;
  var coordY = event.clientY; // - rect.top;
  var newCandle = document.createElement('div');
  newCandle.classList.add('candle');
  // newCandle.setAttribute('style', `top: ${coordX}px; left: ${coordY}px;`);
  containerEl.appendChild(newCandle);

  console.log('document', event.clientX, event.clientY);
  console.log('event', event);
  console.log('rect', rect);
  console.log('containerEl', containerEl);
  console.log('newCandle', newCandle.clientX, newCandle.clientY);
}

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
