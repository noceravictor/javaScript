//IIFE - Immediately invoked function expression

;(function(){
    const btnList = document.querySelectorAll('.opcoesDoCartao-remove');
    
    for (let i = 0; i < btnList.length; i++) {
        const btn = btnList[i];
        
        btn.addEventListener('click', function(){
            //esta é uma funcao anonima de callback do click do botao
            
            const cartao = this.parentNode.parentNode;
    
            cartao.classList.add('cartao--some')
            
            cartao.addEventListener('transitionend', function(){
                
            cartao.remove()
            
            })
        })    
    }

})()


