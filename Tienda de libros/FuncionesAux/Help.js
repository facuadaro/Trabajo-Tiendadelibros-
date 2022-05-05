function help () {
    
    
    console.log('Gracias por utilizar Tienda de Libros') /br
    console.log('Para utilizarla debera utilizar los siguientes comandos') /br

    console.log('node app.js OPTION PARAM1 PARAM2 PARAM3 PARAM4 PARAM5 PARAM6 PARAM7') /br
    console.log('1 = id')
    console.log('2 = title')
    console.log('3 = author')
    console.log('4 = genre')
    console.log('5 = year')
    console.log('6 = cost')
    console.log('7 = price') /br
    console.log('<===========================================================================================================================================================>') /br
    console.log('El comando "new" se utiliza para agregar un libro al archivo, tambien se debe de ingresar los siguientes parametros: tittle, author, genre, year, cost, price')
    console.log('El comando "read" se utiliza para listar todos los libros en el archivo')
    console.log('El comando "edit" se utiliza para editar los parametros de un libro, tambien deben indicarse los parametros id, tittle, author, genre, year, cost, price')
    console.log('El comando delete se utiliza para borrar un libro del archivo, se debe escribir el "id" del libro')
    console.log('El comando "list" se utiliza para listar todos los comandos')
    
    return 'Gracias por utilizar la app Tienda de Libros'
}

export {help}