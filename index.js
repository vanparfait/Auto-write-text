const container = document.getElementById("text");
const text = "Bonjour le Monde";
const limit = text.length;
let index = 0;

const idInterval = setInterval(() => {
  if (index <= limit) {
    container.textContent = text.slice(0, index++);
  } else {
    clearInterval(idInterval);
  }
}, 1000);
