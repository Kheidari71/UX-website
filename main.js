//show navs when clicking on hamburger menu
var icon = document.getElementById("bar");
var nav = document.getElementById("navbar");
function showMenu() {
  nav.classList.toggle("show");
}
icon.addEventListener('click', showMenu);

// //hide navs when clicking on any navs on mobile menu
// var navUl = document.querySelectorAll('.navs a');
// console.log(navUl);
// function hideNave() {
//   nav.style.display = "none";
// }
// nav.addEventListener('click', showMenu);
