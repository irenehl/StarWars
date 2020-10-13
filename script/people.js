var cardTitle = document.getElementById('temp-card-title')
var cardInfo = document.getElementById('temp-card-desc')

var starship = JSON.parse(localStorage.getItem("temp"))

cardTitle.innerHTML = starship.name

cardInfo.innerHTML = `Model: ${starship.model} <br> 
Passengers: ${starship.passengers} <br> Speed: ${starship.max_atmosphering_speed}`

console.log(starship)