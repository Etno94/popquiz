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

export const quiz = [
  {
    id: 1,
    question: '¿Cómo te llamás?',
    answers: [
      {
        id: 1,
        answer: 'Anto',
        icon: '😎',
        correct: true
      },
      {
        id: 2,
        answer: 'Barbie',
        icon: '💅',
        correct: true
      },
      {
        id: 3,
        answer: 'Baby Ruthless',
        icon: '🔥',
        correct: true
      },
    ]
  },
  {
    id: 2,
    question: '¿Vos sos la cumplañera de la que todo el mundo viene gedeando toda la semana?',
    answers: [
      {
        id: 1,
        answer: 'Ehh....',
        icon: '🤐',
        correct: true
      },
      {
        id: 2,
        answer: 'Nada que ver',
        icon: '👀',
        correct: true
      },
      {
        id: 3,
        answer: 'Sabelo bb',
        icon: '😎',
        correct: true
      },
    ]
  },
  {
    id: 3,
    question: '¿Cuántos cumplís?',
    answers: [
      {
        id: 1,
        answer: 'No dije que cumpliera años',
        icon: '👀',
      },
      {
        id: 2,
        answer: '29',
        icon: '🤭',
      },
      {
        id: 3,
        answer: '31',
        icon: '😑',
        correct: true
      },
    ]
  },
  {
    id: 4,
    question: '¡Picarona! Osea que venís rockanrolleando desde el 92',
    answers: [
      {
        id: 1,
        answer: 'Claramente',
        icon: '😎',
        correct: true
      },
      {
        id: 2,
        answer: 'Duh',
        icon: '🙄',
        correct: true
      },
      {
        id: 3,
        answer: 'Y pienso seguir mucho más',
        icon: '💅',
        correct: true
      },
    ]
  },
  {
    id: 5,
    question: '¿Estás contenta? ¿La estás pasando bien?',
    answers: [
      {
        id: 1,
        answer: 'Obvio',
        icon: '😎',
        correct: true
      },
      {
        id: 2,
        answer: 'Chi',
        icon: '🥰',
        correct: true
      },
      {
        id: 3,
        answer: 'Ño',
        icon: '😒',
        correct: true
      },
    ]
  },
  {
    id: 6,
    question: 'Escuché por ahí que tenés un duo cumplañero de hace unos días',
    answers: [
      {
        id: 1,
        answer: '¡Siii!',
        icon: '🥰',
        correct: true
      },
      {
        id: 2,
        answer: '¿Duo?',
        icon: '🤐',
      },
      {
        id: 3,
        answer: 'Mi hermano Lucas',
        icon: '😎',
        correct: true
      },
    ]
  },
  {
    id: 7,
    question: '¿Peleaban por regalos de más peques?',
    answers: [
      {
        id: 1,
        answer: 'Para nada',
        icon: '🤭',
        correct: true
      },
      {
        id: 2,
        answer: 'Todos los años',
        icon: '🙄',
        correct: true
      },
      {
        id: 3,
        answer: 'Yo siempre ganaba',
        icon: '✨',
        correct: true
      },
    ]
  },
  {
    id: 8,
    question: 'Elegí una decoración para tu salón de fiesta',
    answers: [
      {
        id: 1,
        answer: '',
        icon: '🎈',
        correct: true
      },
      {
        id: 2,
        answer: '',
        icon: '🕯️',
        correct: true
      },
      {
        id: 3,
        answer: '',
        icon: '🎁',
        correct: true
      },
      {
        id: 4,
        answer: '',
        icon: '🎉',
        correct: true
      },
    ]
  },
  {
    id: 9,
    question: '¿Qué comiste hoy para celebrar?',
    answers: [
      {
        id: 1,
        answer: 'Panchitos (o algo rico)',
        icon: '🤤',
        correct: true
      },
      {
        id: 2,
        answer: 'Cerdo (yeah right)',
        icon: '🤢',
      },
      {
        id: 3,
        answer: 'Algo sanito',
        icon: '😇',
        correct: true
      },
    ]
  },
  {
    id: 10,
    question: '¿Vas a festejarlo en familia?',
    answers: [
      {
        id: 1,
        answer: 'Seguramente',
        icon: '💖',
        correct: true
      },
      {
        id: 2,
        answer: 'Tengo que pensarlo',
        icon: '🤔',
      },
      {
        id: 3,
        answer: 'No creo',
        icon: '💔'
      },
    ]
  },
  {
    id: 11,
    question: '¿Con amistades?',
    answers: [
      {
        id: 1,
        answer: 'Work in progress',
        icon: '🤫',
        correct: true
      },
      {
        id: 2,
        answer: 'Lo dudo',
        icon: '🤔',
        correct: true
      },
      {
        id: 3,
        answer: 'Nop',
        icon: '😶',
        correct: true
      },
    ]
  },
  {
    id: 12,
    question: '¿Algún otro festejo en mente? 👀',
    answers: [
      {
        id: 1,
        answer: '👀',
        icon: '👀',
      },
      {
        id: 2,
        answer: '👀👀👀',
        icon: '😳',
      },
      {
        id: 3,
        answer: '👀👀👀👀👀👀👀👀👀👀👀👀',
        icon: '🙈',
        correct: true
      },
    ]
  },
  {
    id: 13,
    question: '¡🐽!',
    answers: [
      {
        id: 1,
        answer: '¿Queeé?',
        icon: '🤭',
      },
      {
        id: 2,
        answer: 'Caiese',
        icon: '🙈',
      },
      {
        id: 3,
        answer: 'Estúpido',
        icon: '🤣',
        correct: true
      },
    ]
  },
  {
    id: 14,
    question: 'La boquita 👀',
    answers: [
      {
        id: 1,
        answer: '¿Ah?',
        icon: '🤭',
        correct: true
      },
      {
        id: 2,
        answer: '¿Qué pasa con mi boca?',
        icon: '😶',
      },
      {
        id: 3,
        answer: 'Puerco',
        icon: '🤭'
      },
    ]
  },
  {
    id: 15,
    question: 'Sigamos 🤭 ¿Juego de mesa?',
    answers: [
      {
        id: 1,
        answer: 'T.E.G.',
        icon: '🌍',
        correct: true
      },
      {
        id: 2,
        answer: 'Preguntados',
        icon: '❓',
        correct: true
      },
      {
        id: 3,
        answer: 'El Erudito',
        icon: '🧙',
        correct: true
      },
    ]
  },
  {
    id: 16,
    question: '¿Juego de consola? 🕹️',
    answers: [
      {
        id: 1,
        answer: 'Mario',
        icon: '🕹️',
        correct: true
      },
      {
        id: 2,
        answer: 'Pókemon',
        icon: '🕹️',
        correct: true
      },
      {
        id: 3,
        answer: 'Donkey Kong',
        icon: '🕹️',
        correct: true
      },
    ]
  },
  {
    id: 17,
    question: '¿Juego de PC?',
    answers: [
      {
        id: 1,
        answer: 'Stardew Valley',
        icon: '🚜',
        correct: true
      },
      {
        id: 2,
        answer: 'Broken Sword',
        icon: '💣',
        correct: true
      },
      {
        id: 3,
        answer: 'Need for Speed',
        icon: '🚗',
        correct: true
      },
    ]
  },
  {
    id: 18,
    question: '¿A quién dejás pasar a tu fiesta?',
    answers: [
      {
        id: 1,
        answer: 'Alex Turner',
        icon: '👨‍🎤',
      },
      {
        id: 2,
        answer: 'Gandalf the Grey',
        icon: '🧙',
      },
      {
        id: 3,
        answer: 'Fox Mulder',
        icon: '👨‍💼',
        correct: true
      },
    ]
  },
  {
    id: 19,
    question: 'Sumemos otra decoración',
    answers: [
      {
        id: 1,
        answer: '',
        icon: '🎇',
        correct: true
      },
      {
        id: 2,
        answer: '¿Seguro que esto es una vela? 👀',
        icon: '🧨',
        correct: true
      },
      {
        id: 3,
        answer: '',
        icon: '🎆',
        correct: true
      },
      {
        id: 4,
        answer: '',
        icon: '🎊',
        correct: true
      },
    ]
  },
  {
    id: 20,
    question: '¿Cuál superpoderosa tiene pase VIP? 💗',
    answers: [
      {
        id: 1,
        answer: 'Ella le habla a los animalitos, yo lidio con animales todos los días',
        icon: '💙',
        correct: true
      },
      {
        id: 2,
        answer: 'Grumpy punky gurl',
        icon: '💚',
        correct: true
      },
      {
        id: 3,
        answer: 'Porque #sabelotodo siempre 💅',
        icon: '❤️',
        correct: true
      },
    ]
  },
  {
    id: 21,
    question: '¿Qué sería un buen alimento para una serpiente? 🐍',
    answers: [
      {
        id: 1,
        answer: 'Ratones (no te preocupes, no van a entrar al salón)',
        icon: '🐭',
      },
      {
        id: 2,
        answer: 'Un sombrero',
        icon: '🎩',
        correct: true
      },
      {
        id: 3,
        answer: 'Lechuguita',
        icon: '🥗'
      },
    ]
  },
  {
    id: 22,
    question: 'Mentí, se te coló un ratón. Buscalo',
    answers: [
      {
        id: 1,
        answer: '',
        icon: '😱',
        correct: true
      },
      {
        id: 2,
        answer: '',
        icon: '😱',
        correct: true
      },
      {
        id: 3,
        answer: '',
        icon: '😱',
        correct: true
      },
    ]
  },
  {
    id: 23,
    question: 'Tranqui, ya pasamos el pesticida. Fijate que aún haya bebida',
    answers: [
      {
        id: 1,
        answer: '¡Birrita!',
        icon: '🍺',
        correct: true
      },
      {
        id: 2,
        answer: 'Me copo con un gin',
        icon: '🍸',
        correct: true
      },
      {
        id: 3,
        answer: '¿Fernet no había? 🥺',
        icon: '🍷',
        correct: true
      },
    ]
  },
  {
    id: 24,
    question: 'No, mi amor. Aún no tenemos Fernet en los emojis. ¡Unicode, ponete las pilas!',
    answers: [
      {
        id: 1,
        answer: 'Te voy a hacer puchero',
        icon: '🥺',
        correct: true
      },
      {
        id: 2,
        answer: 'Malo',
        icon: '🥺',
        correct: true
      },
      {
        id: 3,
        answer: 'Quiero mi ferchito',
        icon: '🥺',
        correct: true
      },
    ]
  },
  {
    id: 25,
    question: 'En casa te preparo ferchito',
    answers: [
      {
        id: 1,
        answer: 'Siiii',
        icon: '🤩',
        correct: true
      },
      {
        id: 2,
        answer: 'Chiiii',
        icon: '🥰',
        correct: true
      },
      {
        id: 3,
        answer: 'Pero quiero ahora',
        icon: '🥺',
        correct: true
      },
    ]
  },
  {
    id: 26,
    question: 'Y te hago masajitos',
    answers: [
      {
        id: 1,
        answer: '',
        icon: '😳',
      },
      {
        id: 2,
        answer: 'Puerco',
        icon: '🙈',
        correct: true
      },
      {
        id: 3,
        answer: 'Y me rascas en la espaldita',
        icon: '🤩',
        correct: true
      },
    ]
  },
  {
    id: 27,
    question: 'Y te rasco en la espaldita. Pero antes decime ¿Cómo te dicen?',
    answers: [
      {
        id: 1,
        answer: 'Pirignacia',
        icon: '🧝‍♀️',
      },
      {
        id: 2,
        answer: 'Cochinota',
        icon: '🐽',
        correct: true
      },
      {
        id: 3,
        answer: 'Pimpona',
        icon: '🍫',
        correct: true
      },
    ]
  },
  {
    id: 28,
    question: '¿Y cómo me dicen a mí?',
    answers: [
      {
        id: 1,
        answer: 'Zefio',
        icon: '🧟',
        correct: true
      },
      {
        id: 2,
        answer: 'Nacho (no hay emoji, Unicode y lpqtp)',
        icon: '🍔',
      },
      {
        id: 3,
        answer: '¿Y vos eras...?',
        icon: '🤔',
        correct: true
      },
    ]
  },
  {
    id: 29,
    question: '¿Enserio aún seguís sin saber como me llamo? 😒',
    answers: [
      {
        id: 1,
        answer: 'Vos sos Mío',
        icon: '🤭',
        correct: true
      },
      {
        id: 2,
        answer: 'Vos sos Osito',
        icon: '🐻',
        correct: true
      },
      {
        id: 3,
        answer: 'Your name is Inigo Montoya. I killed your father. I will prepare to die!',
        icon: '🤺',
        correct: true
      },
    ]
  },
  {
    id: 30,
    question: 'Say my name',
    answers: [
      {
        id: 1,
        answer: 'Heisenberg',
        icon: '⚗️',
        correct: true
      }
    ]
  },
  {
    id: 31,
    question: 'Youre damn right! Happy birthday babe 🎁 I love you 💕',
    answers: [
      {
        id: 1,
        answer: 'I love you more ',
        icon: '🥰',
        correct: true
      },
      {
        id: 2,
        answer: 'Love you deeply',
        icon: '💓',
        correct: true
      },
      {
        id: 3,
        answer: 'I will bite the fuck out of you',
        icon: '👄',
        correct: true
      },
    ]
  },
]
