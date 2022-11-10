//these will require whatever was in the exports
const express = require('express')
//mongoose helps connect js n mongodb
const mongoose = require('mongoose')
const Post = require('./models/post')
//to perform requests other than get/post
const methodOverride = require('method-override')

//bringing the router we exported in /posts
const postRouter = require('./routes/posts')

//we are creating an object called app of the express function
const app=express()
mongoose.connect('mongodb://localhost/rec')

//mounts middleware function at specified path
app.use(express.urlencoded({ extended: false}))

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))



//to send html code,on stting view engine express internally loads the the module for that engine
app.set('view engine','ejs')


//creating a route 
app.get('/', async (req,res)=>{


    const posts = await Post.find().sort({ date: 'desc'})
     
    //renders the view and sends rendered html string to client
    res.render('posts/index',{ posts : posts })//to render the html file+posts passed as object in key value pair will be available in ejs
})

//mounting the postrouter
app.use('/posts',postRouter)

app.listen(5000, ()=>{
    console.log('server is running at port 5000')
})