import axios from 'axios';
import config from '../configData.json'

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
    // console.log(config.SERVER_URL);
        return (
            // "http://34.159.157.62:8080/zavody" + useCase
            "http://"+config.SERVER_URL+":8080/zavody" + useCase
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
    async getRaceById(id) {
        const commandUri = this.getRaceUri("/"+`${id}`);
        return await Calls.call("get", commandUri);
    },
    async deleteRaceById(id){
        const commandUri = this.getRaceUri("/"+`${id}`);
        return await Calls.call("delete", commandUri);
    },
    async updateRace(id, race){
        const commandUri = this.getRaceUri("/"+`${id}`);
        return await Calls.call("put", commandUri, race);
    }
};

export default Calls;
