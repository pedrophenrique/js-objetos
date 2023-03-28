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

function ligaParaCliente (telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
};

//ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda);
