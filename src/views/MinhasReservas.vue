<template>
    <div class="myReservation p-top">
        <h2 class="h2-primario ">Minhas Reservas</h2>
        <p class="p-primario">Confira as suas reservas:</p>
    </div>

    <div class="acomodacoes borda-padrao d-flex justify-content-center" v-for="(reserva, index) in reservas" :key="index">
            <AcomodacaoCard class="col" :id="imgQuarto[index]" />
            <div class="col-md">
                <h2 class="h2-primario">Detalhes da Reserva:</h2>
                <h4 class="h3-primario"> Tipo de quarto: {{ reserva.quarto.toUpperCase() }}</h4>
                <p class="p-primario">Quantidade de pessoas: {{ reserva.qtdPessoas }} </p>
                <p class="p-primario">Valor dos serviços adicionais: R$ {{ reserva.valorTServicos }},00</p>
                <p class="p-primario">Valor total do consumo: R$ {{ consumo }},00</p>
                <p class="p-primario">Valor total da Reserva: R$ {{ reserva.valorTotal }},00</p>
            </div>
    </div>

    <p class="p-secundario">Você recebeu um cupom de 10% de desconto: <strong><span id="codigoCupom"></span></strong></p>
    <div class="d-flex flex-startfw-bold">
        <div class="mt-5 pt-5 d-flex flex-start">
            <p class="p-primario" for="">Valor total: </p>
            <p class="input-padrao fw-bold"
                id="totalCarrinho">valorTotal</p>
            <button class="col btn btn-terceario" @click="aplicarCupom()">Aplicar cupom</button>
            <p id=""></p>
        </div>
    </div>
</template>

<script>
import AcomodacaoCard from '@/components/AcomodacaoCard.vue'

export default {
    name: 'minhasReservas',
    data() {
        return {
            reservas: [],
            imgQuarto: [],
            consumo: 0
        }
    },
    components: {
        AcomodacaoCard
    },
    methods: {
        gerarCupom(){
            let cupomDesconto = Math.random().toString(36).substring(2, 10)
            let codigo = document.querySelector('#codigoCupom')
            codigo.innerText = cupomDesconto
            console.log(cupomDesconto)
            
        },
        aplicarCupom(){
            this.gerarCupom()
            let desconto = this.valorTotal * .1
            document.querySelector('#totalCarrinho').innerText = this.valorTotal - desconto.toFixed(2)
                console.log(`desconto: R$ ${desconto}`)
        }
    },
    mounted: function() {
        // Recupera reservas e o login do localstorage
        let objReservas = JSON.parse(localStorage.getItem('reservas'))
        let login = localStorage.getItem('login')
        let quarto
        for (let i = 0; i < objReservas.length; i++) {
            // Serão carregados em 'this.reservas' apenas as reservas que pertençam ao login atual
            if (objReservas[i].user == login) {
                this.reservas.push(objReservas[i]);
                if(objReservas[i].quarto == 'standard') {
                    quarto = '7'
                }
                else if(objReservas[i].quarto == 'luxo') {
                    quarto = '4'
                }
                else {
                    quarto = '1'
                }
                this.imgQuarto.push(quarto)

                // Calcula consumo total
                let consumo = 0
                for (var j=0; j < objReservas[i].consumo.length; j++) {
                    consumo += objReservas[i].consumo[j].valor * objReservas[i].consumo[j].qtdConsumido 
                }
                console.log(consumo)
            }        
        }
    }
}
</script>