///<reference types="cypress"/>
//IMPORTAÇÕES
import commum_page from "../support/pages/commum_page"
import login_page from "../support/pages/login_page"
import { faker, Faker } from "@faker-js/faker"

describe('Login', () => {
    //ELEMENTOS
    const email = faker.internet.email()
    const senha = faker.internet.password()
    
    //CENARIOS

    beforeEach('Acessar Login', () =>{
        commum_page.acessarLogin()
    })

    it('Campo E-mail vazio', () => {
        login_page.clicarLogin()
        login_page.validarMenssagemErro('E-mail inválido.')
    })

    it('Campo E-mail inválido', () => {
        login_page.preencherEmail(faker.person.firstName())
        login_page.clicarLogin()
        login_page.validarMenssagemErro('E-mail inválido.')
    })

    it('Campo Senha vazio', () => {
        login_page.preencherEmail(email)
        login_page.clicarLogin()
        login_page.validarMenssagemErro('Senha inválida.')
    })

    it('Campo Senha inválido', () => {
        login_page.preencherEmail(email)
        login_page.preencherSenha('112')
        login_page.clicarLogin()
        login_page.validarMenssagemErro('Senha inválida.')
    })

    it('Login com sucesso', () => {
        login_page.preencherEmail(email)
        login_page.preencherSenha(senha)
        login_page.selecionarCaixaTexto()
        login_page.clicarLogin()
        login_page.validarMensagemSucesso(email)
    })

})