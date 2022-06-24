const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation',
  params: {cityName: 'Paris', countryName: 'France'},
  headers: {
    'X-RapidAPI-Host': 'best-booking-com-hotel.p.rapidapi.com',
    'X-RapidAPI-Key': '5022110df7msh3a85294382f9b29p1aae3fjsna1e2927efdc6'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});