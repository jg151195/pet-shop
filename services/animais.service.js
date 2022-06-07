import animalRepository from '../repository/animais.repository.js'
import proprietarioRepository from '../repository/proprietarios.repository.js'

async function createAnimal(animal){
    const proprietario = await proprietarioRepository.getProprietario(animal.proprietarioId);
    if(!proprietario){
        return "Proprietario não existe"
    } else{
        return await animalRepository.insertAnimal(animal);
    }
    
}
async function getAnimais(proprietarioId){
    if(proprietarioId){
        return await animalRepository.getAnimaisByProprietarioId(proprietarioId);
    }
    return await animalRepository.getAnimais();
}
async function getAnimal(id){
    return await animalRepository.getAnimal(id);
}
async function updateAnimal(animal){
    return await animalRepository.updateAnimal(animal);
}

async function deleteAnimal(id){
    return await animalRepository.deleteAnimal(id);
}


export default {
    createAnimal,
    getAnimais,
    getAnimal,
    updateAnimal,
    deleteAnimal
}