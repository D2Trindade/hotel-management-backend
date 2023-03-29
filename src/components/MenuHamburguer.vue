<template>
    <div class="menu-hamburguer">
        <div class="">
            <div class="">
                <input type="checkbox" name="checkbox" id="alterna">
                <label @click="mostrarMenu()" class="hamburguer" for="alterna">
                    <div class="linha"></div>
                    <div class="linha"></div>
                    <div class="linha"></div>
                </label>
            </div>
            <nav v-show="mostrar_menu_mobile" class="menu-items">
                <div class="" id="colNav">
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
        </div>
    </div>

</template>

<script>
export default {
    name: "MenuHamburguer",
    data() {
        return {
            mostrar_menu_mobile: false,
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
    methods: {
        mostrarMenu(){
            this.mostrar_menu_mobile = !this.mostrar_menu_mobile
            console.log(this.mostrar_menu_mobile)
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
.hamburguer {
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    position: relative;
    cursor: pointer;
}

.hamburguer .linha {
    width: 50px;
    height: 3px;
    background-color: #e1c888;
    position: absolute;
    border-radius: 5px;
    transition: 0.3s ease-out;
}

.hamburguer .linha:nth-child(1) {
    top: 26px;
    transform: rotate(0);
}

.hamburguer .linha:nth-child(2) {
    top: 46px;
    transform: rotate(0);
}

.hamburguer .linha:nth-child(3) {
    top: 66px;
    transform: rotate(0);
}

#alterna {
    display: none;
}

#alterna:checked + .hamburguer .linha:nth-child(1) {
    transform: rotate(45deg);
    top: 47px;
}

#alterna:checked + .hamburguer .linha:nth-child(2) {
    transform:  translateX(-100px);
    width: 30px;
    visibility: hidden;
    opacity: 0;
}

#alterna:checked + .hamburguer .linha:nth-child(3) {
    transform: rotate(-45deg);
    top: 48px;
}

/*.menu-items{
    display: none;
}*/

.menu-items ul li a {
  text-decoration: none;
  font-size: 20px;
  text-align:end;
  padding-left: 20px;
  margin-bottom: 15px;
}
</style>