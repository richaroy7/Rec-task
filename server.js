const express = require('express')
const mongoose = require('mongoose')
const Post = require('./models/post')

const postRouter = require('./routes/posts')
const app=express()
mongoose.connect('mongodb://localhost/rec',{ useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.urlencoded({ extended: false}))



//to send html code
app.set('view engine','ejs')


//creating a route 
app.get('/', async (req,res)=>{

    // const posts = await post.find()
    //res.send('hey!')

    const posts = await Post.find().sort({ date: 'desc'})

    res.render('posts/index',{ posts : posts })//to render the html file+posts passed will be available in ejs
})
app.use('/posts',postRouter)

app.listen(5000)