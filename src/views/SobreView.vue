<template>
  <body>
    <main>
      <section class="" id="">
        <article>
          <div class="p-top">
            <h2 class="h2-primario ">Conheça mais sobre o Grand Royal Hotel</h2>
            <h3 class="h3-primario my-5">Palácio Grand Royal</h3>
            <div class="sobre">
              <p class="p-primario w-75">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur placeat tempora enim eum
                assumenda ratione quo quam aspernatur consequatur labore deserunt ipsum ducimus unde, dignissimos quasi, in, nemo
                odio recusandae commodi quis voluptate? Ut beatae ducimus quae odit eum porro labore unde quos qui ipsam quibusdam
                doloribus et blanditiis fuga corporis commodi ratione exercitationem non, esse cum velit, voluptas fugit voluptatem.
                Alias porro rem, reprehenderit tempore corporis quos nostrum aliquid laborum maxime accusantium? Blanditiis pariatur
                deserunt dicta dolorem, alias, sed voluptate ut voluptates eius iure mollitia molestiae dolore delectus placeat
                ullam optio aspernatur voluptatem recusandae ipsa repellat eligendi maxime quisquam.</p>
              <ImagesCarousel tipo="hotel" :imagem1="getImg('background/background-1.png')"
                :imagem2="getImg('background/background-2.png')" :imagem3="getImg('background/background-3.png')" class="w-100" />
            </div>
          </div>
        </article>
        <article id="nossa_historia">
          <h3 class="h3-primario">Nossa História</h3>
          <p class="p-primario">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat ullam vitae magni recusandae, earum sit similique? Suscipit aut facere reprehenderit. Ipsam sit dolore provident perferendis aliquid, repudiandae reiciendis similique?</p>
          <p class="p-primario">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat ullam vitae magni recusandae, earum sit similique? Suscipit aut facere reprehenderit. Ipsam sit dolore provident perferendis aliquid, repudiandae reiciendis similique?</p>
          <p class="p-primario">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat ullam vitae magni recusandae, earum sit similique? Suscipit aut facere reprehenderit. Ipsam sit dolore provident perferendis aliquid, repudiandae reiciendis similique?</p>
          <p class="p-primario">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dicta voluptatibus temporibus necessitatibus possimus tenetur ad facilis inventore, reiciendis amet magni quis non, aliquid odit et sit ducimus! Deserunt soluta deleniti a! Ea, praesentium assumenda. Quisquam harum asperiores in ad, maiores velit fugiat dicta molestias magnam esse id non repellat.</p>
          <div class="acomodacoes acomodacoes--presidencial acomodacoes--luxo acomodacoes--standard">
            <router-link to="/reservas">
              <AcomodacaoCard id="1" />
            </router-link>
            <router-link to="/reservas">
              <AcomodacaoCard id="4" />
            </router-link>
            <router-link to="/reservas">
              <AcomodacaoCard id="7" />
            </router-link>
          </div>
          <p class="p-primario">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dicta voluptatibus temporibus necessitatibus possimus tenetur ad facilis inventore, reiciendis amet magni quis non, aliquid odit et sit ducimus! Deserunt soluta deleniti a! Ea, praesentium assumenda. Quisquam harum asperiores in ad, maiores velit fugiat dicta molestias magnam esse id non repellat.</p>
        </article>
        <aside class="esconder">
          <h3>Anúncio</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quo
            provident consectetur possimus praesentium non distinctio iure
            mollitia nesciunt accusamus, sunt perferendis repellendus
            laudantium, sint quidem, aliquid dolorem. Temporibus eligendi
            possimus esse molestias neque consequuntur eveniet excepturi
            similique repellat, minima velit rem, at tempore nam et architecto
            eum tenetur veritatis.
          </p>
        </aside>
      </section>
    </main>
  </body>
</template>

<script>
import ImagesCarousel from '@/components/ImagesCarousel.vue'
import AcomodacaoCard from '@/components/AcomodacaoCard.vue'

export default {
  name: 'SobreView',
  components:{
    ImagesCarousel,
    AcomodacaoCard
  },
  methods: {
    getImg(url) {
      return require('../assets/images/' + url)
    }
  }
}
</script>

<style scoped>
.p-top {
  padding: 1rem 0 0 0;
}

.h2-primario {
  padding: 0 1.5rem;
  text-align: start;
  color: #213242;
  font: "Quicksand";
}

.h3-primario {
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

.esconder {
  display: none;
}

.sobre {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 970px) {
  .sobre {
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

@media (max-width: 1170px) {

  .acomodacoes,
  .acomodacoes--card {
    flex-flow: column;
    min-width: 90%;
  }
}
</style>
