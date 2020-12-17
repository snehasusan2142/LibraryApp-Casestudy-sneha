const express= require('express');

const loginRouter=express.Router();
const { check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
var flash = require('express-flash');
const passport=require('passport')
// const router = express.Router();

const userdata=require('../model/user');
function router_login(nav){



loginRouter.get("/" , function(req,res){
           res.render("login",{

               nav,
               title:'Library'
        


           });
       })

 loginRouter.post("/" , function(req,res){
    let errors = [];
        var name = req.body.firstname; 
        var email =req.body.email; 
        var pass = req.body.passwordInput1; 
        var phone =req.body.phone; 
        var data = { 
            "name": name, 
            "email":email, 
            "password":pass, 
            "phone":phone 
        } 
        var data=userdata(data);
        userdata.findOne({ email: email })
        .then(user => {
            if (user) {
               console.log("Already registered mail id")
                res.render('login',{errors,nav,
                    title:'Library'
               })
        }
        else{
            const newUser=userdata(data)
            console.log(newUser);
            // bcrypt.genSalt(10, (err, salt) => {
            //     bcrypt.hash(newUser.password, salt, (err, hash) => {
            //       if (err) throw err;
            //       newUser.password = hash;
            //       newUser
                    newUser.save();
                    console.log("Successfully registered ..you can login now")
                    res.redirect('/signin')
            //         .then(user => {
            //         //   req.flash(
            //         //     'success_msg',
            //         //     'You are now registered and can log in'
            //         //   );
            //           res.redirect('/signin');
            //         })
            //         .catch(err => console.log(err));
            //     });
            //   });
                // newuser.save();
        // return res.redirect('/signin'); 
    
        }
    })
})
        
        
        
    


      
     

     return loginRouter

    }

//exporting

module.exports=router_login;