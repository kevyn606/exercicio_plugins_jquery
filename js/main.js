$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000'),
    $('#cpf').mask('000.000.000-00'),
    $('#cep').mask('00000-000')

    $('form').validate({
        rules:{
            nome: {
                minlength: 10,
                minWords: 2
            },
            telefone:{
                minlength: 14,
            },
            cpf:{
                minlength: 14,
            },
            cep:{
                minlength: 9,
            },
            endereço:{
                minlength: 10,
                minWords: 2
            }

        },

        
         messages:{
            nome:'<span class="error-message">Por favor, insira o seu nome completo</span>',
            email:'<span class="error-message">Por favor, insira o seu email compeleto</span>',
            telefone:'<span class="error-message">Por favor, insira o seu telefone</span>',
            cpf:'<span class="error-message">Por favor, insira o seu CPF completo</span>',
            endereço:'<span class="error-message">Por favor, insira o seu endereço completo</span>',
            cep:'<span class="error-message">Por favor, insira o seu CEP completo</span>'
        },submitHandler: function(form) {
            alert("REGISTRADO!!!")
            form('')
        },
        invalidHandler: function(evento,validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                
                alert(`Existem ${camposIncorretos} campos incorretos`) 
            }
        }
        
       
    })})

    