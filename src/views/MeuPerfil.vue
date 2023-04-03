<template>  
  <div class="login-box">    
    <h2>Meu perfil</h2>      
    <div class="login-form">          
      <div class="sign-in-htm">     
        <div class="modalLogin__group">                  
          <input placeholder="Nome" id="perfilNome" type="text" class="input bg-secondary text-white" v-model="readInput.nome" readonly>              
        </div>  
        <div class="modalLogin__group">                  
          <input placeholder="E-mail" id="perfilUser" type="email" class="input" v-model="readInput.email">              
        </div>              
        <div class="modalLogin__group">            
          <input placeholder="Senha atual" id="perfilPass" type="password" class="input" data-type="password" v-model="readInput.password">              
        </div>
        <div>
          <div class="modalLogin__group">
            <span>Preencher apenas caso deseje alterar sua senha!</span>
            <input placeholder="Nova Senha" id="perfilNewPass" type="password" class="input" data-type="password" v-model="readInput.newpassword">              
          </div>
          <div class="modalLogin__group">
            <input placeholder="Confirmar Nova Senha" id="perfilConfPass" type="password" class="input" data-type="password" v-model="readInput.confpassword">              
          </div>
          <div class="modalLogin__group">                  
            <input type="submit" class="button" id="perfilButtonAtualizar" value="Atualizar Dados" @click="atualizaDados">              
          </div>
        </div>           
      </div>      
    </div>  
  </div>
</template>

<script>
import { descriptografarSenha, criptografarSenha } from '@/assets/js/Criptografar'

export default {
  name: 'MeuPerfil',
  data() {
    return {
      user: {},
      pass: [],
      readInput: {
        nome: "",
        email: "",
        password: "",
      },
    }
  },
  methods: {
    async atualizaDados() {
      var usuarioSistema = {
        email: this.readInput.email,
        password: this.readInput.password
      }

      // Verifica se campos estão preenchidos
        if (usuarioSistema.email == '' || usuarioSistema.password == '') {
            alert("Favor preencher os campos!")
            return
        }

      await this.lerUsuario(this.user.email)
    
      //Valida senha atual
      if (descriptografarSenha(this.readInput.password, this.pass)){
        let id = this.user.id

        // Verifica se nova senha foi informar 
        if (this.readInput.newpassword != '') {
            // Verifica se as senhas conferem (nova senha e confirmação)
            if (this.readInput.newpassword != this.readInput.confpassword) {
                alert ("A nova senha informadas não confere com a confirmação!")
                document.querySelector('#perfilConfPass').value = ''
                document.querySelector('#perfilNewPass').value = ''
                return
            }

            // Nova senha é atribuída
            this.readInput.password = this.readInput.newpassword
        }

        let dados = {
            email: this.readInput.email,
            password: criptografarSenha(this.readInput.password),
            updatedAt: new Date().getTime()
        }

        const conexao = require('@/assets/js/ConexaoAPI.js')
        await conexao.putAPI(`/pessoas/${id}`, dados)

        alert('Dados atualizados com sucesso!')
        this.$router.push('/')
      } else{
        alert ('Senha atual não confere!')
        document.querySelector('#perfilUser').value = this.user.email
        document.querySelector('#perfilPass').value = '' 
      }
    },
    async lerUsuario(email) {
      const api = require('@/assets/js/ConexaoAPI.js')
      let usuario = await api.getAPI(`/pessoas/${email}`)
      this.pass = usuario
    }
  },
  mounted: async function() {
      // Verifica se está logado
      if (!localStorage.getItem('login')) {
          alert('Acesso restrito')
          this.$router.push('/')
      }

      const api = require('@/assets/js/ConexaoAPI.js')
      let usuario = await api.getAPI(`/pessoas/user/${localStorage.getItem('login')}`)
      this.user = usuario

      // Carrega os dados atuais nos campos
      this.readInput.nome = this.user.nome 
      this.readInput.email = this.user.email
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