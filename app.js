fetch(`instrumentsMusiqueMonde.json`)
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

function afficherProduits(produit) {
    let tabProduits = produit.produits
    tabProduits.forEach(i=>{
        document.getElementById(`nosProduitsJS`).innerHTML += `
            <!-- Placeholder carte produit -->
                <div class="large-4 carteProduit mb-30">
                    <!-- Partie haute / Image produit -->
                    <div>
                        <img src="${i.imageUrl}" alt="" class="large-12 imgProduit">
                    </div>

                    <!-- Partie basse / Titre + Desc -->
                    <div>
                        <h3 class="text-center align-end">${i.nom}</h3>
                        <p>${i.description}</p>
                    </div>

                    <!-- Bouton -->
                    <div class="flex justify-end">
                        <p class="btn">Voir plus</p>
                    </div>
                </div>
`})}

function afficherServices(service) {
    let tabProduits = service.services
    tabProduits.forEach(i=>{
    document.getElementById(`nosServicesJS`).innerHTML += `
    <!-- Carte placeholder img à gauche, txt à droite -->
                <div class="flex justify-between container-1000 carteService align-center">

                    <!-- Image Gauche -->
                    <div class="large-6">
                        <img src="${i.imageUrl}" alt="" class="large-12 imgService">
                    </div>

                    <!-- Texte Droite -->
                    <div class="large-6">
                        <h2>${i.nom}</h2>
                        <p>${i.description}</p>
                    </div>
                </div>
`})}

function afficherAvis(temoignage) {
    let tabProduits = temoignage.temoignages
    tabProduits.forEach(i=>{
    document.getElementById(`avisClientJS`).innerHTML += `
    <!-- Placeholder carte Avis Clients -->
                <div class="carteClient large-4">

                    <div class="flex justify-between">
                        <h4>${i.prenom}</h4>
                        <h4>${i.note}/5</h4>
                    </div>

                    <h4 class="mt-10">${i.prestation}</h4>
                    <p>${i.commentaire}</p>
                </div>
`})}

// modifier le json pour que les promesses soit un autre tableau avec 1 image et la promesse
function afficherPromesses(promesse) {
    let tabProduits = promesse.promesses
    tabProduits.forEach(i=>{
    document.getElementById(`promessesJS`).innerHTML += `
`})}