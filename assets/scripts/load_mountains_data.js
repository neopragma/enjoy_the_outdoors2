"use strict"

let mountainsArray = []
let showMeButton = document.querySelector("#showMe")
let mountainNamesDropDown = document.querySelector("#mountainNames")
let selectedMountain = ""
let infoTable = document.querySelector("#infoTable")
let mountainInfo = document.querySelector("#mountainInfo")


window.onload = function(){

    loadJsonData("assets/data/mountains.json").then((mountains) => {
        mountainsArray = mountains.mountains;
    })

    showMeButton.addEventListener("click", () => {
        loadNames(mountainsArray)
        mountainNamesDropDown.classList.remove("d-none")
        infoTable.classList.add("d-none")
    })
          
    mountainNamesDropDown.addEventListener("change", (event) => {
        selectedMountain = mountainsArray.filter((mountain) => {
            return mountain.name === event.target.value
        })
        event.target.value = "Choose a mountain"
        mountainNamesDropDown.classList.add("d-none")
        loadCardFor(selectedMountain[0])
    })
}

function loadCardFor(mountain) {
    var txt = '<div class="card">'
    txt += '<div class="card-body">'
    txt += '<p>'
    txt += 'Name: '
    txt += mountain.name 
    txt += '</p>'
    txt += '<p>'
    txt += 'Elevation: '
    txt += mountain.elevation 
    txt += '</p>'
    txt += '<p>'
    txt += 'Effort: '
    txt += mountain.effort 
    txt += '</p>'
    txt += '</div>'
    mountainInfo.innerHTML = txt
    infoTable.classList.remove("d-none")
}


function loadNames(mountainsArray) {
    mountainsArray.forEach((mountain) => {
        mountainNames.innerHTML += `<option value="${mountain.name}">${mountain.name}</option>`
    })
}

//function that can "fetch" the sunset/sunrise times
let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}