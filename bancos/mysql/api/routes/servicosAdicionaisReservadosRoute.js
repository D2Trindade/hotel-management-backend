const { Router } = require('express')
const ServicosAdicionaisReservados = require('../controllers/ServicosAdicionaisReservadosController')

const router = Router()


router.get('/servicosReservados', ServicosAdicionaisReservados.listarServicos)
router.get('/servicosReservados/:id', ServicosAdicionaisReservados.listarServicoPorID)
router.post('/servicosReservados', ServicosAdicionaisReservados.cadastrarServico)
router.post('/servicosReservados/:id/restaura', ServicosAdicionaisReservados.restaurarServico)
router.put('/servicosReservados/:id', ServicosAdicionaisReservados.atualizarServico)
router.delete('/servicosReservados/:id', ServicosAdicionaisReservados.excluirServico)

module.exports = router