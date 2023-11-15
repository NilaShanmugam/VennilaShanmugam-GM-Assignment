import { expect, Locator, Page } from "@playwright/test";
export class toolTipPage {
  readonly page: Page;
  readonly toolTip: Locator;
  readonly hoverButton: Locator;

  //This file contains the locators
  constructor(page: Page) {
    this.page = page;
    this.toolTip = page.locator("//span[text()='Tool Tips']");
    this.hoverButton = page.locator("//button[@id='toolTipButton']");
  }
}
