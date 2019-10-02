import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../../css/resultTable.css';
import Transcription from "./Transcription";

const styles = () => {
    return ({
        root: {
            width: '90%',
        },
        paper: {
            marginTop: 1,
            width: '90%',
            // overflowX: 'auto',
            marginBottom: 1,
        },
        table: {
            minWidth: 700,
        },
    });
};

class WinklTable extends React.Component {

    transposeTime = (time) => {
        if (time === 0) return "";
        let pD = this.props.raceInfo.pocDes;

        var milliseconds = parseInt((time % 1000))
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

    transposeSpd(spd) {
        if (spd === 0)
            return "";
        else return spd / 1000 + " km/h";
    }

    render() {
        const classes = styles();
        const columnSmall = {
            maxWidth: "10%"
        };
        const columnName = {
            maxWidth: "30%"
        };

        return (
            <div className={classes.root}>
                <Paper>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell><strong>Poř.<br/>čas 1</strong></TableCell>
                                <TableCell><strong>stč.<br/>spd 1</strong></TableCell>
                                <TableCell><strong>Jméno<br/>čas 2</strong></TableCell>
                                <TableCell><strong>čas<br/>spd 2</strong></TableCell>
                                <TableCell><strong>Stroj<br/>čas 3</strong></TableCell>
                                <TableCell><strong> <br/>spd 3</strong></TableCell>
                                <TableCell><strong> <br/>čas 4</strong></TableCell>
                                <TableCell><strong> <br/>spd 4</strong></TableCell>
                                <TableCell><strong>Kat.<br/>čas 5</strong></TableCell>
                                <TableCell><strong>objem<br/>spd 5</strong></TableCell>
                            </TableRow>

                        </TableHead>
                        <TableBody>

                            {this.props.athletes.map((athlet, key) => (

                                <TableRow key={athlet.id} className={
                                    this.props.raceInfo.stc === athlet.stc ? "resultRowActive" : (key % 2 === 0) ? "resultDark" : ''}>
                                    <TableCell
                                        style={columnSmall}>{key + 1}.<br/>{this.transposeTime(athlet.cas1)}</TableCell>
                                    <TableCell
                                        style={columnSmall}><strong>{athlet.bib}</strong><br/>{Transcription.transposeSpd(athlet.speed1)}
                                    </TableCell>
                                    <TableCell style={columnName}>{athlet.jmeno}<br/>{this.transposeTime(athlet.cas2)}
                                    </TableCell>
                                    <TableCell
                                        style={columnSmall}><strong>{this.transposeTime(athlet.cas)}</strong><br/>{Transcription.transposeSpd(athlet.speed2)}
                                    </TableCell>
                                    <TableCell style={columnName}>{athlet.klub}<br/>{this.transposeTime(athlet.cas3)}
                                    </TableCell>
                                    <TableCell style={columnSmall}><br/>{Transcription.transposeSpd(athlet.speed3)}
                                    </TableCell>
                                    <TableCell style={columnSmall}><br/>{this.transposeTime(athlet.cas4)}</TableCell>
                                    <TableCell style={columnSmall}><br/>{Transcription.transposeSpd(athlet.speed4)}
                                    </TableCell>
                                    <TableCell style={columnSmall}>{athlet.zkrkat}<br/>{this.transposeTime(athlet.cas5)}
                                    </TableCell>
                                    <TableCell style={columnSmall}
                                               align="right">{athlet.tj}<br/>{Transcription.transposeSpd(athlet.speed5)}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }

}

export default WinklTable;