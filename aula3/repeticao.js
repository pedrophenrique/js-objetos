const cliente = {
    nome: "Pedro",
    idade: "23",
    email: "email@email.com",
    telefone: ["31999999999", "31988888888"],
};

cliente.enderecos = [
    {
    rua: "Ítalo Bernardes",
    numero: 888,
    apt: true,
    complemento: "apt 103",
    }
];

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function'){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}.`);
    }
}