const path = require('path')

// Path absoluto
console.log(path.resolve('teste.txt'))

// formar path
const midFolder = "relatorios"
const fileName = "jefferson.txt"

const finalPath = path.join("/", "arquivos", midFolder, fileName)

console.log(finalPath)