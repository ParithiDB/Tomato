function renderRestaurantCard(data = []) {
  const cardsArray = [];
  const restaurantsListingContainer = document.getElementById(
    "restaurants-listing"
  );
  if (data.length > 0) {
    data.forEach((_d) => {
      const cardNode = document.createElement("div");
      cardNode.setAttribute(
        "class",
        "col-xl-4 col-lg-4 col-md-2 col-sm-12 col-xs-12"
      );
      cardNode.innerHTML = `
      <div class="col-4">
      <div class="card">
        
          
        <img class="restaurant-image" src="${_d.restaurantImage}"
         class="card-img-top"
          alt="${_d.restaurantName}">
        
        <div class="card-body">
          <div class="title-rating">
            <h5 class="card-title">${_d.restaurantName}</h5>
            <div class="rat">
              ${_d.ratings} <span class="material-symbols-outlined">
                star
                </span>
              </div>
          </div>
          <div class="card-text">
            <p class="cuisine">${_d.cuisine}</p>
          <p>₹${_d.minQuanitityPrice}</p>
          </div>
        </div>
      </div>
    </div>`;
      cardsArray.push(cardNode);
    });
    restaurantsListingContainer.append(...cardsArray);
  }
}






function renderCategoriesData() {
  const result = JSON.parse(this.responseText);
  console.log(result);
  var categories = document.getElementById("categories");
  result.data.map((element) => {
    
    categories.innerHTML += `
    <div class="categories-slider" id="categories-slider">
                        <div class="categories-card mt-3">
                          <img class="categories-image mb-4"
                           src=${element.image} 
                           alt="${element.label}">
                        
                        <h5 class="text-center">${element.label}</h5>
                        </div>
                      </div>
    `
    
  })
}

function renderBrandsData() {
  const result = JSON.parse(this.responseText);
  console.log(result);
  var categories = document.getElementById("brands");
  result.data.map((element) => {
    
    categories.innerHTML += `
    <div class="categories-slider" id="categories-slider">
                      <div class="categories-card mt-3">
                        <img class="brand-image mb-4"
                         src=${element.image} 
                         alt=${element.label}>
                      </div>
                      <h5>${element.label}</h5>
                      <p class="text-center w-100">${element.mins}</p>
                    </div>

    `
    
  })
}


function getCategories() {
  var request = new XMLHttpRequest();
  request.addEventListener("load", renderCategoriesData);
  request.open("GET", "./categories.json");
  request.send();
}

function getBrands() {
  var request = new XMLHttpRequest();
  request.addEventListener("load", renderBrandsData);
  request.open("GET", "./brands.json");
  request.send();
}

function renderRestaurantsData() {
  const result = JSON.parse(this.responseText);
  renderRestaurantCard(result.data);
}

function getRestaurants() {
  var request = new XMLHttpRequest();
  request.addEventListener("load", renderRestaurantsData);
  request.open("GET", "./restaurants.json");
  request.send();
}

getCategories();
getBrands();
getRestaurants();