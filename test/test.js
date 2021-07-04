const {Builder, By, Key} = require('selenium-webdriver');
require('chromedriver');

const baseUrl = 'https://www.boden.co.uk/'
const locators = {
    Header: {
        SearchIcon: '.header-rd__after-nav-wrapper .header-rd__search',
        SearchField: '.search-panel__input',
        LogoImage: 'a.header-rd__logo',
        UserProfileIcon: '.header-rd__account',
        SignInNowButton: '.header-rd__account-dropdown--is-open a:nth-of-type(1)'
    },
    ProductGrid: {
        FirstProductCard: '.product-grid-items .product-grid-item:nth-of-type(1)',
    },
    ProductDetailsPage: {
        ProductTitle: '.product-title-header',
    },
    SignIn: {
        SignInTitle: '#loginFormContainer .title'
    }
}

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        driver.manage().window().maximize();
        await driver.get(baseUrl);
        await driver.findElement(By.css(locators.Header.SearchIcon)).click();
        await driver.findElement(By.css(locators.Header.SearchField)).sendKeys('Dress', Key.ENTER);
        await driver.findElement(By.css(locators.ProductGrid.FirstProductCard)).click();
        await driver.findElement(By.css(locators.ProductDetailsPage.ProductTitle)).isDisplayed();
        await driver.findElement(By.css(locators.Header.LogoImage)).click();
        await driver.findElement(By.css(locators.Header.UserProfileIcon)).click();
        await driver.findElement(By.css(locators.Header.SignInNowButton)).click();
        await driver.findElement(By.css(locators.SignIn.SignInTitle)).isDisplayed();
    } finally {
        await driver.quit();
    }
}

example();