export default function Card(classes, starship) {
    var card = document.createElement("article")
    card.classList = classes.card
    card.id = 'sp-' + starship.name

    var button = document.createElement("button")
    button.classList = ["corner fav"]

    button.onclick = (e) => {
        localStorage.setItem('temp', JSON.stringify(starship))
        
        var ships = JSON.parse(localStorage.getItem('ships'))
        if(!ships) {
            ships = {ships: [starship]}
        }
        else {
            var add = ships.ships.find(s => s.name === starship.name)
            console.log(add);

            if(add == null)
                ships.ships.push(starship)
        }
        localStorage.setItem('ships', JSON.stringify(ships))

        window.location.replace('/people.html')
    }

    var icon = document.createElement("i")
    icon.classList = classes.btn

    var img = document.createElement("img")
    img.src = "/img/spaceship.png"
    img.alt = "starship"
    img.classList = ["card-img"]

    var cardInfo = document.createElement("div")
    cardInfo.classList = ["card-info"]

    var cardTitle = document.createElement("h3")
    cardTitle.classList = ["card-title"]

    var cardDesc = document.createElement("p")
    cardDesc.classList = ["card-desc"]

    cardDesc.innerHTML = `Model: ${starship.model} <br> 
    Passengers: ${starship.passengers} <br> Speed: ${starship.max_atmosphering_speed}`

    cardTitle.innerHTML = starship.name

    cardInfo.appendChild(cardTitle)
    cardInfo.appendChild(cardDesc)

    button.appendChild(icon)

    card.appendChild(button)
    card.appendChild(img)
    card.appendChild(cardInfo)

    return card
}