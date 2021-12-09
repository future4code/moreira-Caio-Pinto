//exercícios de interpretação de código 

// 1
// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" }
// ]

// const novoArrayA = usuarios.map((item, index, array) => {
//    console.log(item, index, array)
// })

// a: Nome: Amanda Rangel, apelido: Mandi 
//    Nome: Laís Petra, apelido: Laura
//    Nome: Letícia Chijo, apelido: Chijo

// 2
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

//   a: 
// ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

// 3

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayC = usuarios.filter((item, index, array) => {
//    return item.apelido !== "Chijo"
// })

// console.log(novoArrayC)

// a:
// {nome: 'Amanda Rangel', apelido: 'Mandi'}
// {nome: 'Laís Petra', apelido: 'Laura'}


// Exercícios de escrita de código


// 1


// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// const nomesdogs = pets.map((item , index, array) => {
//     return item.nome
// })
// console.log(nomesdogs)
// arraynomesdogs = []
// arraynomesdogs.push(nomesdogs)
// console.log(arraynomesdogs)




// const salsichas = pets.filter((item, index, array) => {
//     return item.raca === "Salsicha"
// })
// console.log(salsichas)

// const arraysalsichas = []
// arraysalsichas.push(salsichas)
// console.log(arraysalsichas)



// const poodles = pets.filter((item, index, array) => {
//     return item.raca === "Poodle"
// })
// const poodlesnomes = poodles.map((item, index, array) => {
//     return item.nome 
// })


// const arraypoodles = []
// arraypoodles.push(`Você ganhou um cupom de desconto de 10% para tosar o/a ${poodlesnomes} !`)
// console.log(arraypoodles)



// 2

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]


//  a:
//  const produtosnomes = produtos.map((item, index, array) => {
//         return item.nome 
//  })

//  b: Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles



// const desconto = produtos.map((item ) => {
//     return item.nome + ' ' + (item.preco/100 * 95).toFixed(2)

// })
// console.log(desconto)


//  c:
// const produtosnomes = produtos.filter((item, index, array) => {

//     return item.categoria === "Bebidas"

// })

// console.log(produtosnomes)