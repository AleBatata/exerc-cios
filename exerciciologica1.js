//dados reais viriam do banco de dados / backend
var produtos =[
{   code: 50,
    name: "Puma Golf Raglan Tech Polo Tee",
    image:{
        src: "endereço da imagem",
        alt: "texto alternativo",
        title: "titulo da imagem",
    },
    color: "purple",
    size: "XXL",
    price: 72,
    quantity: 3
},

{   code: 99,
    name: "Nike Men's Running Shoes",
    image:{
        src: "endereço da imagem",
        alt: "texto alternativo",
        title: "titulo da imagem"
    },
    color: "red",
    size: "43",
    price: 129,
    quantity: 1
},

{    code: 287,
    name: "DC Men's Axis Snowboard Jacket",
    image:{
        src: "endereço da imagem",
        alt: "texto alternativo",
        title: "titulo da imagem",
    },
    color: "blue",
    size: "S",
    price: 89,
    quantity: 2
},
];
// function listarProdutos(){
//     alert('boa noite');
// }

//gerar o template através do array de objetos
function listarProdutos() {
    var template = "";
    for (var i = 0; i < produtos.length; i++) {
        template += '<tr class="item">';
        template += '<td class= "item-selection">';
        template += '<div class="item-selectionGroup">';
        template += '<div class="item-selectionBox">';
        template += '<i class="fa fa-times-circle" aria-hidden="true"></i></div>';
        template += '<div class="item-photo">';
        template += '<img id="puma" src="Puma Tee.jpg" alt="Puma Tee"></div></div>';
        //     <div class="item-selectionDetails">
        //         <div class="item-name">Puma Golf Raglan Tech Polo Tee</div>
        //         <div class="item-color">Color: <i class="fa fa-circle" aria-hidden="true"></i></div>
        //         <div class="item-size">Size: XXL</div></div></td>
        // <td class="item-price">$ 72</td>
        // <td class="item-quantity">
        //     <div class="quantity-box">
        //         <input type="button" class="minus" value="-">
        //         <input type="number" class="quantity">
        //         <input type="button" class="plus" value="+"></div></td>
        // <td class="item-total">$ 216</td></tr>
    
    
    }
    document.getElementById('item').innerHTML = template;
}

//gerar aray de objetos e gerar uma função que gere um "for" para montar a lista
// var nome = document.getElementById('nome').value;
// var idade = document.getElementById('idade').value;
// <input type="text" id="nome" name="nome" placeholder="Seu nome aqui"><br> Equivale ao form do HTML   
// cli.nome = nome;
// cli.idade = idade;
// document.getElementById('nome').value='';
// document.getElementById('idade').value='';

// function cadastrarCliente() {
// event.preventDefault();
// var objNome = document.getElementById('name');
// var objImage = document.getElementById('image');
// VAR objColor = document.getElementById('color');
// var cli = new Object();
// cli.objNome = nome;
// cli.objIdade = idade;
// clientes.push(cli);
// objNome.value = '';
// objIdade.value = '';
// console.log(clientes);
// }