import React from 'react';
import Calls from "../../server/Calls";
import '../../css/timeh.css';
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import Paper from "@material-ui/core/es/Paper/Paper";
import Table from "@material-ui/core/es/Table/Table";
import {Link} from "react-router-dom";
import RaceEditForm from "../admin/RaceEditForm";


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
        let day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
        let month = d.getMonth() < 10 ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1);
        let year = d.getFullYear();
        return day + ". " + month + ". " + year;
    }

    render() {
        const classes = styles();

        const racesActual = this.state.races.filter(race => {
            return race.datum + 86400 > (Date.now() / 1000);
        });
        racesActual.sort((a, b) => {
                return a.datum - b.datum;
            }
        );
        // console.log(this.state.races);

        return (
            <div className={classes.root}>

                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Datum</TableCell>
                                <TableCell>&nbsp;</TableCell>
                                <TableCell>Místo</TableCell>
                                <TableCell>Popis</TableCell>
                                <TableCell>Druh závodu</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {racesActual.map((race, key) => (
                                <TableRow key={race.id}>
                                    <TableCell>{DashboardCalendar.getDate(race.datum)}</TableCell>
                                    <TableCell>{race.stav === 9 ?
                                        <Link to={`/live/${race.id}`}>Live</Link> : ""}</TableCell>
                                    <TableCell>{race.misto}</TableCell>
                                    <TableCell>{race.nazev}</TableCell>
                                    <TableCell>{race.discipl}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                <RaceEditForm/>
            </div>

        )
    }
}

export default DashboardCalendar;