<template>
    <div>
        <div class="modal fade" id="modalLogin" tabindex="-1" aria-labelledby="modalLoginLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modalLogin__body">
                        
                        <div class="modalLogin__container">
                            <div class="modalLogin__box">
                                <input id="item-1" type="radio" name="item" class="sign-in" checked><label for="item-1" class="item">Login</label>
                                <input id="item-2" type="radio" name="item" class="sign-up"><label for="item-2" class="item">Cadastro</label>
                                <div class="login-form">
                                    <div class="sign-in-htm">
                                        <div class="modalLogin__group">
                                            <input placeholder="Email" id="loginEmail" type="email" class="input">
                                        </div>
                                        <div class="modalLogin__group">
                                            <input placeholder="Senha" id="loginPass" type="password" class="input" data-type="password">
                                        </div>

                                        <div class="modalLogin__group">
                                            <input type="submit" class="button" value="Entrar" @click="realizaLogin" data-bs-dismiss="modal">
                                        </div>
                                        <div class="hr"></div>
                                        <div class="modalLogin__footer">
                                            <a href="#forgot">Esqueceu a senha?</a>
                                        </div>
                                    </div>
                                    <div class="sign-up-htm">
                                        <div class="modalLogin__group">
                                            <input placeholder="Usuário" id="cadastroUser" type="text" class="input">
                                        </div>
                                        <div class="modalLogin__group">
                                            <input placeholder="Email" id="cadastroEmail" type="email" class="input">
                                        </div>
                                        <div class="modalLogin__group">
                                            <input placeholder="Senha" id="cadastroPass" type="password" class="input" data-type="password">
                                        </div>
                                        <div class="modalLogin__group">
                                            <input placeholder="Repita a senha" id="cadastroRepass" type="password" class="input" data-type="password">
                                        </div>

                                        <div class="modalLogin__group">
                                            <input type="submit" class="button" value="Cadastrar" @click="cadastroLogin" data-bs-dismiss="modal">
                                        </div>
                                        <div class="hr"></div>
                                        <div class="modalLogin__footer">
                                            <label class="label" for="item-1">Já possui cadastro?</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalLogin",
    data() {
        return {
            cadastros: []
        }
    },
    methods: {
        cadastroLogin () {
            let cadastroUser = document.querySelector("#cadastroUser").value
            let cadastroEmail = document.querySelector("#cadastroEmail").value
            let cadastroPass = document.querySelector("#cadastroPass").value
            // let cadastroRepass = document.querySelector("#cadastroRepass").value

            // Cria o objeto cadastro
            let cadastro = {}
            cadastro.nome = cadastroUser
            cadastro.email = cadastroEmail
            cadastro.senha = cadastroPass

            // Acrescenta o cadastro aos cadastros no localstorage
            if(localStorage.getItem('cadastros')) {
                this.cadastros = JSON.parse(localStorage.getItem('cadastros'))
            }
            this.cadastros.push(cadastro)
            localStorage.setItem('cadastros', JSON.stringify(this.cadastros))

            this.clearLogin()
            // Realiza o login
            localStorage.setItem('login', cadastroEmail)
            document.querySelector('#logado').classList.remove('esconder')
            document.querySelector('#cadastro').classList.add('esconder')
            document.querySelector('#logado-usuario').innerText = `Bem-vindo ${cadastroUser}`

        },
        // Limpa os dados preenchidos do cadastro
        clearLogin() {
            document.querySelector("#cadastroUser").value = ''
            document.querySelector("#cadastroEmail").value = ''
            document.querySelector("#cadastroPass").value = ''
            document.querySelector("#cadastroRepass").value = ''
        },
        realizaLogin() {
            let loginEmail = document.querySelector("#loginEmail").value
            let loginPass = document.querySelector("#loginPass").value
            let valida = this.validaLogin (loginEmail, loginPass)

            if (valida != -1) {
                localStorage.setItem('login', loginEmail)
                document.querySelector('#logado').classList.remove('esconder')
                document.querySelector('#cadastro').classList.add('esconder')
                document.querySelector('#navMinhasreservas').parentNode.classList.remove('d-none')
                document.querySelector('#logado-usuario').innerText = `Bem-vindo ${this.cadastros[valida].nome}`
                if (document.querySelector(".modalNovoComentario") != null) {
                    document.querySelector(".modalNovoComentario").classList.remove ('esconder')
                }

            } else {
                alert ('Cadastro não encontrado!')
            }
            document.querySelector("#loginEmail").value = ''
            document.querySelector("#loginPass").value = ''
        },
        // Valida se o login realizado está na lista de cadastros (email e senha)
        validaLogin(loginEmail, loginPass) {
            if(localStorage.getItem('cadastros')) {
                this.cadastros = JSON.parse(localStorage.getItem('cadastros'))

                // Varre a lista de cadastros
                for (let i = 0; i < this.cadastros.length; i++) {
                    if (this.cadastros[i].email == loginEmail && this.cadastros[i].senha == loginPass) {
                        return i
                    }
                }
            }
            return -1
        }
    }
}
</script>