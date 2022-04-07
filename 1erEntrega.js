class Persona{
    constructor(nombre, apellido, mascotas, libros){
        this.nombre=nombre;
        this.apellido=apellido;
        this.mascotas = mascotas;
        this.libros = libros;
    }

    getFullName(){
        console.log(this.nombre + ' ' + this.apellido) 
    }
    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    countMascotas(){
        console.log(this.mascotas.length)
    }
    addBook({nombre,autor}){
        this.libros.push({nombre,autor})
    }
    getBookNames(){
        console.log('Los libros son: ')
        this.libros.forEach(element => {
            console.log(element.nombre)
        });
    }
}
const usuario = new Persona(
    'Elon',
    'Musk',
     ['perro', 'gato'],
     [{nombre:'El señor de los anillos',autor:'William Golding'},
        {nombre:'Fundacion',autor:'Isaac Asimov'}]
)
usuario.getFullName();
usuario.countMascotas();
usuario.addMascota('caniche');
usuario.countMascotas();
usuario.addBook({nombre:'libro3',autor:'autor3'});
usuario.getBookNames();