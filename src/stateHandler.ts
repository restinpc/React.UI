/**
 * React.UI - Redux state debugger.
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

import { Action, AnyAction } from "redux";
import { Dispatch } from "react";

export default function stateHandler({ getState }:{ getState: () => Action}) {
    return (next: Dispatch<AnyAction>) => (action: Action): void => {
        document["handler"].debug("Will dispatch action >>");
        // @ts-ignore
        document["handler"].debug(action);
        const returnValue = next(action);
        document["handler"].debug("Redux after dispatch >>");
        // @ts-ignore
        document["handler"].debug(getState());
        return returnValue;
    };
}
