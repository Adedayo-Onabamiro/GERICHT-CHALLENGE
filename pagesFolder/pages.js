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
  var ingredientContentBox = document.getElementById("ingredientContentBox");


  let api_img_link = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`;
  let galleryBox = document.getElementById('galleryItems');
  var pillsBox = document.getElementById("pillsBox");
  fetch(api_img_link)
  .then(Response => Response.json())
  .then(result => {
    console.log(result);
    galleryBox.innerHTML = "";
    pillsBox.innerHTML = "";
    ingredientContentBox.innerHTML = "";

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
            galleryItem.setAttribute("onclick", `details("${meal.idMeal}")`)
            galleryItem.className = "galleryItem";
            var galleryContent = 
            `
                <img id="galleryImg" class="galleryImg" src="${meal.strMealThumb}">
                <div class="gallerydesc">${meal.strMeal}</div>
            `;
            galleryItem.innerHTML = galleryContent;
            galleryBox.appendChild(galleryItem);
            //code to create the gallery items individually ends
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
function foodCategory(){
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
                  galleryItem.setAttribute("onclick", `details("${meal.idMeal}")`)
                  galleryItem.className = "galleryItem";
                  var galleryContent = 
                  `
                      <img id="galleryImg" class="galleryImg" src="${meal.strMealThumb}">
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
}
foodCategory();
//Code to display foods in different categories on button click

//code to save meal or remove meal on button click

//code to save meal or remove meal on button click end


function details(id) {
  let api_id_link = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(api_id_link)
  .then(result => result.json())
  .then(detail => {
    var ingredientContentBox = document.getElementById("ingredientContentBox");
    ingredientContentBox.innerHTML = "";
    let meal = detail.meals[0]
            //code for modal section
            var GIL = detail.meals.length; 
            // console.log(`there are gallery items : ${GIL}`);
            for (let x = 0; x < GIL; x++) {
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
                  detailsBox1Img.src = `${meal.strMealThumb}`;
                  DBMealName.innerText = `${meal.strMeal}`;
                  DBCategory.innerText = `Category: ${meal.strCategory}`;
                  instructionsText.innerText = `${meal.strInstructions}`;
                  
                  //create pills code
                  pillsBox.innerHTML = "";
                  var pillContent = `${meal.strTags}`;
                  var pillContentArr = pillContent.split(",");
                  console.log(pillContentArr);
                  for (let x = 0; x < pillContentArr.length; x++) {
                    if (pillContent == "null") {
                      console.log("no tags");
                    } else {
                      var pill = document.createElement('div');
                      pill.className = "pill";
                      pill.innerText = pillContentArr[x];
                      // console.log(pillContent);
                      pillsBox.appendChild(pill);  
                    }
                  }
                  //create pills code end

                  //create table for ingredients
                  let count = 1;
                  let ingredientArr = [];
                  for (let i in meal){
                    let ingredient = "";
                    let measurement = "";
                    if (i.startsWith("strIngredient") && meal [i]){
                      ingredient = meal[i];
                      measurement = meal[`strMeasure` + count];
                      count += 1;
                      ingredientArr.push(ingredient, measurement);

                      let ingredientContentLine = document.createElement("div");
                      ingredientContentLine.className = "ingredientContentLine"
                      ingredientContentLineContent = 
                      `
                      <p class="ingredient" id="ingredient">${meal[i]}</p>
                      <p class="measurement" id="measurement">${measurement}</p>
                      `
                      ingredientContentLine.innerHTML = ingredientContentLineContent;
                      document.getElementById("ingredientContentBox").appendChild(ingredientContentLine);
                    }
                  }
                  //create table for ingredients
            }
             //code for modal ends
  }
)}