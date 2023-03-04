<template>
    <main>
        <section class="section-pd">
            <div class="p-top">
                <h2 class="h2-primario">Lista de Acomodações</h2>
            </div>
            <div class="">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tipo</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(acomodacao,index) in acomodacoes" :key="acomodacao.id">
                            <td>{{acomodacao.id}}</td>
                            <td>{{acomodacao.tipo}}</td>
                            <td>{{acomodacao.descricao_acomodacoes}}</td>
                            <td>RS {{acomodacao.preco}},00</td>
                            <td style="width: 18%;">
                                <a class="btn" @click="editar(index)"><i class="fa-solid fa-user-pen" data-bs-toggle="modal" data-bs-target="#modalEdit"></i></a>
                                <a class="btn" @click="deactivate(acomodacao.id)"><i class="fa-solid fa-user-slash"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div class="input-field">
                                    <label for="ftipo">Tipo</label>
                                    <input class="input-padrao p-primario" placeholder="Tipo" id="ftipo" type="text" v-model="addInput.tipo">
                                </div>
                            </td>
                            <td>
                                <div class="input-field">
                                    <label for="fdescricao">Descrição</label>
                                    <textarea class="input-padrao p-primario" placeholder="Descrição" id="fdescricao" v-model="addInput.descricao_acomodacoes" />
                                </div>
                            </td>
                            <td>
                                <div class="input-field">
                                    <label for="fpreco">Preço</label>
                                    <input class="input-padrao p-primario" placeholder="Preço" id="fpreco" type="number" v-model="addInput.preco" min="1"/>
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
        <button class="col btn-terceario" @click="readAcomodacoes">Recarregar</button>
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
                            <label for="mtipo">Tipo</label>
                            <input class="input-padrao p-primario" placeholder="Tipo" id="mtipo" type="text" v-model="editInput.tipo">
                        </div>
                        <div class="input-field col s6">
                            <label for="mdescricao">Descrição</label>
                            <textarea class="input-padrao p-primario" placeholder="Descrição" id="mdescricao" v-model="editInput.descricao_acomodacoes" />
                        </div>
                        <div class="input-field col s6">
                            <label for="mpreco">Preço</label>
                            <input class="input-padrao p-primario" placeholder="Preço" id="mpreco" type="number" v-model="editInput.preco" min="1"/>
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
            acomodacoes: [],
            editInput: {
                id: "",
                tipo: "",
                descricao_acomodacoes: "",
                preco: ""
            },
            addInput: {
                tipo: "",
                descricao_acomodacoes: "",
                preco: ""
            },
        }
    },
    methods: {
        async readAcomodacoes() {
            // Busca as pessoas incluídas no DB
            const conexao = require('@/assets/js/ConexaoAPI.js')
            let acomodacoes = await conexao.getAPI('/acomodacoes')
            this.acomodacoes = acomodacoes
        },
        editar(index) {
            this.editInput = this.acomodacoes[index];
        },
        async updateUser() {
            let id = this.editInput.id
            let dados = {
                tipo: this.editInput.tipo,
                descricao_acomodacoes: this.editInput.descricao_acomodacoes,
                preco: this.editInput.preco,
                updatedAt: new Date().getTime()
            } 
            const conexao = require('@/assets/js/ConexaoAPI.js')
            await conexao.putAPI(`/acomodacoes/${id}`, dados)
        },
        add: function() {
            if (this.addInput.tipo == '' || this.addInput.descricao_acomodacoes == '' || this.addInput.preco == '') {
                alert('Favor preencher todos os campos!')
                return
            }

            var newAcomodacao = {
                tipo: this.addInput.tipo,
                descricao_acomodacoes: this.addInput.descricao_acomodacoes,
                preco: this.addInput.preco,
                createdAt: new Date().getTime(),
                updatedAt: new Date().getTime()
            }

            this.createAcomodacao(newAcomodacao)
            this.readAcomodacoes()
        },
        async createAcomodacao(newAcomodacao) {
            const conexao = require('@/assets/js/ConexaoAPI.js')
            await conexao.postAPI(`/acomodacoes`, newAcomodacao)
        },
        async deactivate(index) {
            const conexao = require('@/assets/js/ConexaoAPI.js')
            await conexao.deleteAPI(`/acomodacoes/${index}`)
            this.readAcomodacoes()
        }
    }
}
</script>

<style scoped>
textarea {
    height: 5rem;
}
</style>