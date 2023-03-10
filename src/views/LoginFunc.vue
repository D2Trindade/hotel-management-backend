<template>  
  <div class="login-box">    
    <h2>Login</h2>      
    <div class="login-form">          
      <div class="sign-in-htm">              
        <div class="modalLogin__group">                  
          <input placeholder="E-mail" id="loginAdmUser" type="email" class="input" v-model="readInput.email">              
        </div>              
        <div class="modalLogin__group">            
          <input placeholder="Senha" id="loginAdmPass" type="password" class="input" data-type="password" v-model="readInput.password">              
        </div>
        <div>
          <div class="modalLogin__group esconder">
            <span>Para seu primeiro acesso, redefina sua senha!</span>
            <input placeholder="Nova Senha" id="loginAdmNewPass" type="password" class="input" data-type="password" v-model="readInput.newpassword">              
          </div>
          <div class="modalLogin__group esconder">
            <input placeholder="Confirmar Senha" id="loginAdmConfPass" type="password" class="input" data-type="password" v-model="readInput.confpassword">              
          </div>
          <div class="modalLogin__group esconder">                  
            <input type="submit" class="button" id="loginButtonAtualizar" value="Atualizar" @click="atualizaLoginAdm">              
          </div>
        </div>           
        <div class="modalLogin__group">
          <input type="submit" class="button" id="loginButtonEntrar" value="Entrar" @click="realizaLoginAdm">              
        </div>
                  
      </div>      
    </div>  
  </div>
</template>

<script>
import { descriptografarSenha, criptografarSenha } from '@/assets/js/Criptografar'

export default {
  name: 'AdmLogin',
  data() {
    return {
      user: [],
      pass: [],
      readInput: {
        email: "",
        password: "",
      },
    }
  },
  methods: {
    async realizaLoginAdm() {
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
        if (this.user.role == 'pfuncionario') {   
          document.querySelector('#loginAdmPass').parentNode.classList.add('esconder')
          document.querySelector('#loginButtonEntrar').parentNode.classList.add('esconder')
          document.querySelector('#loginAdmConfPass').parentNode.classList.remove('esconder')
          document.querySelector('#loginAdmNewPass').parentNode.classList.remove('esconder')
          document.querySelector('#loginButtonAtualizar').parentNode.classList.remove('esconder')
          return
        }

        // Verifica se login pertence a um funcionário
        if (this.user.role != 'funcionario') {
          alert('Acesso apenas para funcionários!')
          document.querySelector('#loginAdmUser').value = ''
          document.querySelector('#loginAdmPass').value = '' 
          this.$router.push('/')
          return
        }

        alert('Seja bem vindo(a)!')
        localStorage.setItem('loginFunc', JSON.stringify(this.readInput.email))
        this.$router.push('/admHome')
      } else{
        alert ('Usuário ou senha não cadastrados!')
        document.querySelector('#loginAdmUser').value = ''
        document.querySelector('#loginAdmPass').value = '' 

      }
      console.log(`usuarioSistema: email ${usuarioSistema.email} senha: ${usuarioSistema.password}`)
      console.log(`this.user: ${this.pass}`)


      // let email = document.querySelector('#loginAdmUser').value
      // let password = document.querySelector('#loginAdmPass').value
      
      // // Valida Formato
      // if (!this.validateEmail(email)) {
      //   document.querySelector('#loginAdmUser').value = ''
      //   alert ("Informar um email válido")
      //   return;
      // }

      // // Busca as pessoas incluídas no DB
      // const conexao = require('@/assets/js/ConexaoAPI.js')
      // let pessoas = await conexao.getAPI('/pessoas')
      // for(let i=0; i<pessoas.length; i++) {
      //   // Busca o usuário pelo email && verifica senha
      //   if(pessoas[i].email == email && pessoas[i].password == password) {
      //     // Verifica se login pertence a um funcionário
      //     if (pessoas[i].role != 'funcionario') {
      //       alert('Acesso apenas para funcionários!')
      //       document.querySelector('#loginAdmUser').value = ''
      //       document.querySelector('#loginAdmPass').value = '' 
      //       this.$router.push('/')
      //       return
      //     }

      //     let loginFunc = {
      //       id: pessoas[i].id,
      //       nome: pessoas[i].nome,
      //       email: pessoas[i].email
      //     }
      //     localStorage.setItem('loginFunc', JSON.stringify(loginFunc))
      //     this.$router.push('/admHome')
      //     return
      //   }
      // }
      // alert ("Usuário não encontrado!")
      // document.querySelector('#loginAdmUser').value = ''
      // document.querySelector('#loginAdmPass').value = ''
      // return;
    },
    validateEmail(email) {
      var re = /\S+@\S+\.\S+/

      return re.test(email)
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
    async atualizaLoginAdm() {
      // Verifica se as senhas conferem (nova senha e confirmação)
      if (this.readInput.newpassword != this.readInput.confpassword) {
        alert ("As senhas informadas não conferem!")
        document.querySelector('#loginAdmConfPass').value = ''
        document.querySelector('#loginAdmNewPass').value = ''
        return
      }

      await this.lerUsuarioCompl(this.readInput.email)
      let id = this.user.id
      let dados = {
          password: criptografarSenha(this.readInput.newpassword),
          role: 'funcionario',
          updatedAt: new Date().getTime()
      } 
      const conexao = require('@/assets/js/ConexaoAPI.js')
      await conexao.putAPI(`/pessoas/${id}`, dados)

      // Realiza login
      alert('Seja bem vindo(a)!')
        localStorage.setItem('loginFunc', JSON.stringify(this.readInput.email))
        this.$router.push('/admHome')
    }

  }
}
</script>
<style scoped>
.login-box h2 {
  margin: 30px 30px;
  padding: 0;
  color: #213242;
  text-align: center;
}
.login-box .login-form {
  margin: 0 25%;
}
.login-form .modalLogin__group .input {
  color: #213242;
}
</style>