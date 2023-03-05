const database = require('../models')

class ServicoAdicionalController {
    // Rotas para acomodações
    static async listarServicos(req, res){
        try {
            const todosServicos = await database.ServicosAdicionais.findAll()
            return res.status(200).json(todosServicos)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async listarServicoPorID(req, res){
        const { id } = req.params
        try {
            const servicoAdicionalPorID = await database.ServicosAdicionais.findOne(
                {
                    where: {
                        id: Number(id)
                    }
                }
            )
            return res.status(200).json(servicoAdicionalPorID)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async cadastrarServico(req, res){
        const novoServicoAdicional = req.body
        try {
            const novoServicoAdicionalCriado = await database.ServicosAdicionais.create(novoServicoAdicional)
            return res.status(200).json(novoServicoAdicionalCriado)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizarServico(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.ServicosAdicionais.update(novasInfos, { where: { id: Number(id) }})
            const servicosAdicionalAtualizado = await database.ServicosAdicionais.findOne( { where: { id: Number(id) }})
            return res.status(200).json(servicosAdicionalAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async excluirServico(req, res){
        const { id } = req.params
        try {
            await database.ServicosAdicionais.destroy( { where: { id: Number(id) }})
            return res.status(200).json({ message: `Serviço adicional com código: ${id} excluído com sucesso!`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restaurarServico(req, res){
        const { id } = req.params
        try{
            await database.ServicosAdicionais.restore({where: { id: Number(id)}})
            return res.status(200).json({message: `Servico Adicional de id: ${id} restaurado com sucesso!.`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = ServicoAdicionalController