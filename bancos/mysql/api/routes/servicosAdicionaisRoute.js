const { Router } = require('express')
const ServicoAdicionalController = require('../controllers/ServicoAdicionalController')

const router = Router()


router.get('/servicos', ServicoAdicionalController.listarServicos)
router.get('/servicos/:id', ServicoAdicionalController.listarServicoPorID)
router.post('/servicos', ServicoAdicionalController.cadastrarServico)
router.post('/servicos/:id/restaura', ServicoAdicionalController.restaurarServico)
router.put('/servicos/:id', ServicoAdicionalController.atualizarServico)
router.delete('/servicos/:id', ServicoAdicionalController.excluirServico)

module.exports = router