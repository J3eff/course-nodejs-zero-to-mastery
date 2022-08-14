const fs = require('fs') // file system

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if(err)
       console.log(err)    
    
    console.log(data)
});

const a = 5
const b = 10;
console.log(`Seu resultado é: ${a + b}`)