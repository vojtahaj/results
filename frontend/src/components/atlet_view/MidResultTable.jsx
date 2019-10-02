import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../../css/resultTable.css';
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import Select from "@material-ui/core/es/Select/Select";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";

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

class MidResultTable extends React.Component {

    constructor() {
        super();
        this.state = {
            pocetUseku: 2,
            pocetStartu: 1,
            vybranyPocetUseku: 0
        };
    }

    transposeTime = (time) => {
        let pD = this.props.raceInfo.pocDes;

        let milliseconds = parseInt((time % 1000))
            , seconds = parseInt((time / 1000) % 60)
            , minutes = parseInt((time / (1000 * 60)) % 60)
            , hours = parseInt((time / (1000 * 60 * 60)) % 24);

        milliseconds = (pD === 1) ? milliseconds / 100 :
            (pD === 2) ? milliseconds / 10 : milliseconds;

        // hours = (hours < 10) ? "0" + hours : hours;
        hours = (hours === 0) ? "" : hours + ":";
        minutes = (minutes === 0) ? "" : (minutes < 10) ? "0" + minutes + ":" : minutes + ":";
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        milliseconds = (milliseconds === 0 && pD === 2) ? "00" :
            (milliseconds === 0 && pD === 3) ? "000" : milliseconds;

        return hours + minutes + seconds + "." + parseInt(milliseconds);
    };

    handleChange = async event => {
        await this.setState({
            vybranyPocetUseku: event.target.value
        })
        // console.log("vybrany usek:");
        // console.log(event.target.value);
    };

    render() {
        const classes = styles();
        // var newData = this.props.athletes.concat([this.props.athletes]);
        // this.setState({data: newData})
        let atleti;
        switch (this.state.vybranyPocetUseku) {
            case 1:
                atleti = this.props.athletes.sort((a, b) => {
                    return a.cas1 - b.cas1;
                });
                break;
            case 2:
                atleti = this.props.athletes.sort((a, b) => {
                    return a.cas2 - b.cas2;
                });
                break;
            case 3:
                atleti = this.props.athletes.sort((a, b) => {
                    return a.cas3 - b.cas3;
                });
                break;
            case 4:
                atleti = this.props.athletes.sort((a, b) => {
                    return a.cas4 - b.cas4;
                });
                break;
            default: {
                atleti = this.props.athletes;
                console.log("no change, show result in finish");
            }
        }

        return (
            <div>

                <Paper >
                    <Table className={classes.table} size="small">
                        <TableHead>

                            <TableRow>
                                <TableCell>Poř.
                                    <form autoComplete={'off'}>
                                        <FormControl>
                                            <Select
                                                value={this.state.vybranyPocetUseku}
                                                onChange={this.handleChange}
                                            >
                                                <MenuItem value={1}>Mzč: {1}</MenuItem>
                                                <MenuItem value={2}>Mzč: {2}</MenuItem>
                                                <MenuItem value={3}>Mzč: {3}</MenuItem>
                                                <MenuItem value={0}>Cíl</MenuItem>

                                            </Select>
                                        </FormControl>
                                    </form>

                                </TableCell>
                                <TableCell>stč.</TableCell>
                                <TableCell>Jméno</TableCell>
                                <TableCell>TJ</TableCell>
                                <TableCell>Klub</TableCell>
                                <TableCell>Kat.</TableCell>
                                <TableCell>Čas</TableCell>
                            </TableRow>

                        </TableHead>
                        <TableBody>

                            {
                                atleti.map((athlet, key) => (
                                    <TableRow key={athlet.id} className={
                                        this.props.raceInfo.stc === athlet.stc ? "resultRowActive" : (key % 2 === 0) ? "resultDark" : ''
                                    }>
                                        <TableCell component="th" scope="row">{key + 1}.</TableCell>
                                        <TableCell>{athlet.bib}</TableCell>
                                        <TableCell>{athlet.jmeno}</TableCell>
                                        <TableCell>{athlet.tj}</TableCell>
                                        <TableCell>{athlet.klub}</TableCell>
                                        <TableCell>{athlet.zkrkat}</TableCell>
                                        <TableCell align="right">{this.state.vybranyPocetUseku === 0 ? this.transposeTime(athlet.cas) : this.state.vybranyPocetUseku === 1 ? this.transposeTime(athlet.cas1) :
                                            this.state.vybranyPocetUseku === 2 ? this.transposeTime(athlet.cas2) : this.transposeTime(athlet.cas3)}</TableCell>

                                    </TableRow>
                                ))}

                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}

export default MidResultTable;