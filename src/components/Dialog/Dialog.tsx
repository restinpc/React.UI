/**
 * React.UI - Dialog component
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

import * as React from "react";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button";
import Paper from "../Paper/Paper";

interface IDialogProps {
    display: boolean,
    handleClose: () => void,
    caption: string,
    index: string,
    text: string,
    callback: (index: string) => void,
    hideModal: (index: string) => void,
}

export default (props:IDialogProps):React.ReactElement => (
    <div>
        <Dialog
            open={props.display}
            onClose={props.handleClose}
            PaperComponent={Paper}
            aria-labelledby="draggable-dialog-title"
        >
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                { props.caption }
            </DialogTitle>
            <DialogContent>
                <DialogContentText>{ props.text }</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {
                    props.hideModal(props.index);
                }} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => {
                    if (props.callback) {
                        props.callback(props.index);
                    } else {
                        props.hideModal(props.index);
                    }
                }} color="primary">
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    </div>
);
