const database = require('../models')

class ReservasController {
    static async listarReservas(req, res){
        try {
            const todasReservas = await database.Reservas.findAll()
            return res.status(200).json(todasReservas)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async listarReservaPorID(req, res){
        const { id } = req.params
        try {
            const reservasPorID = await database.Reservas.findOne(
                {
                    where: {
                        id: Number(id)
                    }
                }
            )
            return res.status(200).json(reservasPorID)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async cadastrarReserva(req, res){
        const novaReserva = req.body
        try {
            const novoReservaCriada = await database.Reservas.create(novaReserva)
            return res.status(200).json(novoReservaCriada)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizarReserva(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Reservas.update(novasInfos, { where: { id: Number(id) }})
            const reservaAtualizada = await database.Reservas.findOne( { where: { id: Number(id) }})
            return res.status(200).json(reservaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async excluirReserva(req, res){
        const { id } = req.params
        try {
            await database.Reservas.destroy( { where: { id: Number(id) }})
            return res.status(200).json({ message: `Reserva com código: ${id} excluída com sucesso!`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restaurarReserva(req, res){
        const { id } = req.params
        try{
            await database.Reservas.restore({where: { id: Number(id)}})
            return res.status(200).json({message: `Reserva com código: ${id} restaurada com sucesso!.`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = ReservasController