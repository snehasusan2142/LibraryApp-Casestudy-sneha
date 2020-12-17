const express= require('express');

const Bookdata=require('../model/bookdata');
const Authordata=require('../model/authordata');
// const ImageUpload=require('../model/imgupload');
const adminRouter=express.Router();
const path=require('path');
const multer=require('multer');

// set storage
const storage=multer.diskStorage({
    destination:'./public/images',
    filename:function(req, file,cb){
    cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
    }
});

// init multer
const upload=multer({
    storage:storage
});



function router(nav){

    adminRouter.get("/bookupload" , function(req,res){
        res.render("bookUpload",{

            nav,
            title:'Library',
        
        });
    })

    adminRouter.post("/bookupload/add" ,upload.single('Image'), (req, res, next) => {
        // upload(req, res, function (err) {
        
        // const file=req.file;})
        const file=req.file;
        // console.log(file)
          var item={title:req.body.Book,
              author:req.body.Author,
              genre:req.body.Genre,
      
              img:req.file.filename}
            //   console.log(item)
            
              var book=Bookdata(item);
              book.save();
              res.redirect('/books')
        })  

    adminRouter.get("/authorupload" , function(req,res){
        res.render("authorUpload",{

            nav,
            title:'Library',
 
        });
    })

    adminRouter.post("/authorupload/add",upload.single('Image'),(req, res, next) => {
       
        // const file=req.file;
    // console.log(file)
        var item={name:req.body.Name,
        book:req.body.Book,
        genre:req.body.Genre,

        img:req.file.filename}
        // console.log(item);
        
        var author=Authordata(item);
        author.save();
        res.redirect('/authors')
        })

  //book update button 
adminRouter.post('/bookupdate/:id',async(req,res)=>{
    // res.send("im here"+req.params.id)
    res.render('bookUpdate' ,{

                        nav,
                        title:'Library',
                        id:req.params.id
                        
                    })

    })

// bookupdate

    adminRouter.put('/bookupdate/:id',upload.single('Image') ,async(req,res)=>{
 
        index=req.params.id;       
        var newvalues = {
            
            title:req.body.Book,
            author:req.body.Author,
            genre:req.body.Genre,
            img:req.file.filename

        };
        
        Bookdata.findOneAndUpdate({_id: index},newvalues,{new:true},(err,doc)=>{
            if(err){}
            else{
                res.redirect('/books');
            }
        })
        // console.log(newvalues)
        
        
        })
  

       

        
  //author update button 
adminRouter.post('/authorupdate/:id',async(req,res)=>{
    // res.send("im here"+req.params.id)
    res.render('authorUpdate' ,{

                        nav,
                        title:'Library',
                        id:req.params.id
                        
                    })

    })

// bookupdate

    adminRouter.put('/authorupdate/:id',upload.single('Image') ,async(req,res)=>{
 
        index=req.params.id;       
        var newvalues = {
            
            name:req.body.Book,
            book:req.body.Author,
            genre:req.body.Genre,
            img:req.file.filename

        };
        
        Authordata.findOneAndUpdate({_id: index},newvalues,{new:true},(err,doc)=>{
            if(err){}
            else{
                res.redirect('/authors');
            }
        })
        // console.log(newvalues)
        
        
        })
  

       


    adminRouter.delete('/bookdel/:id' , async(req,res)=>{
          let book
    try {
        book=await Bookdata.findById(req.params.id)
        
        await book.remove()
        res.redirect('/books')
    } catch  {
        if (book ==null){
            res.redirect('/')
        }
      
        
    }

})


adminRouter.delete('/authordel/:id' , async(req,res)=>{
    let author
try {
  author=await Authordata.findById(req.params.id)
  
  await author.remove()
  res.redirect('/authors')
} catch  {
  if (author ==null){
      res.redirect('/')
  }

  
}

})

    
      

    return adminRouter

}

//exporting

module.exports=router;