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
                case "Criar Conta":
                    createAccount()
                    break
                case "Consultar Salado":
                    break
                case "Depositar":
                    deposit()
                    break
                case "Sacar":
                    break
                default:
                    console.log(chalk.bgBlue.black("Obrigado por usar o Accounts!"))
                    process.exit()
                    break;
            }

        }).catch((err) => console.log(err))
}

// create an account
function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))
    buildAccount()
}

function buildAccount() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite um nome para a sua conta:'
        }
    ]).then(anwser => {
        const accountName = anwser['accountName']

        console.info(accountName)

        if (!fs.existsSync('accounts'))
            fs.mkdirSync('accounts')

        if (fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'))
            buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', function (err) {
            console.log(err)
        })

        console.log(chalk.green('Parabéns, a sua conta foi criada!'))
        operation()
    }).catch(err => console.log(err))
}

// add an amount to user account 
function deposit() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ]).then(anwser => {
        const accountName = anwser['accountName']

        // verify if account exists
        if(!checkAccount(accountName)){
            return deposit()
        }

    }).catch(err => console.log(err))

}


function checkAccount(accountName){
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome!'))
        return false
    }

    return true
}