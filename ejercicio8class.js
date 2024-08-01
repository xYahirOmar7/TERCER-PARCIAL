class persona {
    #nombre;
    #edad;
    constructor(nombre,edad){
        this.#nombre = nombre
        this.#edad = edad
    }
   getnombre(){  
    return this.#nombre
    } 
    setnombre(nombre){ 
        this.#nombre = nombre
    }
} 

var persona1 = new persona("lucia",40)
console.log(persona1.getnombre ())
persona1.setnombre("maria")
console.log(persona1.getnombre())
