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
        
        for(let objAjuda of listaAjudas){
                criarCartao(objAjuda)
        }
       
    })

    btnAjuda.classList.remove('no-js');

})()