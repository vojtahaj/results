import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SimpleTable from './SimpleTable'
import {withStyles} from '@material-ui/core/styles';
import axios from 'axios'

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    hide: {
        display: 'none',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    drawerRaces: {
        width: drawerWidth * 2,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

export class ResponsiveDrawer extends React.Component {
    state = {
        mobileOpen: false,
        open: false,
        races: []
    };

    handleDrawerToggle = () => {
        this.setState(state => ({mobileOpen: !state.mobileOpen}));
    };

    handleSubMenu = () => {
        this.setState({open: !this.state.open});
        console.log("submenu přepnout: " + this.state.open);
    }

    // Načtení veškerých zavodu v DB:
    componentDidMount() {
        console.log("componentDidMount");
        axios.get('http://localhost:8080/zavody/active')
            .then(response => {
                const races = response.data;
                this.setState({races});
            })
    }

    render() {
        const {classes, theme} = this.props;
        const {open} = this.state;

        const drawer = (
            <div>
                <div className={classes.toolbar}/>
                <Divider/>
                <List>
                    <ListItem button key='Závody'>

                        <ListItemText primary='Závody'/>
                    </ListItem>
                    <ListItem button key='Live' onClick={this.handleSubMenu}>

                        <ListItemText primary='Live'/>
                    </ListItem>
                    <ListItem button key='Kalendář'>

                        <ListItemText primary='Kalendář'/>
                    </ListItem>
                    <ListItem button key='O nás'>

                        <ListItemText primary='O nás'/>
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            {/*<MenuIcon />*/}
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Responsive drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                        <Drawer
                            className={classes.drawer}
                            variant="temporary"
                            anchor="top"
                            open= {open}
                            classes={{
                                paper: classes.drawerRaces,
                            }}
                        >
                            <List>
                                <ListItem>
                                    <ListItemText primary="Live závody:"/>
                                </ListItem>
                                { this.state.races.map((race, index) => (
                                    <ListItem button key={race.nazev}>
                                        <ListItemText primary={race.nazev+ "; " +race.misto}/>
                                    </ListItem>
                                ))}
                                <ListItem button key="Zpět" onClick={this.handleSubMenu}>
                                    <ListItemText primary="Zpět"/>
                                </ListItem>
                            </List>
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <SimpleTable/>
                    <Typography paragraph>
                        <ul>
                            {this.state.races.map(race => <li>{race.nazev}</li>)}
                        </ul>
                    </Typography>
                </main>
            </div>
        );
    }
}

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(ResponsiveDrawer);
