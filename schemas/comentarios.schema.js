import mongoose from "mongoose";

const ComentariosSchema = new mongoose.Schema(
    {
        nome: String,
        conteudo: String,
    }, {collection: "posts"}
);

export default ComentariosSchema
