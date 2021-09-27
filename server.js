const express = require('express')
const app = express()

app.get("/",(req,res) => {
    res.send('Hola Mundo')
})

app.listen(3000,()=>{ console.log('El server esta corriendo en el puerto 3000')
})