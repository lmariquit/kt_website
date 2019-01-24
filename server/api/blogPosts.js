const router = require('express').Router()
const {Blog} = require('../db/models')
module.exports = router

// GET --> api/blog
router.get('/', async (req, res, next) => {
  try {
    const allBlogPosts = await Blog.findAll()
    res.json(allBlogPosts)
  } catch (err) {
    next(err)
  }
})

// POST --> api/blog/
router.post('/', async (req, res, next) => {
  const {title, content, pic} = req.body
  console.log(title, content, pic)
  try {
    const added = await Blog.create({
      title,
      content,
      pic
    })
    res.status(201).json(added)
  } catch (err) {
    next(err)
  }
})
