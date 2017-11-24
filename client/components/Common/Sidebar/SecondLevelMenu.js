import React, {Component} from 'react';
import Row from './Row';
import PropTypes from 'prop-types';

export default class SecondLevelMenu extends Component {
    render () {
        const {childrens, className} = this.props;
        return (
            <ul className={className}>
            {
                childrens.map((field, index) => {
                    return(
                        <Row
                            name={field.name}
                            key={`li${index}`}
                            className={field.className}
                        />
                    )
                })
            }
            </ul>
        )
    }
}




SecondLevelMenu.displayName = 'Second Level Menu';

SecondLevelMenu.propTypes = {
    childrens: PropTypes.array.isRequired
};