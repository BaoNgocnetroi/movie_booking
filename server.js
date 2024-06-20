// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('API is running'));

app.listen(port, () => console.log(`Server running on port ${port}`));
