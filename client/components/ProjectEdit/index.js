import React, { Component } from 'react';
import { Field } from 'redux-form';
import Spinner from '../Common/Spinner';
import './project-form.scss';

const renderField = ({style, input, label, type, meta: { touched, error } }) =>
    <div className={error ? 'form-group has-error' : 'form-group' }>
        <label className="control-label">
            {label}
        </label>
        <div>
            <input className="form-control" {...input} placeholder={label} type={type} style={style} />
            {touched &&
            error &&
        <div className="help-block">
            <span>
              {error}
            </span>
        </div>}
        </div>
    </div>;

export default class ProjectEdit extends Component {
    componentWillMount() {
        this.props.getProject(this.props.match.params.projectId);
        this.props.getUsers();
    }

    render() {
        const {isFetching, handleFormSubmit, handleSubmit, users, initialValues, onSubmit, error } = this.props;
        const usersArray = users.data ? users.data : null;
        console.log(this.props);
        return (
            <div className="middle-box loginscreen animated fadeInDown">

                <Spinner isFetching={isFetching} />
                <div className="ibox float-e-margins">
                    <div className="ibox-title">
                        <h4> Edit {initialValues ? initialValues.name : '' } Project </h4>
                    </div>
                    <div className="ibox-content">
                        <form onSubmit={handleSubmit(onSubmit)} className="m-t">
                            <Field name="user_id" component="select" className="form-control m-b">
                                <option value="">Select a user...</option>
                                {
                                    usersArray ? usersArray.map(user =>
                                    <option value={user.id} key={user.id}>
                                        {user.name}
                                    </option>
                                ) : false}
                            </Field>

                            <Field label="Project name" name="name" className="form-control" component={renderField} type="text"
                                   placeholder="Project Name" />

                            <Field name="restrict_ip" className="form-control" component={renderField} type="text" label="Restrict IP"
                                   placeholder="Restrict IP" />

                            <Field name="script_url" className="form-control" component={renderField} type="text"
                                   placeholder="Script URL" label="Script URL" />

                            <Field name="script_version" className="form-control" component={renderField} type="text"
                                   placeholder="Script version" label="Script version"/>

                            <Field name="host" className="form-control" component={renderField} type="text"
                                   placeholder="Host" label="Host" />

                            <Field name="platform_name" className="form-control" component={renderField} type="text"
                                   placeholder="Platform name" label="Platform name"/>

                            <Field name="platform_version" className="form-control" component={renderField} type="text"
                                   placeholder="Platform version" label="Platform version"/>

                            <Field name="is_active" className="form-control" component={renderField}
                                   style={{width: '10%'}} type="checkbox" label="Is active?" />

                            <button type="submit" className="btn btn-primary block full-width m-b">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

