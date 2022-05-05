"use strict" 

const fs =require("fs") 

const {Lectura}= require ("./Lectura")
const {Edicion}= require("./Edicion")


var uuid = require('uuid');


function agregar (filePath, title, author, genre, year, cost, price){

    const objeto ={
		
		"id": uuid.v1(),"title": title, "author": author, "genre": genre, "year": year ,"cost": cost,"price": price
	}
    var data = read(filePath)

    data.push(objeto)

	return Edicion( data, filePath)

} 

module.exports = { agregar }