import { connect } from 'react-redux';
import * as AppActions from '../actions/actions';

import Auth from '../components/auth';
import { push } from 'react-router-redux';

const mapStateToProps = state => ({
    auth: state.auth,
    sideBar: state.auth.sideBar,
    notification: state.notification
});

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogout() {
            dispatch(AppActions.logout.request());
        },
        checkAuthentication() {
            if (localStorage.getItem('user') === null) {
                dispatch(push('/'));
            }
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);