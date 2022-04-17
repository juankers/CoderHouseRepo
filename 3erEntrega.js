const express = require('express');
app = express();
const PORT = 8080;

class Contenedor{
    constructor(nombreArchivo){
        this.nombreArchivo = ('./'+nombreArchivo+'.json')
    }    
    async getById (number){
        const fs = require('fs')
        try{
            var data = await fs.promises.readFile(this.nombreArchivo,'utf-8')
        }
        catch(err){
            console.log('Error al abrir el archivooo',err)
        }
        var dataParse = JSON.parse(data)
        var arreglo = dataParse.productos
        var mostrar
        arreglo.forEach(element => {
            if(number === element.id){
                mostrar = element
            }
            mostrar = null
        });
        return mostrar
    }
    async getAll(){
        const fs = require('fs')
        try{
            var data = await fs.promises.readFile(this.nombreArchivo,'utf-8')
        }
        catch(err){
            console.log('Error al abrir el archivooo',err)
        }
        var dataParse = JSON.parse(data)
        var arreglo = dataParse.productos
        return arreglo
    }
}
const objeto = new Contenedor('Productos')

let cantidadVisitas = 0;
const productos = objeto.getAll()
console.log(productos);
const rand = Math.trunc(Math.random()*productos.length*10)

const server = app.listen(PORT, ()=> {
    console.log("Aplicacion express escuchando en el puerto 8080")
});

server.on("Error",error => console.log(`Se tiene el siguiente error: ${error}`));

app.get('/', (req, resp) => {
    cantidadVisitas++;
    resp.send({cantidad: cantidadVisitas})
})
app.get('/productos', (req, resp) => {
    resp.send(objeto.getAll())
})
app.get('/productosRandom', (req, resp) => {
    resp.send(objeto.getById(rand))
})


