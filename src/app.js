const express = require('express');
const router = require('./routes');

const app = express();

app.use(express.json());

app.use('/login', router.login);
app.use('/user', router.user);
app.use('/post', router.posts);
app.use('/categories', router.categories);

module.exports = app;