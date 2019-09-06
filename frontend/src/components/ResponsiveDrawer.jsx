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

import Calls from "../server/Calls";
import DashboardDefault from "./DashboardDefault";
import DashboardCalendar from "./DashboardCalendar";
import DashboardCategoryDetailStomp from "./DashboardCategoryDetailStomp";
import DashboardAbout from "./DashboardAbout";

const drawerWidth = 100;

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
            kategorie: []
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

        //
        // axios.get('http://localhost:8080/zavody/actives')
        //     .then(response => {
        //         const races = response.data;
        //         this.setState({races});
        //     })
    }

    showCategoryList = (kategorie) => {
        this.setState({open: !this.state.open});
        this.setState({kategorie: kategorie});
        console.log("click");
        this.handleDashBoard(3);

    };
    sortKategorie = (kats) => {
        return kats.sort((a, b) => {
            return a.id-b.id;
        });
    };
    // setKatInStomp = async kat => {
    //     console.log("test call");
    //     await this.refCategoryDetailsStomp.current.setKat(kat);
    // }

    render() {
        let dashboardChange = <DashboardDefault/>;
        if (this.state.dashboard === 1) {
            dashboardChange = <DashboardCalendar/>;
        }
        if (this.state.dashboard === 2) {
            dashboardChange = <DashboardAbout/>
        }
        if (this.state.dashboard === 3) {
            dashboardChange = <DashboardCategoryDetailStomp kategorie={this.sortKategorie(this.state.kategorie)}/>
        }

        const {classes, theme} = this.props;
        const {open} = this.state;

        const drawer = (
            <div>
                <div className={classes.toolbar}/>
                <Divider/>
                <ListItem button key='Úvod' onClick={() => this.handleDashBoard(0)}>
                    <ListItemText primary='Úvod'/>
                </ListItem>
                <List>
                    <ListItem button key='Live' onClick={this.handleSubMenu}>
                        <ListItemText primary='Live'/>
                    </ListItem>
                    <ListItem button key='Kalendář' onClick={() => this.handleDashBoard(1)}>

                        <ListItemText primary='Kalendář'/>
                    </ListItem>
                    <ListItem button key='O&nbsp;projektu' onClick={() => this.handleDashBoard(2)}>

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
                            <MenuIcon />
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
                            <List>
                                <ListItem>
                                    <ListItemText primary="Live závody:"/>
                                </ListItem>
                                {this.state.races.map((race, index) => (
                                    <ListItem button key={race.nazev}
                                              onClick={() => this.showCategoryList(race.kategorie)}>
                                        <ListItemText primary={race.nazev + " - " + race.misto}/>
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
                    {dashboardChange}

                    {/*<Button onClick={this.crtRace}>crt</Button>*/}
                    {/*<CategoryList kategorie={this.sortKategorie(this.state.kategorie)} setKatInStomp={this.setKatInStomp}/>*/}

                    {/*<DashboardCategoryDetailStomp kategorie={this.sortKategorie(this.state.kategorie)}/>*/}

                    {/*<Typography paragraph>*/}
                        {/*<ul>*/}
                            {/*{this.state.races.map(race =>*/}
                                {/*(<li>{race.nazev}</li>)*/}
                            {/*)}*/}
                        {/*</ul>*/}
                    {/*</Typography>*/}

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
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(ResponsiveDrawer);
