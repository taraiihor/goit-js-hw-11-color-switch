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

const randomBodyColor = {
  intervalId: null,
  isActiv: false,

  start() {
    if (this.isActiv) {
      return;
    }
    this.isActiv = true;
    this.intervalId = setInterval(() => {
      refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActiv = false;
  },
};

refs.startBtn.addEventListener('click', () => {
  randomBodyColor.start();
});
refs.stopBtn.addEventListener('click', () => {
  randomBodyColor.stop();
});

// метод рандмного вибору
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
