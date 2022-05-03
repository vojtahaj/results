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
        //paper: {
            marginTop: 1,
           // width: '90%',
            // overflowX: 'auto',
           // marginBottom: 1,
       // },
        table: {
            width: '100%',
        },
    });
};

class WinklTable extends React.Component {
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
                                        style={columnSmall}>{athlet.poradi}.<br/>{Transcription.transposeTime(athlet.cas1, this.props.raceInfo.pocDes)}</TableCell>
                                    <TableCell
                                        style={columnSmall}><strong>{athlet.bib}</strong><br/>{Transcription.transposeSpd(athlet.speed1)}
                                    </TableCell>
                                    <TableCell style={columnName}>{athlet.jmeno}<br/>{Transcription.transposeTime(athlet.cas2, this.props.raceInfo.pocDes)}
                                    </TableCell>
                                    <TableCell align="right"
                                        style={columnSmall}><strong>{Transcription.transposeTime(athlet.cas, this.props.raceInfo.pocDes)}</strong><br/>{Transcription.transposeSpd(athlet.speed2)}
                                    </TableCell>
                                    <TableCell style={columnName}>{athlet.klub}<br/>{Transcription.transposeTime(athlet.cas3, this.props.raceInfo.pocDes)}
                                    </TableCell>
                                    <TableCell style={columnSmall} align="right"><br/>{Transcription.transposeSpd(athlet.speed3)}
                                    </TableCell>
                                    <TableCell style={columnSmall} align="right"><br/>{Transcription.transposeTime(athlet.cas4, this.props.raceInfo.pocDes)}</TableCell>
                                    <TableCell style={columnSmall} align="right"><br/>{Transcription.transposeSpd(athlet.speed4)}
                                    </TableCell>
                                    <TableCell style={columnSmall} align="right">{athlet.zkrkat}<br/>{Transcription.transposeTime(athlet.cas5, this.props.raceInfo.pocDes)}
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