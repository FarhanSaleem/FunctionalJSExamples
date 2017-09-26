/**
 * Created by musicology on 9/21/17.
 */

// example of using higher order function

// Problem: Need to pass in custom headers for XHR calls for different URL's

const request = (options) => {
    return fetch(options.url, options)
        .then(resp => resp.json());
};

const usersPromise = request({
    url: '/users',
    headers: { 'X-custom': 'key'}
});

const tasksPromise = request({
    url: '/tasks',
    headers: { 'X-custom': 'key'}
});



