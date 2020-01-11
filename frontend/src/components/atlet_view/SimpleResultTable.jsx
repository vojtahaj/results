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

    resultList () {
        let preRank = 0;
        let preTime = 0;
        let resultArr = [];

        //2700550
        // pole.push(
        //     <TableRow key={-1} className={
        //         this.props.raceInfo.stc === 23 ? "resultRowActive" : (2 % 2 === 0) ? "resultDark" : ''
        //     }>
        //         <TableCell component="th" scope="row">{-1}.</TableCell>
        //         <TableCell>123</TableCell>
        //         <TableCell>če</TableCell>
        //         <TableCell></TableCell>
        //         <TableCell>korn</TableCell>
        //         <TableCell>MB2</TableCell>
        //         <TableCell align="right">{this.transposeTime(2311230)}</TableCell>
        //
        //     </TableRow>
        // );



        for (let i = 0; i < this.props.athletes.length; i++) {
            const athlet = this.props.athletes[i];
            // console.log(athlet.cas);
            // athlet.rank = 0;

            if (athlet.cas === preTime) {
                athlet.poradi = "=" + preRank;
                console.log("atl,por" + athlet.poradi);
            }
            else {
                preRank = i + 1;
                preTime = athlet.cas;
                athlet.poradi = i + 1;
                console.log("atl,por2".poradi);
            }

            resultArr.push(
                <TableRow key={athlet.id} className={
                    this.props.raceInfo.stc === athlet.stc ? "resultRowActive" : (i % 2 === 0) ? "resultDark" : ''
                }>
                    <TableCell component="th" scope="row">{athlet.poradi}.</TableCell>
                    <TableCell>{athlet.bib}</TableCell>
                    <TableCell>{athlet.jmeno}</TableCell>
                    <TableCell>{athlet.tj}</TableCell>
                    <TableCell>{athlet.klub}</TableCell>
                    <TableCell>{athlet.zkrkat}</TableCell>
                    <TableCell align="right">{this.transposeTime(athlet.cas)}</TableCell>

                </TableRow>
            );
        }

        return resultArr;

        // this.props.athletes.map((athlet, key) => (
        //
        //
        //     <TableRow key={athlet.id} className={
        //         this.props.raceInfo.stc === athlet.stc ? "resultRowActive" : (key % 2 === 0) ? "resultDark" : ''
        //     }>
        //         <TableCell component="th" scope="row">{indexRank}.</TableCell>
        //         <TableCell>{athlet.bib}</TableCell>
        //         <TableCell>{athlet.jmeno}</TableCell>
        //         <TableCell>{athlet.tj}</TableCell>
        //         <TableCell>{athlet.klub}</TableCell>
        //         <TableCell>{athlet.zkrkat}</TableCell>
        //         <TableCell align="right">{this.transposeTime(athlet.cas)}</TableCell>
        //
        //     </TableRow>
        //     ))
    }

    render() {
        const classes = styles();
        // var newData = this.props.athletes.concat([this.props.athletes]);
        // this.setState({data: newData})

        let indexRank = 1;

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



                            {this.resultList()}

                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}

export default SimpleResultTable;