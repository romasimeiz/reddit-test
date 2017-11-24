import 'whatwg-fetch';

/**
 * default headers
 * enabled cors
 */
const globalOptions = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    mode: "cors",
};

/**
 * Api URL
 */
//const apiUrl = 'http://antivirus.local/api';
const apiUrl = document.host;

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
    return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
    let json = response.json();
    if (response.status >= 200 && response.status < 300) {
        return json;
    }
    return json.then(res => {
        throw res
    } );
    // console.log(response.json())
    //response.json().then(res => console.log(res));

    // const error = new Error(response.statusText);
    // error.response = response;
    // throw error;
}

/**
 * Requests a URL, returning a promise
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
    let newOptions = Object.assign({}, globalOptions, options);
    const newUrl = apiUrl + url;
    const token = localStorage.getItem('access_token') || null;
    if (token) {
        newOptions = {
            ...newOptions,
            headers: {...newOptions.headers, 'Authorization': `Bearer ${token}`}
        };
    }
    return fetch(newUrl, newOptions)
        .then(checkStatus)
        // .then(parseJSON);
}