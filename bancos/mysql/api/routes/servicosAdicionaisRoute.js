const { Router } = require('express')
const ServicoAdicionalController = require('../controllers/ServicoAdicionalController')

const router = Router()


router.get('/servicos', ServicoAdicionalController.listarServicosAdicionais)
router.get('/servicos/:id', ServicoAdicionalController.listarServicoAdicionalPorID)
router.post('/servicos', ServicoAdicionalController.cadastrarServicosAdicionais)
router.post('/servicos/:id/restaura', ServicoAdicionalController.restaurarServicoAdicional)
router.put('/servicos/:id', ServicoAdicionalController.atualizarServicosAdicionais)
router.delete('/servicos/:id', ServicoAdicionalController.excluirServicoAdicional)

module.exports = router