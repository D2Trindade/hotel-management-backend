// Comentario.js
export class Comentario {
    #usuario
    #pontuacao
    #descricao
    #quarto
    
    constructor(usuario, pontuacao, descricao, quarto) {
        this.#usuario = usuario
        this.#pontuacao = pontuacao
        this.#descricao = descricao
        this.#quarto = quarto
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
    getQuarto() {
        return this.#quarto
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
            descricao: this.#descricao,
            quarto: this.#quarto
        })
        // Salva a lista atualizada no localStorage
        localStorage.setItem('comentarios', JSON.stringify(comentarios))

        alert('Comentário salvo com sucesso!')
    }
}