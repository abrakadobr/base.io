var pug = require('pug')

module.exports = function(app) {
  app.get('/',function(req,res) {
    if (typeof(req.session.op) === 'undefined')
      req.session.op = 332
    res.send( pug.renderFile('./templates/views/index.pug') )
  })
}
