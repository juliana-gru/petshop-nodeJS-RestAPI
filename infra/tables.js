class Tables {
	init(connection) {
    this.connection = connection;
    this.createAppointments();
	}

	createAppointments() {
		const sql =
			'CREATE TABLE IF NOT EXISTS Appointments (id int NOT NULL AUTO_INCREMENT, client varchar(50) NOT NULL, pet varchar(20), service varchar(20) NOT NULL, date datetime NOT NULL, createdAt datetime NOT NULL, status varchar(20) NOT NULL, observations text, PRIMARY KEY(id))';

		this.connection.query(sql, (error) => error ? console.log(error) : '')     
  }
}

module.exports = new Tables;
