//a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).
let num3 = Number (prompt("digite o primeiro numero"))
let num4 = Number (prompt("digite o segundo numero"))


console.log(num3, num4)


const adicao = (num1, num2)=>{
    return num1 + num2
    
}
console.log(adicao(num3, num4))

const multiplica = (num1, num2)=>{
   return num1 * num2
 
}
console.log(multiplica(num3, num4))

const sub = (num1, num2)=>{
    return num1 - num2
}
console.log(sub(num3, num4))

const div = (num1, num2)=>{
    return num1 / num2
}
console.log(div(num3, num4))


//Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.



//c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.
//d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.
