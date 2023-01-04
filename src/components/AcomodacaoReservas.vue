<template>
    <div class="display-grid borda-padrao">
        <img class="imagem-padrao" :src="imagemQuarto" alt="">
        <div>
            <h3 class="h3-primario">{{nomeQuarto.toUpperCase()}}</h3>
            <p class="p-primario">{{descricaoQuarto}}</p>
            <p class="p-primario">R$ {{valorQuarto}},00</p>
            <div class="p-primario">
                <label for="standard"> <input v-on:click="choiceApt(nomeQuarto)" class="radioRoomChoice" type="radio"
                        name="roomChoice" :id="nomeQuarto" :value="nomeQuarto" required><span>
                        Selecionar o quarto {{nomeQuarto}}</span></label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AcomodacaoReservas',
    props: {
        nomeQuarto: String,
        imagemQuarto: String,
        descricaoQuarto: String,
        valorQuarto: Number
    },
    methods: {
        choiceApt(name){
            document.querySelector('#bookingApt').innerText = name
            localStorage.setItem('quarto', name)
        }
    }
}
</script>
