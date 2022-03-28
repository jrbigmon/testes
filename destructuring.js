// array destructuring
let cores = ['roxo', 'amarelo', 'azul', 'vermelho'] // aqui declaro meus itens dentro da array
// let roxo = cores[0];
// console.log(roxo)
// let [roxo, amarelo, azul, vermelho] = cores;
// console.log(amarelo)
// let [cor1, cor2, cor3, cor4] = cores; // aqui eu transfiro cada item da minha array para a variavel declarada naquela posição
// console.log(cor1) // roxo  -  se refere a posição da minha array cores que transferiu o dado para a variavel cor1
// let [cor1, ,cor3, ,cor5] = cores; // nesse formato, nós colocamos espaços em vazio para declarar que não querermos atribuir aquela  posição da array na variavel em questão na posição declarada
// console.log(cor3)
///////////////////////////////////////////////////////////////////////////////////////
// Objeto destructuring
let pessoa = {nome: "Vagner", idade: 24, profissao: "programador"}
// let {nome, profissao} = pessoa; // nesse caso utilizamos o nome da variavel que buscamos em específico dentro do objeto, passando as informações presentes dentro da propriedade e trazendo para a variavel, conseguindo assim manipula-la
// let meuColaborador = pessoa.nome // nessa situação atribuimos a variavel o instanciamento do objeto usando o dot notation para dizer qual a propriedade se trata
// console.log(meuColaborador)
// let {nome, profissao : cargo} = pessoa // nesse caso nós buscamos a propriedade profissao e alteramos ela para cargo, mundando assim o modo de buscar essa informação no sistema e armazenando a posição do objto na nova variavel declarada
// console.log(cargo)
// A desestruturação nao modifica a array ou objeto original, só faz uma cópia dos valores, mais facilmente e mais rápido