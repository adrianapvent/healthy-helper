// DOM PARAMS
const ingSearch = document.getElementById('ingr-search');
const mealResults = document.getElementById('meal-results');
const mealDetails = document.querySelector('.meal-details-content');
const clRecBtn = document.getElementById('close-recipe');

// EVENT LISTENERS
ingSearch.addEventListener('click', getMealList);
mealResults.addEventListener('click', getMealRecipe);
clRecBtn.addEventListener('click', () => {
    mealDetails.parentElement.classList.remove('showRecipe');
});


// fetch recipes that contain user defined ingredient
function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                    <div data-id="${meal.idMeal}">
                        <div>
                            <img src="${meal.strMealThumb}" class="img-fluid" alt="picture of food">
                        </div>
                        <div class="form-inline justify-content-left">
                            <a href="#" class="recipe-button">${meal.strMeal}</a>
                        </div>
                    </div>
					<br>
					<br>`;
            });
            mealResults.classList.remove('noMeal');
        } else {
            html="No meal found :( <br> Please try again.";
            mealResults.classList.add('noMeal');
        }
        mealResults.innerHTML = html;
    });
}


// fetch recipe details
function getMealRecipe(i){
    i.preventDefault();
    if(i.target.classList.contains('recipe-button')){
        let mealItem = i.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => mealRecipeModal(data.meals));
    }
}

// MODAL JS
function mealRecipeModal(meal){
    console.log(meal);
    meal = meal[0];
    let html = `
        <h2 class="text-center">${meal.strMeal}</h2>

        <div class="container mt-5">
        <div class="row">
        <div class="col-md-3">
            <h3>Ingredients Required:</h3>
            <ul>
                <li>${meal.strIngredient1 + "   " + meal.strMeasure1}</li>
                <li>${meal.strIngredient2 + "   " + meal.strMeasure2}</li>
                <li>${meal.strIngredient3 + "   " + meal.strMeasure3}</li>
                <li>${meal.strIngredient4 + "   " + meal.strMeasure4}</li>
                <li>${meal.strIngredient5 + "   " + meal.strMeasure5}</li>
                <li>${meal.strIngredient6 + "   " + meal.strMeasure6}</li>
                <li>${meal.strIngredient7 + "   " + meal.strMeasure7}</li>
                <li>${meal.strIngredient8 + "   " + meal.strMeasure8}</li>
                <li>${meal.strIngredient9 + "   " + meal.strMeasure9}</li>
                <li>${meal.strIngredient10 + "   " + meal.strMeasure10}</li>
                <li>${meal.strIngredient11 + "   " + meal.strMeasure11}</li>
                <li>${meal.strIngredient12 + "   " + meal.strMeasure12}</li>
                <li>${meal.strIngredient13 + "   " + meal.strMeasure13}</li>
                <li>${meal.strIngredient14 + "   " + meal.strMeasure14}</li>
                <li>${meal.strIngredient15 + "   " + meal.strMeasure15}</li>
                <li>${meal.strIngredient16 + "   " + meal.strMeasure16}</li>
                <li>${meal.strIngredient17 + "   " + meal.strMeasure17}</li>
                <li>${meal.strIngredient18 + "   " + meal.strMeasure18}</li>
                <li>${meal.strIngredient19 + "   " + meal.strMeasure19}</li>
                <li>${meal.strIngredient20 + "   " + meal.strMeasure20}</li>
            </ul>
        </div>

        <div class="col-md-7">
            <!-- <div>
                <img src="${meal.strMealThumb}">
            </div> -->
            <h3 class="mt-3">Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        </div>
        </div>
        `;

    mealDetails.innerHTML = html;
    mealDetails.parentElement.classList.add('showRecipe');
}

// fetch nutrition of searched ingredient

function getNutritionList(e){
	e.preventDefault();
    let searchInputText = document.getElementById('search-nutrition').value.trim();
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'nutritionix-api.p.rapidapi.com',
			'X-RapidAPI-Key': 'b24b06557dmsh567e2d4a6127fd1p14b38cjsn068eec7f565c'
		}
	};
	
	fetch(`https://nutritionix-api.p.rapidapi.com/v1_1/search/${searchInputText}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat`, options)
		.then(response => response.json())
		// .then(data => console.log(data))
   		.then(data => {
		console.log(data);
        let html = "";
        if(data.hits){
            data.hits.forEach(item => {
                html += `
                    <div data-id="${item.fields.item_id}">
                        <div class="form-inline justify-content-center">
                            <span class="ingredient-button">${item.fields.item_name}: calories: ${item.fields.nf_calories}</span>
                        </div>
                    </div>`;
            });
            mealResults.classList.remove('noMeal');
        } else {
            html="No ingredient found :( <br> Please try again.";
            mealResults.classList.add('noMeal');
        }
        mealResults.innerHTML = html;
    });
}
