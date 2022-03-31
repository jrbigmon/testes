function adicionarHttp(url) {
    return "http://" + url
}
// função que puxa outra função como um parametro e executa ela dentro de si
function processar(lista, addHttp){
    var lista2 = []
    for(let i = 0; i < lista.length; i++){
          lista2.push ( addHttp ( lista[i] ) )
    }
    return lista2;
}
minhaLista = ["www.google.com", "www.youtube.com"]
console.log(processar(minhaLista, adicionarHttp))