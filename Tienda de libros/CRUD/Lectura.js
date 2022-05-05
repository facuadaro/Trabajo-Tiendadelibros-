import fs from 'fs'

const lectura = filePath => JSON.parse(fs.readFileSync(filePath,'utf-8'))

export {lectura}