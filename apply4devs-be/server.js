const cors = require('cors');
const express = require('express')
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.on('connected', ()=>{
    console.log('DB Connected successfully!')
})

mongoose.connection.on('error', (error)=>{
    console.log('DB connection failed')
})

// routes
const userRoutes = require('./routes/companyRoutes')
app.use('/api/company', userRoutes)

const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})