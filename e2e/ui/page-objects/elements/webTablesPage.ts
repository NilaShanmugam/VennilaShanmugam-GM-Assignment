import { expect, Locator, Page } from "@playwright/test";
export class webTablesPage {
  readonly page: Page;
  readonly addButton: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly userEmail: Locator;
  readonly age: Locator;
  readonly salary: Locator;
  readonly department: Locator;
  readonly submit: Locator;
  readonly searchBox: Locator;
  readonly rows: Locator;
  readonly delete: Locator;
  readonly editButtonForNameAlden: Locator;
  readonly editButton: Locator;

  //This file contains the locators
  constructor(page: Page) {
    this.page = page;
    this.addButton = page.locator("//button[@id='addNewRecordButton']");
    this.firstName = page.locator("//input[@id='firstName']");
    this.lastName = page.locator("//input[@id='lastName']");
    this.userEmail = page.locator("//input[@id='userEmail']");
    this.age = page.locator("//input[@id='age']");
    this.salary = page.locator("//input[@id='salary']");
    this.department = page.locator("//input[@id='department']");
    this.submit = page.locator("//button[@id='submit']");
    this.searchBox = page.locator("//input[@id='searchBox']");
    this.rows = page.locator("//div[@class='rt-tr -odd']");
    this.delete = page.locator("//span[@title='Delete']");
    this.editButton = page.locator("//div/span[@title='Edit']");
    this.editButtonForNameAlden = page.locator(
      "//div/div[contains(text(),'Alden')]//parent::div//div/span[@title='Edit']"
    );
  }
}
