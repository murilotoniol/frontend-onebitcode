//puxar os dados do form ao clicar no botao enviar, jogar eles para dentro de uma funcao de validação que contenha regras para mascara de email e senha

const form = document.getElementById("form")

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const email = form.elements['email'].value
    const password = form.elements['password'].value

    // - Um caractere @
    // - Texto antes do @ com pelo menos 2 caracteres, números ou _ (underscore).
    // - Texto após o @ com pelo menos 2 caracteres
    // - Um . seguido de mais texto com pelo menos 2 caracteres após o texto após o @
    // - Estrutura de um email válido: **xx@xx.xx**
    const emailRegex = /^[^\s@]{2,}@[^\s@]{2,}\.[^\s@]{2,}$/

    // - Pelo menos uma letra minúscula.
    // - Pelo menos uma letra maiúscula.
    // - Pelo menos um número
    // - Pelo menos um caractere especial.
    // - Pelo menos 8 caracteres.
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/

    function validateEmail(email) {
        if (!emailRegex.test(email)){
            throw new Error("email invalido")
        }
    }

    function validatePassword(password) {
        if (!passwordRegex.test(password)){
            throw new Error("senha invalida")
        }
    }

    try {
        validateEmail(email)
        validatePassword(password)
        alert("Logado!")
    } catch (error){
        alert(`Erro: ${ error.message}`)
    }
})
