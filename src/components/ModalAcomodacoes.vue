<template>
    <div>
        <div class="modal fade" id="modalAcomodacoes" tabindex="-1" aria-labelledby="modalAcomodacoes" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modalAcomodacoes">
                        
                        <div class="container modalNovoComentario shadow-lg p-3 my-5 mx-auto bg-white rounded w-75">
                            <h4 class="h3-primario text-center my-3">Deixe sua avaliação aqui:</h4>
                            <label class="d-flex p-primario text-center" for="comentarioPontuacao">Avalie o quarto {{nomeQuarto.toUpperCase()}}: </label>
                            <div class="d-flex justify-content-center avaliacao flex-row-reverse" id="" required>
                            
                                <input type="radio" id="estrela1" name="avaliacao" value="5" /><label for="estrela1"
                                    title="Excelente - 5 estrelas"><i class="fa fa-star fs-2 mx-3 my-2 star" value="1"
                                        aria-hidden="true"></i></label>
                            
                                <input type="radio" id="estrela2" name="avaliacao" value="4" />
                                <label for="estrela2" title="Muito Bom - 4 estrelas"><i class="fa fa-star fs-2 mx-3 my-2" value="1"
                                        aria-hidden="true"></i></label>
                            
                                <input type="radio" id="estrela3" name="avaliacao" value="3" />
                                <label for="estrela3" title="Bom - 3 estrelas"><i class="fa fa-star fs-2 mx-3 my-2" value="1"
                                        aria-hidden="true"></i></label>
                            
                                <input type="radio" id="estrela4" name="avaliacao" value="2" />
                                <label for="estrela4" title="Ruim - 2 estrelas"><i class="fa fa-star fs-2 mx-3 my-2" value="1"
                                        aria-hidden="true"></i></label>
                            
                                <input type="radio" id="estrela5" name="avaliacao" value="1" />
                                <label for="estrela5" title="Péssimo - 1 estrela"><i class="fa fa-star fs-2 mx-3 my-2" value="1"
                                        aria-hidden="true"></i></label>
                            </div>
                            <!-- <input class="d-flex" type="number" id="comentarioPontuacao" max="5" min="1" required> -->
                            <label class="d-flex p-primario" for="comentarioDescricao">Deixe seu comentário: </label>
                            <textarea class="d-flex w-100" id="comentarioDescricao" rows="5" required></textarea>
                            <button class="btn-terceario text-center mx-auto" @click="enviaComentario" data-bs-dismiss="modal">ENVIAR</button>
                        </div>

                        <div class="container my-4">
                            <div  v-for="comentario in comentarios" :key="comentario">
                                <div class="border border-secondary rounded m-4">
                                    <h4 class="h2-primario">Quarto: {{comentario.quarto}}</h4>
                                    <p class="p-primario"><strong>Pontuação:</strong> {{comentario.pontuacao}}</p>
                                    <p class="p-primario"><strong>Descrição:</strong> {{comentario.descricao}}</p>
                                    <p class="p-primario"><strong>Usuário:</strong> {{comentario.usuario}}</p>
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
import { Comentario } from '@/assets/js/Comentario'
export default {
    name: "modalAcomodacoes",
    data() {
        return {
            comentarios: []
        }
    },
    props: {
        nomeQuarto: String
    },
    methods: {
        enviaComentario() {
            let comentarioUsuario = localStorage.getItem('login')
            // let comentarioPontuacao = document.querySelector("#comentarioPontuacao").value
            let comentarioPontuacao = document.querySelector('input[name="avaliacao"]:checked')
            let comentarioDescricao = document.querySelector("#comentarioDescricao").value

            // Validar se os campos do comentário estão preenchidos
            if (comentarioPontuacao == '' || comentarioDescricao == '')  {
                alert('Por favor, preencha todos os campos de comentário')
                return
            }

            // Cria um objeto Comentário
            let comentario = new Comentario(comentarioUsuario, parseInt(comentarioPontuacao.value), comentarioDescricao, this.nomeQuarto)
            // Acrescenta o comentario aos comentarios no localstorage
            comentario.salvarComentario(this.comentarios)

            // Limpa campos de comentário e atualizar a variável comentários
            document.querySelector("#comentarioPontuacao").value = ''
            document.querySelector("#comentarioDescricao").value = ''
            // this.comentarios = JSON.parse(localStorage.getItem('comentarios'))
        },
        atualizaComentarios(quarto) {
            this.comentarios = []
            let comentarios = JSON.parse(localStorage.getItem('comentarios'))

            for (let i = 0; i < comentarios.length; i++) {
                // Preenche o array apenas com os comentarios do quarto clicado
                if(comentarios[i].quarto == quarto) {
                    this.comentarios.push(comentarios[i])
                }          
            }
        }
    }, 
    mounted: function() {    
        // Verifica se algum usuário está logado para comentar
        if (! localStorage.getItem('login')) {
            document.querySelector(".modalNovoComentario").classList.add ('esconder')
        }
    }
}
</script>

<style scoped>
.avaliacao {
    list-style: none;
}

.avaliacao>input {
    display: none;
}

.avaliacao>label {
    color: #213242;
}

.avaliacao>input:checked~label,
.avaliacao:not(:checked)>label:hover,
.avaliacao:not(:checked)>label:hover~label {
    color: #cf9903;
}

.avaliacao>input:checked+label:hover,
.avaliacao>input:checked~label:hover,
.avaliacao>label:hover~input:checked~label,
.avaliacao>input:checked~label:hover~label {
    color: #cf9903;
}

.h2-primario {
    padding: 0 1.5rem;
    text-align: start;
    color: #213242;
    font: "Quicksand";
}
.h2-secundario {
    padding: 1rem;
    text-align: start;
    color: #cf9903;
    font: "Quicksand";
}

.h3-primario {
    padding: 0 1.5rem;
    text-align: start;
    color: #213242;
    font: "Quicksand";
}

.h3-secundario {
    padding: 1rem;
    text-align: start;
    color: #cf9903;
    font: "Quicksand";
    color: #cf9903;
}

.p-primario {
    padding: 0 1.5rem;
    text-align: start;
    color: #213242;
    font: "Quicksand";
}

.p-secundario {
    padding: 3rem 1.5rem 0 1.5rem;
    color: #213242;
    font: "Quicksand";
}

.btn-terceario {
    border: white solid 1px;
    margin: 1rem;
    width: 22vw;
    height: 2.5rem;
    text-align: center;
    border-radius: 10px;
    box-shadow: 1px 3px 5px #213242;
}
</style>