const { Router } = require('express')
const ServicoPorPessoaController = require('../controllers/ServicosPorPessoaController')

const router = Router()


router.get('/servicosResumidos', ServicoPorPessoaController.listarServicos)
router.get('/servicosResumidos/:id', ServicoPorPessoaController.listarServicosPorID)
router.post('/servicosResumidos', ServicoPorPessoaController.cadastrarServicos)
router.post('/servicosResumidos/:id/restaura', ServicoPorPessoaController.restaurarServicos)
router.put('/servicosResumidos/:id', ServicoPorPessoaController.atualizarServicos)
router.delete('/servicosResumidos/:id', ServicoPorPessoaController.excluirServicos)

module.exports = router