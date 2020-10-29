const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.body,
};

refs.startBtn.addEventListener('click', onStartTime);
refs.stopBtn.addEventListener('click', offStartTime);

function onStartTime() {
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
}

function offStartTime() {
  clearInterval(intervalId);
  console.log('виключити');
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
