let p = [
    {nome: 'Carlos', idade: 20},
    {nome: 'Ana', idade: 19},
    {nome: 'Matheus', idade: 30}
] 

let nome = p.map(obj => obj.nome)
let idade = p.map(obj => ({idade: obj.idade}))

let comId = p.map(function(obj, ind) {
    let newObj = {...obj}
    newObj.id = ind
    return newObj
})
console.log(p)