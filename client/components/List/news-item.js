import React, { Component } from 'react';

const NewsItem = ({news}) => {
    console.log('its my news', news);
    return(
        <tr>
            <td><b> Posted by: </b> {news.author} </td>
            <td><b><a href={news.url}>{news.title}</a></b></td>
        </tr>
    );
};

export default NewsItem;

