import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import withStyles from "@material-ui/core/es/styles/withStyles";
import FormHelperText from "@material-ui/core/es/FormHelperText/FormHelperText";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        // margin: theme.spacing(1),
        minWidth: 8000,
    },
    selectEmpty: {
        // marginTop: theme.spacing(2),
    },
});

class CategoryList extends React.Component {
    constructor() {
        super();
        this.state = {
            categoryValue: 0
        };
    }

    handleChange = async event => {
        await this.setState({
            categoryValue: event.target.value
        })
        console.log("vybrana kategorie:");
        console.log(event.target.value);

        await this.props.setKatInStomp(event.target.value);
    };

    render() {
        const classes = styles();

        return (
            <form className={classes.root} autocomplete={'off'}>
                <FormControl className={classes.formControl}>
                    <InputLabel>Kategorie</InputLabel>
                    <Select
                        value={this.state.categoryValue}
                        onChange={this.handleChange}
                    >
                        <MenuItem value={0}>Všechny kategorie</MenuItem>
                        {this.props.kategorie.map((kategorie, index) => {
                            return <MenuItem key={index} value={kategorie.kat}>{kategorie.nazev}</MenuItem>
                        })}

                    </Select>
                </FormControl>
            </form>

        )
    }
}

export default withStyles(styles, {withTheme: true})(CategoryList);