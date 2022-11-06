const express = require('express')
const mongoose = require('mongoose')


const postRouter = require('./routes/posts')
const app=express()
mongoose.connect('mongodb://localhost/rec',{ useNewUrlParser: true,
    useUnifiedTopology: true
})

//all routes in the postRouter will be at end of /posts
app.use('/posts',postRouter)

//to send html code
app.set('view engine','ejs')

app.use(express.urlencoded({ extended: false}))
//creating a route 
app.get('/',(req,res)=>{
    //res.send('hey!')

    const posts =[{
        title: 'Company name',
        subtitle: 'kind of job',
        name : 'name',
        createdAt: new Date(),
        description: 'Experience'

    },
    {
        title: 'Adobe',
        subtitle: 'Internship',
        name : 'Priya Pasumarthi',
        createdAt: new Date(),
        description: 'Experience'

    }
]
    res.render('posts/index',{ posts : posts })//to render the html file+posts passed will be available in ejs
})

app.listen(5000)