<template>
    <label class="row" :for="id">
        <!-- <p class="p-primario">Se inscreva na nossa newsletter e receba diariamente notícias e dicas de lugares para se
        hospedar e promoções:</p> -->
    </label>
    <input class="input-padrao input-basico p-primario" type="text" :id="id" :placeholder="placeholder">
</template>

<script>
export default {
    name: "InputText",
    props: {
        id: String,
        placeholder: String,
    }
}
</script>

<style scoped>
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

.p-primario {
    padding: 0 1.5rem;
    text-align: start;
    color: #213242;
    font: "Quicksand";
}
</style>