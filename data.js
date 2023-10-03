let figureH = '500px';
let figureW = '400px';

function mouseCoordinates(event) {
  var rect = containerEl.getBoundingClientRect();
  // var body = document.getBoundingClientRect();
  var coordX = event.clientX; // - rect.left;
  var coordY = event.clientY; // - rect.top;
  var newCandle = document.createElement('div');
  newCandle.classList.add('candle');
  containerEl.appendChild(newCandle);

  console.log('document', event.clientX, event.clientY);
  console.log('event', event);
  console.log('rect', rect);
  console.log('containerEl', containerEl);
  console.log('newCandle', newCandle.clientX, newCandle.clientY);
}

export const coords = [
  '-4px, -240px', // vertice norte
  '130px, -100px', // vertice noreste
  '65px, 120px', // vertice sureste
  '-75px, 120px', // vertice suroeste
  '-145px, -100px', // vertice noroeste

  // arista noroeste
  '-80px, -170px',
  '-50px, -205px',
  '-115px, -140px',

  // arista noreste
  '35px, -205px',
  '75px, -170px',
  '105px, -140px',

  // arista sureste
  '97px, 0px',
  '83px, 55px',
  '110px, -46px',

  // arista suroeste
  '-108px, 0px',
  '-93px, 55px',
  '-120px, -46px',

  // arista central sur
  '-5px, 120px',
  '30px, 120px',
  '-40px, 120px',

  // arista central norte
  '-8px, -97px',
  '56px, -97px',
  '-76px, -97px',

  // popcorn dots
  '-4px, -172px',
  '33px, -138px',
  '-44px, -138px',

  // vase logo
  '-12px, -30px',
  '19px, -6px',
  '-42px, -4px',
  '-29px, 28px',
  '10px, 32px',
];

export const icons = [
  '🎈', '🕯️', '🔥',
  '😎'
]

export const quiz = [
  {
    id: 1,
    question: 'Pregunta 1',
    answers: [
      {
        id: 1,
        answer: 'Q1 - Respuesta 1',
        icon: '😎',
        correct: true
      },
      {
        id: 2,
        answer: 'Q1 - Respuesta 2',
        icon: '🔥',
        correct: true
      },
      {
        id: 3,
        answer: 'Q1 - Respuesta 3',
        icon: '🎈',
        correct: true
      },
    ]
  },
  {
    id: 2,
    question: 'Pregunta 2',
    answers: [
      {
        id: 1,
        answer: 'Q2 - Respuesta 1',
        icon: '🎈'
      },
      {
        id: 2,
        answer: 'Q2 - Respuesta 2',
        icon: '🎈',
        correct: true
      },
      {
        id: 3,
        answer: 'Q2 - Respuesta 3',
        icon: '🎈'
      },
    ]
  }
]
