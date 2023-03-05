<template>
  <main>
    <section class="section-pd">

      <BannerVue/>
      
      <article>
        <div class="p-top">
          <h2 class="h2-primario">Sobre o nosso hotel</h2>
        </div>                                    
        <div class="">
          <p class="p-primario">
              Completamente novo e moderno, o Grand Hoyal Hotel está localizado na região central de XXXXX, próximo a XXXXX. <br/>
              É o destino ideal para descanso, turismo, lua de mel, sessões fotográficas e negócios, com o melhor da hotelaria. <br/>
                Aproveite nossa piscina ao ar livre e desfrute de um delicioso  café da manhã.
          </p>
        </div>
            
        <h3 class="h3-primario text-center my-5">Nossas acomodações</h3>
        <div class="acomodacoes acomodacoes--presidencial acomodacoes--luxo acomodacoes--standard">
          <router-link to="/reservas"><AcomodacaoCard id="71" v-on:click="escolherPresidencial()"/></router-link>
          <router-link to="/reservas"><AcomodacaoCard id="81" v-on:click="escolherLuxo()" /></router-link>
          <router-link to="/reservas"><AcomodacaoCard id="91" v-on:click="escolherStandard()"/></router-link>
        </div>
        
        <ImagesCarousel tipo="acomodacoes" 
          :imagem1="getImg('acomodacoes/acomodacoes-standard-2.png')"
          :imagem2="getImg('acomodacoes/acomodacoes-luxo-2.png')"
          :imagem3="getImg('acomodacoes/acomodacoes-presidencial-2.png')"
        />
        <div class="p-top">
          <p class="p-primario">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maxime dolorum sapiente qui quo velit fugiat iste ratione ullam distinctio, quisquam eaque porro quia asperiores omnis, tempora vero optio harum veniam assumenda quidem vel eveniet earum. Fuga sint esse, expedita, reiciendis quae dolor odio vitae, quod cum incidunt obcaecati dolore?</p>
        </div>

        <div class="p-top">
          <h3 class="h2-terceario p-3 bg-primario">Conheça mais sobre nossos serviços</h3>
        </div>
        <h3 class="h3-primario font-weight-bold my-5">Gastronomia</h3>
        <div class="gastronomia">
          <p class="p-primario w-75">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur placeat tempora enim eum assumenda ratione quo quam aspernatur consequatur labore deserunt ipsum ducimus unde, dignissimos quasi, in, nemo odio recusandae commodi quis voluptate? Ut beatae ducimus quae odit eum porro labore unde quos qui ipsam quibusdam doloribus et blanditiis fuga corporis commodi ratione exercitationem non, esse cum velit, voluptas fugit voluptatem. Alias porro rem, reprehenderit tempore corporis quos nostrum aliquid laborum maxime accusantium? Blanditiis pariatur deserunt dicta dolorem, alias, sed voluptate ut voluptates eius iure mollitia molestiae dolore delectus placeat ullam optio aspernatur voluptatem recusandae ipsa repellat eligendi maxime quisquam.</p>
          <ImagesCarousel tipo="gastronomia" :imagem1="getImg('hotel/gastronomia-1.png')"
            :imagem2="getImg('hotel/gastronomia-2.png')" :imagem3="getImg('hotel/gastronomia-3.png')" class="w-100"/>
        </div>

        <div class="p-top">
          <div class="col">
            <label class="row" for="newsletter">
              <p class="p-primario">Se inscreva na nossa newsletter e receba diariamente notícias e dicas de lugares para se
              hospedar e promoções:</p>
            </label>
            <InputDefault id="newsletter" placeholder="Digite seu email aqui" tipo="email" tamanho="50"/>
            <ButtonSubmit tipo="Enviar" class="col btn-terceario" />
          </div>
        </div>

      </article>
    </section>

    <aside class="esconder">
      <p>Espaço reservado para propagandas.</p>
    </aside>
  </main>
</template>

<script>
// @ is an alias to /src
import AcomodacaoCard from '@/components/AcomodacaoCard.vue'
import ImagesCarousel from '@/components/ImagesCarousel.vue'
import InputDefault from '@/components/InputDefault.vue'
import ButtonSubmit from '@/components/ButtonSubmit.vue'
import BannerVue from '@/components/BannerVue.vue'

export default {
  name: 'HomeView',
  components: {
    ImagesCarousel,
    InputDefault,
    ButtonSubmit,
    AcomodacaoCard,
    BannerVue,
  },
  methods: {
    getImg(url) {
      return require('../assets/images/' + url)
    },
    escolherPresidencial(){
      console.log('presidencial')
    },
    escolherLuxo() {
      console.log('luxo')
    },
    escolherStandard() {
      console.log('standard')
    }
  }
}
</script>

<style scoped>
.bg-primario{
  background-color: #213242;
  height: 80px;
  
}
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
}

.h2-terceario{
  font: "Quicksand";
  color: #e1c888;
  text-align: center;
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
/*-------------
* GASTRONOMIA
*--------------
*/
.gastronomia{
  display:inline-flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 970px) {
  .gastronomia {
      flex-flow: column;
    }
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

/*---------------
* HOME
*---------------
*/
.home--banner {
  background-image: url(@/assets/images/background/background-8.png);
  background-size: 100%;
  height: 30vw;
  background-repeat: no-repeat;
}

@media (max-width: 1170px) {

  .acomodacoes,
  .acomodacoes--card {
    flex-flow: column;
    min-width: 90%;
  }
}
</style>
