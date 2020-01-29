import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../../css/resultTable.css';
import Transcription from "./Transcription";

const styles = theme => ({
    root: {
        width: '100%',
    },
    paper: {
        // marginTop: theme.spacing(3),
        width: '100%',
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

class ADResultTable extends React.Component {

    // transposeTime = (time) => {
    //     let pD = this.props.raceInfo.pocDes;
    //
    //     let milliseconds = parseInt((time % 1000))
    //         , seconds = parseInt((time / 1000) % 60)
    //         , minutes = parseInt((time / (1000 * 60)) % 60)
    //         , hours = parseInt((time / (1000 * 60 * 60)) % 24);
    //
    //     milliseconds = (pD === 1) ? milliseconds / 100 :
    //         (pD === 2) ? milliseconds / 10 : milliseconds;
    //
    //     // hours = (hours < 10) ? "0" + hours : hours;
    //     hours = (hours === 0) ? "" : hours + ":";
    //     minutes = (minutes === 0) ? "" : (minutes < 10) ? "0" + minutes + ":" : minutes + ":";
    //     seconds = (seconds < 10) ? "0" + seconds : seconds;
    //     milliseconds = (milliseconds === 0 && pD === 2) ? "00" :
    //         (milliseconds === 0 && pD === 3) ? "000" : milliseconds;
    //
    //     return hours + minutes + seconds + "." + parseInt(milliseconds);
    // };

    // // pro rozdeleni poli
    // splitArray(athletes) {
    //     let resultRound2 = athletes.filter(athlete => {
    //         return athlete.cas2 !== 0;
    //     });
    //     resultRound2.sort((a, b) => {
    //         return a.cas > b.cas;
    //     });
    //
    //     let resultRound2Lap1 = athletes.filter(athlete => {
    //         return athlete.cas2 === 0;
    //     });
    //     resultRound2Lap1.sort((a, b) => {
    //         return a.cas > b.cas;
    //     });
    //     return this.resultRound2.concat(this.resultRound2Lap1);
    // }

    doResult(result, fromRank) {
        let preRank = fromRank;
        let preTime = 0;
        // let resultArr = [];

        for (let i = 0; i < result.length; i++) {
            const athlet = result[i];
            // console.log(athlet.cas);
            // athlet.rank = 0;

            if (athlet.cas === preTime) {
                athlet.poradi = "=" + preRank;
                // console.log("atl,por" + athlet.poradi);
            }
            else {
                preRank = i + 1 + fromRank;
                preTime = athlet.cas;
                athlet.poradi = preRank;
                // console.log("atl,por2".poradi);
            }

        }
        return result;
    }

    render() {
        const classes = styles();
        let atleti =[];
        if(this.props.raceInfo.kolo === 2){
        let r1k = [];
        let r2k = [];
        for (let i = 0; i < this.props.athletes.length; i++) {
            if (this.props.athletes[i].cas2 === 0) {
                r1k.push(this.props.athletes[i]);
            }
            else r2k.push(this.props.athletes[i]);
        }

        atleti = this.doResult(r2k, 0).concat(this.doResult(r1k, r2k.length));
        console.log("r2k " + r2k.length);
        console.log("r1k " + r1k.length);
        }
        return (
            <>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Table className={classes.table} size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Poř.</TableCell>
                                <TableCell>stč.</TableCell>
                                <TableCell>Jméno</TableCell>
                                <TableCell>1. kolo</TableCell>
                                <TableCell>2. kolo</TableCell>
                                <TableCell>Čas</TableCell>
                            </TableRow>

                        </TableHead>
                        <TableBody>
                            {
                                // console.log("adresult 1.kolo")

                                atleti.map((athlet, key) => (
                                    <TableRow key={athlet.id} className={
                                        this.props.raceInfo.stc === athlet.stc ? "resultRowActive" : (key % 2 === 0) ? "resultDark" : ''
                                    }>
                                        <TableCell scope="row">{athlet.poradi}.</TableCell>
                                        <TableCell align="right">{athlet.bib}</TableCell>
                                        <TableCell>{athlet.jmeno} <br/>
                                            {athlet.klub}
                                        </TableCell>
                                        <TableCell>{Transcription.transposeTime(athlet.cas1, this.props.raceInfo.pocDes)}</TableCell>
                                        <TableCell>{athlet.cas2 === 0 ? "" : Transcription.transposeTime(athlet.cas2, this.props.raceInfo.pocDes)}</TableCell>
                                        <TableCell
                                            align="right">{Transcription.transposeTime(athlet.cas, this.props.raceInfo.pocDes)}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </Paper>
            </div>
            </>
        )
    }
}

export default ADResultTable;