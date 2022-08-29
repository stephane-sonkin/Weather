
// let params = new URLSearchParams ({
//     apiKey:'88f00ea364ecc70e690bb85e68b7ee4c',
//     query: 'New York;Dallas',
//     units: 'f'
// })
// .then(resp => resp.json()).then(console.log);

let button = document.getElementById('button');
let description = document.getElementById('description');
let input = document.getElementById('searcher');
let city = document.getElementById('city');
let temps = document.getElementById('temps');
let image = document.getElementById('icon');
let humidityEl = document.getElementById('humidity');
let wind = document.getElementById('wind');



const getMeteo = async () => {
  let ville = document.getElementById('searcher').value;

  let requestString = `http://api.weatherstack.com/current?access_key=88f00ea364ecc70e690bb85e68b7ee4c&query=${ville}&units=m`;

  let data = await fetch(requestString);

  let response = await data.json();

  city.textContent = "Weather in " + ville;
  temps.textContent = response.current.temperature + "°C";
  description.textContent = response.current.weather_descriptions;
  humidityEl.textContent = "Humidity " + response.current.humidity + "%";
  wind.textContent ="Wind speed: " + response.current.wind_speed + " km/h";
  image.src = response.current.weather_icons;

  
}

button.addEventListener('click', getMeteo);






