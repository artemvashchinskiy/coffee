'use strict'
/*
$(document).ready(function() {
    // Fetch JSON data
    fetch('js/coffee.json')
        .then(response => response.json())
        .then(data => {
            const dropDownItems = document.querySelectorAll('.drop-down-list p');
            dropDownItems.forEach((item, index) => {
                item.addEventListener('click', () => {
                    const description = data[index].description;
                    toggleDescription(item, description);
                });
            });
        })
        .catch(error => console.error(error));

    // Function to toggle the description dropdown
    function toggleDescription(item, description) {
        const parentDiv = item.parentElement;
        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('description');
        descriptionDiv.textContent = description;

        if (parentDiv.classList.contains('active')) {
            parentDiv.classList.remove('active');
            descriptionDiv.remove();
        } else {
            const activeDropdown = document.querySelector('.drop-down-list.active');
            const activeDescription = document.querySelector('.description');
            if (activeDropdown) {
                activeDropdown.classList.remove('active');
            }
            if (activeDescription) {
                activeDescription.remove();
            }
            parentDiv.classList.add('active');
            parentDiv.appendChild(descriptionDiv);
        }
    }
});
*/
/*
// Load the data from the JSON file
fetch('person.json')
  .then(response => response.json())
  .then(data => {
    // Extract the drinks
    const drinks = data.drinks;

    // Create an HTML string for the drinks
    let html = '';
    drinks.forEach(drink => {
      const name = drink.name;
      const recipe = drink.recipe;
      const description = drink.description;

      // Append the drink HTML to the existing string
      html += `
        <div class="drink">
          <h3>${name}</h3>
          <p><strong>Recipe:</strong> ${recipe}</p>
          <p><strong>Description:</strong> ${description}</p>
        </div>
      `;
    });

    // Insert the generated HTML into the drinks-container element
    document.getElementById('drinks-container').innerHTML = html;
  })
  .catch(error => {
    console.log('Error:', error);
  });
  */

  $(document).ready(function() {
    $('.button').click(function() {
      $('.coffee-drip').addClass('animate-drip');
      setTimeout(function() {
        $('.coffee-drip').removeClass('animate-drip');
      }, 2000);
      
      // Create floating coffee element
      var coffee = $('<div class="floating-coffee"></div>');
      $('.picture-container').append(coffee);
      
      // Set initial position of floating coffee
      var containerWidth = $('.picture-container').width();
      var containerHeight = $('.picture-container').height();
      var initialTop = Math.random() * (containerHeight - 50);
      var initialLeft = Math.random() * (containerWidth - 50);
      coffee.css({
        top: initialTop + 'px',
        left: initialLeft + 'px'
      });
      
      // Animate floating coffee
      coffee.animate({
        top: '-=50',
        opacity: 0
      }, 2000, function() {
        coffee.remove();
        playBreakingGlassSound(); // Play the breaking glass sound after removing the coffee element
      });
    });
  });
  
  function playBreakingGlassSound() {
    var audio = new Audio('audio/www.fesliyanstudios.com.mp3');
    audio.play();
  }

  var coffeeData = [
    {
      "name": "Еспрессо",
      "recipe": [
          {
              "ingredient": "Еспрессо",
              "className": "espresso",
              "volume": 1
          }
      ]
  },
  {
      "name": "Доппіо",
      "recipe": [
          {
              "ingredient": "Еспрессо",
              "className": "espresso",
              "volume": 2
          }
      ]
  },
  {
      "name": "Тріппло",
      "recipe": [
          {
              "ingredient": "Еспрессо",
              "className": "espresso",
              "volume": 3
          }
      ]
  },
  {
      "name": "Амeрикано",
      "recipe": [
          {
              "ingredient": "Еспрессо",
              "className": "espresso",
              "volume": 1
          },
          {
              "ingredient": "Вода",
              "className": "water",
              "volume": 3
          }
      ]
  },
  {
      "name": "Флет Вайт",
      "recipe": [
          {
              "ingredient": "Еспрессо",
              "className": "espresso",
              "volume": 1
          },
          {
              "ingredient": "Молоко",
              "className": "milk",
              "volume": 2
          }
      ]
  },
  {
      "name": "Капучіно",
      "recipe": [
          {
              "ingredient": "Еспрессо",
              "className": "espresso",
              "volume": 1
          },
          {
              "ingredient": "Молоко",
              "className": "milk",
              "volume": 1
          },
          {
              "ingredient": "Збите молоко",
              "className": "whippedmilk",
              "volume": 2
          }
      ]
  },
  {
      "name": "Мокіато",
      "recipe": [
          {
              "ingredient": "Еспрессо",
              "className": "espresso",
              "volume": 2
          },
          {
              "ingredient": "Збите молоко",
              "className": "whippedmilk",
              "volume": 1
          }
      ]
  },
  {
      "name": "Лате",
      "recipe": [
          {
              "ingredient": "Еспрессо",
              "className": "espresso",
              "volume": 1
          },
          {
              "ingredient": "Молоко",
              "className": "milk",
              "volume": 2
          },
          {
              "ingredient": "Збите молоко",
              "className": "whippedmilk",
              "volume": 1
          }
      ]
  },
  {
      "name": "Кон Панна",
      "recipe": [
          {
              "ingredient": "Еспрессо",
              "className": "espresso",
              "volume": 1
          },
          {
              "ingredient": "Збиті сливки",
              "className": "whippedcream",
              "volume": 2
          }
      ]
  }
];

function generateDropDownList() {
  var coffeeList = document.getElementById("coffeeList");
  coffeeData.forEach(function (coffee) {
      var dropDownItem = document.createElement("div");
      dropDownItem.className = "drop-down-list";
      dropDownItem.innerHTML = "<p>" + coffee.name + "</p>";
      coffeeList.appendChild(dropDownItem);

      // Add click event listener to each drop-down-item
      dropDownItem.addEventListener("click", function () {
          showCoffeeRecipe(coffee.recipe);
          generateProportionalDivs(coffee.recipe);
      });
  });
}

// Function to show the coffee recipe
function showCoffeeRecipe(recipe) {
  var coffeeRecipe = document.getElementById("coffeeRecipe");
  coffeeRecipe.innerHTML = ""; // Clear previous recipe content

  recipe.forEach(function (ingredient) {
      var ingredientItem = document.createElement("div");
      ingredientItem.className = ingredient.className;
      ingredientItem.innerHTML = ingredient.ingredient + " - " + ingredient.volume;
      coffeeRecipe.appendChild(ingredientItem);
  });
}

// Function to generate div elements with proportional sizes
function generateProportionalDivs(recipe) {
  var coffeePicture = document.getElementById("cup");
  coffeePicture.innerHTML = ""; // Clear previous div elements

  var totalVolume = calculateTotalVolume(recipe);
  var espressoVolume = getEspressoVolume(recipe);
  var whippedVolume = getWhippedVolume(recipe);

  recipe.forEach(function (ingredient, index) {
    var proportion = ingredient.volume / totalVolume;
    var divItem = document.createElement("div");
    divItem.className = ingredient.className;

    // Set background color based on ingredient
    if (ingredient.ingredient === "Еспрессо") {
      divItem.style.backgroundColor = "brown";
      divItem.style.height = ((espressoVolume / totalVolume) * 100) + "%";
      divItem.style.order = recipe.length - index; // Set order to position espresso at the bottom
    } else if (ingredient.ingredient === "Вода") {
      divItem.style.backgroundColor = "blue";
      divItem.style.height = ((ingredient.volume / totalVolume) * 100) + "%";
    } else if (
      ingredient.ingredient === "Молоко"       
    ) {
      divItem.style.backgroundColor = "white";
      divItem.style.height = ((ingredient.volume / totalVolume) * 100) + "%";
    } else if (
      ingredient.ingredient === "Збите молоко"
    ) {
      divItem.style.backgroundColor = "wheat";
      divItem.style.height = ((ingredient.volume / totalVolume) * 100) + "%";
    } else if (
      ingredient.ingredient === "Збиті сливки" ||
      ingredient.ingredient === "Взбиті сливки" ||
      ingredient.ingredient === "Взбите молоко"
    ) {
      divItem.style.backgroundColor = "yellow";
      divItem.style.height = ((whippedVolume / totalVolume) * 100) + "%";
    }

    coffeePicture.appendChild(divItem);
  });
}

// Function to get the volume of espresso
function getEspressoVolume(recipe) {
  var espressoVolume = 0;

  recipe.forEach(function (ingredient) {
    if (ingredient.ingredient === "Еспрессо") {
      espressoVolume += ingredient.volume;
    }
  });

  return espressoVolume;
}

// Function to get the volume of whipped milk/cream
function getWhippedVolume(recipe) {
  var whippedVolume = 0;

  recipe.forEach(function (ingredient) {
    if (
      ingredient.ingredient === "Збите молоко" ||
      ingredient.ingredient === "Збиті сливки" ||
      ingredient.ingredient === "Взбиті сливки" ||
      ingredient.ingredient === "Взбите молоко"
    ) {
      whippedVolume += ingredient.volume;
    }
  });

  return whippedVolume;
}

// Function to calculate the total volume in the recipe
function calculateTotalVolume(recipe) {
  var totalVolume = 0;

  recipe.forEach(function (ingredient) {
      totalVolume += ingredient.volume;
  });

  return totalVolume;
}

// Call the function to generate the drop-down-list elements
generateDropDownList();

