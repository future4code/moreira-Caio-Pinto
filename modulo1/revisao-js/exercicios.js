// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const arraypares = array.filter((item) => {
        return item % 2 === 0
    })
    return arraypares 
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const arraypares = array.filter((item) => {
        return item % 2 === 0
    })
    const arrayparesquadrado = arraypares.map((item) =>{
        return item * item 

    })
    return arrayparesquadrado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max(...array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let numeromaior 
    let maiordivisivel 
    let numeromenor 

    if (num1 > num2) {
        numeromaior = num1
        numeromenor = num2
    }else{
        numeromaior = num2
        numeromenor = num1
    }

    maiordivisivel = numeromaior % numeromenor === 0

    const subtração = numeromaior - numeromenor

    return {
        maiorNumero: numeromaior,
        maiorDivisivelPorMenor: maiordivisivel,
        diferenca: subtração 
    }
    

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}