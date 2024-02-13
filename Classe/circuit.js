export default class Circuit {

    #typesRoutes = ["./medias/NormalRoad.jpg", "./medias/BoueuseRoad.jpg", "./medias/MagmaRoad.jpg", "./medias/WaterRoad.jpg", "./medias/SnowRoad.jpg"];
    constructor(index) {
        this.routeAleatoire(index);
    }
    routeAleatoire(currentIndex) {
        if (currentIndex <= this.#typesRoutes.length - 1) {
            document.querySelector('.routeGoudron').src = this.#typesRoutes[currentIndex];
        } else {
            document.querySelector('.routeGoudron').src = "./medias/GameOver.jpg";
        }

    }

    get boutonEnRoute() {
        return document.querySelector('.enRoute');
    }


}   