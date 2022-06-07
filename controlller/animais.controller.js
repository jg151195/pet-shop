import animalService from '../services/animais.service.js'

async function createAnimal(req,res){
    try{
        
        let animal = req.body;
        if(!animal.nome || !animal.tipo || !animal.proprietarioId){
            throw new Error("Nome, Tipo e ID do proprietário obrigatórios");
        }
        animal = await animalService.createAnimal(animal);
        res.send(animal)
    } catch(err){
        throw err;
    }
}

async function getAnimais(req,res){
    try{
        res.send(await animalService.getAnimais(req.query.proprietarioId));
    } catch(err){
        throw err
    }
}

async function getAnimal(req,res){
    try{
        res.send(await animalService.getAnimal(req.params.id));
    } catch(err){
        throw err;
    }
}

async function updateAnimal(req,res){
    try{
        let animal = req.body;
        if(!animal.nome || !animal.tipo || !animal.animalId || !animal.proprietarioId){
            throw new Error("Nome, tipo, ID do animal e ID do proprietário obrigatórios");
        }
        animal = await animalService.updateAnimal(animal);
        res.send(animal)
    } catch(err){
        throw err;
    }
}

async function deleteAnimal(req,res){
    try{
        res.send(await animalService.deleteAnimal(req.params.id));
    } catch(err){
        throw err;
    }
}


export default {
    createAnimal,
    getAnimais,
    getAnimal,
    updateAnimal,
    deleteAnimal
}