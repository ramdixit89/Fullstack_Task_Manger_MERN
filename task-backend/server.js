const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { mongoDB } = require('./config/db');
// Load env variables before anything else
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Connect Databases
mongoDB();
// Add routes here
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tasks', require('./routes/taskRoute'));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
