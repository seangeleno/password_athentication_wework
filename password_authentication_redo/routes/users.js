var express    = require('express')
,   passport   = require('passport')
,   userRouter = express.Router()

userRouter.route('/login')
  .get(function(req,res){
    res.render('login', {message: req.flash('loginMsage')})
  })
  .post(/* create session using passport*/)

userRouter.route('/signup')
    .get(function(req,res){
      res.render('signup', {message: req.flash('loginMessage')})
    })
    .post(/* create account using passport*/)

userRouter.get('/profile', isLoggedIn, function(req, res){
  //render the user's profile (only if htey ar ecurrently logged in)
})

userRouter.get('/logout', function(req, res){
  //destroy the session, and redirect the user back to the home page
})

//a method used to authorize a user BEFORE allowing them to proceed ot the profile page:
function isLoggedIn(req,res,next){
  if(req.isAuthenticated()) return next(0
  res.redirect('/')
}

module.exports = userRouter
