function showTemp(reponse) {
  console.log(reponse.data.main.temp);
}

let apiKey = "5ef4de8cd6b7fefcd7c42f98cf464ce8";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Sydney`;
axios.get(`${apiUrl}&appid=${apiKey}&units=metric`).then(showTemp);
