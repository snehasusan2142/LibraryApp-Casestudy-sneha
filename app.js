const express= require('express');
const methodOverride=require('method-override');
const app= new express();
const    passport = require("passport"); 
 const   bodyParser = require("body-parser"); 
const    LocalStrategy = require("passport-local"); 
// const    passport = require("passport");  
// const    LocalStrategy = require("passport-local"); 


const nav=[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const loginRouter=require('./src/routes/loginRoutes')(nav);
const signinRouter=require('./src/routes/sigininRoutes')(nav);
const adminRouter=require('./src/routes/adminRoutes')(nav);

app.use(express.static('./public'))

app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set('views','./src/views');
app.use(methodOverride('_method'));
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signin',signinRouter);
app.use('/admin',adminRouter);
const flash = require('connect-flash');
const session = require('express-session');
// var flash = require('express-flash');

// Passport Config
require('./src/config/passport')(passport);
// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );


  
app.use(passport.initialize()); 
app.use(passport.session()); 
// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });
  
  

app.get("/" , function(req,res){
    res.render("index",{

       nav,
        title:'Library'


    });
})

    


app.listen(7777);
console.log("Ready")
