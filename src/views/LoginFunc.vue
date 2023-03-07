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
        <div class="modalLogin__group">                  
          <input type="submit" class="button" value="Entrar" @click="realizaLoginAdm">              
        </div>          
      </div>      
    </div>  
  </div>
</template>

<script>
import { descriptografarSenha } from '@/assets/js/Criptografar'

export default {
  name: 'AdmLogin',
  data() {
    return {
      user: [],
      readInput: {
      email: "",
      password: ""
      },
    }
  },
  methods: {
    async realizaLoginAdm() {
      var usuarioSistema = {
        email: this.readInput.email,
        password: this.readInput.password
      }
      await this.lerUsuario(this.readInput.email)

      if (descriptografarSenha(this.readInput.password, this.user)){
        alert('Seja bem vindo(a)!')
        localStorage.setItem('loginFunc', JSON.stringify(this.readInput.email))
        this.$router.push('/admHome')
      } else{
        alert ('Usuário ou senha não cadastrados!')
        document.querySelector('#loginAdmUser').value = ''
        document.querySelector('#loginAdmPass').value = '' 
        this.$router.push('/')
      }
      console.log(`usuarioSistema: email ${usuarioSistema.email} senha: ${usuarioSistema.password}`)
      console.log(`this.user: ${this.user}`)


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
      this.user = usuario
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