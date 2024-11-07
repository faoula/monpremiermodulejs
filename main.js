// Importer la fonction getHeure() qui se trouve 
import {getHeure} from "./generate.js";

// Ici j'importe la variable nom. La variable nom est déclarée dans le fichier user.js
import {nom, utilisateur} from "./user.js";

// let nomUtilisateur = document.querySelector("#nom");

// nomUtilisateur.textContent = nom;

let nomObjetUtilisateur = document.querySelector("#nomUtilisateur");

nomObjetUtilisateur.textContent = utilisateur.nom;

let prenomUtilisateur = document.querySelector("#prenomUtilisateur");

prenomUtilisateur.textContent = utilisateur.prenom;

let villageUtilisateur = document.querySelector("#villageUtilisateur");

villageUtilisateur.textContent = utilisateur.village;


/*
const heureCourant = getHeure;

console.log(heureCourant.getHeure);*/

// document.querySelector("#heure").innerHTML = getHeure
