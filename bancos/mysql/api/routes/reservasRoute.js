const { Router } = require('express')
const ReservasController = require('../controllers/ReservasController')

const router = Router()


router.get('/reservas', ReservasController.listarReservas)
router.get('/reservas/:id', ReservasController.listarReservaPorID)
router.post('/reservas', ReservasController.cadastrarReserva)
router.post('/reservas/:id/restaura', ReservasController.restaurarReserva)
router.put('/reservas/:id', ReservasController.atualizarReserva)
router.delete('/reservas/:id', ReservasController.excluirReserva)

module.exports = router