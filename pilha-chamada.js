const saida = (nome) =>{
    console.log(`Olá, ${nome}!`);
    saida2(nome);
    console.log(`preparando para dizer tchau...`);
    tchau();
}

saida2 = (nome) =>{
    console.log(`Como vai ${nome} ?`);
}

tchau = () =>{
    console.log('ok, tchau!');
}

saida('Cauê');