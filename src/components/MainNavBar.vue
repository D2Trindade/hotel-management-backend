<template>
    <nav class="navbar navbar-expand-sm global-bg-azul">
        <router-link to="/" class="navbar-brand ps-3 color--bege">Grand Royal Hotel</router-link>
        <div class="collapse navbar-collapse" id="colNav">
            <ul class="navbar-nav">
                <li class="nav-item" v-for="pg in paginas" :key="pg.id">
                    <router-link class="nav-link" :to="pg.link">{{pg.nome}}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'MainNavBar',
    data() {
        return {
            paginas: [
                {id: 1, nome: 'Home', link: '/'},
                {id: 2, nome: 'Sobre', link: '/sobre'},
                {id: 3, nome: 'Acomodações', link: '/acomodacoes'},
                {id: 4, nome: 'Reservas', link: '/reservas'},
                {id: 5, nome: 'Contato', link: '/contato'},
            ]
        }
    }
}
</script>

<style scoped>

</style>