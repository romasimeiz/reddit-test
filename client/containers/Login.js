import { connect } from 'react-redux';
import * as AppActions from '../actions/actions';
import Login from '../components/Login';
import { reduxForm } from 'redux-form';


const LoginContainer = reduxForm({
    form: 'login',
})(Login);

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        isFetching: state.auth.isFetching
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleFormSubmit(formProps) {
            dispatch(AppActions.login.request(formProps));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);