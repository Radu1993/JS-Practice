export default class singlePhoto {
    constructor(props) {
        this.props = props;
    }

    render() {
        return `
        <div class="container">
        <div class="row">
        <div class="col-md-8 col-xs-8">
        <figure class="figure">
        <img src="${this.props.srcImage}" class="figure-img" width="100%">
        <figure>
        </div>
        <div class="col-md-3 offset-md-1 col-xs-3 offset-xs-1">
        ${this.props.desc}
        </div>
        </div>
        </div>
        `;
    }
}