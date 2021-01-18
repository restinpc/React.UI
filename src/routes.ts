/**
 * React.UI - Application routes.
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import Dashboard from "./views/dashboard/dashboard";
import Charts from "./views/charts/charts";

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
        icon: DashboardIcon
    },
    {
        path: "/charts",
        name: "Charts",
        component: Charts,
        icon: BarChartIcon
    }
];

export default routes;
