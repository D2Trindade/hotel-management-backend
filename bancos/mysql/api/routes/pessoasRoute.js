const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.listarPessoas)
router.get('/pessoas/:id', PessoaController.listarPessoaPorID)
router.post('/pessoas', PessoaController.cadastrarPessoa)
router.put('/pessoas/:id', PessoaController.atualizarPessoa)
router.delete('/pessoas/:id', PessoaController.excluirPessoa)

module.exports = router