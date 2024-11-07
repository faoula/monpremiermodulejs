// Déclarer la fonction getHeure()
function getHeure() {
    // Crée l'objet date à partir
    const date = new Date();
    // Récupère l'heure et la stock
    const heure = date.getHours();

    //Récupère les minutes et les 
    const minutes = date.getMinutes();

    console.log(heure);

}

// Exporter la fonction getGeure()
export{
    getHeure
}