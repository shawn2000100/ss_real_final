const express = require('express');
const bodyParser = require('body-parser');
const accessController = require('../middleware/access-controller.js');

const postModel = require('../model/posts.js');
const voteModel = require('../model/votes.js');

const router = express.Router();

router.use(bodyParser.json());
router.use(accessController); // Allows cross-origin HTTP requests

// List
router.get('/posts', function(req, res, next) {
    const {searchText, start} = req.query;
    postModel.list(searchText, start).then(posts => {
        res.json(posts);
    }).catch(next);
});

// Create
router.post('/posts', function(req, res, next) {
<<<<<<< HEAD
    const {mood, text, title, location, name} = req.body;
    if (!mood || !text || !title || !location || !name) {
=======
    const {mood, text, title, location, username} = req.body;
    if (!mood || !text || !title || !location || !username) {
>>>>>>> 4dd2ba07159823dc38ad81a93eea16f17a0e166a
        const err = new Error('Mood and text are required');
        err.status = 400;
        throw err;
    }
<<<<<<< HEAD
    postModel.create(mood, text, title, location, name).then(post => {
=======
    postModel.create(mood, text, title, location, username).then(post => {
>>>>>>> 4dd2ba07159823dc38ad81a93eea16f17a0e166a
        res.json(post);
    }).catch(next);
});

// Vote
router.post('/posts/:id/:mood(clear|clouds|drizzle|rain|thunder|snow|windy)Votes', function(req, res, next) {
    const {id, mood} = req.params;
    if (!id || !mood) {
        const err = new Error('Post ID and mood are required');
        err.status = 400;
        throw err;
    }
    voteModel.create(id, mood).then(post => {
        res.json(post);
    }).catch(next);
});

module.exports = router;
