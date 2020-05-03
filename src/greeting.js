const form = document.querySelector(".form"),
  greetings = document.querySelector(".greetings"),
  input = form.querySelector("input"),
  toDo = document.querySelector(".js-toDoForm");

function paintGreeting(text) {
  form.classList.remove("showing");
  greetings.classList.add("showing");
  greetings.innerText = `안녕하세요! ${text} 님`;
  toDo.classList.add("showing");
}

function handleInput(event) {
  event.preventDefault();
  const currentValue = input.value;
  localStorage.setItem("currentUser", currentValue);
  paintGreeting(currentValue);
}
function askForName() {
  form.classList.add("showing");
  form.addEventListener("submit", handleInput);
}

function loadName() {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

loadName();
