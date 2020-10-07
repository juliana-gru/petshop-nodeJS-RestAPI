const Appointment = require('../models/appointment');

//CONTROLLER

module.exports = app => {
  app.get('/appointments', (req, res) => {
    Appointment.list(res);
  })

  app.get('/appointments/:id', (req, res) => {
    console.log(req.params);
    res.send('OK');
  })

  app.post('/appointments', (req, res) => {
    const appointment = req.body;

    Appointment.add(appointment, res);
  })
}