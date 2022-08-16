const chalk = require("chalk")

const nota = 6

if(nota >= 7){
    console.log(chalk.green('Parabéns! Você esta aprovado!'))
} else{
    console.log(chalk.bgRed.black.bold('Você precisa fazer a prova de recuperação!'))
}