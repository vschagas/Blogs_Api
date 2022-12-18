const { User } = require('../models');
const { checkPassword } = require('./Bcrypt');

const getRegisteredUsers = async () => {
  const result = await User.findAll({
    attributes: ['email', 'password'],
  });
  const emails = result.map((element) => element.dataValues.email);
  const passwords = result.map((element) => element.dataValues.password);

  return { emails, passwords };
};

const getRegisteredUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    const error = new Error('Incorrect email or password');
    error.status = 401;

    throw error;
  }
  
  const hash = user.dataValues.password;
  const isPasswordValid = await checkPassword(password, hash);

  if (!isPasswordValid) {
    const error = new Error('Incorrect email or password');
    error.status = 401;

    throw error;
  }

  return { email, password };
};

module.exports = {
  getRegisteredUsers,
  getRegisteredUser,
};