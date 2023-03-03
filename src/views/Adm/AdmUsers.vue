<template>
    <main>
        <section class="section-pd">
            <div class="p-top">
                <h2 class="h2-primario">Lista de Usuários</h2>
            </div>
            <div class="">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Função</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user,index) in users" :key="user.id">
                            <td>{{user.id}}</td>
                            <td>{{user.nome}}</td>
                            <td>{{user.email}}</td>
                            <td>{{user.role}}</td>
                            <td style="width: 18%;">
                                <a class="btn" @click="editar(index)"><i class="fa-solid fa-user-pen" data-bs-toggle="modal" data-bs-target="#modalEdit"></i></a>
                                <a href="#!" class="btn" @click="archive(index)"><i class="fa-solid fa-user-slash"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div class="input-field">
                                    <label for="fname">Nome</label>
                                    <input class="input-padrao p-primario" placeholder="Nome" id="fname" type="text">
                                </div>
                            </td>
                            <td>
                                <div class="input-field">
                                    <label for="femail">Email</label>
                                    <input class="input-padrao p-primario" placeholder="Email" id="femail" type="email">
                                </div>
                            </td>
                            <td>
                                <div class="input-field">
                                    <label for="frole">Função</label>
                                    <select class="input-padrao p-primario" id="frole">
                                        <option value="usuario">Usuário</option>
                                        <option value="funcionario">Funcionário</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <a href="#!" @click="add" class="btn btn-waves green darken-2"><i class="fa-sharp fa-solid fa-user-plus"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <button class="col btn-terceario" @click="buscaUsuarios">Recarregar</button>
    </main>

    <div id="modalEdit" class="modal fade" tabindex="-1" aria-labelledby="modalEditLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="center-align">Atualize as informações</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="row">
                    <form class="col s12">
                        <div class="input-field col s6">
                            <label for="mfid">ID</label>
                            <input id="mfid" type="text" class="input-padrao p-primario bg-secondary text-white" v-model="editInput.id" readonly>
                        </div>
                        <div class="input-field col s6">
                            <label for="mfnome">Nome</label>
                            <input placeholder="Nome" id="mfnome" type="text" class="input-padrao p-primario" v-model="editInput.nome">
                        </div>
                        <div class="input-field col s6">
                            <label for="mfemail">Email</label>
                            <input class="input-padrao p-primario" placeholder="Email" id="mfemail" type="email" v-model="editInput.email">
                        </div>
                        <div class="input-field col s6">
                            <label for="mfrole">Função</label>
                            <select class="input-padrao p-primario bg-white" id="mfrole" v-model="editInput.role">
                                <option value="usuario">Usuário</option>
                                <option value="funcionario">Funcionário</option>
                            </select>
                        </div>
                    </form>
                </div>                
                <div class="modal-footer">
                    <button id="confirmarReserva" type="submit" class="btn btn-primary" data-bs-dismiss="modal" @click="updateUser">Atualizar</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [],
            editInput: {
                id: "",
                nome: "",
                email: "",
                role: ""
            }
        }
    },
    methods: {
        async buscaUsuarios() {
            // Busca as pessoas incluídas no DB
            const conexao = require('@/assets/js/ConexaoAPI.js')
            let pessoas = await conexao.getAPI('/pessoas')
            this.users = pessoas
        },
        editar(index) {
            this.editInput = this.users[index];
        },
        async updateUser() {
            let id = this.editInput.id
            let dados = {
                "nome": this.editInput.nome, 
                "email": this.editInput.email, 
                "role": this.editInput.role 
            } 
            const conexao = require('@/assets/js/ConexaoAPI.js')
            await conexao.putAPI(`/pessoas/${id}`, dados)
            console.log(id, dados)
        }
    }
}
</script>