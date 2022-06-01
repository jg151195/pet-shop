import proprietarioRepository from '../repository/proprietarios.repository.js'
import animalRepository from '../repository/animais.repository.js'


async function createProprietario(proprietario){
    return await proprietarioRepository.insertProprietario(proprietario);
}
async function getProprietarios(){
    return await proprietarioRepository.getProprietarios();
}
async function getProprietario(id){
    return await proprietarioRepository.getProprietario(id);
}
async function updateProprietario(proprietario){
    return await proprietarioRepository.updateProprietario(proprietario);
}

async function deleteProprietario(id){
    const proprietario = await proprietarioRepository.getProprietario(id);
    if(proprietario){
        const animais = await animalRepository.getAnimais();
        if(animais.find(({proprietario_id})=> proprietario.proprietario_id === proprietario_id)){
            return "Proprietario com animais em seu nome"
        } else{
            await proprietarioRepository.deleteProprietario(id);
        }
        
    } else{
        throw new Error("Proprietario nao encontrado")
    }
}


export default {
    createProprietario,
    getProprietarios,
    getProprietario,
    updateProprietario,
    deleteProprietario
}