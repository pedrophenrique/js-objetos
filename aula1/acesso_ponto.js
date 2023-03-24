const cliente = {
    nome: "Pedro",
    idade: 23,
    cpf: "111222333",
    email: "email@email.com",
};

console.log(`O nome do cliente é ${cliente.nome} e ele possui ${cliente.idade} anos.`);
console.log(`Os três primeiros digitos de seu CPF são ${cliente.cpf.substring(0,3)}.`);
