import { expect, Page } from "@playwright/test";
import { demoQAPage } from "../page-objects/demoQAPage";
import { interactionsPage } from "../page-objects/interactions/interactionsPage";

export class interactionsPageActions {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async landingToInteractionsPageActions() {
    const demoQA = new demoQAPage(this.page);

    console.log("===Landing to Interactions Page===");
    await demoQA.interactionsTitle.waitFor({ state: "visible" });
    await demoQA.interactionsTitle.click();
  }

  async dragAndDrop() {
    const interactions = new interactionsPage(this.page);

    await interactions.droppable.waitFor({ state: "visible" });
    await interactions.droppable.click();

    const source = await interactions.draggableText;
    const target = await interactions.droppableText;

    // Get the bounding boxes for source and target elements
    const sourceBox = await source.boundingBox();
    interactions.page.waitForTimeout(500);
    const targetBox = await target.boundingBox();

    if (sourceBox && targetBox) {
      // Calculate the coordinates for source and target elements
      const sourceX = sourceBox.x + sourceBox.width / 2;
      const sourceY = sourceBox.y + sourceBox.height / 2;

      const targetX = targetBox.x + targetBox.width / 2;
      const targetY = targetBox.y + targetBox.height / 2;

      // Perform the drag and drop operation
      await interactions.page.mouse.move(sourceX, sourceY);
      await interactions.page.mouse.down();
      await interactions.page.mouse.move(targetX, targetY);
      await interactions.page.mouse.up();
      interactions.page.waitForTimeout(500);

      const isMoved = await interactions.page.locator(".dropped");
      expect(isMoved).not.toBeNull();
    } else {
      console.error("Could not find source or target elements.");
    }
  }
}
