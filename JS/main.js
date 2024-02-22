$(document).ready(function() {
    $('#cpf').mask('000.000.000-00', {
        placeholder:'___.___.___-__'
    })
    $('#telefone').mask('(00) 00000-0000',{
        placeholder:'(__) _________'
    })
    $('#cep').mask('00000-000', {
        placeholder:'_____-___'
    })
    $('#estado').mask('SS')

    $('form').validate({
        rules: {
            nomeCompleto: {
                required: true
            }, email: {
                required: true,
                email: true
            }, telefone: {
                required: true
            }, cpf: {
                required: true
            }, cep: {
                required: true
            }, cidade: {
                required: true
            }, estado: {
                required: true
            }, bairro: {
                required: true
            }, rua: {
                required: true
            }, numero: {
                required: true
            }
        },
        messages: {
            nomeCompleto: {
                required: "Campo obrigatório."
            },
            email: {
                required: "Campo obrigatório.",
                email: "Por favor, insira um endereço de e-mail válido."
            },
            telefone: {
                required: "Campo obrigatório."
            },
            cpf: {
                required: "Campo obrigatório."
            },
            cep: {
                required: "Campo obrigatório."
            },
            cidade: {
                required: "Campo obrigatório."
            },
            estado: {
                required: "Obrigatório."
            },
            bairro: {
                required: "Campo obrigatório."
            },
            rua: {
                required: "Campo obrigatório."
            },
            numero: {
                required: "Campo obrigatório."
            }
        }
    })
})//