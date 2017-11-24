import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default class SidebarHeader extends Component {
    static propTypes = {
        url: PropTypes.string,
        name: PropTypes.string
    };

    render() {
        return (
            <li className="nav-header">
                <div className="dropdown profile-element">
                    <span>
                        <img width="40" height="40" className="img-circle" src={this.props.url ? this.props.url : '/assets/img/profile_small.jpg' }/>
                    </span>
                    <NavLink data-toggle="dropdown" className="dropdown-toggle" to="/profile">
                        <span className="clear">
                            <span className="block m-t-xs"> <strong
                                className="font-bold">{this.props.name}</strong></span>
                        </span>
                    </NavLink>
                </div>
                <div className="logo-element">
                    AV
                </div>
            </li>
        );
    }
}

SidebarHeader.displayName = 'SidebarHeader';