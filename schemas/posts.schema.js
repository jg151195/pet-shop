import mongoose from "mongoose";
import ComentariosSchema from "./comentarios.schema.js";

const PostSchema = new mongoose.Schema(
    {
        titulo: String,
        conteudo: String,
        comentarios:[ComentariosSchema]
    }, {collection: "posts"}
);

export default PostSchema