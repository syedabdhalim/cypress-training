class LoginPage {
    visit() {
      cy.visit('https://www.saucedemo.com/v1/');
    }
  
    getUsernameInput() {
      return cy.get('input[data-test="username"]');
    }
  
    getPasswordInput() {
      return cy.get('input[data-test="password"]');
    }
  
    getLoginButton() {
      return cy.get('input[id="login-button"]');
    }
  
    enterUsername(username) {
      this.getUsernameInput().type(username);
    }
  
    enterPassword(password) {
      this.getPasswordInput().type(password);
    }
  
    clickLoginButton() {
      this.getLoginButton().click();
    }
  }
  
  export default LoginPage;
  