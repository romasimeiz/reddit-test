import React, { Component } from 'react';

export default class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className="table">
                <tbody>
                <tr>
                    <td>Likes: 2</td>
                    <td><img src="//a.thumbs.redditmedia.com/MN3ZwCjP-BzZFPmco1dw7AP7hLii9LU6dl0C-9EGqb4.jpg" width="70" height="70" alt=""/></td>
                    <td>TIL The day after Thanksgiving is the busiest day for Plumbers around the United States</td>
                </tr>
                <tr>
                    <td>Likes: 2</td>
                    <td><img src="//a.thumbs.redditmedia.com/MN3ZwCjP-BzZFPmco1dw7AP7hLii9LU6dl0C-9EGqb4.jpg" width="70" height="70" alt=""/></td>
                    <td>TIL Hangovers cost an estimated $220 Billion loss in productivity per year</td>
                </tr>
                </tbody>
            </table>
        );
    }
}

