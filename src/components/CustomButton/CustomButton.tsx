/**
 * React.UI - Custom button component
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

import * as React from "react";
import { Action } from "redux";
import { connect } from "react-redux";
import { Button } from '@material-ui/core';
import { ISummaryAppState } from "../../reducers/main";
import { hideModal, showModal } from "../../actions";
//------------------------------------------------------------------------------------------------------------------
interface ICustomButtonProps {
    readonly showModal: () => void;
    readonly hideModal: () => void;
}
interface ICustomButtonState {
    isClicked: boolean
}
//------------------------------------------------------------------------------------------------------------------
class CustomButtonComponent extends React.Component<ICustomButtonProps, ICustomButtonState> {
    constructor(props:ICustomButtonProps) {
        super(props);
        this.state = {
            isClicked: false
        };
    }
    render() {
        return (
            <div
                data-testid="button"
                title={ this.state.isClicked ? "it's work" : "click me"}
                onClick={() => {
                    this.setState({
                        isClicked: true
                    });
                    this.props.showModal();
                }}
            >
                <Button variant="contained" color="primary">
                    Ok
                </Button>
            </div>
        );
    }
}
//------------------------------------------------------------------------------------------------------------------
const mapStateToProps = (state:ISummaryAppState) => ({});
//------------------------------------------------------------------------------------------------------------------
const mapDispatchToProps = (dispatch:(action:Action) => void) => ({
    showModal: () => {
        document["dataSource"].test((res:string) => {
            if (res) {
                dispatch(
                    showModal("1", res, Math.random(), (index) => {
                        dispatch(
                            showModal("2", "...", Math.random(), (idx) => {
                                dispatch(hideModal(index));
                                dispatch(hideModal(idx));
                            })
                        );
                    })
                );
            }
        });
    },
    hideModal: (index:number) => {
        dispatch(
            hideModal(index)
        );
        document.body.style.overflow = "auto";
    },
});
//------------------------------------------------------------------------------------------------------------------
const CustomButton = connect(mapStateToProps, mapDispatchToProps)(CustomButtonComponent);
export {
    ICustomButtonProps,
    CustomButton as default
};
