const banco = require("./banco-xpto")
const Conta = banco.Conta
const ContaCorrente = banco.ContaCorrente
const ContaPoupanca = banco.ContaPoupanca
const Cliente = banco.Cliente
const cadastrandoCliente = banco.cadastrandoCliente

test("Deve fazer um deposito, efetuar um saque e retornar o saldo", () => {
    const maria = new ContaCorrente("Maria", "corrente", 1234, 333)
    cadastrandoCliente(maria)
    maria.deposito(70)
    maria.saque(30)
    expect(maria.saldo).toBe(40)
})
test("Deve fazer um deposito, e retornar o saldo que tem na conta", () => {
    const maria = new ContaCorrente("Maria", "corrente", 1234, 333)
    cadastrandoCliente(maria)
    maria.deposito(70)
    maria.saque(30)
    maria.deposito(400)
    expect(maria.saldo).toBe(440)
})
test("Deve fazer um saque, e retornar que o limite foi excedido", () => {
    const joaquim = new ContaCorrente("Joaquim", "corrente", 1234, 333)
    cadastrandoCliente(joaquim)
    joaquim.deposito(30)
    joaquim.saque(1031)
    expect(joaquim.limiteDeCredito).toBe("limite excedido")
})


