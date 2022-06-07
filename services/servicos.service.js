import servicoRepository from '../repository/servicos.repository.js'
import animalRepository from '../repository/animais.repository.js'


async function createServico(servico){
    const animal = await animalRepository.getAnimal(servico.animalId);
    if(!animal){
        return "Animal não existe"
    } else{
        return await servicoRepository.createServico(servico);
    }
    
}


async function getServicos(proprietarioId){
    console.log(proprietarioId)
    if(proprietarioId){
        return await servicoRepository.getServicosByProprietarioId(proprietarioId);
    }
    return await servicoRepository.getServicos();
}

export default {
    createServico,
    getServicos
}