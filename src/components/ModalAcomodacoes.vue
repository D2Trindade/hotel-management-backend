<template>
    <div>
        <div class="modal fade" id="modalAcomodacoes" tabindex="-1" aria-labelledby="modalAcomodacoes" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modalAcomodacoes">
                        
                        <div class="container modalNovoComentario">
                            <h4>Deixe sua avaliação aqui:</h4>
                            <label class="d-flex" for="comentarioPontuacao">Avalie o quarto {{nomeQuarto.toUpperCase()}}: </label>
                            <input class="d-flex" type="number" id="comentarioPontuacao" max="5" min="1" required>
                            <label class="d-flex" for="comentarioDescricao">Deixe seu comentário: </label>
                            <textarea class="d-flex" id="comentarioDescricao" required></textarea>
                            <button class="btn btn-primary d-flex p-2 my-4" @click="enviaComentario" data-bs-dismiss="modal">ENVIAR</button>
                        </div>

                        <div class="container">
                            <div v-for="comentario in comentarios" :key="comentario">
                                <h4>Quarto: {{comentario.quarto}}</h4>
                                <p>Pontuação: {{comentario.pontuacao}}</p>
                                <p>Descrição: {{comentario.descricao}}</p>
                                <p>Usuário: {{comentario.usuario}}</p>
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
            let comentarioPontuacao = document.querySelector("#comentarioPontuacao").value
            let comentarioDescricao = document.querySelector("#comentarioDescricao").value

            // Validar se os campos do comentário estão preenchidos
            if (comentarioPontuacao == '' || comentarioDescricao == '')  {
                alert('Por favor, preencha todos os campos de comentário')
                return
            }

            // Cria um objeto Comentário
            let comentario = new Comentario(comentarioUsuario, parseInt(comentarioPontuacao), comentarioDescricao, this.nomeQuarto)
            // Acrescenta o comentario aos comentarios no localstorage
            comentario.salvarComentario(this.comentarios)

            // Limpa campos de comentário e atualizar a variável comentários
            document.querySelector("#comentarioPontuacao").value = ''
            document.querySelector("#comentarioDescricao").value = ''
            this.comentarios = JSON.parse(localStorage.getItem('comentarios'))        
        }
    }, 
    mounted: function() {
        let comentarios = JSON.parse(localStorage.getItem('comentarios'))

        for (let i = 0; i < comentarios.length; i++) {
            this.comentarios.push(comentarios[i])            
        }
        
        // Verifica se algum usuário está logado para comentar
        if (! localStorage.getItem('login')) {
            document.querySelector(".modalNovoComentario").classList.add ('esconder')
        }
    }
}
</script>