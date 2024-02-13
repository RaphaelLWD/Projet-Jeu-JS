import Circuit from "./Classe/circuit.js";

// ------ Mon switch de circuits ------//

let circuit = new Circuit(0);
let currentIndex = 0;

// -------------- Trajet + Score -------------------//
function ChangeNameRoad() {
    switch (document.querySelector('.routeGoudron').src) {
        case "https://soft-youtiao-97d35b.netlify.app/medias/NormalRoad.jpg":
            document.querySelector('.typeCircuit').innerText = "Route Goudron";
            break;
        case "https://soft-youtiao-97d35b.netlify.app/medias/BoueuseRoad.jpg":
            document.querySelector('.typeCircuit').innerText = "Route Boueuse";
            break;
        case "https://soft-youtiao-97d35b.netlify.app/medias/MagmaRoad.jpg":
            document.querySelector('.typeCircuit').innerText = "Route Magmatique";
            break;
        case "https://soft-youtiao-97d35b.netlify.app/medias/WaterRoad.jpg":
            document.querySelector('.typeCircuit').innerText = "Route Aquatique";
            break;
        case "https://soft-youtiao-97d35b.netlify.app/medias/SnowRoad.jpg":
            document.querySelector('.typeCircuit').innerText = "Route Enneigée";
            break;
    }
}



/* Trajet GOUDRON (à modifier au niveau des valeurs des attributs pour faire correspondre à la route en goudron cf.doc papier)*/
document.getElementById('startButton').addEventListener('click', function () {

    let selectionType = document.querySelector('input[name="type"]:checked');
    let selectionForme = document.querySelector('input[name="forme"]:checked');
    let selectionMatiere = document.querySelector('input[name="matiere"]:checked');

    if (!selectionType || !selectionForme || !selectionMatiere) {
        alert("Veuillez sélectionner un type, une forme et un matériau.");
        return;
    }
    console.log(document.querySelector('.routeGoudron').src);
    let typeValeur = selectionType.value;
    let formeValeur = selectionForme.value;
    let matiereValeur = selectionMatiere.value;

    let typeSpeed;
    let typeScore;
    let formeSpeed;
    let formeScore;
    let matiereSpeed;
    let matiereScore;

    switch (document.querySelector('.routeGoudron').src) {
        case "https://soft-youtiao-97d35b.netlify.app/medias/NormalRoad.jpg":
            if (typeValeur === "lisse") {
                typeSpeed = 1; // vitesse rapide
                typeScore = 100; // score pour vitesse rapide
            } else if (typeValeur === "à clou") {
                typeSpeed = 2; // vitesse normale
                typeScore = 50; // score pour vitesse normale
            } else if (typeValeur === "à aube") {
                typeSpeed = 3; // vitesse lente
                typeScore = 0; // score pour vitesse lente
            }


            if (formeValeur === "rond") {
                formeSpeed = 1;
                formeScore = 100;
            } else if (formeValeur === "carre") {
                formeSpeed = 2;
                formeScore = 50;
            } else if (formeValeur === "etoile") {
                formeSpeed = 3;
                formeScore = 0;
            }


            if (matiereValeur === "caoutchouc") {
                matiereSpeed = 1;
                matiereScore = 100;
            } else if (matiereValeur === "bois") {
                matiereSpeed = 2;
                matiereScore = 50;
            } else if (matiereValeur === "metal") {
                matiereSpeed = 3;
                matiereScore = 0;
            }
            break;
        case "https://soft-youtiao-97d35b.netlify.app/medias/BoueuseRoad.jpg":
            if (typeValeur === "lisse") {
                typeSpeed = 3; // vitesse rapide
                typeScore = 0; // score pour vitesse rapide
            } else if (typeValeur === "à clou") {
                typeSpeed = 2; // vitesse normale
                typeScore = 50; // score pour vitesse normale
            } else if (typeValeur === "à aube") {
                typeSpeed = 1; // vitesse lente
                typeScore = 100; // score pour vitesse lente
            }

            if (formeValeur === "rond") {
                formeSpeed = 3;
                formeScore = 0;
            } else if (formeValeur === "carre") {
                formeSpeed = 2;
                formeScore = 50;
            } else if (formeValeur === "etoile") {
                formeSpeed = 1;
                formeScore = 100;
            }


            if (matiereValeur === "caoutchouc") {
                matiereSpeed = 2;
                matiereScore = 50;
            } else if (matiereValeur === "bois") {
                matiereSpeed = 1;
                matiereScore = 100;
            } else if (matiereValeur === "metal") {
                matiereSpeed = 3;
                matiereScore = 0;
            }
            break;
        case "https://soft-youtiao-97d35b.netlify.app/medias/MagmaRoad.jpg":
            if (typeValeur === "lisse") {
                typeSpeed = 3; // vitesse rapide
                typeScore = 0; // score pour vitesse rapide
            } else if (typeValeur === "à clou") {
                typeSpeed = 2; // vitesse normale
                typeScore = 50; // score pour vitesse normale
            } else if (typeValeur === "à aube") {
                typeSpeed = 1; // vitesse lente
                typeScore = 100; // score pour vitesse lente
            }

            if (formeValeur === "rond") {
                formeSpeed = 3;
                formeScore = 0;
            } else if (formeValeur === "carre") {
                formeSpeed = 1;
                formeScore = 100;
            } else if (formeValeur === "etoile") {
                formeSpeed = 2;
                formeScore = 50;
            }


            if (matiereValeur === "caoutchouc") {
                matiereSpeed = 3;
                matiereScore = 0;
            } else if (matiereValeur === "bois") {
                matiereSpeed = 2;
                matiereScore = 50;
            } else if (matiereValeur === "metal") {
                matiereSpeed = 1;
                matiereScore = 100;
            }
            break;
        case "https://soft-youtiao-97d35b.netlify.app/medias/WaterRoad.jpg":
            if (typeValeur === "lisse") {
                typeSpeed = 3; // vitesse rapide
                typeScore = 0; // score pour vitesse rapide
            } else if (typeValeur === "à clou") {
                typeSpeed = 2; // vitesse normale
                typeScore = 50; // score pour vitesse normale
            } else if (typeValeur === "à aube") {
                typeSpeed = 1; // vitesse lente
                typeScore = 100; // score pour vitesse lente
            }

            if (formeValeur === "rond") {
                formeSpeed = 2;
                formeScore = 50;
            } else if (formeValeur === "carre") {
                formeSpeed = 3;
                formeScore = 0;
            } else if (formeValeur === "etoile") {
                formeSpeed = 1;
                formeScore = 100;
            }


            if (matiereValeur === "caoutchouc") {
                matiereSpeed = 1;
                matiereScore = 100;
            } else if (matiereValeur === "bois") {
                matiereSpeed = 2;
                matiereScore = 50;
            } else if (matiereValeur === "metal") {
                matiereSpeed = 3;
                matiereScore = 0;
            }
            break;
        case "https://soft-youtiao-97d35b.netlify.app/medias/SnowRoad.jpg":
            if (typeValeur === "lisse") {
                typeSpeed = 3; // vitesse rapide
                typeScore = 0; // score pour vitesse rapide
            } else if (typeValeur === "à clou") {
                typeSpeed = 1; // vitesse normale
                typeScore = 100; // score pour vitesse normale
            } else if (typeValeur === "à aube") {
                typeSpeed = 2; // vitesse lente
                typeScore = 50; // score pour vitesse lente
            }

            if (formeValeur === "rond") {
                formeSpeed = 1;
                formeScore = 100;
            } else if (formeValeur === "carre") {
                formeSpeed = 3;
                formeScore = 0;
            } else if (formeValeur === "etoile") {
                formeSpeed = 2;
                formeScore = 50;
            }


            if (matiereValeur === "caoutchouc") {
                matiereSpeed = 1;
                matiereScore = 100;
            } else if (matiereValeur === "bois") {
                matiereSpeed = 2;
                matiereScore = 50;
            } else if (matiereValeur === "metal") {
                matiereSpeed = 3;
                matiereScore = 0;
            }
            break;

    }


    let speed = typeSpeed + formeSpeed + matiereSpeed;
    let score = typeScore + formeScore + matiereScore;

    let vehicule = document.querySelector('.trajetVehicule');
    let container = document.querySelector('.trajet');
    let containerWidth = container.offsetWidth;
    let newPosition = containerWidth - vehicule.offsetWidth;

    vehicule.style.left = newPosition + 'px';
    vehicule.style.transition = 'left ' + speed + 's linear';

    // Fin du trajet : Affichage du score
    setTimeout(function () {
        // Affichage du score
        document.getElementById('score').innerText = "Score: " + score;
    }, speed * 1000); // Le délai correspond à la durée du trajet
});

// --------- Bouton qui passe à au circuit suivant --------//

let circuitSuivant = document.querySelector('#nextButton');
let repositionneVehicule = document.querySelector('.trajetVehicule');
circuitSuivant.addEventListener("click", () => {
    // joue la fonction qui permet de passer au circuit suivant //

    circuit.routeAleatoire(currentIndex);
    currentIndex++;
    repositionneVehicule.style.left = 0;;
    ChangeNameRoad();

})
// Trajet Boueux // 
// Trajet Enneigé //
// TRajet Eau // 
// Trajet Magma // 

//----- Ajout bande-son -------//

let audio = document.getElementById('audio');
let joueActuel = false;

// Lancer ou arrêter la musique au clic sur le bouton
document.getElementById('toggleButton').addEventListener('click', function () {
    if (!joueActuel) {
        play();
    } else {
        stop();
    }
});

// Fonction pour lancer la musique
function play() {
    audio.play();
    joueActuel = true;
    document.getElementById('icon').src = './medias/volume-eleve.png'; // Changer l'icône en pause
}

// Fonction pour arrêter la musique
function stop() {
    audio.pause();
    audio.currentTime = 0; // Rembobiner au début
    joueActuel = false;
    document.getElementById('icon').src = 'muet.png'; // Changer l'icône en play
}
// ------- Nom de chaque route qui apparait en fonction de sa route ---------//

// ------- Pop-up -------//
// ------------------ Switch Acceuil - Jeu + Play/Display Règles---------------------//
let bouton = document.querySelector('#boutonAcc');
let popupPlay = document.querySelector('.popUp');
let jeuPlay = document.querySelector('.jeu');
let reglesBouton = document.querySelector('#regles');
let reglesPlay = document.querySelector('.reglesDeJeu');
bouton.addEventListener("click", displayAcceuil);
reglesBouton.addEventListener("click", playRegles);

function displayAcceuil() {
    popupPlay.classList.remove("Play");
    popupPlay.classList.add("Display");
    jeuPlay.classList.add('Play')
    jeuPlay.classList.remove('Display')
}
function playRegles() {
    reglesPlay.classList.toggle("Display")
    reglesPlay.classList.toggle("Play")
}

// -------------------- Pop des règles ------------------//



reglesBouton.addEventListener("click", () => {
    reglesPlay.innerText = `         Bienvenue sur SMARTTRUCK 

    Vous êtes un Roadtriper à la recherche des plus beaux paysages sur Terre.
    Equipez de votre véhicule, vous vous apprêtez à arpenter les routes les plus impraticables!
    
    ' Ha ha je me ris du danger, rien ne m'arrêtera !!' dîtes vous à voix haute.
    
    Réflechissez aux attributs à ajouter à votre véhicule sur chaque circuits pour franchir
    les 5 terrains de manière la plus optimal.

    Chaque circuit peut vous octroyer entre 0 et 300 points.
    Le score maximal possible est de 1000 points.
    
    Vos choix seront décisifs quand au score final!
    
    Confrontez votre logique aux autres Roadtripers, que le meilleur gagne!`
    reglesPlay.style.margin = "10px";
    reglesPlay.style.textAlign = "center";
});
