import { connect } from 'react-redux';

import Layout from '../components/Layout';
import {auth} from '../actions/actions';


const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => {
    return {
        // makeAuth() {
        //     dispatch(auth.request());
        // }
    };
};

export default connect(mapStateToProps, mapDispatchToProps, )(Layout);