const cliente = {
    nome: "Pedro",
    idade: 23,
    cpf: "111222333",
    email: "email@email.com",
};

//console.log(`O nome do cliente é ${cliente["nome"]} e ele possui ${cliente["idade"]} anos.`);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}.`);
});