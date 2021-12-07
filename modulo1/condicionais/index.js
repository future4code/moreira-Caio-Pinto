// exercicios de escrita 

// 1:

// a: O código recebe um número e faz um teste para verificar se ele é par ou não.

// b: Ele passa no teste quando o número é par 
// c: Ele reprova no teste quando o número é impar

//2:

// a: O código recebe o nome de uma fruta, logo em seguida ele faz a verificação do preço através de cada fruta
//estabelecida por  condição.

// b: O preço da fruta maçã, é , R$ 2.25 preco

// c: O preço da fruta  Pêra  é  R$  5


//3:
// a: Ela pede para que o usuário insira um número

// b:para 10, o resultado será : Esse número passou no teste 
//Para -10, o resultado será um erro de referência

// c: Haverá um erro caso a condição numero > 0, não seja satisfeita, a mensagem possivelmente alternativa, está englobada 
//    na ausência dessa condição, o console não imprimirá a mensagem alternativa, pois ela não está na condição de else.


// Exercícios de escrita
// 1:
// let idade = Number(prompt("Qual é a sua idade?"))

// if (idade >= 18){
//     console.log("Você pode dirigir")
// }else{
//     console.log("Você não pode dirigir")
// }

// 2:
// let turno = prompt("Em que turno você estuda? (Digite M para matutino, V para Vespertino ou N, para noturno)")

// if (turno === "M"){
//     console.log("Bom Dia!");
// }else if (turno === "V"){
//     console.log("Boa tarde!");
// }else if (turno === "N"){
//     console.log("Boa noite!");
// }

// 3:
// let turno = prompt("Em que turno você estuda? (Digite M para matutino, V para Vespertino ou N, para noturno)")

// switch (turno){
//     case "M":
//         console.log("Bom dia!");
//         break
//     case "V":
//         console.log("Boa tarde!");
//         break
//     case "N":
//         console.log("Boa noite!");    

// }

// 4:

// let gender = prompt("Qual o gênero de filme?")
// let ingresso = Number(prompt("Qual o valor do ingresso?"))

// if (gender === "fantasia" && ingresso < 15){
//     console.log("Bom filme!");
// }else{
//     console.log("Escolha outro filme");
// }

// Desafio

// 1
// let gender = prompt("Qual o gênero de filme?")
// let ingresso = Number(prompt("Qual o valor do ingresso?"))

// if (gender === "fantasia" && ingresso < 15){
//    let lanches = (prompt("Qual snack que você quer comprar?"))

//     console.log("Bom filme!");
//     console.log(`Aproveite seu/sua ${lanches}`)
// }else{
//     console.log("Escolha outro filme");
// }

// 2

// let nome = prompt("Qual o seu nome completo?")
// let tipojogo = prompt("Qual o tipo e jogo?(IN para internacional e DO para doméstico)")
// let etapa = prompt("Qual a etapa do jogo?(SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final) ")
// let categoria = Number(prompt("Qual a categoria? (1,2,3 ou 4)"))
// let quantidade = Number(prompt("Qual a quantidade de ingressos?"))

// console.log("---Dados da compra---")
// console.log(`Nome do cliente: ${nome}`)

// if (tipojogo === "IN"){
//     console.log("Tipo do jogo: Internacional");
// }else if (tipojogo === "DO" ){
//     console.log("Tipo do jogo: Nacional");
// }

// if (etapa === "SF"){
//     console.log("Semi final");
// }else if (etapa === "DT"){
//     console.log("decisão de terceiro lugar");
// }else if (etapa === "FI"){
//     console.log("final");
// }

// console.log(categoria)
// console.log(`Quantidade de ingressos: ${quantidade}, ingressos`);
// console.log("---Valores---");

// let valoringresso = 0

// if (categoria === 1 && etapa === "SF"){
//     valoringresso + 1320;

// }else if(categoria === 1 && etapa === "DT"){
//     valoringresso + 660;

// }else if(categoria === 1 && etapa === "FI"){
//     valoringresso + 1980;
// }

// if (categoria === 2 && etapa === "SF"){
//     valoringresso + 880;

// }else if(categoria === 2 && etapa === "DT"){
//     valoringresso + 440;

// }else if(categoria === 2 && etapa === "FI"){
//     valoringresso + 1320; 
// }

