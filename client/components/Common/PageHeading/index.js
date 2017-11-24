import React, { Component } from 'react';
import './style.scss';

export default class PageHeading extends Component {
    render() {
        return (
            <div className="row wrapper border-bottom white-bg page-heading">
                <div className="col-lg-10">
                    <h2>This is title</h2>
                    <ol className="breadcrumb">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li className="active">
                            <strong>Current page</strong>
                        </li>
                    </ol>
                </div>
                <div className="col-lg-2">

                </div>
            </div>
        )
    }
}