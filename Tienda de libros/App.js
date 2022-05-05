import {carga} from './CRUD/carga.js'
import {help} from './help.js'
import {lectura} from './CRUD/lectura.js'
import {edicion} from './CRUD/edicion.js'
import {borrado} from './CRUD/borrado.js'


var filePath = './Base de datos.json'

let option = process.argv[2]
var param1 = process.argv[3] //id
var param2 = process.argv[4] //title
var param3 = process.argv[5] //author
var param4 = process.argv[6] //genre
var param5 = process.argv[7] //year
var param6 = process.argv[8] //cost
var param7 = process.argv[9] //price

switch(option) {
    case 'new':
        console.log(carga(filePath, param1, param2, param3, param4, param5, param6, param7))
        break
    
    case 'edit':
        console.log(edicion(filePath, param1, param2, param3, param4, param5, param6, param7))
        break
    
        case 'read':
        console.log(lectura(filePath))
        break
    
    case 'delete':
        console.log(borrado(filePath,param1))
        break
    case '--help':
        console.log(help())
        break
    default:
        console.log('Debe ingresar una función correcta')
        break
}