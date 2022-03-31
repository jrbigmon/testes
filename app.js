function comprimentar(){
    return "Nova Criatura: " + this.nome + ', ' + this.caract + ', ' + this.ano 
}
let criaturas = [ 
    {
    nome: "C3PO",
    caract: "metal",
    ano: 1997,
    comprimentar: comprimentar
    },
    {
    nome: "carro",
    caract: "metal",
    ano: 1997,
    comprimentar: comprimentar
    }
]

function seresAnimado1 (lista){
    for(let i = 0; i < lista.length; i++){
        console.log(lista[i].comprimentar())
        // console.table(lista[i])
    }
}
seresAnimado1(criaturas)