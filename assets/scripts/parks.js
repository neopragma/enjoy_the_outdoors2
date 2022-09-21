// this depends on load_national_parks_data.js

function populateParkInfo(selectedParks) {
    parkInfo.innerHTML = '<p><hr/></p>'
    selectedParks.forEach((park) => {
        parkInfo.innerHTML += `<p>${park.LocationName}</p>`
        parkInfo.innerHTML += `<p>${park.City}</p>`
        parkInfo.innerHTML += `<p>${park.State}</p>`
        parkInfo.innerHTML += '<hr/>'
    })
}

function populateStatesDropdown() {
    parkSelection.innerHTML = optionAll
    states.forEach((state) => {
        parkSelection.innerHTML += wrapAsOption(state)
    })
}

function populateParkTypesDropdown() {
    parkSelection.innerHTML = optionAll
    parkTypesArray.forEach((parkType) => {
       parkSelection.innerHTML += wrapAsOption(parkType)
    })
}
