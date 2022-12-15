const express = require('express');
const swaggerUi = require('swagger-ui-express');
const router = require('./routes');
const swaggerDocument = require('../swagger.json');

const app = express();

app.use(express.json());

app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/login', router.login);
app.use('/user', router.user);
app.use('/post', router.posts);
app.use('/categories', router.categories);

module.exports = app;