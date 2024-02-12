export default class Circuit {

    #typesRoutes = ["./medias/NormalRoad.jpg", "./medias/BoueuseRoad.jpg", "./medias/MagmaRoad.jpg", "./medias/WaterRoad.jpg", "./medias/SnowRoad.jpg"];
    constructor() {
        this.routeAleatoire();
    }
    routeAleatoire() {
        let routeAleatoire = Math.floor(Math.random() * this.#typesRoutes.length);
        document.querySelector('.routeGoudron').src = this.#typesRoutes[routeAleatoire];
    }
    get boutonEnRoute() {
        return document.querySelector('.enRoute');
    }

}   