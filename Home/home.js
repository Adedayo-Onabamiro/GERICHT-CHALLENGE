

// code for hamburger responsiveness
const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.NavMenuContainer .NavMenuUl');
const menu_item = document.querySelectorAll('.NavMenuContainer .NavMenuUl .NavMenuLi a');
const menu_options = document.querySelector('.NavMenuUl a');
const header = document.querySelector('.pg-div');



hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');

});

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > mobile_menu.style.height) {
    hamburger.classList.remove('active');
    mobile_menu.classList.remove('active');
  } else {
    // hamburger.classList.add('active');
    // mobile_menu.classList.add('active');
  }
});


menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});


// code for responsiveness ends

//CODE FOR PAGINATION AT THE TOP
// Add active class to the current button (highlight it)
var Pheader = document.getElementById("PmyDIV");
var Pbtns = Pheader.getElementsByClassName("Pbtn");
for (var i = 0; i < Pbtns.length; i++) {
  Pbtns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("Pactive");
  current[0].className = current[0].className.replace(" Pactive", "");
  this.className += " Pactive";
  });
}y