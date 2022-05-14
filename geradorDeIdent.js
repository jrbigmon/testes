function geradorDeIdent(lista){
    var sit = true
    while(sit){
        var valor = Math.floor(Math.random() * 9999)
        sit = lista.find(function(pessoa){
            return pessoa.identificacao == valor
        })
    }
    return valor
}
module.exports = geradorDeIdent


    