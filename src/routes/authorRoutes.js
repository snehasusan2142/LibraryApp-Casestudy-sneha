const express= require('express');

const authorsRouter=express.Router();
const Authordata = require('../model/authordata');

function router_auth(nav){


authorsRouter.get("/" , function(req,res){
  Authordata.find()
  .then(function(authors){
     res.render("authors",{
    nav,
    title:'Authors',
    authors


});})
          
       })

       
       authorsRouter.get("/upload" , function(req,res){
  
        res.render("authorUpload",{
  
            nav,
            title:'Add Author',
        
           
  
        });
  
   
  
    })


       authorsRouter.get('/:i' , function(req,res){
        const id=req.params.i;
        Authordata.findOne({_id:id})
        .then(function(author){
          res.render("author",{

            nav,
            title:'Author..',
            author

        });
        })
      
    })



     return authorsRouter

    }

//exporting

module.exports=router_auth;