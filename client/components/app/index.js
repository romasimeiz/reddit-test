import React, { Component } from 'react';
import Layout from '../../containers/Layout';
import List from '../../containers/List';
import reddit from 'reddit.js';


export default class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <List />
                </Layout>
            </div>
        );
    }
}
