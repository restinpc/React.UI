/**
 * React.UI - Dashboard view.
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

import React from 'react';
import { Action } from "redux";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import CustomButton from '../../components/CustomButton/CustomButton';
import { ISummaryAppState } from "../../reducers/main";
import { loadDashboard } from "../../actions";
//------------------------------------------------------------------------------------------------------------------
interface IDashBoardProps {
    value: number,
    load: (value: number) => void;
}
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: "#fff"
    }
}));
//------------------------------------------------------------------------------------------------------------------
function Dashboard(props:IDashBoardProps):React.ReactElement {
    const classes = useStyles();
    return (
        <div className={classes.root} style={{ width: "calc(100% - 40px)", maxWidth: "1600px" }}>
            <Grid container spacing={3} >
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography component="h2" variant="h6" gutterBottom>
                            API Button
                        </Typography>
                        Async REST request.
                        <br/>
                        <br/>
                        <CustomButton />
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        <Typography component="h2" variant="h6" gutterBottom>
                            Redux Button
                        </Typography>
                        You clicked { props.value } times.
                        <br/>
                        <br/>
                        <div>
                            <Button onClick={() => props.load(props.value + 1)} variant="contained" color="primary">
                                Ok
                            </Button>
                        </div>
                    </Paper>
                </Grid>
            </Grid>

        </div>
    );
}
//------------------------------------------------------------------------------------------------------------------
const mapStateToProps = (state:ISummaryAppState) => ({
    value: state.dashboard.value
});
const mapDispatchToProps = (dispatch:(action:Action) => void) => ({
    load: (value:number) => {
        dispatch(
            loadDashboard(value)
        );
    },
});
//------------------------------------------------------------------------------------------------------------------
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
