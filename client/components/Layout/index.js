import React, { Component } from 'react';

export default class Layout extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //this.props.makeAuth();
    }

    render() {
        return (
            <div id="wrapper">
                <div id="page-wrapper" className="gray-bg">
                    <div className="wrapper wrapper-content animated fadeInRight">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ibox float-e-margins">
                                    <div className="ibox-content">
                                        {this.props.children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

