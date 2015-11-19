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
app.use(ejsLayout)

//root route
app.get('/', function(req, res){
  res.render('index')
})

//mongoose connection
mongoose.connect('mongodb://localhost/passport-authentication', function(err){
  if(err) return console.log('This shit is shit, cannot connect')
  console.log('Connected to MongoDB. Sweet!')
})

//now for the middleware
app.use(logger('dev'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())



app.listen(port, function(){
  console.log('Server running on port ' +  port);
})
