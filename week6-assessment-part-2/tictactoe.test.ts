import { Builder, Capabilities, By, WebElement } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});
//Tests marking an "X" in upper left, upper right and lower right squares 
describe('add "x" mark to squares', () => {
    test('click the upper left square and check if "X"', async () => {
        let target = await driver.findElement(By.xpath('//td[1]'))
        target.click()
        let targetValue = await driver.findElement(By.xpath('//td[1]')).getText()
    expect(targetValue).toEqual('X')
    })

    test('click the upper right square and check if "X"', async () => {
        let target = await driver.findElement(By.xpath('//td[3]'))
        target.click()
        let targetValue = await driver.findElement(By.xpath('//td[3]')).getText()
    expect(targetValue).toEqual('X')
    })

    test('click the lower right square and check if "X"', async () => {
        let target = await driver.findElement(By.id('cell-8'))
        target.click()
        await driver.sleep(1000)
        let targetValue = await driver.findElement(By.id('cell-8')).getText()
    expect(targetValue).toEqual('X')
    })
    
    test('check if computer marks a box with an "O"', async () => {
        let target = await driver.findElement(By.id('cell-8'))
        target.click()
        await driver.sleep(1000)
        let compMark = await driver.findElement(By.xpath('//td[text()= "O"]')).getText()
        expect(compMark).toEqual("O")
    })
})

