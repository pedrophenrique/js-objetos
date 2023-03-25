const cliente = {
    nome: "Pedro",
    idade: "23",
    email: "email@email.com",
    telefone: ["31999999999", "31988888888"],
};

cliente.endereco = {
    rua: "Ítalo Bernades",
    numero: 888,
    apt: true,
    complemento: "apt 103",
};

console.log(cliente);
console.log(cliente.endereco.complemento);
