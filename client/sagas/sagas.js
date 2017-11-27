import * as actions from "../actions/actions";
import { call, put, take, fork, wait } from 'redux-saga/effects';
import {delay} from "redux-saga"
import apiFetch from '../api';
import { SubmissionError, startSubmit, stopSubmit, reset } from 'redux-form';
const Config = require('Config');
import '../api/reddit';
import {getMore, getTop} from "../api/reddit";

const CLIENT_ID = "F2EQqQfluydQiQ";
const CLIENT_SECRET = "IYElEBtN5pEO0FMaCRpaTrNF_jw";
const REDIRECT_URI = "http://localhost:65010/reddit_callback";
const UUID4 =  '110ec58a-a0f2-4ac4-8393-c866d813b8d1';

function* watchLogin() {
    while (true) {
        const {request} = yield take(actions.LOGIN.REQUEST);
        try {
            const user = yield call(apiFetch, 'https://ssl.reddit.com/api/v1/authorize', {
                method: 'GET',
                body: JSON.stringify(request)
            });
            yield put(actions.login.success(user));
        } catch (e) {
            yield put(actions.login.error(e))
        }
    }
}

function* watchAuth() {
    while (true) {
        yield take(actions.AUTH.REQUEST);
        let body = {
            "client_id": CLIENT_ID,
            "response_type": "code",
            "state": UUID4,
            "redirect_uri": REDIRECT_URI,
            "duration": "temporary",
            "scope": "identity"
        };
        try {
            const auth = yield call(apiFetch, '/api/v1/authorize', {
                method: 'POST',
                body: JSON.stringify(body)
            });
            yield put(actions.login.success(auth));
        } catch (e) {
            yield put(actions.login.error(e))
        }
    }
}

function* watchFeed() {
    while (true) {
        yield take(actions.FEED.REQUEST);
        const data = yield call(getTop, 'news', 15);
        yield put(actions.feed.success(data.data));
    }
}

function* watchMoreNews() {
    while (true) {
        const {request} = yield take(actions.FEED.MORE_REQUEST);
        const data = yield call(getMore, 'news', { after:request.after, limit:15 });
        console.log(data.data);
        yield put(actions.feed.more_success(data.data));
    }
}

export default function* rootSaga() {
    yield [
        fork(watchLogin),
        fork(watchAuth),
        fork(watchFeed),
        fork(watchMoreNews),
    ]
}