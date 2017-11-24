import { connect } from 'react-redux';

import Users from '../components/Users';
import * as AppActions from '../actions/actions';

const mapStateToProps = state => ({
    fields : state.users.usersGrid,
    users : state.users.users
});

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers() {
            dispatch(AppActions.users.request());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);