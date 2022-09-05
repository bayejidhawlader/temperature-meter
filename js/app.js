// Dont use ypur API in Public

const API_KEY = `0c8a7e562b2f9dec739364ff4b824637`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch (url)
    .then (res => res.json())
    .then (data => displayTemperature(data));
}
const displayTemperature = data => {
    // const temperature = document.getElementById('temperature')
    // console.log(data.main.temp);
    setInnerTextById('temperature', data.main.temp)
    setInnerTextById('condition', data.weather[0].main)
    console.log(data.weather[0].main);
}

const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id)
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-input');
    const city = searchField.value;
    // CITY
    document.getElementById('city').innerText = city ;
    loadTemperature(city);
})


loadTemperature('dhaka')
