import proprietarioService from '../services/proprietarios.service.js'

async function createProprietario(req,res){
    try{
        let proprietario = req.body;
        if(!proprietario.nome || !proprietario.telefone){
            throw new Error("Nome e Telefone obrigatórios");
        }
        proprietario = await proprietarioService.createProprietario(proprietario);
        res.send(proprietario)
    } catch(err){
        throw err;
    }
}

async function getProprietarios(req,res){
    try{
        res.send(await proprietarioService.getProprietarios());
    } catch(err){
        throw err
    }
}

async function getProprietario(req,res){
    try{
        res.send(await proprietarioService.getProprietario(req.params.id));
    } catch(err){
        throw err;
    }
}

async function updateProprietario(req,res){
    try{
        let proprietario = req.body;
        if(!proprietario.nome || !proprietario.telefone || !proprietario.proprietario_id){
            throw new Error("Nome, Telefone e ID do proprietario obrigatórios");
        }
        proprietario = await proprietarioService.updateProprietario(proprietario);
        res.send(proprietario)
    } catch(err){
        throw err;
    }
}

async function deleteProprietario(req,res){
    try{
        res.send(await proprietarioService.deleteProprietario(req.params.id));
    } catch(err){
        throw err;
    }
}


export default {
    createProprietario,
    getProprietarios,
    getProprietario,
    updateProprietario,
    deleteProprietario
}