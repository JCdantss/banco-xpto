const banco = require("./banco-xpto")
const conta = banco.Conta
const contaCorrente = banco.ContaCorrente
const contaPoupanca = banco.ContaPoupanca
const cliente = banco.Cliente
const cadastrandoCliente = banco.cadastrandoCliente

test("Deve retornar um saque efetuado", () => {
    const maria = new contaCorrente("Maria", "corrente", 1234, 333)
    expect(cadastrandoCliente(maria)[0]).toBe(maria)
})