import { coords, quiz } from './data.js';

let localStorageQuestions = localStorage.getItem('questions');
let questions = localStorageQuestions ? JSON.parse(localStorageQuestions) : quiz.reverse();
let localStorageCurrentQuestion = localStorage.getItem('currentQuestion');
let currentQuestion = localStorageCurrentQuestion ? JSON.parse(localStorageCurrentQuestion) : null;
let localStorageIconsAppended = localStorage.getItem('iconsAppended');
let iconsAppended = localStorageIconsAppended ? JSON.parse(localStorageIconsAppended) : [];

let containerEl = document.getElementById('popcorn');
containerEl.addEventListener('click', () => addIcon('🕯️'));

function addIcon(iconClass) {
  if (!coords.length) return;
  let iCoords = Math.floor(Math.random() * (coords.length - 1));
  if (coords[iCoords]) {
    appendIcon(coords[iCoords], iconClass);
    coords.splice(iCoords, 1);
  }
}

function appendIcon(coords, iconClass, updateLS = true) {
  var newCandle = document.createElement('div');
  newCandle.classList.add('icon', iconClass);
  newCandle.setAttribute('style', `transform: translate(${coords})`);
  containerEl.appendChild(newCandle);
  checkTotalIcons();

  if (!updateLS) return;
  iconsAppended.push({icon: iconClass, coords});
  localStorage.setItem('iconsAppended', JSON.stringify(iconsAppended));
}

function checkTotalIcons() {
  if (!questions.length && !currentQuestion) {
    containerEl.classList.add('shown');
    let body = document.getElementsByTagName('body')[0];
    console.log(body);
    let canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    body.appendChild(canvas);
  }
}

// Cards

let deckElement = document.getElementById('deck');
let quizPanelElement = document.getElementById('quiz-panel');
let cardContainerElement = document.getElementById('card-container');
let closeCard = document.getElementById('closeCard');

closeCard.addEventListener('click', () => {
  closeQuizPanel();
});

deckElement.addEventListener('click', () => {
  if (!questions.length && !currentQuestion) return;
  if(!currentQuestion) {
    currentQuestion = questions.pop();
    if (!currentQuestion) return;
    localStorage.setItem('currentQuestion', JSON.stringify(currentQuestion));
    localStorage.setItem('questions', JSON.stringify(questions));
  }
  buildQuestion();
  openQuizPanel();
});

function openQuizPanel() {
  quizPanelElement.style.display = 'flex';
}

function closeQuizPanel() {
  quizPanelElement.style.display = 'none';
}

function buildQuestion() {
  let questionEle = document.createElement('h2');
  questionEle.classList.add('question');
  questionEle.innerText = currentQuestion.question;

  let optionsEle = document.createElement('div');
  optionsEle.classList.add('options');

  currentQuestion.answers.forEach(ans => {
    let div = document.createElement('div');
    div.setAttribute("id", `answer_${ans.id}`);
    div.classList.add('answer');
    
    let iconBtn = document.createElement('button');
    iconBtn.innerHTML = `${ans.icon}`;
    iconBtn.addEventListener('click', () => checkAnswer(ans.id));
    let answerSpan = document.createElement('span');
    answerSpan.innerHTML = `${ans.answer}`;

    div.append(iconBtn, answerSpan);

    optionsEle.appendChild(div);
  });

  cardContainerElement.innerHTML = '';
  cardContainerElement.appendChild(questionEle);
  cardContainerElement.appendChild(optionsEle);
}

function checkAnswer(answerId) {
  let answer = currentQuestion.answers.find(a => a.id == answerId);
  if (answer.correct) {
    addIcon(answer.icon);
    closeQuizPanel();
    currentQuestion = null;
    localStorage.removeItem('currentQuestion');
  } else {
    let div = document.getElementById(`answer_${answerId}`);
    div.classList.add('low-contrast');
  }
}

function updateDeck() {

}

window.onload = () => {
  for(let icon of iconsAppended) {
    appendIcon(icon.coords, icon.icon, false);
    coords.splice(coords.findIndex(c => c == icon.coords), 1);
  }
};



// Automated for testing

// while (coords.length) {
//   addIconOnClick();
// }

