export default class DataHandler {
    static $instance = null;

    storeInStorage(data) {
        window.localStorage.setItem("data", JSON.stringify(data));
    }

    retriveFromStorage() {
        const data = window.localStorage.getItem("data");
        if (data) {
            return JSON.parse(data);
        }

        return null;
    }

    async fetchData() {
        try {
            let data = this.retriveFromStorage();
            if (data) {
                return data;
            }

            const res = await fetch('data.json');
            data = await res.json();

            this.storeInStorage(data);

            return data;
        } catch (err) {
            console.log("Error", err)
        }
    }

    static get instance() {
        if (DataHandler.$instance === null) {
            DataHandler.$instance = new DataHandler();
        }

        return DataHandler.$instance;
    }
}