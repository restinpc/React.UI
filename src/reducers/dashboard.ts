/**
 * React.UI - Dashboard reducer.
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

import { IDashboardSummaryAction } from "../actions/dashboard";
import { DashboardTypes } from "../constants/actionTypes";
//------------------------------------------------------------------------------------------------------------------
interface IDashboardState {
    value: number;
}
//------------------------------------------------------------------------------------------------------------------
const initialState = (): IDashboardState => ({
    value: 0
});
//------------------------------------------------------------------------------------------------------------------
const dashboard = (state: IDashboardState = initialState(), action: IDashboardSummaryAction): IDashboardState => {
    switch (action.type) {
    case DashboardTypes.LoadDashboardAction:
        return {
            value: action.payLoad
        };
    default:
        return state;
    }
};
//------------------------------------------------------------------------------------------------------------------
export { dashboard as default, IDashboardState };
