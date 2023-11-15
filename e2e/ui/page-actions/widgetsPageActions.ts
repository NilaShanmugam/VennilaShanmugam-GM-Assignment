import { expect, Page } from "@playwright/test";
import { demoQAPage } from "../page-objects/demoQAPage";
import { progressBarPage } from "../page-objects/widgets/progressBarPage";
import { toolTipPage } from "../page-objects/widgets/toolTipPage";

export class widgetsPageActions {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async landingToWidgetsPageActions() {
    const demoQA = new demoQAPage(this.page);

    console.log("===Landing to Widgets Page===");

    await demoQA.widgetsTitle.waitFor({ state: "visible" });
    await demoQA.widgetsTitle.click();
  }

  async progressBarValidation() {
    const widgets = new progressBarPage(this.page);
    let progressFlag: boolean = false;

    console.log("===Landing to Progress Bar Page===");
    await widgets.progressBarTitle.waitFor({ state: "visible" });
    await widgets.progressBarTitle.click();

    await widgets.startStopButton.click();
    await widgets.page.waitForTimeout(10000);

    if (await widgets.resetButton.isVisible()) {
      progressFlag = true;
    }
    expect(progressFlag).toBeTruthy;
  }

  async toolTipValidation() {
    const widgets = new toolTipPage(this.page);
    let toolTipTextVisibility: boolean = false;

    console.log("===Landing to ToolTips Page===");
    await widgets.toolTip.waitFor({ state: "visible" });
    await widgets.toolTip.click();

    await widgets.hoverButton.hover();
    const toolTipText = await widgets.page.getAttribute(
      "#buttonToolTip",
      "aria-describedby"
    );

    if (toolTipText != " ") {
      toolTipTextVisibility = true;
    }

    await expect(toolTipTextVisibility).toBeTruthy;
  }
}
