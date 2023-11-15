import { expect, Page } from "@playwright/test";
import { demoQAPage } from "../page-objects/demoQAPage";
import { elementsPage } from "../page-objects/Elements/elementsPage";

export class brokenImagePageActions {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async landingToBrokenImagePageActions() {
    const demoQA = new demoQAPage(this.page);
    console.log("===Landing to Broken Image Page===");

    await demoQA.elementsTitle.waitFor({ state: "visible" });
    await demoQA.elementsTitle.click();
  }

  async brokenImageValidation() {
    const elementPage = new elementsPage(this.page);
    let brokenImageVisibility: boolean = false;
    await elementPage.brokenLinkImages.waitFor({ state: "visible" });
    await elementPage.brokenLinkImages.click();

    const imgLocators = await elementPage.page.locator("img").all();
    const images = [];

    //This Page contains 2 images - /images/Toolsqa_1.jpg is the broken image source
    for (const imgLocator of imgLocators) {
      const src = (await imgLocator.getAttribute("src")) as string;
      const naturalWidth = await imgLocator.evaluate(
        (node: HTMLImageElement) => node.naturalWidth
      );

      if (naturalWidth === 0) {
        if (src == "/images/Toolsqa_1.jpg") {
          brokenImageVisibility = true;
        }
      }
    }

    expect(brokenImageVisibility).toBeTruthy;
  }
}
