const customExpress = require('./config/custom-express');

const connection = require('./infra/connection');
const Tables = require('./infra/tables');

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('database connected');
    Tables.init(connection);

    const app = customExpress();

    app.listen(3000, () => console.log('Server has started at port 3000'));
  }
});

