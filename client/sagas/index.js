import { call, put, take, fork, wait } from 'redux-saga/effects';
const Config = require('Config');
import {watchFeed , watchMoreNews} from "../bundles/List/Sagas/index"

export default function* rootSaga() {
    yield [
        fork(watchFeed),
        fork(watchMoreNews),
    ]
}