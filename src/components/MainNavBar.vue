<template>
    <nav class="navbar navbar-expand-sm global-bg-azul">
        <router-link to="/" class="navbar-brand ps-3 color--bege">Grand Royal Hotel</router-link>
        <div class="collapse navbar-collapse" id="colNav">
            <ul class="navbar-nav" v-if="logged">
                <li class="nav-item" v-for="pg in paginas" :key="pg.id">
                    <router-link class="nav-link" :to="pg.link" :id="pg.id">{{pg.nome}}</router-link>
                </li>
            </ul>
            <ul class="navbar-nav" v-if="!logged">
                <li class="nav-item" v-for="pg in paginasAdm" :key="pg.id">
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
                {id: 'navAdm', nome: 'Área administrativa', link: '/loginfunc'}
            ],
            paginasAdm: [
                {id: 'navAdmHome', nome: 'Home', link: '/admHome'},
                {id: 'navAdmUsuarios', nome: 'Usuários', link: '/admUsers'},
                {id: 'navAdmAcomodacoes', nome: 'Acomodações', link: '/admAcomodacoes'}
            ]
        }
    },
    computed: {
        logged() {
            if (document.querySelector('#navMinhasreservas') && !localStorage.getItem('login')) {        
                document.querySelector('#navMinhasreservas').parentNode.classList.add('d-none')
            }

            if(this.$route.name != null)
                return !this.$route.name.includes('adm')
            return false
        }
    }
}
</script>

<style scoped>

</style>