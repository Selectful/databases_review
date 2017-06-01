// const dbStuff = require()

modules.exports = app => {
  app.get('/', (req, res, next) => {
    console.log('this is a get')
  })
  app.post('/', (req, res, next) => {
    console.log('this is a post')
  })
}