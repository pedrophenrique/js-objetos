const cliente = {
    nome: "Pedro",
    idade: "23",
    email: "email@email.com",
    telefone: ["31999999999", "31988888888"],
};

// cliente.enderecos = [
//     {
//     rua: "Ítalo Bernardes",
//     numero: 888,
//     apt: true,
//     complemento: "apt 103",
//     }
// ];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
    console.log(`Erro! É necessário ter um endereço cadastrado.`)
}