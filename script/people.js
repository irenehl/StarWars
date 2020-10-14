import Tripulants from './Export/tripulant.js'
import utilities from './Export/utilities.js'

var cardTitle = document.getElementById('temp-card-title')
var cardInfo = document.getElementById('temp-card-desc')

var currentPage = 1,
tripulants = [],
storedAndSelected = [],
classes = {
    card: ["card-tripulants"],
    btn: ["i fas fa-heart"]
},
pagination = document.getElementById(`tr-pag-${currentPage}`)

var btnNext = document.getElementById("navFrontTr")
var btnPrev = document.getElementById("navBackTr")

var starship = JSON.parse(localStorage.getItem("temp")) 
cardTitle.innerHTML = starship.name
cardInfo.innerHTML = `Model: ${starship.model} <br> 
Passengers: ${starship.passengers} <br> Speed: ${starship.max_atmosphering_speed}`

fetch(utilities.BASE_URL + `people/?page=${currentPage}`)
.then(res => res.json())
.then(p => {
    tripulants = p.results
    p.results.forEach(st => {
        pagination.appendChild(Tripulants(classes, st))
    })
})

var savedTripulants = JSON.parse(localStorage.getItem('ships')).ships.find(s => s.name === starship.name).trip || []

var fillContainerWithCards = (increment) => {
    pagination.classList.toggle("hidden")
    pagination.innerHTML = ''
    currentPage = utilities.pageLimits(currentPage, increment, 9)
    pagination = document.getElementById(`tr-pag-${currentPage}`)

    fetch(utilities.BASE_URL + `people/?page=${currentPage}`)
    .then(res => res.json())
    .then(sts => {
        tripulants = sts.results
    })

    fillContainerFromList()

    pagination.classList.toggle("hidden")
}

btnNext.onclick = (e) => {
    fillContainerWithCards(1)
}

btnPrev.onclick = (e) => {
    fillContainerWithCards(-1)
}

var fillContainerFromList = (list, filter) => {
    var stAux = list.filter(filter)

    stAux.forEach(st => { 
        pagination.appendChild(Tripulants(classes, st, true))
    })
}

fillContainerFromList(savedTripulants.concat(tripulants), e => e)