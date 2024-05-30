export default class Router {
    static $instance = null;

    constructor() {
        this.listeners = [];

        window.addEventListener("popstate", this.onHistoryChange.bind(this), false);
    }

    subscribe(listener) {
        this.listeners.push(listener);
    }

    notifyListeners(state) {
        this.listeners.forEach(listener => listener(state));
    }

    pushHistory(state) {
        history.pushState(state, state.title, state.link);
        this.notifyListeners(state);
    }

    onHistoryChange(event) {
        this.notifyListeners(event.state);
    }


    static get instance() {
        if (Router.$instance === null) {
            Router.$instance = new Router();
        }

        return Router.$instance;
    }
}