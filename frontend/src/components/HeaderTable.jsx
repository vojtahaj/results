import React, {Component} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


export default class HeaderTable extends React.Component {

    findCols = (id, cols) => {
        console.log("id");
        console.log(id);
        return cols.map(c => {
            console.log("test 1" + c);
            console.log(c);
            if (c.id === id) {
                console.log("test 2" + c);
                console.log(c.data);
                return c.data;
            }
        })
    };

    test = (text) => {
        return <TableCell>{text}</TableCell>
};

    render() {
        const data = this.findCols(this.props.c, this.props.cols);
        console.log("test");
        console.log(data);
        console.log("lentgh");
        console.log(data.length);

        data.forEach(d => {
            console.log("test dd");
           console.log(d);
        });

        const test = data.map((d, index) => {
            console.log("d");
            console.log(d[index]);
            return this.test(d[index]);
        });

        return (<TableHead>
                <TableRow>
                    {
                        test
                        // this.props.cols.map(col => {
                        //     return <TableCell>{col}</TableCell>
                        // })

                        // data.map((col, index) => {
                        //     return <th key={index}>{col}</th>
                        // })

                    //     for (let i=0; i<data.length;i++){
                    //     return <th>{data[i]}</th>;
                    // }

                    }


                    {/*<TableCell>Dessert (100g serving)</TableCell>*/}
                    {/*<TableCell align="right">Calories</TableCell>*/}
                    {/*<TableCell align="right">Fat (g)</TableCell>*/}

                </TableRow>
            </TableHead>
        );
    }
}