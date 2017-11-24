import React, { Component } from 'react';
import Grid from '../Common/Grid';
import './users.scss';

export default class Users extends Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <div>
                <Grid fields={this.props.fields} data={this.props.users}/>
            </div>
        );
    }
}

