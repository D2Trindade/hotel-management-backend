const { json } = require('body-parser')
const database = require('../models')

class PessoaController {
    //Rotas para pessoas (todas sem filtro)
    static async listarPessoas(req, res){
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async listarPessoaPorID(req, res){
        const { id } = req.params
        try {
            const pessoaPorID = await database.Pessoas.findOne(
                {
                    where: {
                        id: Number(id)
                    }
                }
            )
            return res.status(200).json(pessoaPorID)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async cadastrarPessoa(req, res){
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizarPessoa(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Pessoas.update(novasInfos, { where: { id: Number(id) }})
            const pessoaAtualizada = await database.Pessoas.findOne( { where: { id: Number(id) }})
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async excluirPessoa(req, res){
        const { id } = req.params
        try {
            await database.Pessoas.destroy( { where: { id: Number(id) }})
            return res.status(200).json({ message: `id ${id} excluído com sucesso!`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async restaurarPessoa(req, res){
        const { id } = req.params
        try{
            await database.Pessoas.restore({where: { id: Number(id)}})
            return res.status(200).json({message: `Pessoa de id: ${id} restaurada.`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController