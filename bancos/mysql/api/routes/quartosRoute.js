const { Router } = require('express')
const QuartoController = require('../controllers/QuartoController')

const router = Router()


router.get('/acomodacoes/:acomodacaoID/quartos', QuartoController.listarQuartoPorAcomodacao)
router.get('/acomodacoes/:acomodacaoID/quartos/:numeroQuartoID', QuartoController.listarQuartoPorNumero)
router.post('/acomodacoes/:acomodacaoID/quartos', QuartoController.adicionarQuarto)
router.post('/acomodacoes/:acomodacaoID/quartos/:id', QuartoController.restaurarQuarto)
router.put('/acomodacoes/:acomodacaoID/quartos/:quartoID', QuartoController.atualizarQuarto)
router.delete('/acomodacoes/:acomodacaoID/quartos/:quartoID', QuartoController.apagarQuarto)

module.exports = router