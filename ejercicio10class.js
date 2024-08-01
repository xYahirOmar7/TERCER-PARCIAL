
class Jugador {
    constructor(nombre, posicion) {
        this.nombre = nombre;
        this.posicion = posicion;
    }
}


class Portero extends Jugador {
    constructor(nombre) {
        super(nombre, 'Portero');
    }
}

class Defensa extends Jugador {
    constructor(nombre) {
        super(nombre, 'Defensa');
    }
}

class Mediocampista extends Jugador {
    constructor(nombre) {
        super(nombre, 'Mediocampista');
    }
}

class Delantero extends Jugador {
    constructor(nombre) {
        super(nombre, 'Delantero');
    }
}


class Equipo {
    constructor(nombre) {
        this.nombre = nombre;
        this.jugadores = [];
        this.goles = 0;
    }

    agregarJugador(jugador) {
        this.jugadores.push(jugador);
    }

    mostrarJugadores() {
        console.log("Jugadores de " + this.nombre + ":");
        for (let i = 0; i < this.jugadores.length; i++) {
            let jugador = this.jugadores[i];
            console.log(jugador.nombre + " - " + jugador.posicion);
        }
    }

    generarGolesAleatorios() {
        this.goles = Math.floor(Math.random() * 6); 
    }

    mostrarGoles() {
        console.log("Goles de " + this.nombre + ": " + this.goles);
    }
}


function simularPartido(equipo1, equipo2) {
    equipo1.generarGolesAleatorios();
    equipo2.generarGolesAleatorios();

    let segundos = 0;
    let intervalo = setInterval(() => {
        console.clear();
        console.log("Tiempo: " + segundos + " segundos");
        console.log(equipo1.nombre + " " + equipo1.goles + " - " + equipo2.goles + " " + equipo2.nombre);
        segundos++;

        if (segundos > 90) { 
            clearInterval(intervalo);
            equipo1.mostrarGoles();
            equipo2.mostrarGoles();

            if (equipo1.goles > equipo2.goles) {
                console.log(equipo1.nombre + " gana el partido!");
            } else if (equipo2.goles > equipo1.goles) {
                console.log(equipo2.nombre + " gana el partido!");
            } else {
                console.log("El partido terminó en empate!");
            }
        }
    }, 1000);
}


let realMadrid = new Equipo('Real Madrid');
let bayernMunich = new Equipo('Bayern Munich');


realMadrid.agregarJugador(new Portero('Keylor Navas'));
realMadrid.agregarJugador(new Defensa('Sergio Ramos'));
realMadrid.agregarJugador(new Defensa('Marcelo'));
realMadrid.agregarJugador(new Defensa('Raphael Varane'));
realMadrid.agregarJugador(new Defensa('Dani Carvajal'));
realMadrid.agregarJugador(new Mediocampista('Luka Modric'));
realMadrid.agregarJugador(new Mediocampista('Toni Kroos'));
realMadrid.agregarJugador(new Mediocampista('Casemiro'));
realMadrid.agregarJugador(new Delantero('Cristiano Ronaldo'));
realMadrid.agregarJugador(new Delantero('Karim Benzema'));
realMadrid.agregarJugador(new Delantero('Gareth Bale'));


bayernMunich.agregarJugador(new Portero('Manuel Neuer'));
bayernMunich.agregarJugador(new Defensa('Mats Hummels'));
bayernMunich.agregarJugador(new Defensa('Jerome Boateng'));
bayernMunich.agregarJugador(new Defensa('David Alaba'));
bayernMunich.agregarJugador(new Defensa('Joshua Kimmich'));
bayernMunich.agregarJugador(new Mediocampista('Thiago Alcantara'));
bayernMunich.agregarJugador(new Mediocampista('Arturo Vidal'));
bayernMunich.agregarJugador(new Mediocampista('Xabi Alonso'));
bayernMunich.agregarJugador(new Delantero('Robert Lewandowski'));
bayernMunich.agregarJugador(new Delantero('Thomas Muller'));
bayernMunich.agregarJugador(new Delantero('Arjen Robben'));


realMadrid.mostrarJugadores();
bayernMunich.mostrarJugadores();


simularPartido(realMadrid, bayernMunich);