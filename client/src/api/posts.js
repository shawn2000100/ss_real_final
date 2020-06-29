import axios from 'axios';

// Develop server URL
const postBaseUrl = 'http://localhost:3000/api';

// Production server URL
// const postBaseUrl = 'http://weathermood-db-5.us-east-1.elasticbeanstalk.com/api';



export function listPosts(searchText = '', start) {
    let url = `${postBaseUrl}/posts`;
    let query = [];
    if (searchText)
        query.push(`searchText=${searchText}`);
    if (start)
        query.push(`start=${start}`);
    if (query.length)
        url += '?' + query.join('&');

    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}

// modified
<<<<<<< HEAD
export function createPost(mood, text, title, location, name) {
=======
export function createPost(mood, text, title, location, username) {
>>>>>>> 4dd2ba07159823dc38ad81a93eea16f17a0e166a
    let url = `${postBaseUrl}/posts`;

    console.log(`Making POST request to: ${url}`);

    return axios.post(url, {
        mood,
        text,
        title,
        location,
<<<<<<< HEAD
        name
=======
        username
>>>>>>> 4dd2ba07159823dc38ad81a93eea16f17a0e166a
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}

export function createVote(id, mood) {
    let url = `${postBaseUrl}/posts/${id}/${mood.toLowerCase()}Votes`;

    console.log(`Making POST request to: ${url}`);

    return axios.post(url).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}
