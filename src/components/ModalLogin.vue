<template>
    <div>
        <div class="modal fade" id="modalLogin" tabindex="-1" aria-labelledby="modalLoginLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header modalLogin__body">
                        <button type="button" id="modalClose" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modalLogin__body">
                        
                        <div class="modalLogin__container">
                            <div class="modalLogin__box">
                                
                                <input id="item-1" type="radio" name="item" class="sign-in" checked><label for="item-1" class="item">Login</label>
                                <input id="item-2" type="radio" name="item" class="sign-up"><label for="item-2" class="item">Cadastro</label>
                                <div class="login-form">
                                    <div class="sign-in-htm">
                                        <div class="modalLogin__group">
                                            <input placeholder="Email" id="loginEmail" type="email" class="input" v-model="readInput.email">
                                        </div>
                                        <div class="modalLogin__group">
                                            <input placeholder="Senha" id="loginPass" type="password" class="input" data-type="password" v-model="readInput.password">
                                        </div>
                                        <div class="modalLogin__group esconder">
                                            <input placeholder="Nova Senha" id="loginNewPass" type="password" class="input" data-type="password" v-model="readInput.newpassword">
                                        </div>
                                        <div class="modalLogin__group esconder">
                                            <input placeholder="Confirmar Senha" id="loginConfPass" type="password" class="input" data-type="password" v-model="readInput.confpassword">
                                        </div>

                                        <div class="modalLogin__group esconder">
                                            <input type="submit" class="button" id="loginBAtualizar" value="Atualizar" @click="atualizaLogin" data-bs-dismiss="modal">
                                        </div>
                                        <div class="modalLogin__group">
                                            <!-- <input type="submit" class="button" id="loginEAtualizar" value="Entrar" @click="login" data-bs-dismiss="modal"> -->
                                            <input type="submit" class="button" id="loginEAtualizar" value="Entrar" @click="login">
                                        </div>
                                        <div class="hr"></div>
                                        <div class="modalLogin__footer">
                                            <a href="#forgot">Esqueceu a senha?</a>
                                        </div>
                                    </div>
                                    <div class="sign-up-htm">
                                        <div class="modalLogin__group">
                                            <input placeholder="Usuário" id="cadastroUser" type="text" class="input" v-model="addInput.nome">
                                        </div>
                                        <div class="modalLogin__group">
                                            <input placeholder="Email" id="cadastroEmail" type="email" class="input" v-model="addInput.email">
                                        </div>
                                        <div class="modalLogin__group">
                                            <input placeholder="Senha" id="cadastroPass" type="password" class="input" data-type="password" v-model="addInput.password">
                                        </div>
                                        <div class="modalLogin__group">
                                            <input placeholder="Repita a senha" id="cadastroRepass" type="password" class="input" data-type="password">
                                        </div>

                                        <div class="modalLogin__group">
                                            <input type="submit" class="button" value="Cadastrar" @click="add" data-bs-dismiss="modal">
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
import { criptografarSenha, descriptografarSenha } from '@/assets/js/Criptografar.js'
export default {
    name: "ModalLogin",
    data() {
        return {
            cadastros: [],
            users: [],
            user: [],
            pass: [],
            addInput: {
                nome: "",
                email: ""
            },
            readInput: {
                email: "",
                password: ""
            },
        }
    },
    methods: {
        async readUsers() {
            // Busca as pessoas incluídas no DB
            const conexao = require('@/assets/js/ConexaoAPI.js')
            let pessoas = await conexao.getAPI('/pessoas')
            this.users = pessoas
        },
        add: function() {
            var newUser = {
                nome: this.addInput.nome,
                ativo: true,
                email: this.addInput.email,
                role: 'usuario',
                createdAt: new Date().getTime(),
                updatedAt: new Date().getTime(),
                deletedAt: null,
                password: criptografarSenha(this.addInput.password)
            }
            console.log(newUser)
            this.createUser(newUser)
            this.clearLogin()

            localStorage.setItem('login', newUser.email)
            document.querySelector('#logado').classList.remove('esconder')
            document.querySelector('#cadastro').classList.add('esconder')
            document.querySelector('#logado-usuario').innerText = `Seja bem-vindo(a)!`
            document.querySelector('#navMinhasreservas').parentNode.classList.remove('d-none')
            
        },
        async login(){
            var usuarioSistema = {
                email: this.readInput.email,
                password: this.readInput.password
            }

            // Verifica se campos estão preenchidos
            if (usuarioSistema.email == '' || usuarioSistema.password == '') {
                alert("Favor preencher os campos!")
                return
            }

            await this.lerUsuario(this.readInput.email)
            await this.lerUsuarioCompl(this.readInput.email)

            if (descriptografarSenha(this.readInput.password, this.pass)){

                // Verifica primeiro acesso
                if (this.user.role == 'pusuario') {
                    console.log('Primeiro acesso')

                    
                    document.querySelector('#loginPass').parentNode.classList.add('esconder')
                    document.querySelector('#loginEAtualizar').parentNode.classList.add('esconder')
                    document.querySelector('#loginBAtualizar').parentNode.classList.remove('esconder')
                    document.querySelector('#loginNewPass').parentNode.classList.remove('esconder')
                    document.querySelector('#loginConfPass').parentNode.classList.remove('esconder')
                    return
                }

                document.querySelector('#modalClose').click()
                this.clearLogin()

                localStorage.setItem('login', this.readInput.email)
                document.querySelector('#logado').classList.remove('esconder')
                document.querySelector('#cadastro').classList.add('esconder')
                document.querySelector('#navMinhasreservas').parentNode.classList.remove('d-none')
                document.querySelector('#logado-usuario').innerText = `Seja bem-vindo(a)!`
            } else{
                alert ('Usuário ou senha não cadastrados!')
            }
            console.log(`usuarioSistema: email ${usuarioSistema.email} senha: ${usuarioSistema.password}`)
            console.log(`this.user: ${this.pass}`)
            window.location = "/"
        },
        async createUser(newUser) {
            const conexao = require('@/assets/js/ConexaoAPI.js')
            await conexao.postAPI(`/pessoas`, newUser)
        },
        async lerUsuario(email) {
            const api = require('@/assets/js/ConexaoAPI.js')
            let usuario = await api.getAPI(`/pessoas/${email}`)
            this.pass = usuario
        },
        async lerUsuarioCompl(email) {
            const api = require('@/assets/js/ConexaoAPI.js')
            let usuario = await api.getAPI(`/pessoas/user/${email}`)
            this.user = usuario
        },

        // cadastroLogin () {
        //     let cadastroUser = document.querySelector("#cadastroUser").value
        //     let cadastroEmail = document.querySelector("#cadastroEmail").value
        //     let cadastroPass = document.querySelector("#cadastroPass").value
            // let cadastroRepass = document.querySelector("#cadastroRepass").value

            // Cria o objeto cadastro
            // let cadastro = {}
            // cadastro.nome = cadastroUser
            // cadastro.email = cadastroEmail
            // cadastro.senha = cadastroPass

            // Acrescenta o cadastro aos cadastros no localstorage
            // if(localStorage.getItem('cadastros')) {
            //     this.cadastros = JSON.parse(localStorage.getItem('cadastros'))
            // }
            // this.cadastros.push(cadastro)
            // localStorage.setItem('cadastros', JSON.stringify(this.cadastros))

            // this.clearLogin()
            // // Realiza o login
            // localStorage.setItem('login', cadastroEmail)
            // document.querySelector('#logado').classList.remove('esconder')
            // document.querySelector('#cadastro').classList.add('esconder')
            // document.querySelector('#logado-usuario').innerText = `Bem-vindo ${cadastroUser}`

        // },
        // Limpa os dados preenchidos do cadastro
        clearLogin() {
            document.querySelector("#cadastroUser").value = ''
            document.querySelector("#cadastroEmail").value = ''
            document.querySelector("#cadastroPass").value = ''
            document.querySelector("#cadastroRepass").value = ''
            document.querySelector("#loginEmail").value = ''
            document.querySelector("#loginPass").value = ''
        }, 
        async atualizaLogin() {
            // Verifica se as senhas conferem (nova senha e confirmação)
            if (this.readInput.newpassword != this.readInput.confpassword) {
                alert ("As senhas informadas não conferem!")
                document.querySelector('#loginConfPass').value = ''
                document.querySelector('#loginNewPass').value = ''
                return
            }

            await this.lerUsuarioCompl(this.readInput.email)
            let id = this.user.id
            let dados = {
                password: criptografarSenha(this.readInput.newpassword),
                role: 'usuario',
                updatedAt: new Date().getTime()
            } 
            const conexao = require('@/assets/js/ConexaoAPI.js')
            await conexao.putAPI(`/pessoas/${id}`, dados)

            // Realiza login
            alert('Seja bem vindo(a)!')
            localStorage.setItem('login', JSON.stringify(this.readInput.email))
            localStorage.setItem('currentUserId', id)
            this.clearLogin()
            localStorage.setItem('login', this.readInput.email)
            document.querySelector('#logado').classList.remove('esconder')
            document.querySelector('#cadastro').classList.add('esconder')
            document.querySelector('#navMinhasreservas').parentNode.classList.remove('d-none')
            
            this.$router.push('/')

        }
        // ,
        // realizaLogin() {
        //     let loginEmail = document.querySelector("#loginEmail").value
        //     let loginPass = document.querySelector("#loginPass").value
        //     let valida = this.validaLogin (loginEmail, loginPass)
        //     loginEmail = loginEmail.trim().replace(/"|'|/gi,'')
        //     loginPass = loginPass.trim().replace(/"|'/gi,'')
           
        //     if (!loginEmail) {
        //         alert('Campo de email vazio!')
        //         return
        //     }
        //     if (!loginPass) {
        //         alert('Campo de senha vazio!')
        //         return
        //     }

        //     if (valida != -1) {
        //         localStorage.setItem('login', loginEmail)
        //         document.querySelector('#logado').classList.remove('esconder')
        //         document.querySelector('#cadastro').classList.add('esconder')
        //         document.querySelector('#navMinhasreservas').parentNode.classList.remove('d-none')
        //         document.querySelector('#logado-usuario').innerText = `Bem-vindo ${this.cadastros[valida].nome}`
        //     } else {
        //         alert ('Cadastro não encontrado!')
        //     }
        //     document.querySelector("#loginEmail").value = ''
        //     document.querySelector("#loginPass").value = ''  
        //     window.location = "/"      
        // },

        // Valida se o login realizado está na lista de cadastros (email e senha)
        // validaLogin(loginEmail, loginPass) {
        //     if(localStorage.getItem('cadastros')) {
        //         this.cadastros = JSON.parse(localStorage.getItem('cadastros'))

        //         // Varre a lista de cadastros
        //         for (let i = 0; i < this.cadastros.length; i++) {
        //             if (this.cadastros[i].email == loginEmail && this.cadastros[i].senha == loginPass) {
        //                 return i
        //             }
        //         }
        //     }
        //     return -1
        // }

    }
}
</script>