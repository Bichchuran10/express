const express=require('express')

const app=express()

const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))

app.use('/add-product',(req,res,next)=>{
    res.send("<form action='/product' method='POST'><input type='text' name='title'><input type='text' name='size'><button type='submit'>Add product</button></form>")
   // next() //alows the request to continue to the next middleware in line

});

app.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
    res.send('<h1>hello from express</h1>')
});


app.listen(3000)

