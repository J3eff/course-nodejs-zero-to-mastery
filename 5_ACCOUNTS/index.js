// modulos externos
const inquirer = require("inquirer")
const chalk = require("chalk")

// modulos internos
const fs = require("fs")

operation()

function operation() {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: ['Criar Conta', 'Consultar Salado', 'Depositar', 'Sacar', 'Sair']
    }])
        .then((anwser) => {
            const action = anwser['action']

            switch (action) {
                case 'Criar Conta':
                    createAccount()
                    break
                default:
                    break
            }

        }).catch((err) => console.log(err))
}

// create an account
function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))
}