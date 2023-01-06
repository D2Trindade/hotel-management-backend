// Comentario.js
export class Comentario {
    #usuario
    #pontuacao
    #descricao
    
    constructor(usuario, pontuacao, descricao) {
        this.#usuario = usuario
        this.#pontuacao = pontuacao
        this.#descricao = descricao
    }

    getUsuario(){
        return this.#usuario
    }
    getPontuacao() {
        return this.#pontuacao
    }
    getDescricao() {
        return this.#descricao
    }
    setPontuacao(newValue) {
        this.#pontuacao = newValue
    }
    setComentario(newValue) {
        this.#descricao = newValue
    }
    // Acrescenta o comentário aos comentários no localstorage
    salvarComentario(comentarios) {
        // Verifica se já existem comentários
        if(localStorage.getItem('comentarios')) {
            comentarios = JSON.parse(localStorage.getItem('comentarios'))
        }
        // Adiciona o comentário atual a lista de comentários
        comentarios.push({
            usuario: this.#usuario,
            pontuacao: this.#pontuacao,
            descricao: this.#descricao
        })
        // Salva a lista atualizada no localStorage
        localStorage.setItem('comentarios', JSON.stringify(comentarios))
    }
}