const chai = require('chai');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);
const { expect } = chai;

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const UserModel = require('../../src/models/User');
const BlogPostModel = require('../../src/models/BlogPost');

describe('User model', () => {
  const User = UserModel(sequelize, dataTypes);
  const user = new User();

  checkModelName(User)('User');

  context('Properties', () => {
    const properties = ['id', 'displayName', 'email', 'password', 'image'];
    properties.forEach(checkPropertyExists(user));
  });

  context('Associations', () => {
    const BlogPost = BlogPostModel(sequelize, dataTypes);

    before(() => {
      User.associate({ BlogPost });
    });

    it('defined a hasMany association with BlogPost', () => {
      expect(User.hasMany).to.have.been.calledWith(BlogPost, {
        as: 'blogPosts',
        foreignKey: 'userId',
      });
    });
  });
});