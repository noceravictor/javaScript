;(function(){

    'use strict';

    const btnSync = document.querySelector('#btnSync');
    const listaCartaoObj = []
    const cartao = document.querySelectorAll('.cartao')

    btnSync.addEventListener('click', function(){
        
        btnSync.classList.remove('botaoSync--sincronizado');
        btnSync.classList.add('botaoSync--esperando');
    
        const listaElementoCartao = document.querySelectorAll('.cartao');

        for (const cartao of listaElementoCartao) {
            const conteudo = cartao.querySelector('.cartao-conteudo').textContent;
            const cor = cartao.style.backgroundColor;

            const objetoCartao = {
                conteudo: conteudo,
                cor: cor
            }
            
            listaCartaoObj.push(objetoCartao)
        }

        const dadosUser = {
            usuario: 'Victor',
            cartoes: listaCartaoObj
        }

        const ajax = new XMLHttpRequest();
        ajax.open('POST', 'http://ceep.herokuapp.com/cartoes/salvar');
        ajax.responseType = 'json';
        ajax.setRequestHeader('Content-Type', 'application/json');
        
        const dadosUserString = JSON.stringify(dadosUser)
        
        ajax.send(dadosUserString);

        ajax.addEventListener('load', function(){
            btnSync.classList.remove('botaoSync--esperando');
            btnSync.classList.add('botaoSync--sincronizado');
            console.log(ajax.response)
        })
        
        

        ajax.addEventListener('error', function(){
            btnSync.classList.remove('botaoSync--esperando');
            btnSync.classList.add('botaoSync--deuRuim');
        })


    })

    btnSync.classList.remove('no-js');

})()