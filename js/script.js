//alert('JS Carregado');

//Seleção de DOM
//console.log(document);
var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');



//console.log(btnMenu);
//console.log(menu);

//Eventos (São ações geralmente causadas pelo usuário)

/*
function boasVindas(){
    alert('Olá!');
}

//Ao clicar no btnMenu, chama a função "boasVindas"
btnMenu.addEventListener('click',boasVindas);
*/

//Ao clicar no btnMenu, chama uma função anônima 
btnMenu.addEventListener('click', function(){    
    //add ou remove a classe menu-open
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');
})

menu.addEventListener('click', function(){
    menu.classList.remove('menu-open');
    btnMenu.classList.remove('x');    
})

var btnPopup = document.querySelector('.close');
var bgPopup = document.querySelector('.bg-popup');

//Fechar a estrutura do popup ao clicar no botão X
btnPopup.addEventListener('click',function(){
    //bgPopup.classList.add('bg-popup-none');
    bgPopup.style.display = 'none';
})

