import { call, put, take, fork, wait } from 'redux-saga/effects';
import {getMore, getTop} from "../../../api/reddit";
import * as actions from '../Actions';

export function* watchFeed() {
    while (true) {
        yield take(actions.FEED.REQUEST);
        const data = yield call(getTop, 'news', 15);
        yield put(actions.feedActions.success(data.data));
    }
}

export function* watchMoreNews() {
    while (true) {
        const {request} = yield take(actions.FEED.MORE_REQUEST);
        const data = yield call(getMore, 'news', { after:request.after, limit:15 });
        console.log(data.data);
        yield put(actions.feedActions.more_success(data.data));
    }
}