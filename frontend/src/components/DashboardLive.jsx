import React from 'react';
import '../css/timeh.css';
import DashboardCategoryDetailStomp from "./DashboardCategoryDetailStomp";
import Calls from "../server/Calls";
import RaceList from "./RaceList.jsx";

class DashboardLive extends React.Component {

    state = {
        races: {},
        raceActive: {},
        path: '',
        isLiveId: false
    };

    sortKategorie = (kats) => {
        return kats.sort((a, b) => {
            return a.id - b.id;
        });
    };
    constructor(props){
        super(props);
        let path = window.location.pathname;
        console.log("pathname: " + path);
        if (path === "/live"){
            console.log("jenom live");
            this.setState.isLiveId = false;
        }
        else {
            let idR = path.substr(6);
            console.log("live na id: " + idR);
            this.setState.isLiveId = true;
        }
    }
    componentDidMount() {
        // const { id } = useParams;

        // console.log(raceId);
        const raceId = 703;
        Calls.getRaceActive().then(response => {
            const r = response.data;
            console.log(r);
            this.setState({races: r});
        })
            .catch(err => {
                console.log(err);
            });
        if (raceId !== null) {
            Calls.getRaceById(raceId).then(response => {
                const race = response.data;
                this.setState({raceActive: race});
            }).catch(err => {
                console.log(err);
            })
        }
    }

    render() {

        return <div>
            {/*je vice zavodu v live rezimu?*/}
            {/*{this.state.races.length || !this.state.isLiveId > 0 ? <RaceList races={this.state.races}/> : null}*/}
            {/*<DashboardCategoryDetailStomp kategorie={this.sortKategorie(this.state.raceActive.kategorie)}*/}
            {/*zavod={this.state.raceActive}/>*/}
            <p>pokusny testovaci text, at to nehaze chybu</p>
        </div>
    }
}

export default DashboardLive;