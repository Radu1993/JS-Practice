import Title from "./title.mjs";
import photoGrid from "./photoGrid.mjs";
import DataHandler from "./dataHandler.mjs";
import singlePhoto from "./singlePhoto.mjs";
import Router from "./router.mjs";


class App {
    constructor() {
        this.data = null;

        Router.instance.subscribe(this.onRouteChanged.bind(this));

    }

    cleanApp() {
        const app = document.querySelector(".app");
        if (app) {
            document.querySelector("body").removeChild(app);
        }

    }

    onRouteChanged(state) {
        this.render(state);

    }

    componentToRender(state) {
        if (state === null || state.link === '/') {
            return new photoGrid(this.data).render();
        }
        if (state.link.includes("/single-photo?id")) {
            const singlePhotoData = this.data.find(d => d.id === Number(state.link.split("=")[1]));
            if (singlePhotoData) {
                return new singlePhoto(singlePhotoData).render();
            }
        }


        return `<h1 class="text-center">Page not found</h1>`
    }

    async render(state = null) {
        if (this.data == null) {
            this.data = await DataHandler.instance.fetchData();
        }

        this.cleanApp();

        const main = document.createElement("main");
        const documentFragment = document.createDocumentFragment();

        main.classList.add("app");
        main.innerHTML = `
        ${new Title().render()}
        ${this.componentToRender(state)}
        `;

        documentFragment.appendChild(main);
        document.querySelector("body").appendChild(documentFragment.firstElementChild);

    }
}

const app = new App();
app.render();
