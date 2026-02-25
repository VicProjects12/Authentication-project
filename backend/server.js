require('dotenv').config(); // Load .env settings FIRST


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Allow frontend to talk to us
app.use(cors());

// Allow server to read json data
app.use(express.json());

// connect auth routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


//connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Database connected '))
    .catch(err => console.log('DB Error:', err));

    // Start the server
    app.listen(process.env.PORT, () => {
        console.log('Server started on port', process.env.PORT);
    });

