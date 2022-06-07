import mongoose from "mongoose";

async function connect(){
    const uri = "mongodb+srv://root:<password>@igti.ijvmndn.mongodb.net/pet-shop?retryWrites=true&w=majority"
    return await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
}

export { connect }