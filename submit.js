jQuery("#Contact").submit(
        function()
        {                
            var success = '<h4 class="center blue">Obrigado! Sua mensagem foi enviada com sucesso, em breve estaremos remetendo-lhe uma resposta.</h4>';
            var error   = '<h4 class="center blue">Erro ao enviar a mensagem! Favor tentar novamente, caso o erro persista entrar em contato pelo e-mail contato@fredlima.net.</h4>';

            jQuery.ajax({
                type:'POST',
                async: true,
                cache: false,
                url: 'contact',
                success: function(response) {
                    jQuery('#ContactFormResult').html(success);
                    
                    $(':input')
                        .not(':button, :submit, :reset, :hidden')
                        .val('')
                        .removeAttr('checked')
                        .removeAttr('selected');
                },
                error: function(){
                    jQuery('#ContactFormResult').html(error);  
                },
                data:jQuery('form').serialize()
            });

            return false;
        }
    );
