const chalk = require("chalk");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "nome",
      message: "Qual o seu nome? R: ",
    },
    {
      name: "idade",
      message: "Qual sua idade? R: ",
    },
  ])
  .then((anwers) => {

    if(!anwers.name || !anwers.idade)
        throw new Error("Propriedades não foram preenchidas corretamente")

    console.log(
      chalk.bgYellow.black(
        `O seu nome é ${anwers.nome} e você tem ${anwers.idade} anos!`
      )
    );
  })
  .catch((err) => console.log(chalk.red(err)));
