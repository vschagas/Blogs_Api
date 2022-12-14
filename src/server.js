require('dotenv').config();
const app = require('./app');

const port = process.env.API_PORT || 3030;

app.get('/', (_request, response) => {
  response.send({ message: 'valmir' });
});

app.listen(port, () => console.log('ouvindo porta', port));