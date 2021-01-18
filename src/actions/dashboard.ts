/**
 * React.UI - Dashboard actions.
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

import { Action } from 'redux';
import { DashboardTypes } from "../constants/actionTypes";
//----------------------------------------------------------------------------------------------------------------------
/* Updates dashboard property "value" */
interface ILoadDashboardAction extends Action {
    payLoad: number,
}
const loadDashboard = (data:number):ILoadDashboardAction => ({
    type: DashboardTypes.LoadDashboardAction,
    payLoad: data
});
//----------------------------------------------------------------------------------------------------------------------
type IDashboardSummaryAction =
    ILoadDashboardAction;
//----------------------------------------------------------------------------------------------------------------------
export {
    ILoadDashboardAction,
    IDashboardSummaryAction,
    loadDashboard
};
