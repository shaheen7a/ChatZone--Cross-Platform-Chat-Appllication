const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.js');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Hello, World!');
})

app.get('/auth',  authRoutes);

app.listen(PORT, (req, res) => console.log(`Server is running at ${PORT}`));