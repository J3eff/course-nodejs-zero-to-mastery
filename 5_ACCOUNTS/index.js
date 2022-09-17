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

            console.log(action)

        }).catch((err) => console.log(err))
}