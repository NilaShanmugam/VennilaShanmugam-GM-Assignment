import { expect, Locator, Page } from "@playwright/test";
export class brokenLinkImages {
  readonly page: Page;
  readonly toolTip: Locator;
  readonly hoverButton: Locator;
  readonly resetButton: Locator;

  //This file contains the locators
  constructor(page: Page) {
    this.page = page;
    this.toolTip = page.locator("//span[text()='Tool Tips']");
    this.hoverButton = page.locator("//button[@id='toolTipButton']");
    this.resetButton = page.locator("//button[@id='resetButton']");
  }
}
