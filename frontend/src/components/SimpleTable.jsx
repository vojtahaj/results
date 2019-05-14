import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import HeaderTable from './HeaderTable';
import StartHeaderTable from "./StartHeaderTable";

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

let id = 0;

function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return {id, name, calories, fat, carbs, protein};
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const headerData = [
    {
        name: 'stan',
        bib: '4',
        cat: 'k9',
    },
    {
        name: 'jan',
        bib: '1',
        cat: 'm3',
    }, {
        name: 'jana',
        bib: '3',
        cat: 'm4',
    }
];
const cols = [
    {
        id: 1,
        data : [
            "col1",
            "col2",
            "col3"]
    },
];

function SimpleTable(props) {
    const {classes} = props;
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <HeaderTable cols={cols} c={1} />
                {/*<StartHeaderTable cols={cols} column={1}/>*/}
                {/*<TableHead>*/}
                {/*<TableRow>*/}
                {/*<TableCell>Dessert (100g serving)</TableCell>*/}
                {/*<TableCell align="right">Calories</TableCell>*/}
                {/*<TableCell align="right">Fat (g)</TableCell>*/}

                {/*</TableRow>*/}
                {/*</TableHead>*/}
                <TableBody>
                    {headerData.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.bib}</TableCell>
                            <TableCell align="right">{row.cat}</TableCell>
                            {/*<TableCell align="right">{row.carbs}</TableCell>*/}
                            {/*<TableCell align="right">{row.protein}</TableCell>*/}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);