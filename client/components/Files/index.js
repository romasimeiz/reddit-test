import React, { Component } from 'react';
import Grid from '../Common/Grid';
//import './files.scss';

export default class Files extends Component {
    componentDidMount() {
        this.props.getFiles(this.props.match.params.projectId);
    }

    render() {
        return (
            <div>
                <Grid fields={this.props.fields} data={this.props.files} />
            </div>
        );
    }
}

