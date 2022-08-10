const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 5000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/tasks' ,require('./routes/task.routes'))

//static files
app.use(express.static(path.join(__dirname, 'client')))

//starting the server

app.listen(app.get('port'), () => {
    console.log(`server running on port: ${app.get('port')}`)
})