import express from 'express';
import postsController from '../controlller/posts.controller.js';


const router = express.Router();

router.post('/', postsController.createPost);
router.get('/', postsController.getPosts);
router.post('/comentario', postsController.createComentario);

export default router