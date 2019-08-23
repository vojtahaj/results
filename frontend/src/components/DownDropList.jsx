import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const styles = theme => ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4
    }
});

class NestedList extends React.Component {
    state = {
        open: true
    };

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };

    render() {
        const { classes } = this.props;

        return (
            <List component="nav" className={classes.root}>
                <ListItem button onClick={this.handleClick}>
                    <ListItemText inset primary="Inbox" />
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText inset primary="Starred" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText inset primary="Starred" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText inset primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        );
    }
}

NestedList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NestedList);
