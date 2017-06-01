const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const registerApi = require('./api')
// SERVER SERVING IN THESE PORTS
const PORT = process.env.PORT || 3000;

// EXPRESS ESSENTIALS
const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use(morgan('dev'))
  .use(express.static(path.join(__dirname, '/')))

// PULLING SERVER INTO API CONTEXT
registerApi(app);

// ERROR HANDLER
app.use((err, req, res, next) => {
  if(err) {
    res.status(err.stausCode || err.status || 500)
      .send(err.data || err.message || {});
  } else {
    next();
  }
});

// CATCHER
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/'))
})

// SERVER LISTENER
const server = app.listen(PORT, () => {
  console.log(`Server is serving up on ${PORT}`);
});
