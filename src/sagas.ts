/**
 * React.UI - Sagas middleware.
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

import {
    put,
    takeEvery,
    all
} from 'redux-saga/effects';
import { MainTypes } from "./constants/actionTypes";

function* main():Generator {
    document["handler"].log("rootSaga.main()");
    yield document["reduxStore"];
}

export function* incrementAsync():Generator {
    document["handler"].log("rootSaga.incrementAsync()");
    const delay = (ms:number) => new Promise((res) => setTimeout(res, ms));
    yield delay(1000);
    yield put({ type: 'INCREMENT' });
}

function* watchIncrementAsync():Generator {
    document["handler"].log("rootSaga.watchIncrementAsync()");
    yield takeEvery(MainTypes.ShowModalAction, incrementAsync);
}

export default function* rootSaga():Generator {
    document["handler"].log("rootSaga.constructor()");
    yield all([
        main(),
        watchIncrementAsync(),
    ]);
}
