import React from 'react';
import PropTypes from 'prop-types';
import Delete from '../../../containers/Delete';
import Update from '../Actions/update';
import View from '../Actions/view';

export default function Actions({ actions, entityId, children }) {
    return (
        <th>
            {
                actions.types.map((type, index) => {
                    let link = `/${actions.entity}/${entityId}/${type}`;
                    switch (type) {
                        case 'delete' :
                            return <Delete entityId={entityId} key={index} entity={actions.entity} />;
                        case 'view' :
                            return <View key={index} type={type} link={link} />;
                        case 'update' :
                            return <Update key={index} type={type} link={link} />;
                    }
                })
            }
        </th>
    );
}

Actions.propTypes = {
   actions  : PropTypes.object.isRequired,
   entityId : PropTypes.number.isRequired
};

Actions.displayName = 'Actions';
