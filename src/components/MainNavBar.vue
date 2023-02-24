<template>
    <nav class="navbar navbar-expand-sm global-bg-azul">
        <router-link to="/" class="navbar-brand ps-3 color--bege">Grand Royal Hotel</router-link>
        <div class="collapse navbar-collapse" id="colNav">
            <ul class="navbar-nav">
                <li class="nav-item" v-for="pg in paginas" :key="pg.id">
                    <router-link class="nav-link" :to="pg.link" :id="pg.id">{{pg.nome}}</router-link>
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
                {id: 'navHome', nome: 'Home', link: '/'},
                {id: 'navSobre', nome: 'Sobre', link: '/sobre'},
                {id: 'navAcomodacoes', nome: 'Acomodações', link: '/acomodacoes'},
                {id: 'navReservas', nome: 'Reservas', link: '/reservas'},
                {id: 'navContato', nome: 'Contato', link: '/contato'},
                {id: 'navMinhasreservas', nome: 'Minhas Reservas', link: '/minhasreservas'},
                {id: 'navAdm', nome: 'Área administrativa', link: '/adm'},
            ]
        }
    }
}
</script>

<style scoped>

</style>