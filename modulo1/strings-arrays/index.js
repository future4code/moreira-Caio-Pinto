// Exercício de interpretação 1

// let array
// console.log('a. ', array)

// array = null
// console.log('b. ', array)

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

// let i = 0
// console.log('d. ', array[i])

// array[i+1] = 19
// console.log('e. ', array)

// const valor = array[i+6]
// // console.log('f. ', valor)

// Resultado :
// a . undefined
// b . null
// c . 11
// d . 3 
// e . [3, 19,  5,  6,  7, 8,  9, 10, 11, 12, 13]
// f . 9

// Exercício de interpretação 2

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// SUBI NUM ÔNIBUS EM MIRROCOS 27

//Exercícios de escrita de código:

// 1:

// const nome = prompt("Olá, digite seu nome:")
// const email = prompt("Agora digite seu email:")
// const fraseconcat = " O e-mail " + email + " foi cadastrado com sucesso. Seja bem vindo(a), " + nome + "!"

// console.log(fraseconcat)


// const minhascomidas = [ "strogonoff", "hambúrguer", "pizza", "lasanha", "hotdog"]

// console.log(minhascomidas)

// console.log("Essas são minhas comidas preferidas:") 
// console.log("strogonoff")
// console.log("hambúrguer")
// console.log("pizza")
// console.log("lasanha")
// console.log("hotdog")

// let i = 0
// console.log(minhascomidas)

// const comidaUser = prompt("Qual a sua comida preferida?")
// minhascomidas.splice(1, 1, comidaUser )
// console.log(minhascomidas) 

// (5) ['strogonoff', 'hambúrguer', 'pizza', 'lasanha', 'hotdog']
// index.js:63 Essas são minhas comidas preferidas:
// index.js:64 strogonoff
// index.js:65 hambúrguer
// index.js:66 pizza
// index.js:67 lasanha
// index.js:68 hotdog
// index.js:71 (5) ['strogonoff', 'hambúrguer', 'pizza', 'lasanha', 'hotdog']
// index.js:75 (5) ['strogonoff', 'batata', 'pizza', 'lasanha', 'hotdog']

// 3 a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

// c) Imprima o array no console

// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

// e) Remova da lista o item de índice que o usuário escolheu.

// f) Imprima o array no consoleImprima no console

// let array 

// array = []

// let i = 0

// var listadetarefas = array
// const tarefa1 = prompt("insira uma tarefa do dia a ser realizada")
// const tarefa2 = prompt("insira mais uma tarefa do dia a ser realizada")
// const tarefa3 = prompt("insira outra tarefa do dia a ser realizada")

// array.push(tarefa1, tarefa2, tarefa3)


// console.log(listadetarefas)

// let tarefafeita = Number(prompt("insira o índice da tarefa que já realizou: 0 , 1 ou 2"))

// listadetarefas.splice(tarefafeita, 1)

// console.log(listadetarefas)

// ['lavar', 'passar', 'cozinhar']
// ['passar', 'cozinhar']