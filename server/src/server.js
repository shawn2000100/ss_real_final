require('../config.js');
const express = require('express');

const postRouter = require('./routers/posts.js');
const errorHandler = require('./middleware/error-handler.js');

const app = express();

app.use(express.static('dist', {
    setHeaders: (res, path, stat) => {
        res.set('Cache-Control', 'public, s-maxage=86400');
    }
}));
app.use('/api', postRouter);
app.get('/*', (req, res) => res.redirect('/'));
app.use(errorHandler);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}...`);
    // console.log("--- testtest process.env ---");
    console.log("NODE_ENV: ", process.env.NODE_ENV);
    // console.log("DB_URL: ", process.env.DB_URL);
});
