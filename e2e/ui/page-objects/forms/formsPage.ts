import { expect, Locator, Page } from "@playwright/test";
export class formsPage {
  readonly page: Page;
  readonly forms: Locator;

  //This file contains the locators
  constructor(page: Page) {
    this.page = page;
    this.forms = page.locator("//span[text()='Practice Form']");
  }
}
