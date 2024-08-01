class CuentaBancaria {
    #saldo;

    constructor() {
        this.#saldo = 0;
    }

    #verificarCantidad(cantidad) {
        return cantidad >= 0;
    }

    depositar(cantidad) {
        if (this.#verificarCantidad(cantidad)) {
            this.#saldo += cantidad;
            console.log(true);
        } else {
            console.log(false);
        }
    }

    retirar(cantidad) {
        if (this.#verificarCantidad(cantidad) && cantidad <= this.#saldo) {
            this.#saldo = cantidad;
            console.log(true)
        } else {
            console.log(false);; 
        }
    }

    consultarSaldo() {
        return this.#saldo;
    }
}


const cuenta = new CuentaBancaria();
console.log("EL saldo es:",cuenta.consultarSaldo());

cuenta.depositar(500);
console.log("El saldo depositado es de:",cuenta.consultarSaldo());  

cuenta.retirar(100);
console.log("El saldo retirado es de:",cuenta.consultarSaldo());

cuenta.retirar(50);
console.log("su saldo actual retirado es de:",cuenta.consultarSaldo());


