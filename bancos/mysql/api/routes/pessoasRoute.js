const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()


//Rota para login
router.get('/pessoas/:email', PessoaController.listarLoginUsuario)
router.get('/pessoas/user/:email', PessoaController.listarUsuario)


// Rotas para todas as pessoas com as 3 regras (usuario, hospede, funcionario)
router.get('/pessoas', PessoaController.listarPessoas)
router.get('/pessoas/:id', PessoaController.listarPessoaPorID)
router.post('/pessoas', PessoaController.cadastrarPessoa)
router.post('/pessoas/:id/restaura', PessoaController.restaurarPessoa)
router.put('/pessoas/:id', PessoaController.atualizarPessoa)
router.delete('/pessoas/:id', PessoaController.excluirPessoa)



//Rotas apenas para funcionários da tabela Pessoas
router.get('/funcionarios', PessoaController.listarFuncionarios)
router.get('/funcionarios/:id', PessoaController.listarFuncionarioPorID)
router.post('/funcionarios', PessoaController.cadastrarFuncionario)
// router.post('/funcionarios/:id/restaura', PessoaController.restaurarFuncionario)
router.put('/funcionarios/:id', PessoaController.atualizarFuncionario)
router.delete('/funcionarios/:id', PessoaController.excluirFuncionario)



//Rotas apenas para usuários da tabela Pessoas
router.get('/usuarios', PessoaController.listarUsuarios)
router.get('/usuarios/:id', PessoaController.listarUsuarioPorID)
router.post('/usuarios', PessoaController.cadastrarUsuario)
// router.post('/usuarios/:id/restaura', PessoaController.restaurarUsuario)
router.put('/usuarios/:id', PessoaController.atualizarUsuario)
router.delete('/usuarios/:id', PessoaController.excluirUsuario)


//Rotas apenas para admin da tabela Pessoas
router.get('/usuarios', PessoaController.listarAdmins)
router.get('/usuarios/:id', PessoaController.listarUsuarioPorID)
router.post('/usuarios', PessoaController.cadastrarUsuario)
// router.post('/usuarios/:id/restaura', PessoaController.restaurarUsuario)
router.put('/usuarios/:id', PessoaController.atualizarUsuario)
router.delete('/usuarios/:id', PessoaController.excluirUsuario)


//Rotas apenas para hospedes da tabela Pessoas
router.get('/hospedes', PessoaController.listarHospedes)
router.get('/hospedes/:id', PessoaController.listarHospedePorID)
router.post('/hospedes', PessoaController.cadastrarHospede)
// router.post('/hospedes/:id/restaura', PessoaController.restaurarHospede)
router.put('/hospedes/:id', PessoaController.atualizarHospede)
router.delete('/hospedes/:id', PessoaController.excluirHospede)

module.exports = router