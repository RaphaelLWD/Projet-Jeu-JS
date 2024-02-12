import Circuit from "./Classe/circuit.js";

let circuit = new Circuit();

let trajet = document.querySelector('.trajetVehicule');

function monTrajet() {
    trajet.addEventListener("click", () => {
        let start = Date.now();

        let timer = setInterval(function () {
            let timePassed = Date.now() - start;

            trajet.style.left = timePassed / 5 + 'px';

            if (timePassed > 5200) clearInterval(timer);

        }, 20);
    });
}


let attributs = ["lisse", "à clou", "à aube", "rond", "carre", "étoile", "bois", "metal", "caoutchouc"];
let scoreParAttributs = ["mauvais" = 0, "bon" = 50, "excellent" = 100];



function vitesselente() {
    for (i = 0; i <= 100; i++) {
    };
    trajet = vitesselente();
}
function vitesseNormale() {
    for (i = 150; i <= 250; i++) {
    };
    trajet = vitesseNormale();
}
function vitesseOptimal() {
    for (i = 300; i++;) {
    };
    trajet = vitesseOptimal();
}
function vitesseSelonScore() {
    switch (score) {
        case vitesselente():

            break;

        default:
            break;
    }
}


