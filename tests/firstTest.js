const {Builder,By,Key} = require("selenium-webdriver");

async function example(){

    //launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    //Navigate to our application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    //Add a todo
    await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium",Key.RETURN);


    //close the browser
    //await driver.quit();

}

example();