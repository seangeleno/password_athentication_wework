var express      = require('express')
,   app          = express()
,   ejs          = require('ejs')
,   ejsLayout    = require('express-ejs-layouts')
,   mongoose     = require('mongoose')
,   flash        = require('connect-flash')
,   logger       = require('morgan')
,   cookieParser = require('cookie-parser')
,   bodyParser   = require('body-parser')
,   session      = require('express-session')
,   passport     = require('passport')
,   port         = process.env.PORT || 3000

//configure ejs
app.set('view engine', 'ejs')
app.use(ejsLayouts)

//root route
app.get('/', function(req, res){
  res.render('index')
})

app.listen(port, function(){
  console.log('Server running on port ' +  port);
})
