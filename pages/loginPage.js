class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = 'username';
        this.password = 'password';
        this.loginButton = 'login-button';
        this.title = 'title';
    }

    async goToBaseUrl() {
        await this.page.goto('https://www.saucedemo.com/');
    }
}

module.exports = { LoginPage };
