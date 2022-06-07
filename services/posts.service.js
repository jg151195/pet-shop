import postsRepository from "../repository/posts.repository.js";

async function createPost(post){
    return await postsRepository.createPost(post);
}

async function getPosts(){
    return await postsRepository.getPosts();
}

async function createComentario(comentario){
    return await postsRepository.createComentario(comentario);
}

export default {
    createPost,
    getPosts,
    createComentario
}