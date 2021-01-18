/**
 * React.UI - Application primary view.
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

import * as React from 'react';
// @ts-ignore
import { get } from "lodash";
import {
    NavLink,
    Redirect,
    Route,
    Router,
    Switch
} from "react-router-dom";
import { connect } from "react-redux";
import { Action } from "redux";
import clsx from 'clsx';
import { produce } from "immer";
import {
    makeStyles,
    ThemeProvider,
    createMuiTheme
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import routes from "../../routes";
import Header from "../../components/Header/Header";
import Copyright from "../../components/Copyright/Copyright";
import Dialog from "../../components/Dialog/Dialog";
import { stylesContainer } from './app.module.less';
import { ISummaryAppState } from "../../reducers/main";
import { hideModal, IModalData, showModal } from "../../actions";
//------------------------------------------------------------------------------------------------------------------
interface IAppProps {
    modalData: IModalData[];
    hideModal: (index:number) => void;
    location: string;
}
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        background: `linear-gradient(90deg, #008040, transparent)`
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
        color: '#fff'
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
        color: "#fff"
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: 'calc(100vh - 71px);',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    selected: {
        background: '#ddd'
    }
}));
//------------------------------------------------------------------------------------------------------------------
const App = (props:IAppProps): React.ReactElement<IAppProps> => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const customTheme = createMuiTheme({
        palette: {
            primary: {
                main: "#008040"
            }
        }
    });
    let caption = "";
    routes.forEach((route) => {
        if (route.path === props.location) {
            caption = route.name;
        }
    });
    return (
        <ThemeProvider theme={customTheme}>
            <div id="react" className={stylesContainer}>
                <Header color={"white"} brand={"React.UI"} />
                <div className={classes.root} style={{ marginTop: "-20px", borderTop: "#fafafa 1px solid" }}>
                    <CssBaseline />
                    <AppBar position="absolute" style={{ top: "auto", boxShadow: "none" }} className={clsx(classes.appBar, open && classes.appBarShift)}>
                        <Toolbar className={classes.toolbar}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <IconButton
                                color="inherit"
                                className={clsx(classes.menuButton, !open && classes.menuButtonHidden)}
                                onClick={handleDrawerClose}
                            >
                                <ChevronLeftIcon />
                            </IconButton>
                            <Typography component="h1" variant="h6" noWrap className={classes.title}>
                                { caption }
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Router history={document["history"]}>
                        <Drawer
                            variant="permanent"
                            classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose) }}
                            open={open}
                        >
                            { !open && <div style={{ height: "64px" }} /> }
                            <List>
                                <div style={{ lineHeight: 1.5 }}>
                                    {
                                        routes.map((route) => (
                                            <NavLink
                                                to={ route.path }
                                                className={`app-link`}
                                                title={ route.name }
                                            >
                                                <ListItem className={route.path === props.location ? classes.selected : ''}>
                                                    <ListItemIcon>
                                                        <route.icon/>
                                                    </ListItemIcon>
                                                    <ListItemText primary={ route.name } />
                                                </ListItem>
                                            </NavLink>
                                        ))
                                    }
                                </div>
                            </List>
                        </Drawer>
                        <main className={classes.content}>
                            <div className={classes.appBarSpacer} />
                            <Container maxWidth="lg" className={classes.container}>
                                <Switch>
                                    {
                                        routes.map((route) => <Route
                                            exact
                                            path={route.path}
                                            render={(prop) => (<route.component {...prop} />)}
                                        />)
                                    }
                                    <Route
                                        path={"*"}
                                        component={document["handler"].notFound()}
                                    />
                                </Switch>
                                <Box pt={4}>
                                    <Copyright />
                                </Box>
                            </Container>
                        </main>
                    </Router>
                </div>
                {
                    props.modalData.map((data) => {
                        const dialog = produce(data, (fout) => {
                            // @ts-ignore
                            // eslint-disable-next-line no-param-reassign
                            fout.handleClose = () => { /* ... */ };
                            // @ts-ignore
                            // eslint-disable-next-line no-param-reassign
                            fout.open = data.display;
                            // @ts-ignore
                            // eslint-disable-next-line no-param-reassign
                            fout.hideModal = props.hideModal;
                        });
                        // @ts-ignore
                        return <Dialog {...dialog} />;
                    })
                }
            </div>
        </ThemeProvider>
    );
};
//------------------------------------------------------------------------------------------------------------------
const mapStateToProps = (state:ISummaryAppState) => ({
    location: get(state, 'router.location.pathname', null),
    modalData: state.main.modalData
});
const mapDispatchToProps = (dispatch:(action:Action) => void) => ({
    showModal: () => {
        document["dataSource"].test((res:string) => {
            if (res) {
                dispatch(
                    showModal(
                        "1",
                        res,
                        Math.random(),
                        (id) => dispatch(hideModal(id))
                    )
                );
            }
        });
    },
    hideModal: (id:number) => {
        dispatch(
            hideModal(id)
        );
        document.body.style.overflow = "auto";
    },
});
//------------------------------------------------------------------------------------------------------------------
export default connect(mapStateToProps, mapDispatchToProps)(App);
