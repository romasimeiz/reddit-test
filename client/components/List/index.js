import React, { Component } from 'react';
import NewsItem from './news-item';

export default class List extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getLastNews();
    }

    render() {
        const {list} = this.props;
        return (
            <table className="table">
                <tbody>
                    {
                        list.map(function (value, key) {
                            return <NewsItem news={value.data} key={key}/>
                        })
                    }
                </tbody>
            </table>
        );
    }
}

