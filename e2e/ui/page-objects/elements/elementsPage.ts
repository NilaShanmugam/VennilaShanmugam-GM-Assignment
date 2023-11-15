import { expect, Locator, Page } from "@playwright/test";
export class elementsPage {
  readonly page: Page;
  readonly webTables: Locator;
  readonly brokenLinkImages: Locator;

  //This file contains the locators
  constructor(page: Page) {
    this.page = page;
    this.webTables = page.locator(
      "//div//ul[@class='menu-list']//li/span[text()='Web Tables']"
    );
    this.brokenLinkImages = page.locator(
      "//div//ul[@class='menu-list']//li/span[text()='Broken Links - Images']"
    );
  }
}
