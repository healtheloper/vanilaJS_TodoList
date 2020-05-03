const body = document.querySelector("body");

const IMG_NUMBER = 6;

function loadBg(num) {
  const image = new Image();
  image.src = `images/${num + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genNumber() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randNumber = genNumber();
  loadBg(randNumber);
}

init();
