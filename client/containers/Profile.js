import { connect } from 'react-redux';

import Profile from '../components/Common/Profile';
import * as AppActions from '../actions/actions';

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps)(Profile);