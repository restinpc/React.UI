/**
 * React.UI - Application actions.
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

import { Action } from "redux";
import { MainTypes } from "../constants/actionTypes";
export * from "./dashboard";
//----------------------------------------------------------------------------------------------------------------------
/* Modal window */
interface IModalData {
    display: boolean;
    caption?: string;
    text?: string;
    index: number;
    callback?: (index:number) => void | null;
}
interface IShowModalAction extends Action {
    payLoad: IModalData
}
const showModal = (
    caption: string,
    text: string,
    index: number,
    callback: (id: number) => void
): IShowModalAction => ({
    type: MainTypes.ShowModalAction,
    payLoad: {
        display: true,
        caption: caption,
        text: text,
        callback: callback,
        index: index
    }
});
const hideModal = (index:number):IShowModalAction => ({
    type: MainTypes.HideModalAction,
    payLoad: {
        display: false,
        index: index,
    }
});
//----------------------------------------------------------------------------------------------------------------------
type MainSummaryAction =
    IShowModalAction;
export {
    IShowModalAction,
    MainSummaryAction,
    IModalData,
    showModal,
    hideModal,
};
