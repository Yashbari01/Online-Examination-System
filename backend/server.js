const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const examRoutes = require('./routes/examRoutes');

dotenv.config();
connectDB();

const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/exams', examRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
