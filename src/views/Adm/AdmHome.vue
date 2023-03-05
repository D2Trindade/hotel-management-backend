<template>
    <main v-if="logado">
        <h3>HOME</h3>
        <p>Parágrafo</p>
    </main>
    <div v-if="!logado">
        <h3 class="my-5">ACESSO NÃO AUTORIZADO</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            logado: false
        }
    },
    beforeMount: function() {
        // Valida se está logado
        if (localStorage.getItem('loginFunc')) {
            this.logado = true
        }
        else {
            this.logado = false
            alert('Acesso restrito')
            this.$router.push('/')
        }
    }
}
</script>
