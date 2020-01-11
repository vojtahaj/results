import React from 'react';
import Calls from "../server/Calls";
import '../css/timeh.css';
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import Paper from "@material-ui/core/es/Paper/Paper";
import Table from "@material-ui/core/es/Table/Table";
import DashboardCategoryDetailStomp from "./DashboardCategoryDetailStomp";

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

    constructor() {
        super();
        this.refResponsiveDrawer = React.createRef();
    }


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

    static getDate(date) {
        let d = new Date(date * 1000);
        return d.getDate() + ". " + (d.getMonth() + 1) + ". " + d.getFullYear();
    }

    render() {
        const classes = styles();
        this.state.races.sort((a,b) => {
            return a.datum - b.datum; }
        );
        console.log(this.state.races);

        return (
            <div className={classes.root}>
                <Paper>
                    <Table>
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
                                /*<TableRow key={race.id} className={race.stav === 9 ? "activeRace" : ''}*/
                            /*onClick={race.stav === 9 ? () => this.linkToStomp(race.kategorie) : ''}*/
                                /*ref={this.refResponsiveDrawer}>*/
                                <TableRow key={race.id}>
                                    <TableCell>{DashboardCalendar.getDate(race.datum)}</TableCell>
                                    <TableCell>{race.misto}</TableCell>
                                    <TableCell>{race.nazev}</TableCell>
                                    <TableCell>{race.discipl}</TableCell>
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