import 'reddit.js';

export function getTop(url, options) {
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

export function getMore(url, options) {
    return new Promise(( resolve, reject ) => {
        reddit.top(url).after(options.after).limit(options.limit).fetch(function (res, err) {
            if (res) {
                resolve(res);
            } else {
                reject(err);
            }
        })
    });
}