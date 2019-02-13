 ;(function(){
    const btn = document.querySelector('#btnMudaLayout')
    const mural = document.querySelector('section.mural')

    function mudaTexto(){
        if (btn.textContent == 'Blocos'){

            btn.textContent = 'Linhas'
            
        }else {

            btn.textContent = 'Blocos'

        }
    }

    btn.addEventListener('click', mudaTexto)

    function mudaLayout(){
        mural.classList.toggle('mural--linha')

    }


    btn.addEventListener('click', mudaLayout)

    btn.classList.remove('no-js')

 })() 