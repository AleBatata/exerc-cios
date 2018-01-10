var clientes = [];
//variável global, vista por todas as funções

function cadastrarCliente() {
    event.preventDefault();
    // var nome = document.getElementById('nome').value;
    // var idade = document.getElementById('idade').value;
    var objNome = document.getElementById('nome');
    // <input type="text" id="nome" name="nome" placeholder="Seu nome aqui"><br> Equivale ao form do HTML   
    var objIdade = document.getElementById('idade');
    var cli = new Object();
    // cli.nome = nome;
    // cli.idade = idade;
    cli.objNome = nome;
    cli.objIdade = idade;
    clientes.push(cli);
    // document.getElementById('nome').value='';
    // document.getElementById('idade').value='';
    objNome.value = '';
    objIdade.value = '';
    console.log(clientes);
}

function listarCliente() {
    event.preventDefault();
    var listarCliente = "";
    for (var i = 0; i < clientes.length; i++) {
        listarCliente += "<p>Nome:" + clientes[i].nome + "<br><p>Idade:</p>" + clientes[i].idade;
    }
    console.log(listarCliente);
    document.getElementById('resultado').innerHTML = listarCliente;
}
    // var resultado;
    //     // if( idade>= 18){
    //         resultado = 'Maior de Idade';
    // } else {
    //     Resultado = 'Menor de Idade';
    // }
    // var txt = "";
    // txt += "<p>";
    // txt += resultado;
    // txt += "</p>";
    // document.getElementById('resultado').innerHTML = "<p>"+resultado+"</p>"
    // console.log(resultado);