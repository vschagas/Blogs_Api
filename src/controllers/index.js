const login = require('./login.controller');
const user = require('./user.controller');
const posts = require('./posts.controller');
const categories = require('./categories.controller');

module.exports = {
  login,
  user,
  posts,
  categories,
};