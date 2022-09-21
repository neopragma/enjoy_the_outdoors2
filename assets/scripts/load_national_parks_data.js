"use strict"

let states = []
let nationalParksArray = []
let parkTypesArray = []
let searchBy = document.querySelector("#searchBy")
let searchType = "state"
let parkSelection = document.querySelector("#parkSelection")
let selectedParks = ""

window.onload = function(){

    loadJsonData("assets/data/locations.json").then((locations) => {
        states = locations;
    })

    loadJsonData("assets/data/nationalparks.json").then((nationalParks) => {
        nationalParksArray = nationalParks.parks;
    })

    loadJsonData("assets/data/parktypes.json").then((parkTypes) => {
        parkTypesArray = parkTypes;
    })

    searchBy.addEventListener("change", (event) => {
        searchType = event.target.value
        if (searchType === "state") {
            populateStatesDropdown()
        } else {
            populateParkTypesDropdown()
        }
        parkSelection.classList.remove("d-none")        
    })

    parkSelection.addEventListener("change", (event) => {
       selectedParks = ""
       if (searchType === "state") {
          selectedParks = nationalParksArray.filter((parkData) => {
            return parkData.State === event.target.value
          })
       } else {
          selectedParks = nationalParksArray.filter((parkData) => {
            return parkData.LocationName.includes(event.target.value)
          })
        }
        populateParkInfo(selectedParks)
        parkInfo.classList.remove("d-none")
   })
}

let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}