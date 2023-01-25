<template>
    <main>
      <div class="p-top" >
        <h3 class="h3-primario">Nossas Acomodações</h3>
        <p class="p-primario" >Descubra as diversas categorias de quartos que o Grand Royal Hotel tem à sua disposição. Projetados para oferecer o máximo conforto, os variados tipos de quartos do nosso hotel foram projetados tendo como base o novo conceito de hotelaria de puro luxo, transformando a sua hospedagem em uma experiência única. Todos eles oferecem amplas áreas e mobiliário moderno e sofisticado.</p>
      </div>

      <div class="p-top" >
        <h3 class="h3-primario">Quartos Standard:</h3>
      </div>
     <div class="acomodacoes acomodacoes--standard">
        <AcomodacaoCard id="7" data-bs-toggle="modal" data-bs-target="#modalAcomodacoes" role="button" @click="escolheQuarto('standard')" />
        <AcomodacaoCard id="8" data-bs-toggle="modal" data-bs-target="#modalAcomodacoes" role="button" @click="escolheQuarto('standard')" />
        <AcomodacaoCard id="9" data-bs-toggle="modal" data-bs-target="#modalAcomodacoes" role="button" @click="escolheQuarto('standard')" />
        <div class="p-top">
            <p class="p-primario">Com 60 m², nossas suítes Standard, dispõem de cama Twin e banheiros com box separado.</p>          
        </div>
        
      </div>

      <div class="p-top">
        <h3 class="h3-primario">Quartos Luxo:</h3>
      </div>
      <div class="acomodacoes acomodacoes--luxo">
        <AcomodacaoCard id="4" data-bs-toggle="modal" data-bs-target="#modalAcomodacoes" role="button" @click="escolheQuarto('luxo')" />
        <AcomodacaoCard id="5" data-bs-toggle="modal" data-bs-target="#modalAcomodacoes" role="button" @click="escolheQuarto('luxo')" />
        <AcomodacaoCard id="6" data-bs-toggle="modal" data-bs-target="#modalAcomodacoes" role="button" @click="escolheQuarto('luxo')" />
        <div class="p-top">
            <p class="p-primario">Com 90 m², nossas suítes Luxo, dispõem de cama King Size ou Twin e ainda uma confortável área de trabalho. A ampla sala de estar está mobiliada com poltrona, sofá e mesa de café. Os banheiros contam com box separado.</p>
        </div>
        
      </div>

      <div class="p-top">
        <h3 class="h3-primario">Quartos Presidenciais:</h3>
      </div>
      <div class="acomodacoes acomodacoes--presidencial">
        <AcomodacaoCard id="1"  data-bs-toggle="modal" data-bs-target="#modalAcomodacoes" role="button" @click="escolheQuarto('presidencial')" />
        <AcomodacaoCard id="2" data-bs-toggle="modal" data-bs-target="#modalAcomodacoes" role="button" @click="escolheQuarto('presidencial')" />
        <AcomodacaoCard id="3" data-bs-toggle="modal" data-bs-target="#modalAcomodacoes" role="button" @click="escolheQuarto('presidencial')" />
        <div class="p-top">
            <p class="p-primario">Com 160 m², nossas suítes Presidenciais contam com espaços privilegiados, cozinha, escritório e sala de estar. O dormitório apresenta um espaço grande, único, integrado e muito iluminado, com vista exuberante. Além disso, dispõe de
            banheiro com uma espaçosa jacuzzi, chuveiro “rain shower” duplo e sauna. Os hóspedes da suíte têm direito a massagens no
            nosso Spa e podem contar com serviço de concierge e mordomo 24 horas por dia.</p>          
        </div>
        
      </div>

      <ModalAcomodacoes :nomeQuarto="quarto" ref="modalAcom"/>
    </main>
</template>

<script>
import "@/assets/js/Comentario.js"

import AcomodacaoCard from '@/components/AcomodacaoCard.vue'
import ModalAcomodacoes from '@/components/ModalAcomodacoes.vue'
import { Comentario } from '@/assets/js/Comentario.js'

export default{
  name: 'AcomodacoesView',
  components: {
    AcomodacaoCard,
    ModalAcomodacoes
  },
  data() {
    return {
        comentarios: [],
        quarto: ''
    }
  },
  methods: {
    escolheQuarto(quarto) {
      this.quarto = quarto

      // Atualiza comentários
      this.$refs.modalAcom.atualizaComentarios(quarto)      
    },
    enviaComentario() {
      // Verifica se usuário está logado
      if (!localStorage.getItem('login')) {
        alert('Para enviar comentarios, é necessário fazer login!')
        return
      }
      // Verifica se os campos estão preenchidos
      if (document.querySelector('#comentarioPontuacao').value == '' || document.querySelector('#comentarioDescricao').value == '') {
        alert ('Por favor, preencha todos os campos')
        return
      }

      // Cria o objeto Comentario
      let comment = new Comentario(localStorage.getItem('login'),
                                   document.querySelector('#comentarioPontuacao').value,
                                   document.querySelector('#comentarioDescricao').value )

      comment.salvarComentario(this.comentarios)     
    }
  }
}
</script>

<style scoped>
/*----------------------------------
* CLASSES COMUNS EM TODAS AS PÁGINAS
*-----------------------------------
*/
.list-style {
  list-style: none;
}

.esconder {
  display: none;
}

.margin0,
.acomodacoes--card-titulo {
  margin: 0;
}

.padding0 {
  padding: 0;
}

.alinhamento {
  justify-content: flex-start;
  text-align: start;
}

.display-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.flex-wrap {
  display: block;
  flex-wrap: wrap;
}

.centralizar {
  text-align: center;
  align-items: center;
}

.p-top {
  padding: 1rem 0 0 0;
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

.link-pequeno {
  font: "Quicksand";
  color: #213242;
  text-decoration: none;
}

.btn-primario {
  width: 20vh;
  height: 6vh;
  border: 1px solid #e1c888;
  border-radius: 30px;
  background-color: #e1c888;
  box-shadow: 3px 3px 5px #b3b3b4;
}

.btn-secundario {
  border: #213242 solid 1px;
  margin: 1rem;
  width: 22vw;
  height: 2.5rem;
  text-align: center;
  border-radius: 10px;
  box-shadow: 1px 3px 5px #213242;
  background-color: #213242;
}

.btn-terceario {
  border: white solid 1px;
  margin: 1rem;
  width: 22vw;
  height: 2.5rem;
  text-align: center;
  border-radius: 10px;
  box-shadow: 1px 3px 5px #213242;
}

.btn-padrao {
  background-color: #213242;
  border: none;
  box-shadow: 3px 1px 8px white inset;
  border-radius: 20px;
  width: 50%;
  height: 3rem;
  margin: 1rem 1rem;
}

.btn-texto {
  color: white;
  font: "Quicksand";
  text-align: center;
  font-size: 1vw;
}

.margem-padrao {
  margin: 1rem 1rem;
}

.margin-left {
  margin: 0 0.5rem;
}

.margin-padrao {
  padding: 0.5rem;
}

.imagem-padrao {
  margin: 1.5rem;
  width: 90%;
}

.borda-padrao {
  margin: 3rem;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 1px 3px 5px #213242;
}

.borda-padrao:hover {
  box-shadow: 1px 4px 10px #213242;
}

.borda-primaria {
  margin: 5vw 30vw;
  border-radius: 15px;
  box-shadow: 1px 3px 5px #213242;
}

.borda-primaria:hover {
  box-shadow: 1px 4px 10px #213242;
}

.box-padrao {
  background-color: rgba(225, 200, 136, 0.7);
  width: 80%;
  padding: 3%;
  margin-left: 1.8rem;
  text-align: start;
}

.input-padrao {
  border: white solid 1px;
  margin: 1rem;
  width: 22vw;
  height: 2.5rem;
  text-align: center;
  border-radius: 10px;
  box-shadow: 1px 3px 5px #213242;
}

.input-basico {
  border: white solid 1px;
  margin: 0.5rem;
  text-align: center;
  border-radius: 10px;
  box-shadow: 1px 3px 5px #213242;
  width: 70vw;
  height: 2.5rem;
}

.h2-primario {
  padding: 0 1.5rem;
  text-align: start;
  color: #213242;
  font: "Quicksand";
}

.h2-secundario {
  padding: 1rem;
  text-align: start;
  color: #cf9903;
  font: "Quicksand";
}

.h3-primario {
  padding: 0 1.5rem;
  text-align: start;
  color: #213242;
  font: "Quicksand";
}

.h3-secundario {
  padding: 1rem;
  text-align: start;
  color: #cf9903;
  font: "Quicksand";
  color: #cf9903;
}

.p-primario {
  padding: 0 1.5rem;
  text-align: start;
  color: #213242;
  font: "Quicksand";
}

.p-secundario {
  padding: 3rem 1.5rem 0 1.5rem;
  color: #213242;
  font: "Quicksand";
}

/*---------------
* ACOMODAÇÕES
*---------------
*/
.acomodacoes {
  min-width: 1170px;
  margin: 0 auto;
  padding: 1.5rem 0;
  width: 90%;
  position: relative;
  display: flexbox;
  justify-content: space-evenly;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
}

.acomodacoes--card {
  display: inline-block;
  width: 30%;
  margin-right: 0.6rem;
  margin-bottom: 1rem;
  height: 50%;
  border: 1px solid white;
  border-radius: 30px;
  box-shadow: 8px 8px 10px #213242;
  height: 50vh;
}

.acomodacoes--card:hover {
  box-shadow: 8px 8px 10px #3c5a74;
}

.acomodacoes--card-titulo {
  position: top;
}

@media (max-width: 1170px) {

  .acomodacoes,
  .acomodacoes--card {
    flex-flow: column;
    min-width: 90%;
  }
}
</style>