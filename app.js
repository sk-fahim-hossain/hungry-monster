
// load foods after loading

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
.then(res => res.json())
.then(data =>{
    const food = data.meals;
    displayFood(food)
})


// single food cards
const displayFood = food => {
    {
        food.map(fd=>{
            const foodDisplay = document.getElementById("searchedFood")
            const foodGroupDiv = document.createElement('div')
            foodGroupDiv.className = "food-group";
            const foodInfo = `
               
                <a href="#food-details" style="text-decoration: none;">
                    <div onclick="foodCardDetail('${fd.strMeal}')" class="card food-card" style="width: 18rem;">
                        <img src="${fd.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${fd.strMeal}</h5>
                        </div>
                    </div>
                </a>
            `
            
            foodGroupDiv.innerHTML = foodInfo;
            foodDisplay.appendChild(foodGroupDiv);
           
        })
    }
}

// search input
document.getElementById("search-btn").addEventListener("click",function(e){
    e.preventDefault();
    const inputName = document.getElementById("search-input").value;
    console.log(inputName)
    foodCardDetail(inputName)
})


// food card details

async function foodCardDetail(inputName){
    console.log('click')
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputName}`)
   .then(res => res.json())
   .then(data =>{
        const meal = data.meals[0];
        singleFoodCard(meal)
   })  
}

function singleFoodCard(meal){
    const foodCardDisplay = document.getElementById("foodDetails")
        const singleCardDiv = document.createElement('div')
        singleCardDiv.addClass = "singleCardDiv"
        let singleCard = `
            <a href="#food-details" style="text-decoration: none;">
                <div onclick="foodCardDetail('${meal.strMeal}')" class="card food-card" style="width: 25rem; text-align: center;">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <hr>
                        <ol>
                            <li style="text-decoration: none;">${meal.strIngredient1}</li>
                            <li>${meal.strIngredient2}</li>
                            <li>${meal.strIngredient3}</li>
                            <li>${meal.strIngredient4}</li>
                            <li>${meal.strIngredient5}</li>
                            <li>${meal.strIngredient6}</li>
                        </ol>
                        <h4>How it's made</h4>
                    </div>
                </div>
            </a>
            <br>
        `
        singleCardDiv.innerHTML = singleCard;
        foodCardDisplay.appendChild(singleCardDiv)
}

