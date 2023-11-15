import { expect, Locator, Page } from "@playwright/test";
export class progressBarPage {
  readonly page: Page;
  readonly progressBarTitle: Locator;
  readonly arialValue: Locator;
  readonly startStopButton: Locator;
  readonly progressBar: Locator;
  readonly resetButton: Locator;

  //This file contains the locators
  constructor(page: Page) {
    this.page = page;
    this.progressBarTitle = page.locator("//span[text()='Progress Bar']");
    this.startStopButton = page.locator("//button[@id='startStopButton']");
    this.arialValue = page.locator("//div[@class='progress-bar bg-info']");
    this.progressBar = page.locator("//div[@class='progress-bar bg-info']");
    this.resetButton = page.locator("//button[@id='resetButton']");
  }
}
