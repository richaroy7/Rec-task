const { resolveInclude } = require('ejs')
const express = require('express')

//creating a router which will handle all kinds of requests
const router = express.Router()
const Post = require('./../models/post')


//all routes here are relative to posts route
router.get('/new',(req,res)=>{
    res.render('posts/new',{ post: new Post()})
})



router.get('/:id',async (req,res) =>{
    const post = await Post.findById(req.params.id)
    if(post==null)
    res.redirect('/')
   res.render('posts/show',{ post: post})
})
router.post('/', async (req,res) => {
    let post = new Post({
       title: req.body.title,
       subtitle: req.body.subtitle,
       name: req.body.name,
       description: req.body.description
    })
    try{
        post = await post.save()
        res.redirect(`/posts/${post.id}`)
    }catch(e)
    {
        console.log(e)
       res.render('posts/new',{ post: post})
    }

    

})

router.delete('/:id', async(req,res)=>{
    await Post.findByIdAndDelete(req.params.id)
    res.redirect('/')
})
module.exports = router