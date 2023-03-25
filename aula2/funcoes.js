const cliente = {
    nome: "Pedro",
    idade: "23",
    email: "email@email.com",
    telefone: ["31999999999", "31988888888"],
    saldo: 200,
    efetuaPagamento: function (valor){
        if (valor > this.saldo) {
            console.log("Saldo Insuficiente");
        }
        else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. O novo saldo é ${this.saldo}.`);
        }
    }
};

cliente.efetuaPagamento(25);