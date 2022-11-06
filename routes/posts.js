const { resolveInclude } = require('ejs')
const express = require('express')
const router = express.Router()
const Post = require('./../models/post')


//all routes here are relative to posts route
router.get('/new',(req,res)=>{
    res.render('posts/new')
})
router.get('/:id',(req,res) =>{
   res.send(req.params.id)
})
router.post('/', async (req,res) => {
    let post = new Post({
       title: req.body.title,
       subtitle: req.body.subtitle,
       name: req.body.name,
       description: req.body.description
    })
    try{
        post = await article.save()
        res.redirect(`/posts/${post.id}`)
    }catch(e)
    {
       res.render('posts/new',{ post: post})
    }

    

})
module.exports = router