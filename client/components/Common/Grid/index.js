import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Row from './Row';
import CellHeader from './CellHeader';
import CellBody from './CellBody';
import Actions from './Actions';
import _ from 'lodash';

import './style.scss';


const buildRow = (fields, row, rowIndex, actions, pushToRoute) => {
    return (
        <Row
            key={`row${rowIndex}`}
            className={row.className} >
            {
                fields.map((field, cellIndex) =>
                {
                    return <CellBody
                        text={ _.get(row, field.mapping) }
                        className={ field.className }
                        key={ `cell${cellIndex}` }
                        onClick={ row.link ? () => pushToRoute(row.link) : () => {return false} }
                    />
                })
            }
            {actions ? <Actions entityId={row.id} actions={actions} /> : false }
        </Row>
    );
};

const buildBody = (fields, data, actions, pushToRoute) => {
    return (
        <Body>
        {
            data.map((row, index) => buildRow(fields, row, index, actions, pushToRoute))
        }
        </Body>
    );
};

export default class Grid extends Component {
    render() {
        const {fields, data, children, actions, pushToRoute} = this.props;
        return (
            <div className="ibox float-e-margins">
                <div className="ibox-content">
                    <table className="table table-hover">
                        <Header>
                            <Row>
                                {
                                    fields.map((field, index) => {
                                        return (
                                            <CellHeader
                                                text={field.name}
                                                key={`th${index}`}
                                                className={field.className}
                                            />
                                        );
                                    })
                                }
                                { actions ?  <CellHeader text={'Actions'} /> : false }
                            </Row>
                        </Header>
                    { data.data ? buildBody(fields, data.data, actions, pushToRoute) : null }
                    {children}
                    </table>
                </div>
            </div>
        );

    }
}
