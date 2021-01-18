/**
 * React.UI - Charts view.
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper/Paper";
//------------------------------------------------------------------------------------------------------------------
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
function Charts():React.ReactElement {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            Charts
        </Paper>
    );
}
//------------------------------------------------------------------------------------------------------------------
export default Charts;
