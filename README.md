# Pre-Requisites:
1. Install Visual Studio Code(Preferred IDE - Optional)
2. Install NodeJS: Download and Install Node JS. (Use Node Version >= 16.4.2 )
3. Clone this repository in local and open the project folder in VS Code Terminal / Command Prompt
4. Enter the below command in terminal, to start the Playwright installation. It creates Package.json, Installs npm library.


        ```npm init playwright@latest```

   1. While getting started with playwright it asks for few questions as below :
   2. Do you want to use TypeScript or JavaScript? · TypeScript
   3. Where to put your end-to-end tests? · e2e
   4. Add a GitHub Actions workflow? (y/N) · true
   5. Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true     

  [**Note** : **If firefox browser is not present in your system, a popUp as below will be shown, so click "cancel" button whenever it is shown** ]

   <img width="193" alt="Screenshot 2023-09-23 at 12 43 30 PM" src="https://github.com/NilaShanmugam/Distilled-PlayWright-CICD/assets/59618634/249c7ac0-253d-46f4-86dd-0ad5404f64b0">

   6. Using the below command in terminal, you can install all different browsers in Playwright.


       ```npx playwright install --with-deps```

   7. playwright.config.ts already exists. Override it? (y/N) » false  [**NOTE** : **Kindly **DO NOT OVERWRITE** "playwright.config.ts" file, give as **false**]


# Folder Structure :

  e2e contains 2 folders api and ui

ui :
1. page_objects : Contains the locators of each page( For each card in main page created a subFolder accordingly eg: Elements)
2. page_actions : Contains the actions of all locators completing a test case scenario 
3. tests folder: This folder contains actual test scripts. It has tests.spec.ts file, where I have written the code

api:
1. bookStoreAPIActions : Contains the validate function of each api
2. tests folder: This folder contains actual test scripts. It has api-test.spec.ts file, where I have written the code

# Test Execution and Results

**(You can also run from VennilaShanmugam-GM-Assignment directly, explained and added the commands given in notes.)**

 [**NOTE** : **Kindly **DO NOT OVERWRITE** "playwright.config.ts" file because of below conditions :**]

   1. It takes more than 30 secs to load the "https://demoqa.com/" Page. SO I have added "timeout: 5*60*1000," as maximum in config file
   2. I have configured projects as "uiTests","apiTests". So that there is no need to navigate to the test folders to run. You can run from the base folder using below commands also

  API Run :
             ```npx playwright test  --project=apiTests```


  UI Run : 
              ```npx playwright test  --project=uiTests```





 **OR You can run from respective directory as below, without overwriting "playwright.config.ts"**
 
1. Open the directory in the command prompt / in VS Code terminal.

To Run API Tests :

  1. Navigate to the test folder inside the API Project and then use the below command (VennilaShanmugam-GM-Assignment/e2e/api/tests)

       ```npx playwright test api-test.spec.ts ```


 To Run UI Tests :

   1. Navigate to the test folder inside the API Project and then use the below command (VennilaShanmugam-GM-Assignment/e2e/ui/tests)

        ```npx playwright test tests.spec.ts --headed --workers 6```

Sample Output:
 ![image](https://github.com/NilaShanmugam/Distilled-PlayWright-CICD/assets/59618634/82ec1be8-8cff-4b7d-884c-b75884bd1a5d)



