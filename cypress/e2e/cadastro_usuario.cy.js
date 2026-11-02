///<reference types="cypress"/>

//IMPORTAÇÕES
import commum_page from '../support/pages/commum_page'
import cadastro_usuario_page from '../support/pages/cadastro_usuario_page'
import { faker } from '@faker-js/faker'

//CENARIOS
describe('Cadastro de Usuário', () => {

    //ELEMENTOS
    const nome = faker.person.fullName()
    const email = faker.internet.email()
    const senha = faker.internet.password()

    //CENARIOS
    beforeEach('Acessar Cadastro de Usuário', () => {
        commum_page.acessarCadastroUsuario()
    })
    it('Campo Nome vazio', () => {
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo nome deve ser prenchido')
    })

    it('Campo Email vazio', () => {
        cadastro_usuario_page.preencherNome(nome)
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')

    })

    it('Campo Email invalido', () => {
        cadastro_usuario_page.preencherNome(nome)
        cadastro_usuario_page.preencherEmail('emailInvalido')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')

    })

    it('Campo Senha vazio', () => {
        cadastro_usuario_page.preencherNome(nome)
        cadastro_usuario_page.preencherEmail(email)
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Campo Senha invalido', () => {
        cadastro_usuario_page.preencherNome(nome)
        cadastro_usuario_page.preencherEmail(email)
        cadastro_usuario_page.preencherSenha('123')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com sucesso', () => {
        cadastro_usuario_page.preencherNome(nome)
        cadastro_usuario_page.preencherEmail(email)
        cadastro_usuario_page.preencherSenha(senha)
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemSucesso(nome)
    })

})