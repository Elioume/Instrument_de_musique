fetch(`instruments-musique-monde.json`)
.then(rep=>rep.json())
.then(data=>{
    console.log(data)
    data.forEach(p=>{
        afficherProduits(p)
        afficherServices(p)
        afficherAvis(p)
        afficherPromesses(p)
    })
})

function afficherProduits() {
    document.getElementById(`nosProduitsJS`).innerHTML += ``
}

function afficherServices() {
    document.getElementById(`nosServicesJS`).innerHTML += ``
}

function afficherAvis() {
    document.getElementById(`avisClientJS`).innerHTML += ``
}

// modifier le json pour que les promesses soit un autre tableau avec 1 image et la promesse
function afficherPromesses() {
    document.getElementById(`promessesJS`).innerHTML += ``
}