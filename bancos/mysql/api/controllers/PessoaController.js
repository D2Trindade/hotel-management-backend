const { json } = require('body-parser')
const { h } = require('vue')
const database = require('../models')

class PessoaController {

    ///////////////////////////////////////////////////////////////////////////////
    //Métodos para todas as pessoas com as regras (usuario, hospede e funcionario)
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




    ///////////////////////////////////////////////////////////////
    //Métodos apenas para a regra funcionarios na tabela Pessoas
    static async listarFuncionarios(req, res){
        // const { role } = req.params
        try {
            const todosFuncionarios = await database.Pessoas.findAll(
                {
                    where: {
                        role: String('funcionario')
                    }
                }
            )
            return res.status(200).json(todosFuncionarios)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async listarFuncionarioPorID(req, res){
        const { id } = req.params
        try {
            const funcionarioPorID = await database.Pessoas.findOne(
                {
                    where: {
                        role: String('funcionario'),
                        id: Number(id)
                    }
                }
            )
            return res.status(200).json(funcionarioPorID)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async cadastrarFuncionario(req, res){
        const novoFuncionario = req.body
        try {
            const novoFuncionarioCriado = await database.Pessoas.create(novoFuncionario)
            return res.status(200).json(novoFuncionarioCriado)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizarFuncionario(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Pessoas.update(novasInfos, { where: { id: Number(id) }})
            const funcionarioAtualizado = await database.Pessoas.findOne( { where: { id: Number(id) }})
            return res.status(200).json(funcionarioAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async excluirFuncionario(req, res){
        const { id, nome } = req.params
        try {
            await database.Pessoas.destroy( { where: { id: Number(id) }})
            return res.status(200).json({ message: `Funcionário(a) ${nome} excluído(a) com sucesso!`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async restaurarFuncionario(req, res){
        const { id, nome } = req.params
        try{
            await database.Pessoas.restore({where: { id: Number(id)}})
            return res.status(200).json({message: `Funcionário(a) ${nome} restaurado(a) com sucesso.`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }



    ///////////////////////////////////////////////////////////
    //Métodos apenas para a regra usuários na tabela Pessoas
    static async listarUsuarios(req, res){
        // const { role } = req.params
        try {
            const todosUsuarios = await database.Pessoas.findAll(
                {
                    where: {
                        role: String('usuario')
                    }
                }
            )
            return res.status(200).json(todosUsuarios)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async listarUsuarioPorID(req, res){
        const { id } = req.params
        try {
            const usuarioPorID = await database.Pessoas.findOne(
                {
                    where: {
                        role: String('usuario'),
                        id: Number(id)
                    }
                }
            )
            return res.status(200).json(usuarioPorID)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async cadastrarUsuario(req, res){
        const novoUsuario = req.body
        try {
            const novoUsuarioCriado = await database.Pessoas.create(novoUsuario)
            return res.status(200).json(novoUsuarioCriado)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizarUsuario(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Pessoas.update(novasInfos, { where: { id: Number(id) }})
            const usuarioAtualizado = await database.Pessoas.findOne( { where: { id: Number(id) }})
            return res.status(200).json(usuarioAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async excluirUsuario(req, res){
        const { id, nome } = req.params
        try {
            await database.Pessoas.destroy( { where: { id: Number(id) }})
            return res.status(200).json({ message: `Usuario(a) ${nome} excluído(a) com sucesso!`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async restaurarUsuario(req, res){
        const { id, nome } = req.params
        try{
            await database.Pessoas.restore({where: { id: Number(id)}})
            return res.status(200).json({message: `Usuario(a) ${nome} restaurado(a) com sucesso.`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    


    ///////////////////////////////////////////////////////////
    //Métodos apenas para a regra hóspedes na tabela Pessoas
    static async listarHospedes(req, res){
        // const { role } = req.params
        try {
            const todosHospedes = await database.Pessoas.findAll(
                {
                    where: {
                        role: String('hospede')
                    }
                }
            )
            return res.status(200).json(todosHospedes)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async listarHospedePorID(req, res){
        const { id } = req.params
        try {
            const hospedePorID = await database.Pessoas.findOne(
                {
                    where: {
                        role: String('hospede'),
                        id: Number(id)
                    }
                }
            )
            return res.status(200).json(hospedePorID)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async cadastrarHospede(req, res){
        const novoHospede = req.body
        try {
            const novoHospedeCriado = await database.Pessoas.create(novoHospede)
            return res.status(200).json(novoHospedeCriado)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizarHospede(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Pessoas.update(novasInfos, { where: { id: Number(id) }})
            const hospedeAtualizado = await database.Pessoas.findOne( { where: { id: Number(id) }})
            return res.status(200).json(hospedeAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async excluirHospede(req, res){
        const { id, nome } = req.params
        try {
            await database.Pessoas.destroy( { where: { id: Number(id) }})
            return res.status(200).json({ message: `Hospede ${nome} excluído(a) com sucesso!`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async restaurarHospede(req, res){
        const { id, nome } = req.params
        try{
            await database.Pessoas.restore({where: { id: Number(id)}})
            return res.status(200).json({message: `Hospede ${nome} restaurado(a) com sucesso.`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}





module.exports = PessoaController