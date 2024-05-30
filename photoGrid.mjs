import Thumbnail from "./thumbnail.mjs";

export default class photoGrid {
    constructor(data) {
        this.data = data;
        this.thumbnails = [];
        this._nume = "";
    }

    get thumbnailMarkup() {
        let thumbnailsHTML = "";
        this.thumbnails.forEach(thumbnail => thumbnailsHTML += `<div class="col-md-4 col-xs-6">${thumbnail.render()}</div>`);
        return thumbnailsHTML;
    }

    componentWillRender() {
        if (this.thumbnails.length > 0) {
            return;
        }

        this.data.forEach(thumbnail => this.thumbnails.push(new Thumbnail(thumbnail)));
    }

    render() {
        this.componentWillRender();

        return `
        <div class="container">
        ${this.thumbnailMarkup}
        <div>
        <div>
        `
    }
}