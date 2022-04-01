// https://blog.dbins.com.br/manipulando-strings-com-javascript
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

// Exercicio 7 // verificar se uma string termina com determinada string 

// Exercicio 8 // converter um array de string em uma string
let array = ['batma', 'miranha', 'super-homi', 'mexilião' ] 
let arrayString = array.toString()
console.log(arrayString)

// Exercicio 9 // Substituir uma string.
let newString = arrayString.replace('batma', 'robin')
console.log(newString)

// Exercicio 10 // Repetir uma string.
console.log(newString.repeat(2))

// Exercicio 12 // Utilizar expressões regulares para trabalhar com strings
//Os caracteres informados entre as barras são as regras que definem o padrão 
//que queremos localizar. O que está entre chaves [] é o 
//intervalo de caracteres válidos, que seria letras maiúsculas e 
//minúsculas [a-zA-Z]. O ^ representa o começo da expressão e o $ é o final. 
//A regra definida que dizer para procurar qualquer string que comece com qualquer 
//letra maiuscula ou minuscula, os caracteres podem ser repetir várias vezes.
//Utilizando o método match, podemos validar se a nossa string segue o padrão desejado. 
//Perceba que ela recebe como parâmetro a expressão que desejamos avaliar. 
let string1 = 'codigo'
let string2 = 'codigo123'
const stringRegex = /^[a-zA-Z]+$/
console.log(string1.match(stringRegex)); // True // isso significa que nao contem os caracteres do Regex
console.log(string2.match(stringRegex)); // Null // isso significa que contem, retornando null