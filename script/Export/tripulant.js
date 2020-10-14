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
    console.log(active);
    cardInfo.classList.add(active === true ? 'active' : null)

    button.onclick = (e) => {
        if(active === true) {
            var people = JSON.parse(localStorage.getItem('people'))

            people.people = people.people.filter(e => e.name !== tripulant.name)
            localStorage.setItem('people', JSON.stringify(people))

            var ships = JSON.parse(localStorage.getItem('ships'))

            var s = ships.ships.find(s => s.name === stName)
            
            if(s.trip != null)
                s.trip = s.trip.filter(e => e.name !== tripulant.name)

            ships.ships = [s]
            localStorage.setItem('ships', JSON.stringify(ships))
        }
        else {
            var people = JSON.parse(localStorage.getItem('people')) || { people: [] }
            if(people.people.find(e => e.name === tripulant.name) != null) {
                alert('Estre tripulante se encuentra en esta u otra nave!')
                return
            }
                
            
            people.people.push(tripulant)
            localStorage.setItem('people', JSON.stringify(people))

            var ships = JSON.parse(localStorage.getItem('ships')),
            s = ships.ships.find(e => e.name === stName)

            if(s.trip == null)
                s.trip = [tripulant]
            else
                s.trip.push(tripulant)

            localStorage.setItem('ships', JSON.stringify(ships))
        }

        location.reload()
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