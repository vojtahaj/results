import React from 'react'
import {Client} from '@stomp/stompjs'
import AtletView from "../atlet_view/AtletView";
import Button from "@material-ui/core/es/Button/Button";
import '../../css/resultTable.css';
import CategoryList from "../CategoryList";
import Transcription from "../atlet_view/Transcription";
import Calls from "../../server/Calls";
import '../../css/hlasatelStyle.css'
import Time from "../Time";
import config from '../../configData.json';

class DashboardCategoryDetailStomp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            serverTime: null,
            isConnect: false,
            bibToFind: 1,
            preKat: 0,
            kat: 0,
            athletes: [],
            raceInfo: {},
            checked: false,
            foundBib: [],
            errorBib: "",
            isRecivedBib: null,
            zavod: [],
            categories: [],
            katNaz: 'autocategory'
        };
        this.onKeyPressed = this.onKeyPressed.bind(this);
    }

    sortKategorie = (kats) => {
        return kats.sort((a, b) => {
            return a.id - b.id;
        });
    };

    categoryTopic;
    errorTopic;
    raceInfoTopic;
    userLiveTopic;

    setKat = async kat => {
        if (kat < 0) kat = 0;
        console.log('kategorie' + kat)
        await
            this.categoryTopic.unsubscribe();
        this.setState({
            kat: kat,
            checked: false
        });
        this.categoryTopic = this.client.subscribe(`/topic/live/${this.state.kat}`, message => {
            this.processMessage(message);
        });
        this.firstCall();
    };

    setKatInStomp = async kat => {
        await this.setKat(kat);
    };

    onKeyPressed(e) {
        let k = this.state.categories.findIndex(c => c.kat === this.state.kat);
        console.log("-----\nindex aktualni cat: " + k);
        console.log(this.state.categories.length);
        //if (k === -1) k = 0;
        if (e.key === '-' && k > 0) {
            console.log('d')
            this.setKat(this.state.categories[(k - 1)].kat);
        }
        if (e.key === '+' && k < this.state.categories.length-1) {
            console.log('up');
            this.setKat(this.state.categories[(k + 1)].kat);
        }

    }

    firstCall() {
        // console.log("first call");
        // console.log("raceId: "+parseInt(this.props.raceId));
        this.client.publish({destination: `/app/live/${this.state.kat}`, 'name': "test"});
        this.client.publish({destination: `/app/raceInfo`, body: JSON.stringify(parseInt(this.props.raceId))});
    };

    componentDidMount() {
        console.log("categorydetailstomp");
        document.addEventListener('keydown', this.onKeyPressed, false);
        Calls.getRaceById(this.props.raceId).then(response => {
            const race = response.data;
            this.state.zavod = race;
            this.state.categories = this.sortKategorie(this.state.zavod.kategorie);
        }).catch(err => {
            console.log(err);
        });

        this.client = new Client();

        this.client.configure({
            // brokerURL: "ws://34.159.157.62:8080/live",
            brokerURL: "ws://" + config.SERVER_URL + ":8080/live",

            onConnect: () => {
                console.log("ws connect");
                // console.log("sub cat plan " + `${this.state.kat}`);

                this.setState.isConnect = true;
                this.categoryTopic = this.client.subscribe(`/topic/live/0`, message => {
                    console.log("kategory topic 0");
                    this.processMessage(message);

                });

                // this.client.subscribe('/topic/test', message => {
                //     console.log(message.body);
                //     this.setState({
                //         serverTime: JSON.parse(message.body).id
                //     })
                // });
                this.raceInfoTopic = this.client.subscribe('/topic/raceInfo', message => {
                    // console.log("raceinfotopic")
                    this.setState({raceInfo: JSON.parse(message.body)})
                });
                this.firstCall();

                this.userLiveTopic = this.client.subscribe('/user/queue/live', message => {
                    // console.log(message.body);
                    this.setState({
                        foundBib: JSON.parse(message.body),
                        isRecivedBib: true
                    });
                });
                this.errorTopic = this.client.subscribe('/user/queue/live/error', message => {
                    // console.log(message.body);
                    this.setState({
                        errorBib: message.body,
                        isRecivedBib: false
                    });
                });
                // this.client.heartbeatOutgoing = 20000;
            },
        });
        this.client.activate();
    }

    componentWillUnmount() {
        this.setState({
            isConnect: false,
        });

        this.categoryTopic.unsubscribe();
        this.errorTopic.unsubscribe();
        this.userLiveTopic.unsubscribe();
        this.raceInfoTopic.unsubscribe();

        this.client.deactivate();
        // console.log("ws disconnect");
        document.removeEventListener('keydown', this.onKeyPressed, false);
    }

    processMessage(message) {
        let athleteArray = [];
        let outObjA = JSON.parse(message.body);

        for (let i = 0; i < outObjA.length; i++) {
            let jsonData = outObjA[i];
            athleteArray.push(jsonData);
        }
        this.setState({athletes: athleteArray});
    }

    // clickHandler = () => {
    //     // this.client.publish({destination: '/app/test', 'name': "test"});
    //     // this.client.publish({destination: '/app/live/find/5113', 'stc': "5113"});
    //     // this.client.publish({destination: '/app/hello', 'name': "Jan"});
    //     // console.log("try test")
    //     // console.log(new Date(1000 * 1506117600));
    // };
    findBib = () => {
        if (this.state.isConnect) {
            if ((this.state.bibToFind.value)) {
                this.client.publish({
                    destination: `/app/live/find/${this.state.bibToFind.value}`,
                    'stc': `${this.state.bibToFind.value}`
                });
                console.log('find bibs');
            } else
                console.error('Neni cislo');
        }
    };

    handleInputChange = (event) => {
        this.setState({checked: event.target.checked})
        // console.log(this.state.checked)
        if (!this.state.checked) {
            this.categoryTopic.unsubscribe();
            this.categoryTopic = this.client.subscribe('/topic/live', message => {
                // console.log("kategory topic live");
                this.processMessage(message);
                if (this.state.checked) {
                    let atlKat = this.state.athletes.find(({stc}) => stc === this.state.raceInfo.stc).idKategorie
                    this.setState({katNaz: this.state.categories.find(({kat}) => kat === atlKat).nazev})
                }
            });
            this.setState({
                preKat: this.state.kat,
                kat: 'all'
            })
        } else {
            this.categoryTopic.unsubscribe();
            if (this.state.kat === 'all')
                this.setState({kat: this.state.preKat})

            this.categoryTopic = this.client.subscribe(`/topic/live/${this.state.kat}`, message => {
                // console.log("kategory topic subscribe kat" + this.state.kat);
                this.processMessage(message);
            })
            // console.log("postKat" + this.state.kat);
        }
    };

    render() {

        let findBibBox = <div id={"findBibBox"}>
            <table id={"findBibTable"}>
                <thead>
                <tr>
                    <th>stč.</th>
                    <th>Jméno</th>
                    <th>Kód</th>
                    <th>Kategorie</th>
                </tr>
                </thead>
                <tbody>
                {this.state.foundBib.map((athlet, index) => {
                    return [
                        <tr className="findBibRow" key={index}
                            onClick={() => this.setKat(athlet.idKategorie)}>
                            <td>{athlet.bib}</td>
                            <td>{athlet.jmeno}</td>
                            <td>{Transcription.changeFlg(athlet.flg)}</td>
                            <td>{athlet.zkrkat}</td>
                        </tr>
                    ]
                })}
                </tbody>
            </table>
            <p>{this.state.isRecivedBib ? '' : (this.state.isRecivedBib === null) ? '' : `Atlet podle startovního čísla ${this.state.bibToFind.value} nalezen.`}</p>
        </div>;

        let findBibButton = <div id={"findBib"}>
            <input type="number" min={1} ref={(ref) => this.setState.bibToFind = ref}/>
            <Button onClick={() => this.findBib}>Hledej stč.</Button>

        </div>;
        //console.log(this.state.zavod.kategorie);
        // console.log(this.props.zavod.nazev);
        //   let categories = this.state.zavod.kategorie;
        // console.log(JSON.parse(this.state.zavod));
        return (
            <div id={"container-res"}>
                {/*<div>*/}
                {/*    <div id={"infoBox"}>*/}
                {/*        <h3>{this.state.raceInfo.nazev ? this.state.raceInfo.nazev : (this.state.zavod.nazev + " - " + this.state.zavod.misto)}</h3>*/}
                {/*        {Transcription.changeFlg(this.state.raceInfo.kodStc)} - {this.state.raceInfo.bib}*/}
                {/*        <div id={"formCategory"}><CategoryList kategorie={this.state.categories}*/}
                {/*                                               setKatInStomp={this.setKatInStomp}/></div>*/}
                {/*        <div id={"round"}>Kolo:*/}
                {/*            <strong>{this.state.raceInfo.koloZavodu ? this.state.raceInfo.koloZavodu : 0}</strong></div>*/}

                {/*        <label><input name="isAutokat"*/}
                {/*                      type="checkbox"*/}
                {/*                      label="AutoKat"*/}
                {/*                      value={this.state.checked}*/}
                {/*                      onChange={this.handleInputChange}/>AutoKat</label>*/}
                {/*        /!*{this.state.raceInfo.druhZavodu !== 6  ? findBibButton : ''}*!/*/}
                {/*    </div>*/}
                {/*    /!*{this.state.raceInfo.druhZavodu !== 6 ? findBibBox : ''}*!/*/}
                {/*</div>*/}
                {/*<div id={"container-view"}>*/}
                <table className={"result"}>
                    <tbody>
                    <tr>
                        <th colSpan="3">{this.state.raceInfo.nazev ? this.state.raceInfo.nazev : (this.state.zavod.nazev + " - " + this.state.zavod.misto)}
                            <br/>{Transcription.changeFlg(this.state.raceInfo.kodStc)} - {this.state.raceInfo.bib}
                        </th>
                        {/*{Transcription.changeFlg(this.state.raceInfo.kodStc)} - {this.state.raceInfo.bib}</th>*/}
                        <th colSpan="3" width={"33%"}>
                            {this.state.checked ? this.state.katNaz :
                                this.state.kat === 0 || this.state.kat === 'all' ? 'Všechny kategorie' :
                                    this.state.categories.find(({kat}) => kat === this.state.kat).nazev}

                            {this.state.checked ? this.state.katNaz :
                                <CategoryList kategorie={this.sortKategorie(this.state.categories)}
                                              setKatInStomp={this.setKatInStomp}/>}
                        </th>
                        <th>
                            <label><input name="isAutokat"
                                          type="checkbox"
                                          value={this.state.checked}
                                          checked={this.state.checked}
                                          onChange={this.handleInputChange}/>AutoKat</label>
                        </th>
                        <th colSpan="2">Kolo: {this.state.raceInfo.koloZavodu}</th>
                    </tr>
                    </tbody>
                </table>
                <AtletView athletes={this.state.athletes} raceInfo={this.state.raceInfo}/>
                {/*</div>*/}
                {/*<div id={"container-button"}>*/}
                {/*    <Time/>*/}
                {/*    <Button class={"btn-category0"} onClick={() => this.setKatInStomp(0)}>Všechny kategorie</Button>*/}
                {/*    {this.state.categories.map((kat, key) => (*/}
                {/*        <Button class={"btn-category"} key={key}*/}
                {/*                onClick={() => this.setKatInStomp(kat.kat)}>{kat.nazev}</Button>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default DashboardCategoryDetailStomp;

