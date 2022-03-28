// Spread com Arrays
// let frutas1 = ['banana', 'maça', 'pera']
// let frutas2 = ['laranja', 'morango', 'abacaxi']
// let todasFrutas = [...frutas1, ...frutas2]
// console.log(todasFrutas)
// Spread com objetos 
let dadosProfissionais = {
    cargo: 'programador',
    salario: 4800.00,
    cargaHoraria: '40h semanais'
}
let pessoa1 = {
    nome: 'Vagner',
    idade: 24,
    cep: '08830-050',
    ...dadosProfissionais
}
let pessoa2 = {
    nome: 'Geronimou',
    idade: 104,
    cep: "09050-080",
    ...dadosProfissionais
}

// Spread operator com functions
function letras(...parametros){ 
    console.log(parametros)
} // nesse formato nós podemos definir quantos parametro nós quisermos para a função letras()
letras('a', 'b', 'c')
letras('a','b','c','d','e') // aqui ele retorna os parametros como arrays, podendo manipulalos declarando o seu indice