require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('The server is running');
});

app.listen(5000, () => {
  console.log('Listening on port 5000');
  console.log(`Your secret is ${process.env.SECRET_PASSWORD}`);
});

