# API
Usando Sequelize

Pastas:

- config
- controllers
- migrations
- models
- routes
- seeders
  

## Rotas de pessoas

### Rota: /pessoas
```router.get('/pessoas', PessoaController.listarPessoas)```  
- Método findAll()
- Lista todas as pessoas

### Rota: /pessoas/5
```router.get('/pessoas/:id', PessoaController.listarPessoaPorID)``` 
- Método findOne()
- parametro passado = const { id } = req.params /  where: {id: Number(id)}
- Lista uma pessoa por ID

### Rota: /pessoas
```router.post('/pessoas', PessoaController.cadastrarPessoa)``` 
- Método create(novaPessoa) / const novaPessoa = req.body
- Cria uma nova pessoa e adiciona ao banco

### Rota: pessoas/5/restaura
```router.post('/pessoas/:id/restaura', PessoaController.restaurarPessoa)``` 
- Método restore() / const { id } = req.params
- Como estamos usando a opção de exclusão suave do sequelize, o método recupera por ID a pessoa (usado a coluna deletedAt)

### Rota: /pessoas/5
```router.put('/pessoas/:id', PessoaController.atualizarPessoa)``` 
- Método .update() / const { id } = req.params, const novasInfos = req.body /
- Atualiza os dados da pessoa por ID

### Rota: /pessoas/5
```router.delete('/pessoas/:id', PessoaController.excluirPessoa)``` 
- Método destroy() 
- Usa a opção do sequelize ```paranoid: true``` para realizr a exclusão suave e não deletar no banco. 
- Foi criada uma tabela deletedAt que monitora o pedido de delete e o método ```restore()``` para recuperação.

## A model Pessoas também terá rotas direcionadas de acordo com as regras (usuário, funcionário e hospede)

## Rotas de acomodações

### Rota: /acomodacoes
```router.get('/acomodacoes', AcomodacaoController.listarAcomodacoes)``` 
- Método Método findAll() / 
- Lista todas as acomodações

```router.get('/acomodacoes/:id', AcomodacaoController.listarAcomodacaoPorID)``` Método findOne() /

### Rota: /acomodacoes
```router.post('/acomodacoes', AcomodacaoController.cadastrarAcomodacao)``` 
- Método create(novaAcomodacao) /
- Cria uma nova acomodação e adiciona ao banco

### Rota: /acomodacoes/7/restaura
```router.post('/acomodacoes/:id/restaura', AcomodacaoController.restaurarAcomodacao)``` 
- Método restore() /
- Usa a opção do sequelize ```paranoid: true``` para realizr a exclusão suave e não deletar no banco. 
- Foi criada uma tabela deletedAt que monitora o pedido de delete e o método ```restore()``` para recuperação.

### Rota: acomodacoes/7
```router.put('/acomodacoes/:id', AcomodacaoController.atualizarAcomodacao)``` 
- Método findOne( { where: { id: Number(id) }}) /
- Atualiza os dados da pessoa por ID

### Rota: acomodacoes/7
```router.delete('/acomodacoes/:id', AcomodacaoController.excluirAcomodacao)```
- Método destroy() 
- Usa a opção do sequelize ```paranoid: true``` para realizr a exclusão suave e não deletar no banco. 
- Foi criada uma tabela deletedAt que monitora o pedido de delete e o método ```restore()``` para recuperação.


## Rotas de quartos

### Rotas: acomodacoes/7/quartos
```router.get('/acomodacoes/:acomodacaoID/quartos', AcomodacaoController.listarQuartoPorAcomodacao)```  
- Metodo findAll({where: { acomodacao_id: Number(acomodacaoID)}
- Lista todos os quartos

### Rotas: acomodacoes/7/quartos/42
```router.get('/acomodacoes/:acomodacaoID/quartos/:numeroQuartoID', AcomodacaoController.listarQuartoPorNumero)``` 
- Método findOne ({ where: {numero_quarto: Number(numeroQuartoID)}
- Lista o quarto pelo número do quarto

### Rotas: acomodacoes/7/quartos
```router.post('/acomodacoes/:acomodacaoID/quartos', AcomodacaoController.adicionarQuarto)``` 
- Método create(novoQuarto)
- Cria um novo quarto e adiciona ao banco

### Rotas: acomodacoes/7/quartos/6
```router.post('/acomodacoes/:acomodacaoID/quartos/:id', AcomodacaoController.restaurarQuarto)```  
- restore({where: { id: Number(id)}})
- Usa a opção do sequelize ```paranoid: true``` para realizr a exclusão suave e não deletar no banco. 
- Foi criada uma tabela deletedAt que monitora o pedido de delete e o método ```restore()``` para recuperação.

### Rotas: acomodacoes/7/quartos/42
```router.put('/acomodacoes/:acomodacaoID/quartos/:quartoID', AcomodacaoController.atualizarQuarto)``` 
- Método update()
- Atualiza os dados da pessoa por ID

### Rota: acomodacoes/7/quartos/4
```router.delete('/acomodacoes/:acomodacaoID/quartos/:quartoID', AcomodacaoController.apagarQuarto)``` 
- Método destroy({where: {numero_quarto: Number(quartoID)}})
- Usa a opção do sequelize ```paranoid: true``` para realizr a exclusão suave e não deletar no banco. 
- Foi criada uma tabela deletedAt que monitora o pedido de delete e o método ```restore()``` para recuperação.