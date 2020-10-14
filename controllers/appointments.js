const Appointment = require('../models/appointment');

//CONTROLLER

module.exports = app => {
  app.get('/appointments', ({res}) => {
    Appointment.list(res);
  })

  app.get('/appointments/:id', (req, res) => {
    const id = parseInt(req.params.id);

    Appointment.searchById(id, res)
  })

  app.post('/appointments', (req, res) => {
    const appointment = req.body;

    Appointment.add(appointment, res);
  })

  app.patch('/appointments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const values = req.body;

    Appointment.update(id, values, res);
  })

  app.delete('/appointments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    Appointment.delete(id, res);
  })
}