// code for top navigation hamburger responsiveness
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
// code for top navigation hamburger responsiveness ends


// // export let SavedMealsContainer = document.getElementById("SavedMealsContainer");

let SavedMealsArr = JSON.parse(localStorage.getItem("notes"));
let SavedMealBox = document.getElementById("SavedMealBox");
let SavedMeals = document.getElementById('SavedMeals');
SavedMealsArr.forEach(savedMeal => {
    //code to create the savedMeal items individually
    var SavedMeal = document.createElement('div');
    SavedMeal.className = "SavedMeal";
    var SavedMealContent = 
    `
        <img id="SavedMealImg" class="SavedMealImg" src="${savedMeal.strMealThumb}">
        <div class="SavedMealdesc">${savedMeal.strMeal}</div>
        <button id = "RemoveMealBtn"> Remove Meal </button>
    `;
    SavedMeal.innerHTML = SavedMealContent;
    SavedMeals.appendChild(SavedMeal);
    //code to create the gallery items individually ends
});