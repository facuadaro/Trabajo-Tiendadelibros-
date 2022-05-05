import {writeJson} from '../FuncionesAux/writeJSON.js'
import {lectura} from './lectura.js'

const edicion = (filePath, id, title, author, genre, year, cost, price) => {
    var data = lectura(filePath)
    var datos = data.map(dato => 
        {
            if (dato.id == 'Libro: ' + id) {
                dato.title = title
                dato.author = author
                dato.genre = genre
                dato.year = year
                dato.cost = cost
                dato.price = price
            }
            return dato
        }
        )
    return writeJSON(filePath,datos)
}
export {edicion}