import { connect } from 'react-redux';
import * as AppActions from '../actions/actions';
import ProjectEdit from '../components/ProjectEdit';
import { reduxForm } from 'redux-form';
//import projectEdit from '../reducers/project-edit';


const ProjectEditContainer = reduxForm({
    form: 'project-edit',
})(ProjectEdit);

const mapStateToProps = (state) => {
    return {
        project:       state.projectEdit.project,
        users:         state.users.users,
        isFetching:    state.auth.isFetching,
        initialValues: state.projectEdit.project.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (values) => {
            dispatch(AppActions.projectEditSubmit.request(values));
        },

        getProject(projectId) {
            dispatch(AppActions.projectEdit.request(projectId))
        },

        getUsers() {
            dispatch(AppActions.users.request())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectEditContainer);