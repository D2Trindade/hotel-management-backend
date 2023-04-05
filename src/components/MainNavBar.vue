<template>
    <nav class="navbar wrap navbar-expand-sm global-bg-azul fixed">
        <MenuHamburguer class="displayHamburguer"/>
        <div class="col">
            <router-link to="/" class="navbar-brand ps-3 color--bege">Grand Royal Hotel</router-link>
            <SocialMedia class="displayHamburguer"/>
        </div>
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
import MenuHamburguer from './MenuHamburguer.vue'
import SocialMedia from './SocialMedia.vue'

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
    components: {
        MenuHamburguer,
        SocialMedia
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
@media (max-width: 575px) {
    .navbar{
        width: 100vw;
        position:sticky;
        z-index: 3;
        top: 0;
    }
    
}
</style>