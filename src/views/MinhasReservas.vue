<template>
    <!-- <AcomodacaoReservas v-for="(quarto, index) in quartos" :key="index" 
        :nomeQuarto="quartos[index].nome"
        :imagemQuarto="quartos[index].imagem"
        :valorQuarto="quartos[index].valor" /> -->

        <div class="display-grid borda-padrao">
            <!-- <img class="imagem-padrao" v-if="(quarto === 'standard')" src:{{ this.imagens[0].standard }}  alt="Quarto Grand Royal Hotel">
            <img class="imagem-padrao" v-else-if="(quarto === 'luxo')" src:{{ this.imagens[0].luxo }} alt="Quarto Grand Royal Hotel">
            <img class="imagem-padrao" v-else-if="(quarto === 'presidencial')" src:{{ this.imagens[0].presidencial }} alt="Quarto Grand Royal Hotel"> -->
            <div>
                <h2 class="h2-primario">Detalhes da Reserva:</h2>
                <h3 class="h3-primario"> Tipo de quarto: {{quarto}}</h3>
                <p class="p-primario" v-if="(quarto === 'standard')">{{ descricao[0].standard }}</p>
                <p class="p-primario" v-else-if="(quarto === 'luxo')">{{ descricao[0].luxo }}</p>
                <p class="p-primario" v-else-if="(quarto === 'presidencial')">{{ descricao[0].presidencial }}</p>
                <p class="p-primario">Quantidade de pessoas: {{ qtdPessoas}}</p>
                <p class="p-primario">Valor dos serviços adicionais: R${{ valorServAdicionais }},00</p>
                <p class="p-primario">Valor total da Reserva: R${{ valorTotal }},00</p>
                <div class="p-primario">
                    
                </div>
            </div>
        </div>





    <P class="p-secundario">Você recebu um cupom de 10% de desconto: <strong><span id="codigoCupom"></span></strong></P>
    <div class="d-flex flex-startfw-bold">
        <div class="mt-5 pt-5 d-flex flex-start">
            <p class="p-primario" for="">Valor total: </p>
            <p class="input-padrao fw-bold"
                id="totalCarrinho">{{ valorTotal }}</p>
            <button class="col btn btn-terceario" @click="aplicarCupom()">Aplicar cupom</button>
            <p id=""></p>
        </div>
    </div>
</template>

<script>
// import AcomodacaoReservas from '@/components/AcomodacaoReservas.vue'

export default {
    name: 'minhasReservas',
    data() {
        return {
            reservas: JSON.parse(localStorage.getItem('reservas')),
            totalCarrinho: document.querySelector('#totalCarrinho'),
            quarto: JSON.parse(localStorage.getItem('reservas'))[0].quarto,
            valorServAdicionais: JSON.parse(localStorage.getItem('reservas'))[0].valorTServicos,
            valorTotal: JSON.parse(localStorage.getItem('reservas'))[0].valorTotal,
            imagens: [
                {standard: require("@/assets/images/acomodacoes/acomodacoes-standard-1.png")},
                {luxo: require("@/assets/images/acomodacoes/acomodacoes-luxo-1.png")},
                {presidencial: require("@/assets/images/acomodacoes/acomodacoes-presidencial-1.png")}
            ],
            descricao: [
                { standard: "Com 60 m², nossas suítes Standard, dispõem de cama Twin e banheiros com box separado.", },
                { luxo: "Com 90 m², nossas suítes Luxo, dispõem de cama King Size ou Twin e ainda uma confortável área de trabalho. A ampla sala de estar está mobiliada com poltrona, sofá e mesa de café. Os banheiros contam com box separado." },
                { presidencial: "Com 160 m², nossas suítes Presidenciais contam com espaços privilegiados, cozinha, escritório e sala de estar. O dormitório apresenta um espaço grande, único, integrado e muito iluminado, com vista exuberante." }
            ],
        }
    },
    components: {
        // AcomodacaoReservas
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
    }
}
</script>