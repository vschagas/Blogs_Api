const services = require('../services');
const generateToken = require('../helpers/generateToken');
const identifyUserIdByEmail = require('../helpers/identifyUser');
const { encryptPassword } = require('../helpers/Bcrypt');

const createUser = async (req, res) => {
  const user = req.body;
  const encriptedPassword = await encryptPassword(user.password);

  user.password = encriptedPassword;

  try {
    await services.user.createUser(user);
    const token = generateToken(user);
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal error' });
  }
};

const getUsers = async (_req, res) => {
  const result = await services.user.getUsers();
  return res.status(200).json(result);
};

const getUserById = async (req, res) => {
  const id = Number(req.params.id);
  const result = await services.user.getUserById(id);
  if (!result) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(result);
};

const deleteUser = async (req, res) => {
  const id = await identifyUserIdByEmail(req.email);
  await services.user.deleteUser(id);
  return res.status(204).json({ message: 'User deleted' });
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
};