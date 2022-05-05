"use strict"

const fs = require("fs")

const writeJSON = (filePath) => {

    fs.writeFileSync(filePath, JSON.stringify( null, 2))
    return filePath

    
}

module.exports = { writeJSON };