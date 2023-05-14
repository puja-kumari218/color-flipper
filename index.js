
const colors = ["antiquewhite", "aquamarine", "blue", "orange", "cornflowerblue	","deeppink", "pink"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();


  
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
