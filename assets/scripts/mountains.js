// this depends on load_mountains_data.js

let pathToImages = 'assets/images/mountains/'

function loadCardFor(mountain) {
    var txt = '<div class="card">'
    txt += '<div class="card-body">'
 
    Object.keys(mountain).forEach(function (key) {
        txt += `<p>${capitalize(key)}: ${formatItem(mountain,key)}</p>`
    });

    mountainInfo.innerHTML = txt
    infoTable.classList.remove("d-none")
}

function formatItem(obj, key) {
    var result = ""
    switch(key) {
      case "coords":
        result = `Latitude ${obj[key].lat}, Longitude ${obj[key].lng}`
        break;
      case "elevation":
        result = `${obj[key]} feet`
        break;
      case "img":
        result = `<img src="${pathToImages}${obj[key]}"/>`
        break;  
      default: 
        result = obj[key]
    }
    return result
}

function loadNames(mountainsArray) {
    mountainsArray.forEach((mountain) => {
        mountainNames.innerHTML += wrapAsOption(mountain.name)
    })
}
