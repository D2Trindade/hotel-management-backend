<template>
    <input class="input-padrao p-primario" :type="tipo" :id="id" :placeholder="placeholder" :size="tamanho">
</template>

<script>
export default {
    name: "InputText",
    props: {
        id: String,
        placeholder: String,
        tipo: String,
        tamanho: String
    }
}
</script>