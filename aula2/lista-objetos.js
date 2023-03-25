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

cliente.enderecos.push({
    rua: "Ouro Branco",
    numero: 75,
    apt: false,
    complemento: "cs"
});

//console.log(cliente.enderecos);

const listaApenasApt = cliente.enderecos.filter((endereco) => endereco.apt === true);

console.log(listaApenasApt);
