/**
 * React.UI - Redux container.
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

import { applyMiddleware, createStore, Store } from "redux";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from "redux-devtools-extension";
import { History } from 'history';
import StateHandler from "./stateHandler";
import Reducer from "./reducers/main";
import Sagas from "./sagas";

const reduxStore = (history:History):Store => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        Reducer(history),
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history),
                sagaMiddleware,
                StateHandler
            )
        )
    );
    sagaMiddleware.run(Sagas);
    return store;
};

export default reduxStore;
