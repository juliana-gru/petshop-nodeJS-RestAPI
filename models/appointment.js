const moment = require('moment');

const connection = require('../infra/connection');

//MODEL

class Appointment {
  list(res) {
    const sql = 'SELECT * FROM Appointments'

    connection.query(sql, (error, results) => {
      error ? res.status(400).json(error) : res.status(200).json(results);
    })
  }

  searchById(id, res) {
    const sql = `SELECT * FROM Appointments WHERE id=${id}`

    connection.query(sql, (error, results) => {
      const appointment = results[0];
      error ? res.status(400).json(error) : res.status(200).json(appointment);
    })
  }
  
  add(appointment, res) {
    const createdAt = moment().format('YYYY-MM-DD HH:mm:ss')
    const date = moment(appointment.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
    
    const isDateValid = moment.utc(date).isSameOrAfter(moment.utc(createdAt));
    const isClientValid = appointment.client.length >= 2;
    
    const validations = [
      {
        name: 'date',
        valid: isDateValid,
        message: 'Date must be after or equal to current date'
      },
      {
        name: 'client',
        valid: isClientValid,
        message: 'Client name must have at least 2 characters.'
      }
    ];

    const errors = validations.filter(field => !field.valid)
    const thereAreErrors = errors.length;

    if (thereAreErrors) res.status(400).json(errors);
    else {
      const datedAppointment = {...appointment, createdAt, date};
    
      const sql = 'INSERT INTO Appointments SET ?'

      connection.query(sql, datedAppointment, (error, results) => {
        error ? res.status(400).json(error) : res.status(201).json(results)
      })
    }    
  }
}

module.exports = new Appointment;