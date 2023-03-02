
const { json } = require('body-parser')
const { parse } = require('path')
const database = require('../models')

class QuartoController {

    // Rotas para os quartos
    static async listarQuartos(req, res){
        const { acomodacaoID } = req.params
        try {
            const todosQuartos = await database.Quartos.findAll({ 
                where: { 
                    acomodacao_id: Number(acomodacaoID)
                }
            })
            return res.status(200).json(todosQuartos)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async listarQuartoPorNumero(req, res){
        const { numeroQuartoID } = req.params
        try {
            const umQuarto = await database.Quartos.findOne(
                {
                    where: {
                        numero_quarto: Number(numeroQuartoID)
                    }
                }
            )
            return res.status(200).json(umQuarto)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async adicionarQuarto(req, res){
        const { acomodacaoID } = req.params
        const novoQuarto = {...req.body, acomodacao_id: Number(acomodacaoID)}
        try {
            const novoQuartoCadastrado = await database.Quartos.create(novoQuarto)
            return res.status(200).json(novoQuartoCadastrado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarQuarto(req, res){
        const {  acomodacaoID, quartoID } = req.params
        const novasInformacoes = req.body
        try {
            await database.Quartos.update(novasInformacoes, {where: {id: Number(quartoID), acomodacao_id: Number(acomodacaoID)}})
            const quartoAtualizado = await database.Quartos.findOne({where: {id: Number(quartoID)}})
            return res.status(200).json(quartoAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async excluirQuarto(req, res){
        const { acomodacaoID, quartoID} = req.params
        try {
            await database.Quartos.destroy({where: {numero_quarto: Number(quartoID)}})
            return res.status(200).json({message: `Quarto de número: ${quartoID} excluído com sucesso!`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restaurarQuarto(req, res){
        const { id } = req.params
        try{
            await database.Quartos.restore({where: { id: Number(id)}})
            return res.status(200).json({message: `Quarto de id: ${id} restaurado.`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = QuartoController