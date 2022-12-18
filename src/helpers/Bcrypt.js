const bcrypt = require('bcryptjs');

const encryptPassword = async (password) => {
  const salt = bcrypt.genSaltSync(10);
  const encryptedPassword = bcrypt.hashSync(password, salt);

  return encryptedPassword;
};

const checkPassword = async (password, passwordDb) => {
const isMatch = bcrypt.compareSync(password, passwordDb);
// if (!isMatch) {
//   const e = new Error('Usuário não existe ou senha inválida');
//   e.name = 'UnauthorizedError';
//   throw e;
// }
  return isMatch;
};

module.exports = {
  encryptPassword,
  checkPassword,
};