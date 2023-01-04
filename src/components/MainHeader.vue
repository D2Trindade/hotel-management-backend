<template>
    <header class="header--container container-fluid text-end m-0 p-1">
        <div class="text-center">
            <span class="p-4" id="logado-usuario"></span>
        </div>
        <div class="container" id="logado">
            <button class="btn btn-secondary text-bg-secondary col p-1 " @click="sairLogin">
                Sair
            </button>
        </div>
        <div class="container" id="cadastro">
            <button class="btn btn-secondary col p-1" data-bs-toggle="modal" data-bs-target="#modalLogin">
                Login
            </button>
        </div>
        <div class="d-flex align-items-center">
            <router-link to="/" class="header--logo" title="Grand Hoyal Hotel"></router-link>
            <div class="header--container2">
                <SocialMedia />
                <p class="header--container2-container alinhamento m-1 p-1">
                    A sofisticação e o conforto ideal.<br />
                    Vem ser Grand, vem ser Royal!
                </p>
            </div>
        </div>
    </header>
    <ModalLogin />
</template>

<script>
import "@/assets/css/main.css"
import "@/assets/css/header-footer.css"
import "@/assets/css/login.css"

import SocialMedia from '@/components/SocialMedia.vue'
import ModalLogin from '@/components/ModalLogin.vue'

export default {
    name: 'MainHeader',
    components: {
        SocialMedia,
        ModalLogin
    },
    methods: {
        sairLogin() {
            localStorage.removeItem('login')
            document.querySelector('#logado-usuario').innerText = ''
            document.querySelector('#logado').classList.add('esconder')
            document.querySelector('#cadastro').classList.remove('esconder')
        }
    },
    mounted: function() {
        let cadastros = []
        cadastros = JSON.parse(localStorage.getItem('cadastros'))

        // Validação de login realizado
        if (localStorage.getItem('login')) {
            let cadastroEmail =  localStorage.getItem('login')
            // Varre a lista de cadastros
            for (let i = 0; i < cadastros.length; i++) {
                if (cadastros[i].email == cadastroEmail) {
                    document.querySelector('#logado-usuario').innerText = `Bem-vindo ${cadastros[i].nome}`
                    continue
                }
            }


            document.querySelector('#logado').classList.remove('esconder')
            document.querySelector('#cadastro').classList.add('esconder')
        }
        else {
            document.querySelector('#logado').classList.add('esconder')
            document.querySelector('#cadastro').classList.remove('esconder')
        }
    }
}
</script>

<style scoped>
</style>