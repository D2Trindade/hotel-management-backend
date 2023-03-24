<template>
    <input class="responsive-input" type="submit" :value="tipo">
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

@media (max-width: 600px) {
  .responsive-input {
    width: 100%;
  }
}

</style>