import { connect } from 'react-redux';

import List from '../components/List';
import {feed} from '../actions/actions';


const mapStateToProps = state => ({
    list: state.feed.news,
    after: state.feed.after,
});

const mapDispatchToProps = (dispatch) => {
    return {
        getLastNews() {
            dispatch(feed.request());
        },

        getMoreNews(after) {
            dispatch(feed.more_request(after));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);