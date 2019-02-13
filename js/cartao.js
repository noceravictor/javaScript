;(function() {

    'use strict';

    let numeroCartao = 1;

    function criarCartao(objetoCartao){
    
        const cartao = document.createElement('article')
                const mural = document.querySelector('.mural')
    
                cartao.id = 'cartao_' + numeroCartao
                cartao.classList.add('cartao')
                cartao.tabIndex = 0;
    
                cartao.style.backgroundColor = objetoCartao.cor;
    
                cartao.innerHTML = `<div class="opcoesDoCartao">
                <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                  <svg>
                    <use xlink:href="#iconeRemover"></use>
                  </svg>
                </button>
        
                <input type="radio" name="corDoCartao${numeroCartao}" value="#EBEF40" id="corPadrão-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo"
                  checked>
                <label for="corPadrão-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;"
                  tabindex="0">
                  Padrão
                </label>
        
                <input type="radio" name="corDoCartao${numeroCartao}" value="#F05450" id="corImportante-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo">
                <label for="corImportante-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;"
                  tabindex="0">
                  Importante
                </label>
        
                <input type="radio" name="corDoCartao${numeroCartao}" value="#92C4EC" id="corTarefa-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo">
                <label for="corTarefa-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;"
                  tabindex="0">
                  Tarefa
                </label>
        
                <input type="radio" name="corDoCartao${numeroCartao}" value="#76EF40" id="corInspiração-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo">
                <label for="corInspiração-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;"
                  tabindex="0">
                  Inspiração
                </label>
              </div>
              <p class="cartao-conteudo" contenteditable tabindex="0">${objetoCartao.conteudo}</p>`
    
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
            
    
                mural.insertAdjacentElement('afterbegin', cartao)
    
                numeroCartao++
    }

})




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