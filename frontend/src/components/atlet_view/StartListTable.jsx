import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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
        minWidth: 650,
    },
});

class StartListTable extends React.Component {

    render() {

        const classes = styles();

        return (
            <div className={classes.root}>
                <Paper>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>&nbsp;</TableCell>
                                <TableCell align="left">stč.</TableCell>
                                <TableCell align="left">Jméno</TableCell>
                                <TableCell align="left">Kat</TableCell>
                                <TableCell align="left">Klub</TableCell>

                            </TableRow>

                        </TableHead>
                        <TableBody>

                            {this.props.athletes.map(athlet => (
                                <TableRow key={athlet.id}>
                                    <TableCell component="th" scope="row">{Transcription.changeFlg(athlet.flg)}</TableCell>
                                    {/*<TableCell component="th" scope="row">{athlet.flg}</TableCell>*/}
                                    <TableCell align="left">{athlet.bib}</TableCell>
                                    <TableCell align="left">{athlet.jmeno}</TableCell>
                                    <TableCell align="left">{athlet.zkrkat}</TableCell>
                                    <TableCell align="left">{athlet.klub}</TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}

export default StartListTable;