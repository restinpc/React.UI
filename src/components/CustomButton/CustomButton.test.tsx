/**
 * React.UI - Custom component test.
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

import * as React from "react";
import { Provider } from "react-redux";
import { JSDOM } from "jsdom";
import CustomButton from "./CustomButton";
import ErrorHandler from "../../errorHandler";
import AppLoader from "../../appLoader";
import DataSource from "../../dataSource";
import ReduxStore from "../../reduxStore";
const dom = new JSDOM();
// @ts-ignore
// eslint-disable-next-line no-global-assign,no-multi-assign
window = global.window = dom.window;
// eslint-disable-next-line no-global-assign,no-multi-assign
document = global.document = dom.window.document;
// eslint-disable-next-line import/first,import/order
import {
    fireEvent,
    render,
    screen
} from "@testing-library/react";
document["history"] = { location: { hostpath: "/" }, listen: () => {} };
document["handler"] = new ErrorHandler("root");
document["appLoader"] = new AppLoader();
document["dataSource"] = new DataSource();
document["reduxStore"] = ReduxStore(document["history"]);
//----------------------------------------------------------------------------------------------------------------------
test('<CustomButton>', async () => {
    render(
        <Provider store={document["reduxStore"]}>
            <CustomButton />
        </Provider>
    );
    const button = screen.getByTestId('button');
    expect(button.title).toEqual('click me');
    fireEvent.click(button);
});
