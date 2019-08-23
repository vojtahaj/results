import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../../css/resultTable.css';

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

class SimpleResultTable extends React.Component {



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

    render() {
        const classes = styles();
        // var newData = this.props.athletes.concat([this.props.athletes]);
        // this.setState({data: newData})

        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Table className={classes.table} size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Poř.</TableCell>
                                <TableCell>stč.</TableCell>
                                <TableCell>Jméno</TableCell>
                                <TableCell>TJ</TableCell>
                                <TableCell>Klub</TableCell>
                                <TableCell>Kat.</TableCell>
                                <TableCell>Čas</TableCell>
                            </TableRow>

                        </TableHead>
                        <TableBody>

                            {this.props.athletes.map((athlet, key) => (
                                <TableRow key={athlet.id} className={
                                    this.props.raceInfo.stc === athlet.stc ? "resultRowActive" : (key % 2 === 0) ? "resultDark" : ''
                                }>
                                    <TableCell component="th" scope="row">{key + 1}.</TableCell>
                                    <TableCell>{athlet.bib}</TableCell>
                                    <TableCell>{athlet.jmeno}</TableCell>
                                    <TableCell>{athlet.tj}</TableCell>
                                    <TableCell>{athlet.klub}</TableCell>
                                    <TableCell>{athlet.zkrkat}</TableCell>
                                    <TableCell align="right">{this.transposeTime(athlet.cas)}</TableCell>

                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}

export default SimpleResultTable;