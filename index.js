const customExpress = require('./config/custom-express');
const connection = require('./infra/connection');

connection.connect((error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('connected succesfully');

    const app = customExpress();

    app.listen(3000, () => console.log('Server has started at port 3000'));

  }
});

