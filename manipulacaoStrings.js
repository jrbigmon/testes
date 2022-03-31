// Exercicio 1 // Ver o tamanho de uma string
let string = "Olá Mundo"
let large = string.length
console.log(large)

// Exercicio 2 // Aumentando as letras e diminuindo
let upperCase = string.toLocaleUpperCase()
let lowerCase = string.toLocaleLowerCase()
console.log(upperCase, lowerCase);

// Exercicio 3 // como separar uma string
let newArrayString = string.split(" ");
console.log(newArrayString)

// Exercicio 4 // concatenar strings 
let newWord = "Jovens titanicos"
let conct = (string + ' and ' + newWord)
console.log(conct)

// Exercicio 5 // retornar parte de uma string
let partString = conct.slice(0, 9)
console.log(partString)

// Exercicio 6 // Verificar se uma string tem uma determinada string
let word = 'Mundo'
let youExist =  conct.indexOf(word)
youExist > -1? console.log('Position: ' + youExist + ', Search word: ' + word): 'Not exist'

// Exercicio 7 // 