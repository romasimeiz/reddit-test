import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Pagination from './Pagination';

export default class List extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getLastNews();
    }

    render() {
        const {list, getMoreNews, getLastNews, after} = this.props;
        return (
            <div>
                <table className="table">
                    <tbody>
                        {
                            list.map(function (value, key) {
                                return <NewsItem news={value.data} key={key}/>
                            })
                        }
                    </tbody>
                </table>
                <Pagination getLastNews={ getLastNews } getMoreNews={ getMoreNews } after={after} />
            </div>
        );
    }
}

