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
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

import {
    Switch,
    Route,
    Link
} from "react-router-dom";


import Calls from "../server/Calls";
import DashboardDefault from "./dashboards/DashboardDefault";
import DashboardCalendar from "./dashboards/DashboardCalendar";
import DashboardAbout from "./dashboards/DashboardAbout";
import DashboardLive from "./dashboards/DashboardLive";

const drawerWidth = 130;

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

    constructor(props) {
        super(props);

        this.state = {
            mobileOpen: false,
            open: false,
            races: [],
            dashboard: 0,
            kategorie: [],
            zavod: {}
        };

        // this.refCategoryDetailsStomp = React.createRef();

    }

    handleDrawerToggle = () => {
        this.setState(state => ({mobileOpen: !state.mobileOpen}));
    };

    handleSubMenu = () => {
        this.setState({open: !this.state.open});
        console.log("submenu přepnout: " + this.state.open);
    };
    crtRace = () => {
        const race = {
            misto: 'misto',
            discipl: "is",
            nazev: "zavod"
        };
        Calls.createRace(race)
            .then((response) => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            });
    };

    // Načtení veškerých zavodu aktivnich v DB:
    componentDidMount() {
        console.log("componentDidMount");
        Calls.getRaceActive()
            .then(response => {
                const racesActives = response.data;
                this.setState({races: racesActives});
            })
            .catch(err => {
                console.log(err);
            });
    }

    showCategoryList = (kategorie, z) => {
        this.setState({open: !this.state.open});
        this.setState({kategorie: kategorie});
        this.setState({zavod: z});
        // console.log("click"+ z.misto);
        this.handleDashBoard(3);

    };
    // sortKategorie = (kats) => {
    //     return kats.sort((a, b) => {
    //         return a.id - b.id;
    //     });
    // };
    // setKatInStomp = async kat => {
    //     console.log("test call");
    //     await this.refCategoryDetailsStomp.current.setKat(kat);
    // }

    render() {

        const {classes, theme} = this.props;
        const {open} = this.state;

        const drawer = (
            <div>
                <div className={classes.toolbar}/>
                <Divider/>

                <ListItem button component={Link} to={"/"} key='Úvod'>
                    <ListItemText primary='Úvod'/>
                </ListItem>
                <List>
                    <ListItem button component={Link} to={"/live"} key='Live'>
                        <ListItemText primary='Live'/>
                    </ListItem>
                    <ListItem button component={Link} to={"/kalendar"} key='Kalendář'>

                        <ListItemText primary='Kalendář'/>
                    </ListItem>
                    <ListItem button component={Link} to={"/info"} key='O&nbsp;projektu'>

                        <ListItemText primary='O&nbsp;projektu'/>
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
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h3" color="inherit" noWrap>
                            time-H.cz Datacenter
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
                                open={open}
                                classes={{
                                    paper: classes.drawerRaces,
                                }}
                            >

                            </Drawer>
                        </Hidden>
                    </nav>
                    <main className={classes.content}>
                        <div className={classes.toolbar}/>

                        <Switch>
                            <Route exact path="/" render={() => <DashboardDefault/>}/>
                            <Route path="/kalendar" render={() => <DashboardCalendar/>}/>
                            <Route path="/live" render={() => <DashboardLive/>}/>
                            <Route path="/info" render={() => <DashboardAbout/>}/>
                        </Switch>

                    </main>

            </div>
        );
    }

    handleDashBoard = (number) => {
        this.setState({
            dashboard: number
        });
        console.log("handle db")
    }
}

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(ResponsiveDrawer);
