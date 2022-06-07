import servicoService from "../services/servicos.service.js"

async function createServico(req,res){
    try{
        
        let servico = req.body;
        if(!servico.descricao || !servico.valor || !servico.animalId){
            throw new Error("Descrição, Valor e ID do animal obrigatórios");
        }
        servico = await servicoService.createServico(servico);
        res.send(servico)
    } catch(err){
        throw err;
    }
}

async function getServicos(req, res, next) {
    try {
        res.send(await servicoService.getServicos(req.query.proprietarioId));

    } catch (err) {
        throw err
    }
}

export default {
    createServico,
    getServicos
}