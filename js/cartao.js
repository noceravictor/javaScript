;(function() {
    const listaCartoes = document.querySelectorAll('.cartao');
    

    for (let i = 0; i < listaCartoes.length; i++) {

        const cartao = listaCartoes[i];
        

        cartao.addEventListener('focusin', function(){
            cartao.classList.add('cartao--focado');

        })

        cartao.addEventListener('focusout', function(){
            cartao.classList.remove('cartao--focado')
        })

        cartao.addEventListener('change', function(eventoChange){
            
            const inputCor = eventoChange.target.classList.contains('opcoesDoCartao-radioTipo');

            if (inputCor) {
                const inputRadio = eventoChange.target;
                this.style.backgroundColor = inputRadio.value;

            }

            

        })   
        
        cartao.addEventListener('keyup', function(eventoKeyup){

            let isEnter = eventoKeyup.key == 'Enter';
            let isSpace = eventoKeyup.key == ' ';
            let isLabel = eventoKeyup.target.classList.contains('opcoesDoCartao-tipo')

            console.log(eventoKeyup.key)
            
            if (isEnter && isLabel || isSpace && isLabel) {
                let label = eventoKeyup.target;
                label.click();
            }
            

        })

        cartao.addEventListener('click', function(eventoRemover){

            const isRemove = eventoRemover.target.classList.contains('opcoesDoCartao-remove')
            if (isRemove) {
                cartao.classList.add('cartao--some')
                cartao.addEventListener('transitionend', function(){
                
                    cartao.remove()
                    
                    })
            }
            
        })
    }

   
    

})()