//a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

const numero = (num1, num2)=>{
const soma = num1 + num2
console.log(soma)

}
numero(5, 6)

//Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

const numero2 = (num1, num2)=>{
    const soma = num1 >= num2
    console.log(soma)
    
    }
    numero2(6, 5)

    //c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.

    const numero3 = (num1)=>{
        const soma1 = num1 % 2 == 0
        console.log(soma1)
        
        }
        numero3(7)

        //d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS. 

        const salario = (salario1)=>{
            return salario1*0.1
        }
        console.log(salario(2000))

        const teste = (testeB, testeC) =>{
            return testeB+testeC
        
        }
        console.log(teste(5,5))