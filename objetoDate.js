let dataAtual = new Date();
console.log(dataAtual.getDay())// retorna a posição da semana (domingo = 0)
console.log(dataAtual.getDate())// retorna o dia do mês
console.log(dataAtual.getMonth())// retorna a posição do mês (janeiro = 0)
console.log(dataAtual.getFullYear())// retorna o ano atual completo com 4 digitos


let meuAniversario = new Date(1997, 10, 29)
console.log(meuAniversario.getDate()); // dessa forma busca o dia da variavel declarada
console.log(meuAniversario.getDay());// dessa forma busca o dia da semana da variavel declarada
console.log(meuAniversario.getMonth());// dessa forma busca o mês da variavel declarada
console.log(meuAniversario.getFullYear());// dessa forma busca o ano da variavel declarada

