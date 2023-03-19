

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

//CODE FOR PAGINATION AT THE TOP FOR NUMBER TO CHANGE


// Add active class to the current button (highlight it)
var Pheader = document.getElementById("PmyDIV");
var Pbtns = Pheader.getElementsByClassName("Pbtn");
for (var i = 0; i < Pbtns.length; i++) {
  Pbtns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("Pactive");
  current[0].className = current[0].className.replace(" Pactive", "");
  this.className += " Pactive";
  });
};

//CODE FOR CONTENT TO CHANGE ON PAGINATION NUMBER CLICK

var TCImage = document.getElementById("TCImage");
var TKTFDTitle = document.getElementById("TCBox1Title");
var TKTFDText = document.getElementById("Longtext");
var No1 = document.getElementById("No1");
var No2 = document.getElementById("No2");
var No3 = document.getElementById("No3");
var No4 = document.getElementById("No4");



No1.addEventListener('click', () => {
  TKTFDTitle.textContent = "The Key To Fine Dining";
  TCImage.src = "../images/Hero img.png";
});

No2.addEventListener("click", () => {
  TKTFDTitle.textContent = "Make A Toast, Celebrate!";
  TCImage.src = "../images/insta2.png";
});

No3.addEventListener("click", () => {
  TKTFDTitle.textContent = "...Because You Are 'Soup-erb'";
  TCImage.src = "../images/cala-w6ftFbPCs9I-unsplash.png";
});

No4.addEventListener("click", () => {
  TKTFDTitle.textContent = "Have A Break, Have A Steak";
  TCImage.src = "../images/mgg-vitchakorn-J5ZivsKiu9c-unsplash 2.png";
});
