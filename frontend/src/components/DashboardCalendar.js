import React from 'react';
import Calls from "../server/Calls";
import '../css/timeh.css';
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import Paper from "@material-ui/core/es/Paper/Paper";
import Table from "@material-ui/core/es/Table/Table";
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
});

class DashboardCalendar extends React.Component {
    state = {
        races: []
    };

    componentDidMount() {
        Calls.getRace()
            .then(response => {
                const races = response.data;
                this.setState({races: races});
            })
            .catch(err => {
                console.log(err);
            });
    }
    static getDate(date){
        let d = new Date(date * 1000);
        return d.getDate() + ". " + (d.getMonth() + 1) + ". " + d.getFullYear();
    }
    render() {
        const classes = styles();
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Table className={classes.table} size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Datum</TableCell>
                                <TableCell>Místo</TableCell>
                                <TableCell>Popis</TableCell>
                                <TableCell>Druh závodu</TableCell>
                            </TableRow>

                        </TableHead>
                        <TableBody>

                            {this.state.races.map((race, key) => (
                                <TableRow key={race.id}>
                                    <TableCell component="th" scope="row">{DashboardCalendar.getDate(race.datum)} </TableCell>
                                    <TableCell>{race.misto}</TableCell>
                                    <TableCell>{race.popis}</TableCell>
                                    <TableCell>{race.druhZavodu}</TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}

export default DashboardCalendar;