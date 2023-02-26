const controller = {}

controller.index = (req, res)=>{
    res.send('La conexión ah sido correcta desde el controlador')
}

module.exports = controller