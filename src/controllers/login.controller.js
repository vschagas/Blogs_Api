const generateToken = require('../helpers/generateToken');

const loginRequest = (req, res) => {
  const user = req.body;
  try {
    const token = generateToken(user);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal error' });
  }
};

module.exports = {
  loginRequest,
};