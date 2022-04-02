
// Nutritionix API
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://nutritionix-api.p.rapidapi.com/v1_1/search/cheddar%20cheese?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Host": "nutritionix-api.p.rapidapi.com",
		"X-RapidAPI-Key": "b24b06557dmsh567e2d4a6127fd1p14b38cjsn068eec7f565c"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

// TravelAdvisor Food API
