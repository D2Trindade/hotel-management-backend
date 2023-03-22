<template>
    <main>
        <section class="section-pd">
            <div class="p-top">
                <h2 class="h2-primario">Lista de Acomodações</h2>
            </div>
            <div class="box-table">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tipo</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Caminho da Imagem</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(acomodacao,index) in acomodacoes" :key="acomodacao.id">
                            <td>{{acomodacao.id}}</td>
                            <td>{{acomodacao.tipo}}</td>
                            <td>{{acomodacao.descricao_acomodacoes}}</td>
                            <td>RS {{acomodacao.preco}},00</td>
                            <td>{{acomodacao.caminhoDaImagem}}</td>
                            <td style="width: 18%;">
                                <a class="btn" @click="editar(index)"><i class="fa-solid fa-square-pen fa-2x" data-bs-toggle="modal" data-bs-target="#modalEdit"></i></a>
                                <a class="btn" @click="deactivate(acomodacao.id)"><i class="fa-solid fa-trash-can fa-2x"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div class="input-field">
                                    <label for="ftipo">Tipo</label>
                                    <input class="input-padrao" placeholder="Tipo" id="ftipo" type="text" v-model="addInput.tipo">
                                </div>
                                <div class="input-field">
                                    <label for="fimagem">Carregar imagem</label>
                                    <input class="input-padrao col p-1" type="file" id="fimagem" ref="files">
                                    <!-- <button type="button" class="btn btn-secondary" @click="carregaArquivo">Enviar</button> -->
                                </div>
                            </td>
                            <td>
                                <div class="input-field">
                                    <label for="fdescricao">Descrição</label>
                                    <textarea class="input-padrao" placeholder="Descrição" id="fdescricao" v-model="addInput.descricao_acomodacoes" />
                                </div>
                            </td>
                            <td>
                                <div class="input-field">
                                    <label for="fpreco">Preço</label>
                                    <input class="input-padrao" placeholder="Preço" id="fpreco" type="number" v-model="addInput.preco" min="1"/>
                                </div>
                            </td>
                            <td colspan="2">
                                <a href="#!" @click="add" class="btn btn-waves green darken-2"><i class="fa-solid fa-circle-plus fa-2x"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
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
                        <div class="input-field col s6">
                            <label for="mimagem">Carregar Imagem</label>
                            <input id="mimagem" type="text" class="input-padrao p-primario bg-secondary text-white" v-model="editInput.caminhoDaImagem" readonly>
                            <input class="input-padrao col p-1" type="file" id="mcarregaimagem" ref="updateFiles"/>
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
            logado: false,
            acomodacoes: [],
            imagem: null,
            editInput: {
                id: "",
                tipo: "",
                descricao_acomodacoes: "",
                preco: "",
                caminhoDaImagem: ""
            },
            addInput: {
                tipo: "",
                descricao_acomodacoes: "",
                preco: ""
            }
        }
    },
    methods: {
        async readAcomodacoes() {
            // Busca as acomodações incluídas no DB
            const conexao = require('@/assets/js/ConexaoAPI.js')
            let acomodacoes = await conexao.getAPI('/acomodacoes')
            this.acomodacoes = acomodacoes
        },
        editar(index) {
            this.editInput = this.acomodacoes[index];
        },
        async updateUser() {
            let id = this.editInput.id
            let image = await this.carregaArquivo('updateFiles');
            let dados;

            // Sem alterar imagem
            if (image == undefined) {
                dados = {
                    tipo: this.editInput.tipo,
                    descricao_acomodacoes: this.editInput.descricao_acomodacoes,
                    preco: this.editInput.preco,
                    updatedAt: new Date().getTime()
                }
            }
            // Também alterar a imagem
            else {
                dados = {
                    tipo: this.editInput.tipo,
                    descricao_acomodacoes: this.editInput.descricao_acomodacoes,
                    preco: this.editInput.preco,
                    caminhoDaImagem: `/acomodacoes/${image}`,
                    updatedAt: new Date().getTime()
                } 
            }
            const conexao = require('@/assets/js/ConexaoAPI.js')
            await conexao.putAPI(`/acomodacoes/${id}`, dados)

            this.readAcomodacoes()
        },
        async add() {
            if (this.addInput.tipo == '' || this.addInput.descricao_acomodacoes == '' || 
                this.addInput.preco == '' || this.$refs.files.files[0] == undefined)  {
                alert('Favor preencher todos os campos!')
                return
            }

            let image = await this.carregaArquivo('addFiles');
            var newAcomodacao = {
                tipo: this.addInput.tipo,
                descricao_acomodacoes: this.addInput.descricao_acomodacoes,
                preco: this.addInput.preco,
                caminhoDaImagem: `/acomodacoes/${image}`,
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
        },
        async carregaArquivo(mode) {
            if (mode == 'updateFiles') {
                this.imagem = this.$refs.updateFiles.files[0]
            }
            else {
                this.imagem = this.$refs.files.files[0]
            }

            const formData = new FormData()
            formData.append(`file`, this.imagem)

            const conexao = require('@/assets/js/ConexaoAPI.js')
            let data = await conexao.postImages('/uploadAcomodacoes', formData)
            return data.files[0].filename
        }
    },
    mounted: function() {
        this.readAcomodacoes()
    },
    beforeMount: function() {
        // Valida se está logado
        if (localStorage.getItem('loginFunc')) {
            this.logado = true
        }
        else {
            this.logado = false
            alert('Acesso restrito')
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
textarea {
    height: 5rem;
}
table {
    max-width: 100px;
}
.box-table {
    overflow-x: auto ;
}
</style>