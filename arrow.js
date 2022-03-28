//função normal
function soma(a,b){
    return a + b;
}
//arrow function
let arrowSoma = (a,b) => a + b; // quando é apenas uma linha não precisa colocar {}

//função normal
function imparOuPar (numero){
    if(numero % 2 == 0){
        return "Esse numero é par"
    }else{
        return "Esse numero é impar"
    }
} 

//arrow function        
let arrowImparOupar = numero => { // aqui o numero não precisa de () porque é apenas um parametro
    if(numero % 2 == 0){
        return 'Esse numero é par'
    }else {
        return 'Esse numero é impar'
    }
}// nesse caso precisa, porque trata-se de mais de uma linha, então coloca-se {}
console.log(arrowSoma(7,8))
console.log(arrowImparOupar(7));