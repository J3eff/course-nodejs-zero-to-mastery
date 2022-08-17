const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "p1",
      message: "Qual á primeira nota?",
    },
    {
      name: "p2",
      message: "Qual a segunda nota?",
    },
  ])
  .then((anwers) => {    
    console.log(anwers)
    const media = ((parseInt(anwers.p1) + (parseInt(anwers.p2))) / 2) 
    console.log()
    console.log(`A média é: ${media}`)
  })
  .catch((err) => console.log(err));
