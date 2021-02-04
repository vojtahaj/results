import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/es/Button/Button";
import '../../css/resultTable.css';
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import Select from "@material-ui/core/es/Select/Select";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import Transcription from "./Transcription";

const styles = theme => ({
    root: {
        width: '49%',
    },
    paper: {
        // marginTop: theme.spacing(3),
        width: '49%',
        overflowX: 'auto',
        // marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 300,
    },
    activeRow: {
        color: 'white',
        backgroundColor: 'darkGrey'
    }
});

class RelayResultTable extends React.Component {

    constructor() {
        super();
        this.state = {
            pocetUseku: 3,
            pocetStartu: 1,
            vybranyPocetUseku: 1 //na indexu je usek, ktery bude jako prvni k videni
        };
    }

    handleChange = async event => {
        await this.setState({
            vybranyPocetUseku: event.target.value
        })
        // console.log("vybrany usek:");
        // console.log(event.target.value);
    };

    dataFilter = (vybranyUsek) => {
        let a = [];
        for (let i = 0; i < this.props.athletes.length; i++) {
            // console.log(this.props.athletes[i].stc);
            if (this.props.athletes[i].stc % 10 === vybranyUsek && this.props.athletes[i].flg === 9) {
                // console.log(i);
                a.push(this.props.athletes[i]);
                if (vybranyUsek > 1)
                    a[a.length - 1].cas10 = a[a.length - 1].cas1 - this.props.athletes[i - vybranyUsek + 1].cas1;
                else
                    a[a.length - 1].cas10 = a[a.length - 1].cas1;
                a[a.length - 1].mcas10 = this.props.athletes[i - vybranyUsek].jmeno;
                // console.log(a[a.length - 1].cas10); //cisty cas
                // console.log(a[a.length - 1].mcas10); //nazev stafety
                //a.push(this.props.athletes[i]);
            }
        }

        a.sort((a, b) => {
            //pro cil
            if (vybranyUsek === this.state.pocetUseku)
                return a.cas1 - b.cas1;
            else
                return a.cas10 - b.cas10;
        });
        return a;
    };

    render() {
        const classes = styles();
        // var newData = this.props.athletes.concat([this.props.athletes]);
        // this.setState({data: newData})
        let atleti = [];

        //console.log(relayName);
        switch (this.state.vybranyPocetUseku) {
            case 1:
                atleti = this.dataFilter(1);
                break;
            case 2:
                atleti = this.dataFilter(2);
                break;
            case 3:
                atleti = this.dataFilter(3);
                break;
            case 4:
                atleti = this.dataFilter(4);
                break;
            default: { //pro cil
                atleti = this.dataFilter(this.state.pocetUseku);
                break;
                // atleti = this.props.athletes;
                // console.log("no change, show result in finish");
            }
        }

        return (
            <div>
                <form autoComplete={'off'}>
                    <FormControl>
                        <Select
                            value={this.state.vybranyPocetUseku}
                            onChange={this.handleChange}
                        >
                            <MenuItem value={1}>Předávka: {1}</MenuItem>
                            <MenuItem value={2}>Předávka: {2}</MenuItem>
                            {/*<MenuItem value={3}>Předávka: {3}</MenuItem>*/}
                            {/*<MenuItem value={4}>Předávka: {4}</MenuItem>*/}
                            <MenuItem value={0}>Cíl</MenuItem>

                        </Select>
                    </FormControl>
                </form>
                <div>
                    <table width="50%" border={0}>
                        <tr>
                            <th rowspan="2">poř.</th>
                            <th>st. č.</th>
                            <th>Název štafety</th>
                            {/*<th rowspan ="2">oddíl</th>*/}
                            <th rowspan="2">čas úsek</th>
                            <th rowspan="2">čas</th>
                        </tr>
                        <tr>
                            <th>úsek</th>
                            <th>Jméno</th>
                        </tr>

                        {
                            atleti.map((athlet, key) => (
                                <tbody key={athlet.id} className={
                                    this.props.raceInfo.stc === athlet.stc ? "resultRowActive" : key % 2 === 1 ? "resultDark" : ""
                                }>
                                <tr>
                                    <td rowspan="2">{key + 1}.</td>
                                    <td align="right">{Math.floor(athlet.bib / 10)}</td>
                                    <td>{athlet.mcas10}</td>
                                    {/*<td rowspan="2">{athlet.tj}</td>*/}
                                    <td rowspan="2"
                                        align="right">{Transcription.transposeTime(athlet.cas10, this.props.raceInfo.pocDes)}</td>
                                    <td rowspan="2"
                                        align="right">{Transcription.transposeTime(athlet.cas, this.props.raceInfo.pocDes)}</td>
                                </tr>
                                <tr>
                                    <td align="right">/{athlet.bib % 10}.</td>
                                    <td>{athlet.jmeno}</td>
                                </tr>
                                </tbody>
                            ))}

                    </table>
                </div>
            </div>
        )
    }
}

export default RelayResultTable;