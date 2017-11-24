import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import SecondLevelMenu from './SecondLevelMenu';

/**
 * Check link for active
 *
 * @param {string} match
 * @param {object} location
 * @returns {boolean}
 */
const checkLinkForActive = (match, location) => {
    return !!~location.pathname.toLowerCase().indexOf(match.toLowerCase());
};

/**
 * Check link for active
 *
 * @param {object} match
 * @param {object} location
 * @returns {boolean}
 */
const checkNavLinkForActive = (match, location) => {
    if (!match) {
        return false;
    }

    return checkLinkForActive(match.path, location);
};

export default class Row extends Component {
    constructor(props) {
        super(props);
        //this.props = props;
        this.state = {
            active: false
        };
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }

    render() {
        const {className, name, childrens} = this.props;
        return (
            <li className={ checkLinkForActive(name, location) ? 'active' : '' }>
                <NavLink activeClassName="active" to={`/${name.toLowerCase()}`} isActive={checkNavLinkForActive}>
                    <i className={className} aria-hidden="true"/>
                    <span className="nav-label">  {name} </span>
                    {
                        childrens ?
                            <span className="fa arrow" onClick={() => this.toggleClass()} />
                            : null
                    }
                </NavLink>
                    {
                        childrens ? <SecondLevelMenu childrens={childrens} className={this.state.active ? 'nav nav-second-level collapse in' : 'nav nav-second-level collapse'} /> : null
                    }
            </li>
        )
    }
}

Row.displayName = 'Row';

Row.propTypes = {
    className: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};