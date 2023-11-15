import { expect, Locator, Page } from "@playwright/test";
export class demoQAPage {
  readonly page: Page;
  readonly elementsTitle: Locator;
  readonly formsTitle: Locator;
  readonly widgetsTitle: Locator;
  readonly interactionsTitle: Locator;

  //This file contains the locators
  constructor(page: Page) {
    this.page = page;
    this.elementsTitle = page.locator("//div/h5[text()='Elements']");
    this.formsTitle = page.locator("//div/h5[text()='Forms']");
    this.widgetsTitle = page.locator("//div/h5[text()='Widgets']");
    this.interactionsTitle = page.locator("//div/h5[text()='Interactions']");
  }
}
