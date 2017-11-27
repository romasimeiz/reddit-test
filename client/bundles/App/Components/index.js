import React, { Component } from 'react';
import Layout from '../../Layout';
import List from '../../List';


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
