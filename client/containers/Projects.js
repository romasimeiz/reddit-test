import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Projects from '../components/Projects';
import * as AppActions from '../actions/actions';

const mapStateToProps = state => ({
    fields: state.projects.projectsGrid,
    projects: state.projects.projects,
    actions: state.projects.actions
});

const mapDispatchToProps = (dispatch) => {
    return {
        getProjects() {
            dispatch(AppActions.projects.request());
        },
        pushToRoute(route) {
            dispatch(push(route));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);