    var clientes = [];

function cadastrarCliente() {
    event.preventDefault();

    // var nome = document.getElementById('nome').value;
    // var idade = document.getElementById('idade').value;
    var objNome = document.getElementById('nome');
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

}



function listarClientes() {

}