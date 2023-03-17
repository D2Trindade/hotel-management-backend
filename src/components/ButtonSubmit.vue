<template>
    <input class="responsivo" type="submit" :value="tipo">
</template>

<script>
export default {
    name: "ButtonSubmit",
    props: {
        tipo: String,
    }
}
</script>

<style scoped>

@media (max-width: 600px){
  .responsivo {
    width: 100%;
  }
}

</style>