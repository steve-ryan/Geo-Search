let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

//degree to ℉ conversion
let f = document.getElementById("output℉");
function tempConverter(valNum) {
  valNum = parseFloat(valNum);
  f.innerHTML = (valNum * 1.8) + 32;
}