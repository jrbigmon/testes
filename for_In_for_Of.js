// for in
let pessoa = {
    nome: "Vagner Jr",
    idade: 24,
    profissao: "programador"
}
for (let caracteristica in pessoa){
    console.log(caracteristica, pessoa[caracteristica])
}
// for of
let series = ["Friends", "Breaking Bad", "Game Of Thrones"]
for (let valor of series){
    console.log(valor)
}