import Router from "./router.mjs";

export default class Title {
    constructor() {
        this.heading = "Galeria mea foto!";
        this.subHeading = "Aceasta este galeria mea foto";


        document.addEventListener('click', (e) => (e.target && e.target.classList.contains("title-link")) && this.onTitleLinkClicked(e));
    }

    onTitleLinkClicked(e) {
        e.preventDefault();
        e.stopImmediatePropagation();


        Router.instance.pushHistory({ title: this.heading, link: "/" });
    }

    render() {
        return `
        <section class="text-center jumbotron">
        <h1 class ="title-link">${this.heading}</h1>
        <p>${this.subHeading}</p>
        </section>
        `;
    }
}