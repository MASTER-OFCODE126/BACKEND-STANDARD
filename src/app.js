const express = require('express');
const app = express();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors({
    origin : "http://localhost:5173",
    credentials:true
}))

/* require all the routes Here*/
const authRouter = require('./routes/auth.route')

/* using all the routes */
app.use('/api/auth',authRouter);



module.exports = app;
