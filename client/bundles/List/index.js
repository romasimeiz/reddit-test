import { connect } from 'react-redux';

import List from './Components';
import * as actions from './Actions';


const mapStateToProps = (state) => {
    return ({
        list: state.feedReducer.news,
        after: state.feedReducer.after
    });
};

const mapDispatchToProps = (dispatch) => {
    return {
        getLastNews() {
            dispatch(actions.feedActions.request());
        },

        getMoreNews(after) {
            dispatch(actions.feedActions.more_request(after));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);