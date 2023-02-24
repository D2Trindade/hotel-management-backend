<template>  
    <div class="login-box">    
        <h2>Login</h2>      
        <div class="login-form">          
            <div class="sign-in-htm">              
                <div class="modalLogin__group">                  
                    <input placeholder="Usuário" id="loginAdmUser" type="email" class="input">              
                </div>              
                <div class="modalLogin__group">                  
                    <input placeholder="Senha" id="loginAdmPass" type="password" class="input" data-type="password">              
                </div>              
                <div class="modalLogin__group">                  
                    <input type="submit" class="button" value="Entrar" @click="realizaLoginAdm">              
                </div>          
            </div>      
        </div>  
    </div>
</template>

<script>
export default {
  name: 'AdmLogin',
  data() {
    return {
    }
  },
  components: {
  },
  methods: {
    async realizaLoginAdm() {
      const conexao = require('@/assets/js/ConexaoAPI.js')
      let pessoas = await conexao.getPessoas()
      for(let i=0; i<pessoas.length; i++) {
        if(pessoas[i].role == 'usuario') {
          console.log('Pessoa ' + (i+1) + ' - ' + pessoas[i])
        }
      }
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
</style>