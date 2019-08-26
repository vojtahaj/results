import axios from 'axios';

const Calls = {

    async call(method, url, dtoIn) {
        return await axios({
            method: method,
            url: url,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Accept": "application/json"
            },
            data: dtoIn
        });
    },

    getRaceUri: function (useCase) {
        return (
            // "http://35.246.244.250/zavody" + useCase
            "http://localhost:8080/zavody" + useCase

        );
    },

    async createRace(race) {
        const commandUri = this.getRaceUri("/");
        return await Calls.call("post", commandUri, race);
    },

    async getRaceActive() {
        const commandUri = this.getRaceUri("/actives");
        return await Calls.call("get", commandUri, null);
    },

    async getRace() {
        const commandUri = this.getRaceUri("");
        return await Calls.call("get", commandUri);
    },

};

export default Calls;
