class ClienteService {
    constructor() {
        this.clientes = []
    }

    cadastrar(cliente) {
        this.clientes.push(cliente)
    }

    depositar(valor) {

    }
    saque(valor) {

    }
    transferir(cliente,) {

    }
    buscar() {

    }

    buscarTodos() {
        return this.clientes
    }
}
module.exports = ClienteService