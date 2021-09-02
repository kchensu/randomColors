const code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const h2 = document.querySelector("h2");

btn.addEventListener("click", function () {
  const randomNumber = getRandomInteger();
  console.log(randomNumber);
  document.body.style.backgroundColor = randomNumber;
  color.textContent = randomNumber;
  color.style.color = randomNumber;
  h2.style.color = randomNumber;
});

function getRandomInteger() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    h = Math.floor(Math.random() * code.length);
    hex += code[h];
  }
  return hex;
}
