const banco = require("./banco-xpto")
const conta = banco.Conta
const contaCorrente = banco.ContaCorrente
const contaPoupanca = banco.ContaPoupanca
const cliente = banco.Cliente
const cadastrandoCliente = banco.cadastrandoCliente

test("Deve fazer um deposito, efetuar um saque e retornar o saldo", () => {
    const maria = new contaCorrente("Maria", "corrente", 1234, 333)
    cadastrandoCliente(maria)
    maria.deposito(70)
    maria.saque(30)
    expect(maria.saldo).toBe(40)
})
test("Deve fazer um deposito, e retornar o saldo que tem na conta", () => {
    const maria = new contaCorrente("Maria", "corrente", 1234, 333)
    cadastrandoCliente(maria)
    maria.deposito(70)
    maria.saque(30)
    maria.deposito(400)
    expect(maria.saldo).toEqual(440)
})