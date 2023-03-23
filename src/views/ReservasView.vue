<template>
    <main>
        <section>

            <fieldset>
                <div class="myReservation p-top">
                    <h2 class="h2-primario ">Minha Reserva</h2>
                    <p class="p-primario">
                        Forneça a data de entrada, saída e quantidade de pessoas.
                    </p>
                    <span class="margin-left">
                        <input v-model="checkin" v-on:change="onChangeCheckin" class="input-padrao" type="date" name="checkin" id="checkin" required>
                        <input v-model="checkout" v-on:change="onChangeCheckout" class="input-padrao" type="date" name="checkout" id="checkout" required>
                        <input v-model="qtdPessoas" v-on:change="onChangeQtdPessoas" class="input-padrao" type="number" name="qtdPessoas" id="qtdPessoas" min="1" max="4" required>
                    </span>
                    <p class="p-primario">Escolha o quarto</p>
                </div>
                <section class="display-grid">
                    <article class=" ">
                        <AcomodacaoReservas 
                            v-for="(quarto, index) in quartos" :key="index"
                            
                            :nomeQuarto="quartos[index].nome"
                            :imagemQuarto="quartos[index].imagem"
                            :descricaoQuarto="quartos[index].descricao" 
                            :valorQuarto="quartos[index].valor" />

                    </article>
                    <div class=" borda-resumo-reserva resumo-reserva">
                        <article class="resumo-reserva-conteudo" id="bookingSummary">
                            <h3 class="h3-resumo-reservas">Resumo da reserva</h3>
                            <div class="box-reservas">
                                <div class="margin-padrao">Apartamento: <span class="text-capitalize" id="bookingApt"></span></div>
                                <div class="margin-padrao">Check-in: <span class="" id="bookingCheckIn"></span></div>
                                <div class="margin-padrao">Check-out: <span class="" id="bookingCheckOut"></span></div>
                                <div class="margin-padrao">Pessoas: <span class="" id="bookingQtd"></span></div>
                                <div class="margin-padrao esconder">Valor total: <span class="" id="bookingValor"></span></div>
                            </div>
                            <div>
                                <p><a class="link-padrao h3-primario" id="maisServicos" data-bs-toggle="modal" data-bs-target="#modalVue"
                                    @click="showModal('mais_servicos')"><i
                                            class="fa fa-plus fa-2x" aria-hidden="true"></i> MAIS SERVIÇOS</a></p>

                            </div>
                            <div class="centralizar">
                                <button class="btn-texto btn-resumo-reservas text-light" data-bs-toggle="modal" data-bs-target="#modalVue"
                                    @click.prevent.self="showModal('continuar')" id="continuar">CONTINUAR</button>
                            </div>
                        </article>
                    </div>
                </section>
            </fieldset>

        </section>
        
        <aside class="esconder">
            <p>Espaço reservado para propagandas.</p>
        </aside>
    </main>

    <ModalView  />
    
</template>

<script>
import ModalView from '@/components/ModalView.vue'
import AcomodacaoReservas from '@/components/AcomodacaoReservas.vue'

export default {
    name:'ReservasView',
    data(){
        return{
            checkin: localStorage.getItem('checkin'),
            checkout: localStorage.getItem('checkout'),
            qtdPessoas: localStorage.getItem('qtdPessoas'),
            quartos: [
                {
                    nome: "standard",
                    imagem: require("@/assets/images/acomodacoes/acomodacoes-standard-1.png"),
                    valor: 190,
                    descricao:
                    "Com 60 m², nossas suítes Standard, dispõem de cama Twin e banheiros com box separado.",
                },
                {
                    nome: "luxo",
                    imagem: require("@/assets/images/acomodacoes/acomodacoes-luxo-1.png"),
                    valor: 250,
                    descricao:
                    "Com 90 m², nossas suítes Luxo, dispõem de cama King Size ou Twin e ainda uma confortável área de trabalho. A ampla sala de estar está mobiliada com poltrona, sofá e mesa de café. Os banheiros contam com box separado.",
                },
                {
                    nome: "presidencial",
                    imagem: require("@/assets/images/acomodacoes/acomodacoes-presidencial-1.png"),
                    valor: 400,
                    descricao:
                        "Com 160 m², nossas suítes Presidenciais contam com espaços privilegiados, cozinha, escritório e sala de estar. O dormitório apresenta um espaço grande, único, integrado e muito iluminado, com vista exuberante.",
                },
            ],
            servicosAdicionais: [
                {
                    nome: "Academia",
                    preco: 100,
                },
                {
                    nome: "Early check-in/Late Check-in",
                    preco: 50,
                },
                {
                    nome: "Café da manhã",
                    preco: 190,
                },
                {
                    nome: "Serviço de lavanderia",
                    preco: 100,
                },
                {
                    nome: "Serviço de spa",
                    preco: 250,
                },
            ],
            criaInputNumber: '',
            criaSpan: '',
            precoServico: '',
            inpServicosQtd: '',
            inputServicos: '',
            arrayValorServicos: [], 
            valorTServicos: ''
        }
    },
    components: {
        ModalView,
        AcomodacaoReservas
    },
    methods:{
        onChangeCheckin(){
            const checkin = document.querySelector('#checkin');
            const checkout = document.querySelector('#checkout');
            localStorage.setItem('checkin', checkin.value);
            document.querySelector('#bookingCheckIn').innerText = localStorage.getItem('checkin')
            checkout.value = ''
            document.querySelector('#bookingCheckOut').innerText = ''
            localStorage.removeItem('checkout')

        },
        onChangeCheckout() {
            const checkout = document.querySelector('#checkout');
            const checkin = document.querySelector('#checkin');
            if (checkout.value > checkin.value) {
                localStorage.setItem('checkout', checkout.value);
                document.querySelector('#bookingCheckOut').innerText = localStorage.getItem('checkout')
            }else{
                alert('A data do check-out deve ser posterior a de check-in')
                checkout.value = localStorage.getItem('checkout');
            }
        },
        onChangeQtdPessoas() {
            const qtdPessoas = document.querySelector('#qtdPessoas');
            localStorage.setItem('qtdPessoas', qtdPessoas.value);
            document.querySelector('#bookingQtd').innerText = localStorage.getItem('qtdPessoas')
            const that = this

            //zera servicos caso a qtdPessoas seja inferior a quantidade de determinado serviço e atualiza o preço total de serviços
            this.inpServicosQtd.forEach(function(valorInput, index){
                if(valorInput.value > qtdPessoas.value){
                valorInput.value = 0
                localStorage.setItem(`inpServicosQtd${index+1}`, valorInput.value)
                that.arrayValorServicos[index] = that.servicosAdicionais[index].preco * valorInput.value
                that.valorTServicos = that.arrayValorServicos.reduce((somaParcial, a) => somaParcial + a, 0);
                document.querySelector("#valorTotal").innerHTML = `R$${that.valorTServicos.toFixed(2)}`
                localStorage.setItem("valorTServicos", that.valorTServicos)
                } 
            })
            
        },
        calculateTotal() {
            // Realiza o cálculo baseado no quarto escolhido e nos serviços adicionais inseridos
            switch (localStorage.getItem("quarto")) {
                case "luxo":
                    localStorage.setItem("valorTotal", this.quartos[1]["valor"] * parseInt(localStorage.getItem("qtdPessoas")) + parseInt(localStorage.getItem("valorTServicos")))
                    break
                case "presidencial":
                    localStorage.setItem("valorTotal", this.quartos[2]["valor"] * parseInt(localStorage.getItem("qtdPessoas")) + parseInt(localStorage.getItem("valorTServicos")))
                    break;
                default:
                    localStorage.setItem("valorTotal", this.quartos[0]["valor"] * parseInt(localStorage.getItem("qtdPessoas")) + parseInt(localStorage.getItem("valorTServicos")))
                    break;
            }

            document.querySelector("#bookingValor_modal").innerText = `R$ ${localStorage.getItem("valorTotal")},00`
        },
        showModal(id) {
            document.querySelector('#confirmarReserva').classList.add('d-none')

            if (id == 'mais_servicos') {
                document.querySelector('#modalContinuar').classList.add('esconder')
                document.querySelector('#modalFaltamDados').classList.add('esconder')
                document.querySelector('#modalMaisServicos').classList.remove('esconder')
                const that = this

                this.inpServicosQtd.forEach(function(valorInput, index){
                    document.querySelector(`#inputServicos:nth-of-type(${index+1})`).setAttribute("max", localStorage.getItem('qtdPessoas'))
                    that.precoServico[index].innerHTML = `${that.servicosAdicionais[index].nome} - R$${(that.servicosAdicionais[index].preco).toFixed(2)}`
                    valorInput.addEventListener("change", function(){
                        localStorage.setItem(`inpServicosQtd${index+1}`, valorInput.value)
                        that.arrayValorServicos[index] = that.servicosAdicionais[index].preco * valorInput.value
                        that.valorTServicos = that.arrayValorServicos.reduce((somaParcial, valorAtual) => somaParcial + valorAtual, 0)
                        document.querySelector("#valorTotal").innerHTML = `R$${that.valorTServicos.toFixed(2)}`
                        localStorage.setItem("valorTServicos", that.valorTServicos)
                    })
                    that.arrayValorServicos[index] = that.servicosAdicionais[index].preco * valorInput.value
                })
            }
            else if (id == 'continuar') {
                this.calculateTotal()

                // Mostrar modal "continuar"
                document.querySelector('#modalMaisServicos').classList.add('esconder')
                document.querySelector('#modalFaltamDados').classList.add('esconder')
                document.querySelector('#modalContinuar').classList.remove('esconder')
                
                // Caso os dados já estejam em localstorage, recupera valor
                if (
                    localStorage.getItem("quarto") &&
                    localStorage.getItem("checkin") &&
                    localStorage.getItem("checkout") &&
                    localStorage.getItem("qtdPessoas")
                ) {
                    document.querySelector('#confirmarReserva').classList.remove('d-none')
                    document.querySelector("#bookingApt_modal").innerText =
                    localStorage.getItem("quarto")[0].toUpperCase() +
                    localStorage.getItem("quarto").substr(1);
                    document.querySelector("#bookingCheckIn_modal").innerText =
                    localStorage.getItem("checkin");
                    document.querySelector("#bookingCheckOut_modal").innerText =
                    localStorage.getItem("checkout");
                    document.querySelector("#bookingQtd_modal").innerText =
                    localStorage.getItem("qtdPessoas");
                    document.querySelector("#bookingAdd_modal").innerText = 
                        `R$ ${parseInt(localStorage.getItem("valorTServicos")).toFixed(2)}`;

                    this.qtdPessoas = parseInt(localStorage.getItem("qtdPessoas"))
                    switch (localStorage.getItem("quarto")) {
                        case "luxo":
                            document.querySelector("#modal-quarto p:nth-of-type(1)").innerText =
                            this.quartos[1]["descricao"];
                            document.querySelector(
                            "#modal-quarto p:nth-of-type(2)"
                            ).innerText = `R$ ${this.quartos[1]["valor"].toFixed(2)}`;
                            document.querySelector("#bookingImg_modal").src = require(
                            "@/assets/images/acomodacoes/acomodacoes-luxo-1.png");
                            break;
                        case "presidencial":
                            document.querySelector("#modal-quarto p:nth-of-type(1)").innerText =
                            this.quartos[2]["descricao"];
                            document.querySelector(
                            "#modal-quarto p:nth-of-type(2)"
                            ).innerText = `R$ ${this.quartos[2]["valor"].toFixed(2)}`;
                            document.querySelector("#bookingImg_modal").src = require(
                            "@/assets/images/acomodacoes/acomodacoes-standard-1.png");
                            break;
                        default:
                            document.querySelector("#modal-quarto p:nth-of-type(1)").innerText = this.quartos[0]["descricao"]
                            document.querySelector("#modal-quarto p:nth-of-type(2)").innerText = `R$ ${this.quartos[0]["valor"].toFixed(2)}`
                            document.querySelector("#bookingImg_modal").src = require("@/assets/images/acomodacoes/acomodacoes-presidencial-1.png")
                            break;
                        }

                }
                else {
                    document.querySelector('#modalMaisServicos').classList.add('esconder')
                    document.querySelector('#modalContinuar').classList.add('esconder')
                    document.querySelector('#modalFaltamDados').classList.remove('esconder')
                }

                //Deleta todos os spans da div #resumoServicosAdicionais enquanto tiver filhos, para evitar duplicação/acumulação de texto
                const divServicosAdicionais = document.getElementById("resumoServicosAdicionais");
                while (divServicosAdicionais.firstChild) {
                    divServicosAdicionais.removeChild(divServicosAdicionais.lastChild);
                }

                //cria os spans com os textos incluindo os serviços adicionais escolhidos no modal de mais serviços
                const that = this 
                this.inpServicosQtd.forEach(function(valorInput, index){
                    if(valorInput.value != 0){
                        that.criaSpan = document.createElement("span")
                        that.criaSpan.setAttribute("class", "detalhesServicosAdicionais")
                        that.criaSpan.setAttribute("class", "d-block")
                        document.getElementById("resumoServicosAdicionais").appendChild(that.criaSpan)
                        that.criaSpan.innerHTML = `${that.servicosAdicionais[index].nome} x${valorInput.value}`
                    }
                })

                //verifica se a div #resumoServicosAdicionais não possui filhos, se verdadeiro cria um texto pro usuário considerar escolher um
                if(document.getElementById('resumoServicosAdicionais').childElementCount == 0){
                    this.criaSpan = document.createElement("span")
                    this.criaSpan.setAttribute("class", "semServico")
                    document.getElementById("resumoServicosAdicionais").appendChild(this.criaSpan)
                    this.criaSpan.innerHTML = `Nenhum serviço escolhido, favor considere`
                }
            }
        }
    },
    beforeMount: function() {
        // Organiza ordem das acomodações - default(standard, luxo, presidencial)
        if (localStorage.getItem("quarto") == "luxo") {
            let aux = this.quartos[0]
            this.quartos[0] = this.quartos[1]
            this.quartos[1] = aux
        }
        else if (localStorage.getItem("quarto") == "presidencial") {
            let aux = this.quartos[0]

            this.quartos[0] = this.quartos[2]
            this.quartos[2] = aux
        }
    },
    mounted: function() {
        // Carrega informações do localstorage (caso já exista)
        if (localStorage.getItem("checkin")) {
            document.querySelector("#bookingCheckIn").innerText =
                localStorage.getItem("checkin");
        }
        else {
            document.querySelector("#bookingCheckIn").innerText = ''
        }

        if (localStorage.getItem("checkout")) {
            document.querySelector("#bookingCheckOut").innerText =
                localStorage.getItem("checkout");
        }
        else {
            document.querySelector("#bookingCheckOut").innerText = ''
        }

        if (localStorage.getItem("qtdPessoas")) {
            document.querySelector("#bookingQtd").innerText = localStorage.getItem("qtdPessoas");
        }
        else {
            document.querySelector("#bookingQtd").innerText = ''
        }

        if (localStorage.getItem("quarto")) {
            switch (localStorage.getItem("quarto")) {
                case "luxo":
                    document.querySelector("#bookingApt").innerText = "luxo";
                    document.querySelector("#luxo").checked = true;
                    break;
                case "presidencial":
                    document.querySelector("#bookingApt").innerText = "presidencial";
                    document.querySelector("#presidencial").checked = true;
                    break;
                default:
                    document.querySelector("#bookingApt").innerText = "Standard";
                    document.querySelector("#standard").checked = true;
                    break;
            }
        }
        else {
            document.querySelector("#bookingApt").innerText = ''
        }

        // Caso não haja nenhum valor atribuído aos serviços adicionais, salva '0' em sua quantidade
        for(let i = 1; i <= this.servicosAdicionais.length; i++){
            if(! localStorage.getItem(`inpServicosQtd${i}`)) {
                localStorage.setItem(`inpServicosQtd${i}`, 0)
            }
            
            this.arrayValorServicos[i-1] = this.servicosAdicionais[i-1].preco * localStorage.getItem(`inpServicosQtd${i}`)
            this.valorTServicos = this.arrayValorServicos.reduce((somaParcial, valorAtual) => somaParcial + valorAtual, 0)
        }
        document.querySelector("#valorTotal").innerHTML = `R$${this.valorTServicos.toFixed(2)}`
        localStorage.setItem("valorTServicos", this.valorTServicos)
        
        for(let i = 1; i <= this.servicosAdicionais.length; i++){
            this.criaInputNumber = document.createElement("input")
            this.criaSpan = document.createElement("span")
            this.criaInputNumber.setAttribute("type", "number")
            this.criaInputNumber.setAttribute("min", "0")
            this.criaInputNumber.setAttribute("value", "1")
            this.criaInputNumber.setAttribute("class", "d-block m-auto")
            this.criaInputNumber.setAttribute("id", "inputServicos")
            this.criaInputNumber.setAttribute("name", "valores")
            this.criaSpan.setAttribute("class", "precoServico")
            document.getElementById("modal-servicos").appendChild(this.criaSpan);
            document.getElementById("modal-servicos").appendChild(this.criaInputNumber);
            if(i == this.servicosAdicionais.length){
                this.precoServico = document.querySelectorAll(".precoServico")
                this.inpServicosQtd = document.getElementsByName('valores')
                this.inputServicos = document.querySelectorAll("#inputServicos")
            } 
        }

        window.onload = this.inpServicosQtd.forEach(function(valorInput, index){
            localStorage.getItem(`inpServicosQtd${index+1}`) ? valorInput.value = localStorage.getItem(`inpServicosQtd${index+1}`) : null
            localStorage.getItem("valorTServicos") ? document.querySelector("#valorTotal").innerHTML = `R$${parseInt(localStorage.getItem("valorTServicos")).toFixed(2)}` : null
        })

    }
}
</script>

<style scoped>
.esconder {
    display: none;
}
.p-top {
    padding: 1rem 0 0 0;
}

.h2-primario {
    padding: 0 1.5rem;
    text-align: start;
    color: #213242;
    font: "Quicksand";
}

.p-primario {
    padding: 0 1.5rem;
    text-align: start;
    color: #213242;
    font: "Quicksand";
}

.margin-left {
    margin: 0 0.5rem;
}

.display-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
}

.borda-padrao {
    margin: 3rem;
    padding: 1rem;
    border-radius: 15px;
    box-shadow: 1px 3px 5px #213242;
}

.imagem-padrao {
    margin: 1.5rem;
    width: 90%;
}

.borda-resumo-reserva {
    margin: 10vh 5vh;
    padding: 1rem;
    border-radius: 15px;
    box-shadow: 1px 3px 5px #213242;
}

.borda-resumo-reserva:hover {
    box-shadow: 1px 4px 10px #213242;
}

.resumo-reserva-conteudo {
    margin-top: 3vw;
}

.resumo-reserva {
    height: 35rem;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
}

.h3-resumo-reservas {
    padding: 0 1.5rem;
    text-align: start;
    color: #213242;
    font: "Quicksand";
    text-align: center;
}

.box-reservas {
    background-color: rgba(225, 200, 136, 0.7);
    width: 100%;
    padding: 3%;
    text-align: start;
    margin-top: 2rem;
}

.margin-padrao {
    padding: 0.5rem;
}

.link-padrao {
    padding: 0 1.5rem;
    text-align: start;
    color: #213242;
    font: "Quicksand";
    text-decoration: none;
}

.link-padrao:hover {
    color: #cf9903;
}

.centralizar {
    text-align: center;
    align-items: center;
}

.btn-texto {
    color: white;
    font: "Quicksand";
    text-align: center;
    font-size: 1vw;
}

.btn-resumo-reservas {
    background-color: #213242;
    border: none;
    box-shadow: 3px 1px 8px white inset;
    border-radius: 20px;
    width: 100%;
    height: 3rem;
}

@media (max-width: 1170px) {
    .display-grid {
        display: inline-block;
    }

    .resumo-reserva {
        display: inline-block;
        width: 80%;
        height: 35rem;
    }

    .btn-padrao {
        width: 80%;
    }

    .btn-beje {
        width: 20vh;
        height: 6vh;
        border: 1px solid #e1c888;
        border-radius: 30px;
        background-color: #e1c888;
        box-shadow: 3px 3px 5px #b3b3b4;
    }

    .btn-texto {
        font-size: larger;
    }
}

@media (max-width: 960px) {
    .input-padrao{
        width: 35vh;

    }
}
</style>