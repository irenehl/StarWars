import Card from './Export/starship.js'
import utilities from './Export/utilities.js'

var currentPage = 1,
starships = [],
classes = {
    card: ["card selected-starship"],
    btn: ["i fas fa-heart"]
}

var pagination = document.getElementById(`disc-pag-${currentPage}`)

fetch(utilities.BASE_URL + `starships/?page=${currentPage}`)
.then(res => res.json())
.then(sts => {
    starships = sts.results
    sts.results.forEach(st => {
        pagination.appendChild(Card(classes, st))
    })
})

var btnNext = document.getElementById("navFrontDiscover")
var btnPrev = document.getElementById("navBackDiscover")

var fillContainerWithCards = (increment) => {
    pagination.classList.toggle("hidden")
    pagination.innerHTML = ''
    currentPage = utilities.pageLimits(currentPage, increment, 4)
    pagination = document.getElementById(`disc-pag-${currentPage}`)

    fetch(utilities.BASE_URL + `starships/?page=${currentPage}`)
    .then(res => res.json())
    .then(sts => {
        starships = sts.results

        sts.results.forEach(st => {
            pagination.appendChild(Card(classes, st))
        })
    })

    pagination.classList.toggle("hidden")
}

var fillContainerFromList = (filter) => {
    console.log(starships);
    var stAux = starships.filter(filter)

    console.log(stAux);

    stAux.forEach(st => {
        pagination.appendChild(Card(classes, st))
    })
}

btnNext.onclick = (e) => {
    fillContainerWithCards(1)
}

btnPrev.onclick = (e) => {
    fillContainerWithCards(-1)
}

var search = document.getElementById("search")

search.onkeyup = (e) => {
    pagination.innerHTML = ''

    if(search.value == '')
        fillContainerFromList(it => it)
    else
        fillContainerFromList(it => {
            return it.name.includes(search.value) ? it : null
        })
}