import Servico from "../models/servicos.model.js"
import Proprietario from "../models/proprietarios.model.js"
import Animal from "../models/animais.model.js"

async function createServico(servico){

    try{
        return await Servico.create(servico);

    } catch(err){
        throw err
    }
}

async function getServicosByProprietarioId(proprietarioId){
    try{
        return await Servico.findAll({
            include: [
                {   
                    model: Animal,
                    where:{
                        proprietarioId
                    }
                }
                
            ]
        })
    } catch(err){
        throw err
    }
}

async function getServicos() {

    try {
        return await Servico.findAll();
    } catch (err) {
        throw err;
    }
}

export default {
    createServico,
    getServicos,
    getServicosByProprietarioId
}