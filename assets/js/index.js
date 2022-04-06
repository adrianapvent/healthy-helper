// Nutritionix API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'nutritionix-api.p.rapidapi.com',
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
	}
};

fetch('https://nutritionix-api.p.rapidapi.com/v1_1/item?upc=49000036756', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

// Travel Advisor Food API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
	}
};

fetch('https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=eiffel%20tower&lang=en_US&units=km', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));