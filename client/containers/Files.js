import { connect } from 'react-redux';

import Files from '../components/Files';
import * as AppActions from '../actions/actions';

const mapStateToProps = state => ({
    fields : state.files.filesGrid,
    files  : state.files.files,
});

const mapDispatchToProps = (dispatch) => {
    return {
        getFiles(projectId) {
            dispatch(AppActions.files.request(projectId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Files);