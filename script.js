var inputCity = document.querySelector('.inputCity');
var button = document.querySelector('.btn');

var data_container = document.querySelector('.data');
var error_message = document.querySelector('.error-message');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var city = document.querySelector('.name');
var icon = document.querySelector('.icon');

button.addEventListener('click', function(event){
    event.preventDefault();


    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputCity.value+'&units=metric&appid=67a5dbf1d78face53efab181afcc11e8')
    .then(response => response.json())
    .then(data => {

        cityName = data['name'];
        temperature = data['main']['temp'] + '&#8451;';
        description = data['weather'][0]['description'];
        imgIcon = data['weather'][0]['icon'];

        city.innerHTML = cityName
        temp.innerHTML = temperature
        desc.innerHTML = description
        icon.src = `weather_icons/${imgIcon}.svg`

        error_message.style.display = 'none';
        data_container.style.display = 'block';
        

    })
    .catch(err => {
        
        if(err){
            error_message.style.display = 'block';
            data_container.style.display = 'none';
        } 
    })
})

fetch('https://api.openweathermap.org/data/2.5/weather?q=Catbalogan&units=metric&appid=67a5dbf1d78face53efab181afcc11e8')
    .then(response => response.json())
    .then(data => {

        cityName = data['name'];
        temperature = data['main']['temp'] + '&#8451;';
        description = data['weather'][0]['description'];
        imgIcon = data['weather'][0]['icon'];

        city.innerHTML = cityName
        temp.innerHTML = temperature
        desc.innerHTML = description
        icon.src = `weather_icons/${imgIcon}.svg`

        error_message.style.display = 'none';
        data_container.style.display = 'block';

        

    })
    .catch(err => {
        
        if(err){
            error_message.style.display = 'block';
            data_container.style.display = 'none';
        }
    })
