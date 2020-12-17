const express= require('express');

const signinRouter=express.Router();

 const User=require('../model/user');
 const session = require('express-session');
 var flash = require('express-flash');


function router_signin(nav){

signinRouter.get("/" , function(req,res){
           res.render("signin",{

               nav,
               title:'Library'

           });
       })

       
signinRouter.post("/" , function(req,res,next){
 
    var email =req.body.email; 
    var pass = req.body.passwordsignin; 
   
  
    var data = { 
        "email":email, 
        "password":pass, 
        
    } 
    var data=User(data);
    console.log(data);
     
   
    User.findOne({email: email,password:pass})
        .then(user => {
        if (!user) {
            console.log('That email is not registered' );
            res.redirect("/signin")
            // req.flash("Email not Registered")
       
        }
        else{
            
            res.redirect('/')
            console.log("sucess--happy reading!!!")
            
        }
    });
       

    // User.findOne({  }, function(err, doc){
        
    //     if(doc) {
    //         console.log("Found: " + email + ", pass=" + pass);
    //         res.redirect('/');
    //     } else {
    //         console.log("Not found: " + email);
    //         res.redirect('/signin')
    //     }
        
    // });

    // passport.authenticate('local', {
    //     successRedirect: '/index',
    //     failureRedirect: '/signin',
    //     // failureFlash: true
    //   })(req, res, next);
})



return signinRouter

    }

//exporting

module.exports=router_signin;