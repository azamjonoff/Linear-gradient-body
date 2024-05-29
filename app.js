const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const range = document.getElementById("range");
const body = document.querySelector("body");
const btn = document.querySelector("button");

const bgColor1 = color1.addEventListener("input", () => {
  color1.value;
});

const bgColor2 = color2.addEventListener("input", () => {
  color2.value;
});

const bgRange = range.addEventListener("input", () => {
  range.value;
});

btn.addEventListener("click", () => {
  body.style.background = `linear-gradient(${range.value}deg, ${color1.value}, ${color2.value}`;
});
