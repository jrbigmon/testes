//instanciar dentro de um objeto chamando o metodo this.
let veiculos = {
    marca:'Civic',
    modelo:'Honda',
    ano:2017,
    dizerMeuCarro: function(){
      return 'Meu carro é um '+ this.modelo + ' ' + this.marca;
    }
}
console.log(veiculos.dizerMeuCarro());
// construtores de objetos
function Filmes(nomeDoFilme, anoDeLançamento){
    this.nome = nomeDoFilme;
    this.ano = anoDeLançamento; 
}
let novosFilmes = new Filmes("Miranha no miranha verso", 2017)
console.table(novosFilmes)
