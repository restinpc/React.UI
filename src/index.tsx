/**
 * React.UI - Application index.
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from "connected-react-router";
import App from './views/app/app';
import './styles/styles.less';
import './styles/styles.scss';
import history from "./history";
import ErrorHandler from "./errorHandler";
import AppLoader from "./appLoader";
import DataSource from "./dataSource";
import ReduxStore from "./reduxStore";

try {
    const rootComponent = "root";
    document["handler"] = new ErrorHandler(rootComponent);
    document["appLoader"] = new AppLoader();
    document["dataSource"] = new DataSource();
    document["reduxStore"] = ReduxStore(history);
    ReactDom.render(
        <Provider store={document["reduxStore"]}>
            <ConnectedRouter history={document["history"]}>
                <App />
            </ConnectedRouter>
        </Provider>,
        document.getElementById(rootComponent)
    );
    window.addEventListener("load", () => {
        setTimeout(() => {
            document["appLoader"].load("window");
        }, 1000);
    });
} catch (e) {
    document["handler"].error(e.message);
}
