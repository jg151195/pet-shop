import { connect } from "./mongo.db.js";
import PostSchema from "../schemas/posts.schema.js";
import { ObjectId } from "mongodb";
import ComentariosSchema from "../schemas/comentarios.schema.js";

async function createPost(post){
    try{
        const mongoose = await connect();
        const Post = mongoose.model("Post", PostSchema)
        post = new Post(post);
        return await post.save();
    } catch(err){
        throw err
    }
}

async function getPosts(){
    try{
        const mongoose = await connect();
        const Post = mongoose.model("Post", PostSchema)
        
        const query = Post.find({});
        return await query.exec();
    } catch(err){
        throw err
    }
}

async function createComentario(comentario){

    try{
        const mongoose = await connect();
        const Post = mongoose.model("Post", PostSchema)
        const query = Post.findOne(ObjectId(comentario._id));
        const post = await query.exec();
        post.comentarios.push(comentario)
        await Post.findOneAndUpdate(ObjectId(comentario._id),post);
  
    } catch(err){
        throw err
    }
}

export default{
    createPost,
    getPosts,
    createComentario
}