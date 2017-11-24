import 'reddit.js';

export default function getReddit(url, options) {
    return new Promise(( resolve, reject ) => {
        reddit.top(url).limit(options).fetch(function (res, err) {
            if (res) {
                resolve(res);
            } else {
                reject(err);
            }
        })
    });
}