;(function(){
    const form = document.querySelector('.formNovoCartao')
    let numeroCartao = 4;

    form.addEventListener('submit', function(){
        event.preventDefault()
        const textArea = form.querySelector('.formNovoCartao-conteudo')
        const isTextAreaVazio = textArea.value.trim().length === 0;
        if (isTextAreaVazio) {
            const msgErro = document.createElement("p")
            
            msgErro.textContent = "Formulário inválido"

            textArea.insertAdjacentElement('afterend', msgErro)

            msgErro.classList.add('formNovoCartao-msg')

            msgErro.addEventListener('animationend', function(){

                this.remove()
            })
        }
        else{
            
            const cartao = document.createElement('article')
            const mural = document.querySelector('.mural')

            cartao.id = 'cartao_' + numeroCartao
            cartao.classList.add('cartao')
            cartao.tabIndex = 0;

            const conteudo = `<p class="cartao-conteudo" contenteditable tabindex="0">${textArea.value}</p>`

            cartao.insertAdjacentHTML("afterbegin", conteudo)

            mural.insertAdjacentElement('afterbegin', cartao)
            
            numeroCartao++


        }

        
    })
    
    form.classList.remove('no-js')

})()