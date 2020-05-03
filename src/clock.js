const clockContainer = document.querySelector(".js-clock"),
  clockTitle = document.querySelector(".clock_title"),
  calendar = document.querySelector(".calendar");

function clock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const days = date.getDate();
  const months = date.getMonth();
  const years = date.getFullYear();

  calendar.innerText = `${months + 1}. ${days}. ${years}`;

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  clock();
  setInterval(clock, 1000);
}

init();
