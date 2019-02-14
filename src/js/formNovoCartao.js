;(function(){
    const form = document.querySelector('.formNovoCartao')

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

            let objNovoCartao = {
                conteudo: textArea.value,
                cor: '#EBEF40'
            }
            
            criarCartao(objNovoCartao);

            textArea.focus();
            form.reset();

        }

        
    })
    
    form.classList.remove('no-js')

})()