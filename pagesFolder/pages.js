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
  var detailsBox1Img =  document.getElementById("detailsBox1Img");
  var DBMealName = document.getElementById("DBMealName");
  var DBCategory = document.getElementById("DBCategory");
  var instructionsText = document.getElementById("instructionsText");


  let api_img_link = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`;
  let galleryBox = document.getElementById('galleryItems');
  fetch(api_img_link)
  .then(Response => Response.json())
  .then(result => {
    console.log(result);
    galleryBox.innerHTML = "";
    if (result.meals == null) {
      statusMsg.style.display = "block"
      galleryBox.innerHTML = "";
    } else {

      if (searchInputValue == "") {
        galleryBox.innerHTML = "";
      }else{
        statusMsg.style.display = "none"
        console.log(result.meals.length)
        result.meals.forEach(meal => {
          {
            //code tocreate the gallery items individually
            var galleryItem = document.createElement('div');
            galleryItem.className = "galleryItem";
            var galleryContent = 
            `
                <img id="galleryImg" class="galleryImg" src="${meal.strMealThumb}">
                <div class="gallerydesc">${meal.strMeal}</div>
            `;
            galleryItem.innerHTML = galleryContent;
            galleryBox.appendChild(galleryItem);
            //code tocreate the gallery items individually ends

            //code for modal section
            var GIL = result.meals.length; 
            console.log(`there are gallery items : ${GIL}`);
            for (let x = 0; x < GIL; x++) {
              galleryItem.addEventListener("click", ()=>{
                var modal = document.getElementById("myModalBox");
                var span = document.getElementsByClassName("close")[0];
                span.onclick = function() {
                  modal.style.display = "none";
                }
                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function(event) {
                  if (event.target == modal) {
                    modal.style.display = "none";
                  }
                }
                modal.style.display = "block"; //display the modal
                  console.log("modal open");
                  // galleryBox.innerHTML = ""; 
                      // statusMsg.style.display = "none"
                      // console.log(result.meals.length)
                          detailsBox1Img.src = `${meal.strMealThumb}`;
                          DBMealName.innerText = `${meal.strMeal}`;
                          DBCategory.innerText = `Category: ${meal.strCategory}`;
                          instructionsText.innerText = `${meal.strInstructions}`;
              }); 
            }
             //code for modal ends
        }
        });
      } 
    }
  })
});
//CODE FOR GETTING GALLERY CONTENT FROM API

//CODE FOR GETTING GALLERY CONTENT FROM API USING ENTER IN SEARCH
document.getElementById('searchInput').addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById('SearchBtn').click();
  }
});




//Code to display foods in different categories on button click
let fcb = document.getElementById("FCB");
for (let x = 0 ; x < FCB.length ; x ++) {
  FCB[x].addEventListener('click', ()=>{
    var chosenBtn = FCB[x];
    var chosenBtnName = chosenBtn.innerText;
    function buttonApi() {
      let api_category_link = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${chosenBtnName}`;
      let galleryBox = document.getElementById('galleryItems');
      galleryBox.innerHTML = "";
      fetch(api_category_link)
      .then(Response => Response.json())
      .then(result => {
        console.log(result);
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
      })
    }
    buttonApi();
  });
}
//Code to display foods in different categories on button click
