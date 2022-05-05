import {lectura} from './Lectura.js'
import {writeJson} from '../FuncionesAux/writeJson.js'

const borrado = (filePath, id, title, year) => {
    var data = lectura(filePath)
    var newData = data.filter(dato => dato.id != 'LIBRO:' + id)
    return writeJson(filePath,newData)
}
export {borrado}