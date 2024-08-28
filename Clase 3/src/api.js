const express = require("express") //traigo el modulo de express
const api=express(); //instancio express

const {router} = require("./Router/raiz")

const path=require("path") //uso path para manejar mejor las rutas
const host = "localhost"
const port = 3999

api.use("/",router)



api.listen(port, host, () => {
    console.log("ok cambio")
    console.log(`http://${host}:${port}`) //truco para cargar a la url por consola
})