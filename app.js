const colors = ["red", "green", "blue", "yellow", "orange", "purple"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
  const randomNumber = getRandomInteger();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  color.style.color = colors[randomNumber];
});

function getRandomInteger() {
  return Math.floor(Math.random() * colors.length);
}
