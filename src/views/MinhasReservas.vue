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
                <p class="p-primario" id="desconto"></p>
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
            consumo: 0,
            descontos:[]
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
        gerarDesconto(){
            this.gerarCupom()
            let valorComDesconto = 0
            let reservas = JSON.parse(localStorage.getItem('reservas'))
            for (let i = 0; i < reservas.length; i++) {
                // Será aplicado o valor do desconto em cada reserva e guardado os valores no Array descontos
                let desconto = reservas[i].valorTotal * .1
                valorComDesconto = reservas[i].valorTotal - desconto
                this.descontos.push(valorComDesconto)
            }
        },
        aplicarCupom(){
            let totalCarrinho = document.querySelector('#totalCarrinho')
            let valorDescontado = 0
            this.gerarDesconto()
            if(this.cupomDesconto === false){
                alert('O cupom só pode ser usado uma vez!')
            }else{
                for (let i = 0; i < this.descontos.length; i++) {
                    //soma os descontos e devolve o valor total
                    valorDescontado += this.descontos[i]
                    totalCarrinho.innerText = `${valorDescontado}`
                }
                this.cupomDesconto = false 
            }
                    
        }

    },
    mounted: function() {
        // Verifica se está logado
        if (!localStorage.getItem('login')) {
            alert('Acesso restrito')
            this.$router.push('/')
        }

        // Recupera reservas e o login do localstorage
        let objReservas = JSON.parse(localStorage.getItem('reservas'))
        let login = localStorage.getItem('login')
        let quarto

        if (objReservas == null) {
            return
        }

        for (let i = 0; i < objReservas.length; i++) {
            // Serão carregados em 'this.reservas' apenas as reservas que pertençam ao login atual
            if (objReservas[i].user == login) {
                this.reservas.push(objReservas[i]);
                if(objReservas[i].quarto == 'standard') {
                    quarto = '71'
                }
                else if(objReservas[i].quarto == 'luxo') {
                    quarto = '81'
                }
                else {
                    quarto = '91'
                }
                this.imgQuarto.push(quarto)

                // Calcula consumo total
                // let consumo = 0
                // for (var j=0; j < objReservas[i].consumo.length; j++) {
                //     consumo += objReservas[i].consumo[j].valor * objReservas[i].consumo[j].qtdConsumido 
                // }
                // console.log(consumo)
                
            }        
        }

    }
}
</script>