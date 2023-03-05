const database = require('../models')

class ServicosAdicionaisReservadosController {
    // Rotas para acomodações
    static async listarServicos(req, res){
        try {
            const todosServicos = await database.ServicosAdicionaisReservados.findAll()
            return res.status(200).json(todosServicos)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async listarServicoPorID(req, res){
        const { id } = req.params
        try {
            const servicosPorID = await database.ServicosAdicionaisReservados.findOne(
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

    static async cadastrarServico(req, res){
        const novoServico = req.body
        try {
            const novoServicoCriado = await database.ServicosAdicionaisReservados.create(novoServico)
            return res.status(200).json(novoServicoCriado)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizarServico(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.ServicosAdicionaisReservados.update(novasInfos, { where: { id: Number(id) }})
            const servicoAtualizado = await database.ServicosAdicionaisReservados.findOne( { where: { id: Number(id) }})
            return res.status(200).json(servicoAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async excluirServico(req, res){
        const { id } = req.params
        try {
            await database.ServicosAdicionaisReservados.destroy( { where: { id: Number(id) }})
            return res.status(200).json({ message: `Serviço adicional Reservado com código: ${id} excluído com sucesso!`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restaurarServico(req, res){
        const { id } = req.params
        try{
            await database.ServicosAdicionaisReservados.restore({where: { id: Number(id)}})
            return res.status(200).json({message: `Servico Adicional Reservado de id: ${id} restaurado com sucesso!.`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = ServicosAdicionaisReservadosController