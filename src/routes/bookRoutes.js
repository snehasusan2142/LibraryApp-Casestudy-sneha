const express= require('express');

const booksRouter=express.Router();
const Bookdata=require('../model/bookdata');
function router_book(nav){


booksRouter.get("/" , function(req,res){
  Bookdata.find()
  .then(function(books){
    res.render("books",{

      nav,
      title:'Library',
      books


  });

  })
          
       })
       booksRouter.get("/upload" , function(req,res){
  
        res.render("bookUpload",{
  
            nav,
            title:'Add Book',
        
           
  
        });
      })
       booksRouter.get('/:i' , function(req,res){
         const id=req.params.i;
         Bookdata.findOne({_id:id})
         .then(function(book){
          res.render("book",{

            nav,
            title:'Book..',
            book

        });
         })
        
     })

     return booksRouter

    }

//exporting

module.exports=router_book;