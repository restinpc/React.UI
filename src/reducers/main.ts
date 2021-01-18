/**
 * React.UI - Primary reducer.
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

import { combineReducers, Reducer } from 'redux';
import { connectRouter, RouterState } from "connected-react-router";
import { History } from 'history';
import { IModalData, MainSummaryAction } from "../actions/index";
import { MainTypes } from "../constants/actionTypes";
import dashboard, { IDashboardState } from "./dashboard";
//----------------------------------------------------------------------------------------------------------------------
interface IAppState {
    modalData: IModalData[],
}
//----------------------------------------------------------------------------------------------------------------------
const initialState = (): IAppState => ({
    modalData: [],
});
//----------------------------------------------------------------------------------------------------------------------
const main = (state: IAppState = initialState(), action: MainSummaryAction) => {
    const { payLoad } = action;
    switch (action.type) {
    case MainTypes.ShowModalAction:
        return {
            ...state,
            modalData: [
                ...state.modalData,
                payLoad
            ],
        };
    case MainTypes.HideModalAction:
        return {
            ...state,
            modalData: state.modalData.map((data) => {
                if (data.index !== payLoad.index) {
                    return data;
                }
                return {
                    ...data,
                    display: false
                };
            }),
        };
    default:
        return state;
    }
};
//----------------------------------------------------------------------------------------------------------------------
const rootReducer:(history:History) => Reducer = (history:History) => combineReducers(
    {
        router: connectRouter(history),
        main,
        dashboard,
    }
);

type ISummaryAppState = {
    main: IAppState,
    dashboard: IDashboardState,
    router?: RouterState;
    key: string
};
export {
    rootReducer as default,
    ISummaryAppState,
    IAppState,
};
