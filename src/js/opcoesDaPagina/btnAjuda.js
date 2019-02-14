;(function(){
    const btnAjuda = document.querySelector('#btnAjuda');

    btnAjuda.addEventListener('click', function(){

        let listaAjudas = [
            {
                conteudo: 'Olá! Bem vindo ao CEEP',
                cor: '#c5a7c6'
            },
            {
                conteudo: 'Aqui você salva seus lembretes...',
                cor: '#ffc6a3'
            },
            {
                conteudo: 'Pode alterar cores, modos de exibição e até o texto :o',
                cor:'#9bccb9'
            }    
        ]

        const ajax =  new XMLHttpRequest()

        ajax.open('GET', 'http://ceep.herokuapp.com/cartoes/instrucoes')
        
        ajax.responseType = 'json'

        ajax.send();
        
        ajax.addEventListener('load', function(){

            listaAjudas = ajax.response.instrucoes

            for(let objAjuda of listaAjudas){
                criarCartao(objAjuda)
            }
            console.log(ajax.response.instrucoes)
        })
        
       
    })

    btnAjuda.classList.remove('no-js');

})()