$(document).ready(function() {

	// Seach Button for Cities
	$("#search-button").on("click", function() {
		var searchCity = $("#search-city").val();
		$("#search-city").val("");
		findFood(searchCity);
	});

	// Search City History
	var history = JSON.parse(localStorage.getItem("history")) || []; //return history or leave empty

	function cityRow(text) {
		var list = $("<li>").addClass("list-group-item").text(text);
		$(".history").append(list);
	}

	if (history.length > 0) {
		findFood(history[history.length-1]);
	}

	for (var i = 0; i < history.length; i++) {
		new cityRow(history[i]);
	}

	$(".history").on("click", "li", function() {
		findFood($(this).text());
	});

})

function findFood() {
	// TO BE DEFINED
}

// APIs BELOW FOR FUTURE REFERENCE!
// Nutritionix API
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'nutritionix-api.p.rapidapi.com',
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
// 	}
// };

// fetch('https://nutritionix-api.p.rapidapi.com/v1_1/item?upc=49000036756', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));