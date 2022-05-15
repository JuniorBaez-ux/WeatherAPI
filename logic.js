const API_KEY = '68c53846b4459790841dbefcb1031950';
const SEARCH_API = 'APPID=' + API_KEY;
const UNIT_SYSTEM = 'metric';
const UNIT_SEARCH = 'units=' + UNIT_SYSTEM;
let temperature = document.getElementById('temp');
let description = document.getElementById('desc');
let place = document.getElementById('place');
let image = document.querySelector('img');

// Call example http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=68c53846b4459790841dbefcb1031950
//http://api.openweathermap.org/data/2.5/weather?q=
//San%20francisco%20de%20macoris
//APPID=68c53846b4459790841dbefcb1031950

//Function to fetch GIFS from the website
function fetchWeather(searchParam) {

    let stringToSearch = document.getElementById('search').value; 
    searchParam = stringToSearch !== "" ? stringToSearch.toLowerCase() : 'San francisco de Macoris';

    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + searchParam + '&' + SEARCH_API + '&' + UNIT_SEARCH, {mode: 'cors'}, )
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        //img.src = response.data.images.original.url;
        temperature.innerHTML = response.main.temp.toString() + '°C';
        description.innerHTML = response.weather[0].description;
        place.innerHTML = response.name;
        image.src = 'http://openweathermap.org/img/w/' + response.weather[0].icon + '.png';
}).catch(e => {
    alert("The process could not be completed. Please try again later.");
    console.log(e)
});
}

document.onload = fetchWeather();