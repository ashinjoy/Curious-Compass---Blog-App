import express from 'express'
import { signup , login } from '../controller/authController.js'
import { createPost ,getAllPosts,getPost } from '../controller/postController.js'
import { isAuthenticated } from '../middleware/authenticationMiddleware.js'
import { upload } from '../utils/multer.js'

const router = express.Router()

router.post('/signup',signup)
router.post('/login',login)
router.post('/createpost',isAuthenticated,upload.single('thumbnail'),createPost)
router.get('/allposts',isAuthenticated,getAllPosts)
router.get('/post/:id',isAuthenticated,getPost)

export default router