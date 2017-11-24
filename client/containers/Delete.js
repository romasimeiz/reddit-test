import { connect } from 'react-redux';
import * as AppActions from '../actions/actions';
import Delete from '../components/Common/Actions/delete';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
    return {
        deleteEntity(entity, id) {
            console.log(`${entity}Delete`);
            dispatch(AppActions[`${entity}Delete`].request(id))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Delete);