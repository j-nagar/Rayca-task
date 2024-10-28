const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/tickets', ticketRoutes);

mongoose.connect('mongodb://localhost/ticketDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(3001, () => console.log('Ticket Service running on port 3001')))
  .catch(err => console.error(err));
