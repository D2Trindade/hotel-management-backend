<template>
    <input type="submit" :value="tipo">
</template>

<script>
export default {
    name: "ButtonSubmit",
    props: {
        tipo: String,
    }
}
</script>