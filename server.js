const express = require('express')
const mongoose = require('mongoose')


const postRouter = require('./routes/posts')
const app=express()
mongoose.connect('mongodb://localhost/rec',{ useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.urlencoded({ extended: false}))
//all routes in the postRouter will be at end of /posts


//to send html code
app.set('view engine','ejs')


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
app.use('/posts',postRouter)

app.listen(5000)