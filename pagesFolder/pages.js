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


//CODE FOR GETTING GALLERY CONTENT FROM API

let searchInputBtn = document.getElementById('SearchBtn');
searchInputBtn.addEventListener('click', ()=>{
  let statusMsg = document.getElementById("statusMsg");
  let searchInput = document.getElementById('searchInput');
  let searchInputValue = searchInput.value.trim();
  let api_img_link = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`;
  let galleryBox = document.getElementById('galleryItems');
  fetch(api_img_link)
  .then(Response => Response.json())
  .then(result => {
    console.log(result);
    // var mealsLength = result.meals.length;
    if (result.meals == null) {
      statusMsg.style.display = "block"
    } else {
      statusMsg.style.display = "none"
      console.log(result.meals.length)
      galleryBox.innerHTML = "";
      result.meals.forEach(meal => {
        {
          var galleryItem = document.createElement('div');
          galleryItem.className = "galleryItem";
          var galleryContent = 
          `
              <a target="_blank" href="${meal.strMealThumb}">
              <img id="galleryImg" class="galleryImg" src="${meal.strMealThumb}">
              </a>
              <div class="gallerydesc">${meal.strMeal}</div>
          `;
          galleryItem.innerHTML = galleryContent;
          galleryBox.appendChild(galleryItem);
      }
      });
    }
  })
  // .catch(Error => console.log(Error))
});


//CODE FOR GETTING GALLERY CONTENT FROM API




