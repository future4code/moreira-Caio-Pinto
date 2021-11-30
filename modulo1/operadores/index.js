//exercício 1

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)

// console.log("d. ", typeof resultado)

//Análise: O exercício atribui valores booleanos às variáveis e depois executa operações para verificar se as igualdades são 
//verdadeiras ou falsas. Ao final, ele imprime o tipo de variável dos resultados.

//Exercício 2
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

//Resolução: O prompt cria, sem especificação, variável do tipo string, para que se faça operações numéricas, é preciso, converter
//a variável usando Number()


//Exercício 3

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

//Exercício 1 escrita :

// const idade = Number(prompt("Digite sua idade:"))
// const idadeamigo = Number(prompt("Digite a idade de seu melhor amigo :"))

// console.log("Sua idade é maior do que a do seu melhor amigo?", idade >= idadeamigo)
// console.log("A diferença de idade, é:", idade - idadeamigo)

//Exercício 2 escrita :


// const num = Number(prompt("Insira um número par:"))
// console.log("O resto da divisão desse número por 2, é:", num % 2)

// Todos os números pares, tem uma divisão exata(sem resto), por 2.
// se um número ímpar for iserido na entrada, o resto sempre é maior que 0


//Exercício 3 escrita :

// const idade = Number(prompt("Quantos anos você tem?"))
// meses = idade * 12
// dias = meses * 30
// horas = dias * 24

// console.log("Sua idade em meses, é de :", meses, "meses" )
// console.log("Sua idade em dias, é de :", dias, "dias" )
// console.log("Sua idade em horas, é de :", horas, "horas" )

//Exercício 4 escrita :

// const num1 = Number(prompt("Digite um número:"))
// const num2 = Number(prompt("Digite outro número:"))

// console.log("O primeiro numero é maior que segundo?", num1 > num2 )
// console.log("O primeiro numero é igual ao segundo?", num1 === num2)
// console.log("O primeiro numero é divisível pelo segundo?", (num1 % num2) === 0 )
// console.log("O segundo numero é divisível pelo primeiro?", (num2 % num1) === 0 )

//Desafio

//1.


// const celsius = Number(prompt("Insira a temperatura em celsius:"))

// console.log("77°F, são equivaletes à ", (77 - 32)*(5/9) + 273.15, "kelvin")
// console.log("80°C, são equivalentes à ", (80*(9/5) + 32) ,"Graus Fahrenheit")
// console.log(celsius,"°C, são equivalentes à ", (celsius*(9/5) + 32) ,"Graus Fahrenheit, e", celsius + 273, "Kelvin")