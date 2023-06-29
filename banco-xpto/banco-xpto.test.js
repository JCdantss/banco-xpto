const banco = require("./banco-xpto")
const ContaCorrente = banco.ContaCorrente
const ContaPoupanca = banco.ContaPoupanca
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

test("Deve fazer um saque, e retornar o valor do saldo restante", () => {
    const joaquim = new ContaPoupanca("Joaquim", "poupanca", 1234, 333)
    cadastrandoCliente(joaquim)
    joaquim.deposito(70)
    joaquim.saque(30)
    expect(joaquim.saldo).toBe(40)
})
test("Deve fazer um saque, e retornar o valor do saldo restante", () => {
    const joaquim = new ContaPoupanca("Joaquim", "poupanca", 1234, 333)
    cadastrandoCliente(joaquim)
    joaquim.deposito(70)
    joaquim.saque(30)
    joaquim.deposito(400)
    expect(joaquim.saldo).toBe(440)
})
test("Deve fazer um saque, e retornar que o cliente nao tem saldo suficiente", () => {
    const joaquim = new ContaPoupanca("Joaquim", "poupanca", 1234, 333)
    cadastrandoCliente(joaquim)
    joaquim.deposito(30)
    joaquim.saque(1031)
    expect(joaquim.saldo).toBe(joaquim.cliente + " " + "nao tem saldo suficiente")
})
test("Deve fazer uma transferencia, e retornar o resultado", () => {
    const joaquim = new ContaCorrente("Joaquim", "poupanca", 1234, 333)
    const maria = new ContaCorrente("Maria", "corrente", 1234, 333)
    cadastrandoCliente(joaquim)
    cadastrandoCliente(maria)
    maria.deposito(100)
    maria.transferencia("Maria", "Joaquim", 60)
    expect(joaquim.saldo).toBe(60)
})