const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const catchRoutes = require('../routes/countRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use('/api',catchRoutes);



app.listen(3000,() => {
    console.log('Server is running on port 3000');
});

