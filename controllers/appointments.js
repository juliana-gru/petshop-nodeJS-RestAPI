module.exports = app => {
  app.get('/appointments', (req, res) => res.send('Server running!'));

  app.post('/appointments', (req, res) => {
    console.log(req.body);
    res.send('got your post')
  })
}