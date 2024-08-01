class Libro {
    constructor(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
    }

    mostrarInfo() {
        let info = "Título: " + this.titulo + "\nGénero: " + this.genero;
        console.log(info);
    }
}

class Biblioteca {
    constructor() {
        this.libros = [];
    }

    mostrarLibros() {
        let info = "Libros en la biblioteca:\n";
        for (let i = 0; i < this.libros.length; i++) {
            info += (i + 1) + ". " + this.libros[i].titulo + "\n";
        }
        console.log(info);
    }

    agregarLibro(libro) {
        this.libros.push(libro);
    }

    mostrarLibro(indice) {
        if (indice > 0 && indice <= this.libros.length) {
            console.log("Libro #" + indice);
            this.libros[indice - 1].mostrarInfo();
        } else {
            console.log("Este libro no existe");
        }
    }
}

var libro1 = new Libro("El principito", "Novela corta/Fabula/Ficcion especulativa");
var libro2 = new Libro("Peter Pan y Wendy", "Fantastico/Ficcion");
var libro3 = new Libro("El codigo Da Vinci", "Ficcion/Misterio/Policial");
var libro4 = new Libro("El gran gigante bonachon", "Fantastico/Literatura infantil");

var biblioteca1 = new Biblioteca();
biblioteca1.agregarLibro(libro1);
biblioteca1.agregarLibro(libro2);
biblioteca1.agregarLibro(libro3);
biblioteca1.agregarLibro(libro4);

biblioteca1.mostrarLibros();

var indice = prompt("Ingrese un número para mostrar un libro:");
biblioteca1.mostrarLibro(parseInt(indice));