/**
 * React.UI - Paper component
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

import * as React from "react";
import { PaperProps } from "@material-ui/core";
import Draggable from "react-draggable";
import Paper from "@material-ui/core/Paper/Paper";

export default (props:PaperProps):React.ReactElement => (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
    </Draggable>
);
