//Feature 1

let currentTime = new Date();
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[date.getDay()];
  let currenthour = date.getHours();
  let currentMinute = date.getMinutes();

  let formattedDate = `${currentDay} ${currenthour}:${currentMinute}`;

  return formattedDate;
}

let date = document.querySelector("li#current-day");
date.innerHTML = formatDate(currentTime);

// Feature 2

function city(event) {
  event.preventDefault();
  let cityInput = document.querySelector("input#city-search");
  let h1 = document.querySelector("h1#city");
  h1.innerHTML = `${cityInput.value}`;
}
let search = document.querySelector("#search-form");
search.addEventListener("submit", city);

//feature 3

function convertTo(event) {
  event.preventDefault();
  let fahrenheit = 20 * 1.8 + 32;
  let temp = document.querySelector("#temp");
  temp.innerHTML = `${fahrenheit}`;
}

let tempFahrenheit = document.querySelector("#fahrenheit");
tempFahrenheit.addEventListener("click", convertTo);

function celsius(event) {
  event.preventDefault();
  let temp = document.querySelector("#temp");
  temp.innerHTML = `20`;
}

let tempCelsius = document.querySelector("#celsius");
tempCelsius.addEventListener("click", celsius);
