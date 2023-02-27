import { Given as Dado, When as Quando, Then as Então} from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from '../../page_objects/Login/LoginPage'
const loginPage = new LoginPage

Dado("acesso o site CWI", () => {
    loginPage.acessarSite();
})

Quando("acesso a pagina de login", () => {
    loginPage.clicarBotaoPaginaLogin();
})

Então("devo visualizar botao de recuperar senha esquecida", () => {
    loginPage.visualizarBotaoRecuperarSenha();
})