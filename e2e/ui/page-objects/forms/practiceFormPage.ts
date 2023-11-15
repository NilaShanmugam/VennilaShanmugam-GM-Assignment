import { expect, Locator, Page } from "@playwright/test";
export class practiceFormPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly userEmail: Locator;
  readonly gender: Locator;
  readonly userNumber: Locator;
  readonly date: Locator;
  readonly subject: Locator;
  readonly hobbiesCheckBox: Locator;
  readonly uploadPicture: Locator;
  readonly currentAddress: Locator;
  readonly city: Locator;
  readonly state: Locator;
  readonly submit: Locator;
  readonly dateOfBirth: Locator;
  readonly responseTable: Locator;

  //This file contains the locators
  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator("//input[@id='firstName']");
    this.lastName = page.locator("//input[@id='lastName']");
    this.userEmail = page.locator("//input[@id='userEmail']");
    this.gender = page.locator("//label[@for ='gender-radio-2']");
    this.submit = page.locator("//button[@id='submit']");
    this.userNumber = page.locator("//input[@id='userNumber']");
    this.date = page.locator(
      "//div[@aria-label='Choose Monday, November 13th, 2023']"
    );
    this.subject = page.locator(
      "//div[@class='subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3']"
    );
    this.hobbiesCheckBox = page.locator("(//input[@type='checkbox'])[2]");
    this.uploadPicture = page.locator("//input[@id='uploadPicture']");
    this.currentAddress = page.locator("//textarea[@id='currentAddress']");
    this.state = page.locator(" (//div[@class=' css-1hwfws3'])[1]");
    this.city = page.locator(" (//div[@class=' css-1hwfws3'])[2]");
    this.dateOfBirth = page.locator("//input[@id='dateOfBirthInput']");
    this.responseTable = page.locator("//div[@class='table-responsive']");
  }
}
