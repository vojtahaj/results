import React, {Component} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


export default class StartHeaderTable extends React.Component {
    render() {
        return (<TableHead>
            <TableRow>
                {
                    // this.props.cols.map(col => {
                    //     return <TableCell>{col}</TableCell>
                    // })

                    this.props.cols.map((col, id) => {
                        return col.data.map(c => {
                            return <TableCell key={id}>{c}</TableCell>
                        })
                        //return <TableCell key={id}>{col.data}</TableCell>
                    })
                }


                {/*<TableCell>Dessert (100g serving)</TableCell>*/}
                {/*<TableCell align="right">Calories</TableCell>*/}
                {/*<TableCell align="right">Fat (g)</TableCell>*/}

            </TableRow>
        </TableHead>);
    }
}