const clientesCadastrados = []
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
        const valorDoSaque = this.saldo + valor
        const somaDoSaqueECredito = valorDoSaque
        return valorDoSaque > this.limiteDeCredito + this.saldo ?
            `${this.cliente} o seu limite de credito foi excedido`
            : this.limiteDeCredito = this.limiteDeCredito - valorDoSaque
    }
}
const maria = new ContaPoupanca("Maria", "corrente", 1234, 333)
const joaquim = new ContaCorrente("Joaquim", "poupanca", 1234, 333)
const cadastrandoCliente = (cliente) => {
    clientesCadastrados.push(cliente)
}

cadastrandoCliente(maria)
cadastrandoCliente(joaquim)

console.log(joaquim.deposito(200))
console.log(joaquim.saque(1200))
console.log(joaquim)
