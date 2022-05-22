let cadastro = "sairSim";
let nome = "Guilherme";
let idade = 37;
let codigoCadastro = 1;

if(cadastro == "novo"){
    console.log(`Cadastro \n${nome}\n${idade}\n${codigoCadastro}`);
}
else if(cadastro == "sair"){
    console.log("Deseja realmente sair?");
}
else if(cadastro == "sairSim"){
    console.log("Obrigado!");
}
else{
    console.log("Escolha uma das opções anteriores!");
}