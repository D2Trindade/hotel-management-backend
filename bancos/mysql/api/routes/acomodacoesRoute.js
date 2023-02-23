const { Router } = require('express')
const AcomodacaoController = require('../controllers/AcomodacaoController')

const router = Router()

router.get('/acomodacoes', AcomodacaoController.listarAcomodacoes)
router.get('/acomodacoes/:id', AcomodacaoController.listarAcomodacaoPorID)
router.post('/acomodacoes', AcomodacaoController.cadastrarAcomodacao)
router.post('/acomodacoes/:id/restaura', AcomodacaoController.restaurarAcomodacao)
router.put('/acomodacoes/:id', AcomodacaoController.atualizarAcomodacao)
router.delete('/acomodacoes/:id', AcomodacaoController.excluirAcomodacao)

router.get('/acomodacoes/:acomodacaoID/quartos', AcomodacaoController.listarQuartoPorAcomodacao)
router.get('/acomodacoes/:acomodacaoID/quartos/:numeroQuartoID', AcomodacaoController.listarQuartoPorNumero)
router.post('/acomodacoes/:acomodacaoID/quartos', AcomodacaoController.adicionarQuarto)
router.post('/acomodacoes/:acomodacaoID/quartos/:id', AcomodacaoController.restaurarQuarto)
router.put('/acomodacoes/:acomodacaoID/quartos/:quartoID', AcomodacaoController.atualizarQuarto)
router.delete('/acomodacoes/:acomodacaoID/quartos/:quartoID', AcomodacaoController.apagarQuarto)

module.exports = router