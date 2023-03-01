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
                            <th>Ativo</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Função</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td>{{user.ativo}}</td>
                            <td>{{user.nome}}</td>
                            <td>{{user.email}}</td>
                            <td>{{user.role}}</td>
                            <td style="width: 18%;">
                                <a href="#modal" @click="edit(index)" class="btn"><i class="fa-solid fa-user-pen"></i></a>
                                <a href="#!" class="btn" @click="archive(index)"><i class="fa-solid fa-user-slash"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div class="input-field">
                                    <input class="input-padrao p-primario" placeholder="Nome" id="fname" type="text">
                                    <label for="fname">Nome</label>
                                </div>
                            </td>
                            <td>
                                <div class="input-field">
                                    <input class="input-padrao p-primario" placeholder="Email" id="femail" type="email">
                                    <label for="femail">Email</label>
                                </div>
                            </td>
                            <td>
                                <div class="input-field">
                                    <select class="input-padrao p-primario" id="frole">
                                        <option value="usuario">Usuário</option>
                                        <option value="funcionario">Funcionário</option>
                                    </select>
                                    <label for="frole">Função</label>
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
</template>

<script>
export default {
    data() {
        return {
            users: []
        }
    },
    methods: {
        async buscaUsuarios() {
            // Busca as pessoas incluídas no DB
            const conexao = require('@/assets/js/ConexaoAPI.js')
            let pessoas = await conexao.getAPI('/pessoas')
            this.users = pessoas
            console.log(this.users)
        }
    }
}
</script>