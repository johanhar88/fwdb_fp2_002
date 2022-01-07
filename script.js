const searchButton = document.querySelector('#searchBtn');
const inputKey = document.querySelector('.inputName');

searchButton.addEventListener('click', function(){
    fetch("http://api.openweathermap.org/data/2.5/weather?q="+inputKey.value+"&appid=21ee6efaf53c09a61077cd66b7c84726&units=metric")
    .then(response => response.json())
    .then(response => {

        let result = document.querySelector('.hasil');
        result.innerHTML = 
        `
        <h1>City : ${response.name}</h1>
        <h2>Conditions : ${response.weather[0].description}</h2>
        <h2>Temperature : ${response.main.temp} C</h2>
        <h2>Wind Speed : ${response.wind.speed} m/s</h2>
        `
    });
    inputKey.value = null;
});
