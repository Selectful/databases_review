const express = require('express')
const morgan = require('morgan')
const app = express()
const routes = require('../database/db_model')

/***************
TASK:

Require the database in the server file to run the code,
sync the tables and connect to the database

****************/

//Morgan lets us see the requests to the server that we make
app.use(morgan('dev'))


/***************
TASK:

Below, use the bodyParser middleware to access the body property
on the request object when sending data.

If sending data using CONTENT-TYPE x-www-form-urlencoded, you will need
to parse the applcation using a bodyParser OPTION
****************/


//Using express middleware to route all requests
//to the file where I handle my GET/POST requests
app.use('/', routes)


const port = process.env.PORT || 3000

app.listen(port, () => console.log(`server is listening on port ${port}`))

