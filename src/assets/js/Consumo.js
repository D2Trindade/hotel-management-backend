// Consumo.js
export class Consumo {
    produtos = []

    constructor() {}

    addItem (item) {
        this.produtos.push(item);
        return this.produtos;
    }

    addConsumo(item, qtd) {
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].cod == item) {
                this.produtos[i].qtdConsumido += qtd
            }            
        }
    }
}

export class ConsumoBar extends Consumo {
    constructor () {
        super()
        this.produtos.push({cod: '001', nome: 'Café', valor: 5, qtdConsumido: 0})
        this.produtos.push({cod: '002', nome: 'Pão de queijo', valor: 3, qtdConsumido: 0})
        this.produtos.push({cod: '003', nome: 'Água', valor: 2, qtdConsumido: 0})
        this.produtos.push({cod: '004', nome: 'Lanche', valor: 10, qtdConsumido: 0})
        this.produtos.push({cod: '005', nome: 'Almoço', valor: 20, qtdConsumido: 0})
        this.produtos.push({cod: '006', nome: 'Cerveja', valor: 8, qtdConsumido: 0})
        this.produtos.push({cod: '007', nome: 'Refrigerante', valor: 4, qtdConsumido: 0})
    }
}