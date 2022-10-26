const imprimir = (nome) => {
    return ` Olá ${nome} `
    }
    //const meuNome  = "marcos"
console.log(imprimir(`marcos`)) 

//b) Declare uma função que receba um número como parâmetro imprima no console a 
//tabuada do dele. Chame esta função várias vezes com números diferentes.

const numero = (num) =>{
console.log(num * 1 )
console.log(num * 2 )
console.log(num * 3)
console.log(num * 4)
console.log(num * 5)
console.log(num * 6)
console.log(num * 7)
console.log(num * 8)
console.log(num * 9)
console.log(num * 10)

}

numero (Number (prompt("escolhar um numero."))) 

//Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__


function numero1 (num) {
    console.log(num * 1)
    console.log(num * 2)
    console.log(num * 3)
    console.log(num * 4)
    console.log(num * 5)
    console.log(num * 6)
    console.log(num * 7)
    console.log(num * 8)
    console.log(num * 9)
    console.log(num * 10)
    
    }
    
    numero1 (Number (prompt("escolhar um numero.")))