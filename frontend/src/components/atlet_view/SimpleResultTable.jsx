import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Transcription from './Transcription';
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
                                <TableCell align="right">stč.</TableCell>
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
                                <TableCell component="th" scope="row">{athlet.poradi}.</TableCell>
                                <TableCell>{athlet.bib}</TableCell>
                                <TableCell>{athlet.jmeno}</TableCell>
                                <TableCell>{athlet.tj}</TableCell>
                                <TableCell>{athlet.klub}</TableCell>
                                <TableCell>{athlet.zkrkat}</TableCell>
                                <TableCell align="right">{Transcription.transposeTime(athlet.cas,this.props.raceInfo.pocDes)}</TableCell>

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