const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
];

const memoryGame = new MemoryGame(cardNames);

memoryGame.shuffleCards();

const shuffledCards = memoryGame.getCards();

const memoryBoard = document.getElementById('memory-board');

shuffledCards.forEach(card => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');

  cardElement.setAttribute('data-card-name', card);

  const frontElement = document.createElement('div');
  frontElement.classList.add('front');
  frontElement.style.background = `url(img/${card}.jpg) no-repeat`;

  const backElement = document.createElement('div');
  backElement.classList.add('back');
  backElement.setAttribute('name', `${card}.jpg`);

  cardElement.appendChild(frontElement);
  cardElement.appendChild(backElement);

  memoryBoard.appendChild(cardElement);
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    console.log('Card clicked: ', card);
  });
});
