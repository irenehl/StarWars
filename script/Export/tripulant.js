export default function Tripulants(classes, tripulant, active, stName) {
    var card = document.createElement("article")
    card.classList = classes.card
    card.id = 'tp-' + tripulant.name

    var button = document.createElement("button")
    button.classList = ["corner fav"]

    var icon = document.createElement("i")
    icon.classList = classes.btn

    var img = document.createElement("img")
    img.src = "/img/people.png"
    img.alt = "tripulant"
    img.classList = ["card-img"]

    var cardInfo = document.createElement("div")
    cardInfo.classList = ["card-info"]
    cardInfo.classList.add(active ? 'active' : null)

    button.onclick = (e) => {

    }

    var cardTitle = document.createElement("h3")
    cardTitle.classList = ["card-title"]

    var cardDesc = document.createElement("p")
    cardDesc.classList = ["card-desc"]

    cardDesc.innerHTML = `Gender: ${tripulant.gender} <br> 
    BirthYear: ${tripulant.birth_year}`

    cardTitle.innerHTML = tripulant.name

    cardInfo.appendChild(cardTitle)
    cardInfo.appendChild(cardDesc)

    button.appendChild(icon)

    card.appendChild(button)
    card.appendChild(img)
    card.appendChild(cardInfo)

    return card
}