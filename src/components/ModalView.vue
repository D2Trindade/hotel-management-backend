<template>
    <div>
        <div class="modal fade" id="modalVue" tabindex="-1" aria-labelledby="modalVueLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    
                    <div id="modalContinuar">
                        <h4 class="modal-title">Carrinho</h4>
                        <div class="borda-padrao">
                            <h3 class="h3-primario" id="bookingApt_modal"></h3>
                            <img class="imagem-padrao" id="bookingImg_modal" src="" alt="">
                            <div id="modal-quarto">
                                <h4 class="h3-primario">Descrição:</h4>
                                <p class="p-primario"></p>
                                <p class="p-primario"></p>
                            </div>
                        </div>
                        <div class="margin-padrao">Check-in: <span id="bookingCheckIn_modal"></span></div>
                        <div class="margin-padrao">Check-out: <span id="bookingCheckOut_modal"></span></div>
                        <div class="margin-padrao">Pessoas: <span id="bookingQtd_modal"></span></div>
                        <div class="margin-padrao">Serviços Adicionais: <span id="bookingAdd_modal"></span>
                            <details>
                                <summary>Detalhes</summary>
                                <div id="resumoServicosAdicionais"></div>
                            </details>   
                        </div>
                        <hr />
                        <div class="margin-padrao">Valor total: <span id="bookingValor_modal"></span></div>                     
                    </div>

                    <div id="modalMaisServicos">
                        <h4 class="modal-title">Mais Serviços</h4>
                        <div class="borda-padrao">
                            <h3 class="h3-primario" id="bookingApt_modal"></h3>
                            <img class="imagem-padrao" id="bookingImg_modal" src="" alt="">

                            <div id="modal-servicos">
                            </div>
                        </div>
                        <div class="margin-padrao">
                            <ul id="bookingServices_modal"></ul>
                        </div>
                        <hr />
                        <div class="margin-padrao">Valor total: <span class="valorTotal" id="valorTotal">R$ 0</span>
                        </div>
                    </div>

                    <div id="modalFaltamDados">
                        <h4 class="modal-title">Dados incompletos!</h4>
                        <p>Para visualizar, favor preencher todos os dados</p>
                    </div>

                </div>
                <div class="modal-footer">
                    <button id="confirmarReserva" type="submit" class="d-none btn btn-primary" data-bs-dismiss="modal" @click="reservar">Confirmar reserva</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { ConsumoBar, ConsumoQuarto } from '@/assets/js/Consumo'

export default {
    name: "ModalView",
    data() {
        return {
            reservas: []
        }
    },
    props: {
        tipo: String
    }, 
    methods: {
        // Verifica a possibilidade de realizar a reserva
        reservar() {
            if (localStorage.getItem('login')) {
                this.addReserva()
            }
            else {
                alert('Para realizar reserva, por favor, faça o login!')
            }
        },
        // Cria o objeto reserva e acrescenta a lista de reservas
        addReserva() {
            // Cria o objeto reserva
            let reserva = {}
            let servicosAdd = []
            let consumoBar = new ConsumoBar()
            let consumoQuarto = new ConsumoQuarto()
            reserva.quarto = localStorage.getItem('quarto')
            reserva.checkin = localStorage.getItem('checkin')
            reserva.checkout = localStorage.getItem('checkout')
            reserva.qtdPessoas = localStorage.getItem('qtdPessoas')
            for (let i = 0; i < 5; i++) {
                servicosAdd[i] = localStorage.getItem(`inpServicosQtd${i+1}`)
                
            }
            reserva.inpServicosQtd = servicosAdd
            reserva.valorTServicos = localStorage.getItem('valorTServicos')
            reserva.valorTotal = localStorage.getItem('valorTotal')
            reserva.user = localStorage.getItem('login')
            reserva.consumoBar = consumoBar
            reserva.consumoQuarto = consumoQuarto

            // Acrescenta a reserva às reservas no localstorage
            if(localStorage.getItem('reservas')) {
                this.reservas = JSON.parse(localStorage.getItem('reservas'))
            }
            this.reservas.push(reserva)
            localStorage.setItem('reservas', JSON.stringify(this.reservas))

            this.clearReserva()
            this.$router.push('/')

        },
        // Limpa os dados carregados da reserva atual (em andamento)
        clearReserva() {
            localStorage.removeItem('quarto')
            localStorage.removeItem('checkin')
            localStorage.removeItem('checkout')
            localStorage.removeItem('qtdPessoas')
            localStorage.removeItem('inpServicosQtd1')
            localStorage.removeItem('inpServicosQtd2')
            localStorage.removeItem('inpServicosQtd3')
            localStorage.removeItem('inpServicosQtd4')
            localStorage.removeItem('inpServicosQtd5')
            localStorage.removeItem('valorTServicos')
            localStorage.removeItem('valorTotal')
            
        }
    }
}
</script>