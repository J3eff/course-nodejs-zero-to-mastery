const x = "10"

// cehcar se x é um número
if(!Number.isInteger(x)){
    throw new Error("O valor de x não é um numero inteiro!")
}

console.log('Continuando o código...')
