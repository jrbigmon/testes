let dia = 'segunda';
// if ternário   
// dia é igual a domingo? verdadeiro eu faço isso: falso eu faço aquilo
let ifTernario = dia == 'domingo' ? 'Vou ao cinema!': 'Não vou ao cinema'; 
console.log(ifTernario);
// switch case 
switch(dia){
    case 'domingo': // caso a variavel seja o esperado: faço tal coisa e paro no break
        console.log('Vou ao cinema!')
        break; // pausa o switch pq já alcançou o que queria
    case 'segunda':
        console.log('Preciso estudar!')
        break;
    default:
        console.log('Preciso olhar o PlayGround')
        break;
}
