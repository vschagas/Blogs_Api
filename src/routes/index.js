const login = require('./login.router');
const user = require('./user.router');
const posts = require('./posts.router');
const categories = require('./categories.router');

module.exports = {
  login,
  user,
  posts,
  categories,
};