# Selenium Example
We need webdrivers of the browsers we are using. In this case I am using Chrome.
From [here](http://chromedriver.storage.googleapis.com/index.html) download chrome webdriver. You need the download the version which is matching with your own version. You can check your version from Settings>>Help>>About Google Chrome. After downloading the zip file create a folder in your disk and extract the .exe into the folder. It's preferred to name the folder to be named 'selenium' or 'selenium-webdriver'. Then you have to create a path to this .exe by setting your envoirement variables. Type envoirement to your search bar (if you are using Windows 10) and open it. On advanced tab click the "Envoirement Variables" button at the bottom. In the following window double click "Path" then after create a new path to the .exe you have extracted (i.e. C:/selenium-webdrivers). To make sure that you've done it correctly open a cmd and type:

    start chromedriver

If another command prompt pops up which says something like ...running on port... then you've done it correctly.

After cloning the repository. You need npm to install node_modules. Therefore you need [nodeJS](https://nodejs.org/en/). Download nodeJs and install it. It comes with npm cli.
Then inside the cloned repository's directory type

    npm install

After installing node_modules inside same directory type

    node tests/firstTest.js
If Chrome pops up and in the website you have 6 elements (last one saying "learn selenium") inside a todo div that means you installed and ran this code correctly. You can poke around inside firstScript.js to do different basic automated operations.




