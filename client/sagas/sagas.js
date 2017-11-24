import * as actions from "../actions/actions";
import { call, put, take, fork, wait } from 'redux-saga/effects';
import {delay} from "redux-saga"
import apiFetch from '../api';
import { SubmissionError, startSubmit, stopSubmit, reset } from 'redux-form';
const Config = require('Config');
import '../api/reddit';
import getReddit from "../api/reddit";

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
        const data = yield call(getReddit, 'news', 15);
        yield put(actions.feed.success(data.data.children));
    }
}



// function* watchProjectDelete() {
//     while (true) {
//         const {request} = yield take(actions.PROJECT_DELETE.REQUEST);
//         try {
//             const project = yield call(apiFetch, `/project/${request}/disable`, {
//                 method: 'GET',
//             });
//             yield put(actions.projectsDelete.success(project));
//             yield put(actions.notification.show({message : projectMessages.DELETED_SUCCESS, title : 'Success!'}));
//
//         } catch (e) {
//             yield put(actions.projectsDelete.error(e));
//             yield put(actions.notification.show({message : projectMessages.DELETED_ERROR, title : 'Error!'}));
//         }
//     }
// }
//
// function* watchProjectEdit() {
//     while (true) {
//         const action = yield take(actions.PROJECT_EDIT.REQUEST);
//         try {
//             const project = yield call(apiFetch, `/project/${action.request}`, {
//                 method: 'GET',
//             });
//             yield put(actions.projectEdit.success({project}));
//         } catch (e) {
//             yield put(actions.projectEdit.error(e));
//         }
//     }
// }
//
// function* watchProjectEditSubmit() {
//     while (true) {
//         const formId = 'project-edit';
//         const {request} = yield take(actions.PROJECT_EDIT_SUBMIT.REQUEST);
//         const projectId = request.id;
//
//         request.is_active = request.is_active === '' ? false : request.is_active;
//         startSubmit(formId);
//
//         try {
//             const project = yield call(apiFetch, `/project/${projectId}`, {
//                 method: 'PUT',
//                 body: JSON.stringify(request)
//             });
//
//             yield put(reset());
//             yield put(stopSubmit(formId));
//             yield put(actions.notification.show({message : projectMessages.UPDATED_SUCCESS, title : 'Success!'}));
//             yield put(push('/projects'));
//         } catch (err) {
//             let allErrors = {};
//             for (let key in err.errors) {
//                 if (!err.errors.hasOwnProperty(key)) { continue }
//                 allErrors[key] = err.errors[key].join(' ');
//             }
//             yield put(stopSubmit(formId, allErrors));
//             yield put(actions.projectEditSubmit.error(err));
//             yield put(actions.notification.show({message : projectMessages.UPDATED_ERROR, title : 'Error!'}));
//         }
//     }
// }
//
// function* watchLogout() {
//     while (true) {
//         yield take(actions.LOGOUT.REQUEST);
//         try {
//             yield call(apiFetch, '/logout', {
//                 method: 'POST'
//             });
//             yield put(actions.logout.success());
//             yield put(push('/'));
//         } catch (e) {
//             yield put(actions.logout.error(e))
//         }
//     }
// }
//
// function* watchUsers() {
//     while (true) {
//         yield take(actions.USERS.REQUEST);
//         try {
//             const users = yield call(apiFetch, '/user', {
//                 method: 'GET'
//             });
//             yield put(actions.users.success(users));
//         } catch (e) {
//             yield put(actions.users.error(e))
//         }
//     }
// }
//
// function* watchNotices() {
//     while (true) {
//         yield take(actions.NOTIFICATION_SHOW);
//         yield call(delay, Config.notifications_delay);
//         yield put(actions.notification.hide());
//     }
// }
//
//
// function* watchProjects() {
//     while (true) {
//         yield take(actions.PROJECTS.REQUEST);
//         try {
//             const projects = yield call(apiFetch, '/project', {
//                 method: 'GET'
//             });
//
//             projects.data.data.map( (value) => {
//                 value.link = `/projects/${value.id}/files`;
//                 return value;
//             });
//
//             yield put(actions.projects.success(projects));
//         } catch (e) {
//             yield put(actions.projects.error(e))
//         }
//     }
// }
//
// function* watchFiles() {
//     while (true) {
//         const action = yield take(actions.FILES.REQUEST);
//         try {
//             const files = yield call(apiFetch, `/files/project/${action.request}`, {
//                 method: 'GET'
//             });
//
//             files.data.data.map( (value) => {
//                 value.className = value.hash_first !== value.hash_last ? 'danger' : '' ;
//                 return value;
//             });
//
//             yield put(actions.files.success(files));
//         } catch (e) {
//             yield put(actions.files.error(e))
//         }
//     }
// }

export default function* rootSaga() {
    yield [
        fork(watchLogin),
        fork(watchAuth),
        fork(watchFeed),
        // fork(watchLogout),
        // fork(watchUsers),
        // fork(watchProjects),
        // fork(watchFiles),
        // fork(watchProjectEdit),
        // fork(watchProjectEditSubmit),
        // fork(watchProjectDelete),
        // fork(watchNotices),
    ]
}