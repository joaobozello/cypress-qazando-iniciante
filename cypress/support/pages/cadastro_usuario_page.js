///<reference types="cypress"/>

//ELEMENTOS

const elementos = {
    botoes: {
        registrar: '#btnRegister'
    },
    menssagens:{
        erro: '.errorLabel',
        sucessoPrincipal: '#swal2-title',
        sucessoSecundario: '#swal2-html-container'

    },
    campos: {
        nome: '#user',
        email: '#email',
        senha: '#passwordX'
    }
}

export default {

    clicarCadastrar(){
        cy.get(elementos.botoes.registrar)
            .click()
    },

    // validarMensagemErro(){
    //     cy.get(elementos.menssagens.erro)
    //         .then((elemento) => {
    //             expect(elemento).to.be.visible
    //             expect(elemento.text()).eq('O campo nome deve ser prenchido')
    //         })
    // }

    validarMensagemErro(menssagem){
        cy.get(elementos.menssagens.erro)
            .should('be.visible')
            .should('have.text', menssagem)
    },

    preencherNome(nome){
        cy.get(elementos.campos.nome)
            .type(nome)
    },

    preencherEmail(email){
        cy.get(elementos.campos.email)
            .type(email)

    },
    
    preencherSenha(senha){
        cy.get(elementos.campos.senha)
            .type(senha)
    },

    validarMensagemSucesso(nome){
        cy.get(elementos.menssagens.sucessoPrincipal)
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')

        cy.get(elementos.menssagens.sucessoSecundario)
            .should('be.visible')
            .should('have.text', `Bem-vindo ${nome}`)
    }
}