<template>

  <main class="">
    <section class="contato-estiloForm section-pd">
      <article class="contato-responsivo">
        <h2 class="h2-primario">Entre em contato conosco</h2>

        <form class="h3-primario" action="" @submit="enviar($event)">
          <fieldset class="fieldLogin fieldsetLogin">
            <legend class="contato-legenda">Preencha todos os dados</legend>

            <!-- Nome -->
            <ul class="list-style">
              <li class="contato-li">
                <label for="nome" class="p-primario">Nome:</label><br />             
                <InputText />
              </li>
            </ul>

            <!-- E-mail -->
            <ul class="list-style">
              <li class="contato-li">
                <label for="email" class="p-primario">E-mail:</label><br />
                <InputText />
              </li>
            </ul>

            <!-- Telefone -->
            <ul class="list-style">
              <li class="contato-li">
                <label for="telefone" class="p-primario">Telefone:</label><br />
                <InputText />
              </li>
            </ul>

            <!-- Menu Select -->
            <ul class="list-style">
              <li class="contato-li">
                <label for="assuntos" class="p-primario">Selecione um assunto:</label>
                <br />
                <MenuSelect 
                opt00="..."
                opt01="Cancelamento de Reserva"
                opt02="Departamento Financeiro"
                opt03="Ouvidoria"                
                />
              </li>
            </ul>

            <!-- Text area -->
            <ul class="list-style">
              <li class="contato-li">
                <label for="nome" class="p-primario">Digite sua mensagem:</label><br />
                <TextArea />
              </li>
            </ul>

            <!-- TButton -->
            <ul class="contato-div-button">          
              <ButtonSubmit value="Enviar" class="contato-button btn-terceario"/>
            </ul>
          </fieldset>
        </form>
      </article>
    </section>
    <aside class="esconder"></aside>
  </main> 


</template>

<script>
import InputText from '@/components/InputText.vue'
import MenuSelect from '@/components/MenuSelect.vue'
import TextArea from '@/components/TextArea.vue'
import ButtonSubmit from '@/components/ButtonSubmit.vue'

export default {
  name: 'ContatoView',
  components: {
    InputText,
    ButtonSubmit,
    TextArea,
    MenuSelect
  },
  methods: {
    enviar(e) {
      e.preventDefault()
    }
  }
}
</script>

<style scoped>
.esconder {
  display: none;
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

.list-style {
  list-style: none;
}

.p-primario {
  padding: 0 1.5rem;
  text-align: start;
  color: #213242;
  font: "Quicksand";
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

.contato-responsivo{
  width: 50%;
  margin: 0 auto;
  padding: 30px;
}

@media (max-width: 640px) {
  .contato-responsivo {
    width: 100%;    
  }
  .h2-primario {
    text-align: center;
  }
  .contato-legenda {
    text-align: center;
  }
}


</style>