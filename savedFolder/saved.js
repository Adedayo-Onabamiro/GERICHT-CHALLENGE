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

// code to create individual meal items and append to container as well
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
    //code to create the savedMeal items individually ends
});
// code to create individual meal items and append to container as well


let RemoveMealBtns = document.getElementById("RemoveMealBtn");
for (let x = 0 ; x < RemoveMealBtn.length ; x ++) {
  RemoveMealBtn[x].addEventListener("click", ()=>{
    let RemoveMealBtnPE = RemoveMealBtn[x].parentElement;
     RemoveMealBtnPE.remove();
    console.log(SavedMealsArr);
  });
};

// code for delete all Meals button
let DeleteAllMeals = document.getElementById("DeleteAllMeals");
DeleteAllMeals.addEventListener("click", ()=>{
  window.localStorage.clear();
});

// code for delete all Meals button ends


// Random Codes that i might need later
// let RemoveMealBtns = document.getElementById("RemoveMealBtn");
// for (let x = 0 ; x < RemoveMealBtn.length ; x ++) {
//   RemoveMealBtn[x].addEventListener("click", ()=>{
//     // RemoveMealBtns.parentElement.innerHTML = "";
//     // console.log(RemoveMealBtn[x].parentElement);
//     let RemoveMealBtnPE = RemoveMealBtn[x].parentElement;
//     RemoveMealBtnPE.innerHTML = "";
//      localStorage.removeItem(RemoveMealBtnPE);
//   });
// };

    // for (let x = 0 ; x < SavedMealsArr.length ; x ++) {
    //   SavedMealsArr.pop(x);
    // }
    // SavedMealsArr.forEach(savedMeal => {
    //   SavedMealsArr.pop();
    // });
    // console.log(`new array = ${SavedMealsArr}`);