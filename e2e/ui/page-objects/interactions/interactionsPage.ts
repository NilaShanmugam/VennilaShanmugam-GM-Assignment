import { expect, Locator, Page } from "@playwright/test";
export class interactionsPage {
  readonly page: Page;
  readonly droppable: Locator;
  readonly draggableText: Locator;
  readonly droppableText: Locator;

  //This file contains the locators
  constructor(page: Page) {
    this.page = page;
    this.droppable = page.locator("//span[text()='Droppable']");
    this.draggableText = page.locator("//div[@id='draggable']");
    this.droppableText = page.locator(
      "(//div[@id='droppable']/p[text()='Drop here'])[1]"
    );
  }
}
