const express = require('express')
const app = express()
const path = require('path') // normaliza rutas (// \\) windows, ios, linux


app.use(require('./routes/index.routes'))


//STATIC FILES
app.use(express.static(path.join(__dirname, '../public')))
app.use((req, res)=> {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(3000, ()=>{
    console.log('Servidor conectado')
})