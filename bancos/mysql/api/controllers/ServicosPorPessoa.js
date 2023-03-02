const { json } = require('body-parser')
const { parse } = require('path')
const database = require('../models')

class ServicosPorPessoaController {
    static async listarServicos(req, res){
        try {
            const todosServicos = await database.ServicosPorPessoa.findAll()
            return res.status(200).json(todosServicos)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async listarServicosPorID(req, res){
        const { id } = req.params
        try {
            const servicosPorID = await database.ServicosPorPessoa.findOne(
                {
                    where: {
                        id: Number(id)
                    }
                }
            )
            return res.status(200).json(servicosPorID)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async cadastrarServicos(req, res){
        const novoServico = req.body
        try {
            const novoServicoCriado = await database.ServicosPorPessoa.create(novoServico)
            return res.status(200).json(novoServicoCriado)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizarServicos(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.ServicosPorPessoa.update(novasInfos, { where: { id: Number(id) }})
            const servicoAtualizado = await database.ServicosPorPessoa.findOne( { where: { id: Number(id) }})
            return res.status(200).json(servicoAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async excluirServicos(req, res){
        const { id } = req.params
        try {
            await database.ServicosPorPessoa.destroy( { where: { id: Number(id) }})
            return res.status(200).json({ message: `Serviço com código: ${id} excluído com sucesso!`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restaurarServicos(req, res){
        const { id } = req.params
        try{
            await database.ServicosPorPessoa.restore({where: { id: Number(id)}})
            return res.status(200).json({message: `Servico com código: ${id} restaurado com sucesso!.`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = ServicosPorPessoaController