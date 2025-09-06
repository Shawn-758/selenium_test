const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('React App UI Tests', () => {
    let driver;

    before(async () => {
        // Ensure you have a chromedriver compatible with your browser
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('should have a specific heading text', async () => {
        await driver.get('http://localhost:3000');
        const heading = await driver.findElement(By.css('h2'));
        const headingText = await heading.getText();
        expect(headingText).to.equal('Welcome to my React App!');
    });

    after(() => driver.quit());
});