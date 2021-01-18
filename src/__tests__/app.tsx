/**
 * React.UI - Application unit tests
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

import * as React from "react";
import ReactDom from 'react-dom';
import { Provider } from "react-redux";
import { JSDOM } from "jsdom";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { Router, Route, Switch } from "react-router-dom";
import ReduxStore from "../reduxStore";
import AppLoader from "../appLoader";
import ErrorHandler from "../errorHandler";
import DataSource from "../dataSource";
import routes from "../routes";
import App from '../views/app/app';
import '../styles/styles.less';
import '../styles/styles.scss';
const dom = new JSDOM();
// @ts-ignore
// eslint-disable-next-line no-global-assign,no-multi-assign
const window = global.window = dom.window;
// eslint-disable-next-line no-global-assign,no-multi-assign
const document = global.document = dom.window.document;
// eslint-disable-next-line import/first,import/order
import { render } from "@testing-library/react";
document["history"] = { location: { hostpath: "/" }, listen: () => {} };
document["handler"] = new ErrorHandler("root");
document["appLoader"] = new AppLoader();
document["dataSource"] = new DataSource();
document["reduxStore"] = ReduxStore(document["history"]);
document["appLoader"].load("jest");
window.clearTimeout(document["appLoader"].timeout);
window.clearInterval(document["appLoader"].load_interval);
const server = setupServer(rest.get('/todo', (req, res, ctx) => res(ctx.json({ foo: 'bar' }))));
const div = document.createElement('div');
div.id = "root";
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
//----------------------------------------------------------------------------------------------------------------------
test("/", async () => {
    // @ts-ignore
    expect(() => {
        ReactDom.render(
            <div id="react">
                <Provider store={document["reduxStore"]}>
                    <Router history={document["history"]}>
                        <Switch>
                            <Route path="/" component={App} />
                            {
                                routes.map((route, idx) => (
                                    <Route
                                        key={`route_${idx}`}
                                        path={route.path}
                                        component={route.component}
                                    />
                                ))
                            }
                        </Switch>
                    </Router>
                </Provider>
            </div>,
            div
        );
    }).not.toThrow();
});
//----------------------------------------------------------------------------------------------------------------------
routes.forEach((route) => {
    test(route.path, async () => {
        expect(() => {
            render(
                <div id="react">
                    <Provider store={document["reduxStore"]}>
                        <Router history={document["history"]}>
                            <Route component={route.component} />
                        </Router>
                    </Provider>
                </div>
            );
        }).not.toThrow();
    });
});
