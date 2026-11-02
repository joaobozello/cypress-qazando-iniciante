///<reference types="cypress"/>

const elementos = {
    botoes: {
        login: '#btnLogin'
    },
    menssagens:{
        erro: '.invalid_input',
        sucessoPrincipal: '#swal2-title',
        sucessoSecundario: '#swal2-html-container'
    },
    campos: {
        email: '#user',
        senha: '#password'
    },
    check:{
        caixaSelecao: '.form-check-input'
    }
}

export default {

    clicarLogin(){
        cy.get(elementos.botoes.login)
            .click()
    },

    validarMenssagemErro(menssagem){
        cy.get(elementos.menssagens.erro)
            .should('be.visible')
            .should('have.text', menssagem)
    },

    preencherEmail(email){
        cy.get(elementos.campos.email)
            .type(email)
    },

    preencherSenha(senha){
        cy.get(elementos.campos.senha)
            .type(senha)
    },

    validarMensagemSucesso(email){
        cy.get(elementos.menssagens.sucessoPrincipal)
            .should('be.visible')
            .should('have.text', 'Login realizado')
        
        cy.get(elementos.menssagens.sucessoSecundario)
            .should('be.visible')
            .should('have.text', `Olá, ${email}`)
    },

    selecionarCaixaTexto(){
        cy.get(elementos.check.caixaSelecao)
            .check()
    }
}