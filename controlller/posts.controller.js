import postsService from "../services/posts.service.js";

async function createPost(req,res,next){
    try{
        let post = req.body
        res.send(await postsService.createPost(post))
    } catch(err){
        throw err;
    }
}

async function getPosts(req,res,next){
    try{
        res.send(await postsService.getPosts());
    } catch (err){
        throw err;
    }
}

async function createComentario(req,res,next){
    try{
        let comentario = req.body
        res.send(await postsService.createComentario(comentario));;
    } catch(err){
        throw err;
    }
}

export default {
    createPost,
    getPosts,
    createComentario
}