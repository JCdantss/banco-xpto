
class Cliente {
    constructor(nome, cpf) {
        this.nome = nome
        this.cpf = cpf
    }
}
class Conta {
    constructor(cliente, conta, numeroDaConta, agencia) {
        this.cliente = cliente
        this.conta = conta
        this.numeroDaConta = numeroDaConta
        this.agencia = agencia
        this.saldo = 0
    }
    deposito(valor) {
        return this.saldo = this.saldo + valor
    }
    saque(valor) {
        let depositoAtual = this.saldo - valor
        return depositoAtual > this.saldo ?
            `${this.cliente} nao tem saldo suficiente`
            : depositoAtual < 0 ?
                `${this.cliente} nao tem saldo suficiente`
                : this.saldo = depositoAtual
    }
    transferencia(ClienteDatranferencia, clienteRecebeTranferencia, valorDeTranferencia) {
        const buscandoCliente = clientesCadastrados.find(cliente => cliente.cliente === ClienteDatranferencia)
        const buscandoClienteParaTraferencia = clientesCadastrados.find(cliente =>
            cliente.cliente === clienteRecebeTranferencia)
        const valorTransferido = buscandoCliente.saldo - valorDeTranferencia
        buscandoCliente.saldo = valorTransferido
        const valorRecebidoDaTranferencia = buscandoClienteParaTraferencia.saldo + valorDeTranferencia
        buscandoClienteParaTraferencia.saldo = valorRecebidoDaTranferencia
        return clientesCadastrados
    }
}
class ContaPoupanca extends Conta { }
class ContaCorrente extends Conta {
    constructor(cliente, conta, numeroDaConta, agencia) {
        super(cliente, conta, numeroDaConta, agencia)
        this.limiteDeCredito = 1000
    }
    saque(valor) {

        switch (this.saldo - valor < 0) {
            case true:
                this.limiteDeCredito = this.limiteDeCredito + this.saldo - valor
                this.saldo = 0
                this.limiteDeCredito = this.limiteDeCredito < 0 ?
                    "limite excedido"
                    : this.limiteDeCredito = this.limiteDeCredito
                break;
            case false:
                this.saldo = this.saldo - valor
                this.limiteDeCredito = 1000
                break;
            default:
                break;
        }
    }
}
const joaquim = new ContaPoupanca("Maria", "poupanca", 1234, 333)
const maria = new ContaCorrente("Joaquim", "corrente", 1234, 333)

const cadastrandoCliente = (cliente) => {
    const clientesCadastrados = []
    clientesCadastrados.push(cliente)
    return clientesCadastrados
}

cadastrandoCliente(maria)
cadastrandoCliente(joaquim)

maria.deposito(1000)
console.log(maria)
maria.saque(1000)
console.log(maria)
maria.deposito(800)
console.log(maria)

module.exports = {
    Cliente,
    Conta,
    ContaPoupanca,
    ContaCorrente,
    cadastrandoCliente
}