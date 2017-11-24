import React, { Component } from 'react';
import  {Notification} from 'react-notification'
import './style.scss';

export default class AppNotification extends Component {
    render() {
        const {properties} = this.props;
        return (
            <Notification
                isActive={properties.isActive}
                message={properties.message}
                title={properties.title}
            />
        );
    }
}