;(function(){

        $.ajax({
            url: 'http://ceep.herokuapp.com/cartoes/carregar',
            method: 'GET',
            dataType: 'jsonp',
            data: { usuario: 'Victor' },
            success: function(respostaApi){
                console.log(respostaApi);

                respostaApi.cartoes.forEach(function(cartao){
                    for (let i = 0; i < array.length; i) {
                        const element = array[i];
                        
                    }criarCartao(cartao)                    
                });
            }

        })

})()