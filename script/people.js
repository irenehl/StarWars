import Tripulants from './Export/tripulant.js'
import utilities from './Export/utilities.js'

var cardTitle = document.getElementById('temp-card-title')
var cardInfo = document.getElementById('temp-card-desc')

var currentPage = 1,
tripulants = [],

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
.then(tr => {
    tripulants = tr.results
    fillContainerFromList(savedTripulants.concat(tripulants), e => e, savedTripulants.length)
})

var savedTripulants = JSON.parse(localStorage.getItem('ships')).ships.find(s => s.name === starship.name).trip || []

var fillContainerWithCards = (increment) => {
    pagination.classList.toggle("hidden")
    pagination.innerHTML = ''
    currentPage = utilities.pageLimits(currentPage, increment, 9)
    pagination = document.getElementById(`tr-pag-${currentPage}`)

    fetch(utilities.BASE_URL + `people/?page=${currentPage}`)
    .then(res => res.json())
    .then(trs => {
        tripulants = trs.results
        fillContainerFromList(savedTripulants.concat(tripulants), e => e, savedTripulants.length)
    })

    pagination.classList.toggle("hidden")
}

btnNext.onclick = (e) => {
    fillContainerWithCards(1)
}

btnPrev.onclick = (e) => {
    fillContainerWithCards(-1)
}

var fillContainerFromList = (list, filter, size) => {
    pagination.innerHTML = ''
    var tripAux = list.filter(filter), aux = 0

    tripAux.forEach(tr => {
        if(savedTripulants.includes(tr))
            pagination.appendChild(Tripulants(classes, tr, true, starship.name))
        else
            pagination.appendChild(Tripulants(classes, tr, false, starship.name))
    })
}

fillContainerFromList(savedTripulants.concat(tripulants), e => e, savedTripulants.length)