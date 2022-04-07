class Contenedor{
    constructor(nombreArchivo){
        this.nombreArchivo = ('./'+nombreArchivo+'.json')
    }    
    async save(obj) {
        const fs = require('fs')
        try{
            var data = await fs.promises.readFile(this.nombreArchivo,'utf-8')
        }
        catch(err){
            console.log('Error al abrir el archivooo',err)
        }
        var dataParse = JSON.parse(data)
        var arreglo = dataParse.productos
        var tamaño = arreglo.length
        if(tamaño !== 0){
            obj.id = (arreglo[tamaño-1].id)+1
        }else{
            obj.id = 1
        }
        arreglo.push(obj)
        try{
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(dataParse,null,2))
        }
        catch(err){
            console.log('Error al editar el archivo',err)
        }
        // fs.close()
        console.log(obj.id)
        return obj.id
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
        console.log(arreglo);
        return arreglo
    }
    async deleteById(number){
        const fs = require('fs')
        try{
            var data = await fs.promises.readFile(this.nombreArchivo,'utf-8')
        }
        catch(err){
            console.log('Error al abrir el archivo',err)
        }
        var dataParse = JSON.parse(data)
        var arreglo = dataParse.productos
        var contador = 0
        arreglo.forEach(element => {
            if(number === element.id){
                arreglo.splice(contador,1)
            }
            contador = contador + 1
        });
        try{
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(dataParse),null,2)
        }
        catch(err){
            console.log('Error al editar el archivo',err)
        }

    }
    async deleteAll(){
        const fs = require('fs')
        try{
            var data = await fs.promises.readFile(this.nombreArchivo,'utf-8')
        }
        catch(err){
            console.log('Error al abrir el archivo',err)
        }
        var dataParse = JSON.parse(data)
        var arreglo = dataParse.productos
        var tamaño = arreglo.length
        arreglo.splice(0,tamaño)
        try{
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(dataParse),null,2)
        }
        catch(err){
            console.log('Error al editar el archivo',err)
        }
    }
}
const objeto = new Contenedor('Productos')
const producto1 = {nombre : "Celular"     ,price : 100, thumbnail : "https://celular.com"}
const producto2 = {nombre : "Computadora" ,price : 200, thumbnail : "https://computadora.com"}
const producto3 = {nombre : "Calculadora" ,price : 300, thumbnail : "https://calculadora.com"}

// objeto.save(producto1)
// objeto.save(producto2)
// objeto.save(producto3)
// const mostrar = objeto.getById(1)
// console.log(mostrar);
// objeto.getAll()
// objeto.deleteById(2)
// objeto.deleteAll()