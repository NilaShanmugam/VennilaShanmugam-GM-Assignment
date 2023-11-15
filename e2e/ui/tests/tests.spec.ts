import { test } from "@playwright/test";
import { widgetsPageActions } from "../page-actions/widgetsPageActions";
import { practiceFormPageActions } from "../page-actions/practiceFormPageActions";
import { interactionsPageActions } from "../page-actions/interactionsPageActions";
import { brokenImagePageActions } from "../page-actions/brokenImagePageActions";
import { webTablesPageActions } from "../page-actions/webTablesPageActions";

test.beforeEach(async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  recordVideo: false;
  await page.goto("https://demoqa.com/");
});

test.describe("Validating the Scenarios", () => {
  test("Verify user can enter new data into the table - TC01 A", async ({
    page,
  }) => {
    page.setDefaultTimeout(300000);
    const webTables = new webTablesPageActions(page);
    await webTables.landingToWebTablesPageActions();
    await webTables.createNewUser(
      "Alden",
      "Cantrell",
      "test@test.com",
      "30",
      "12345",
      "QA"
    );
  });

  test("Verify user can edit the row in a table - TC01 B", async ({ page }) => {
    page.setDefaultTimeout(450000);
    const webTables = new webTablesPageActions(page);
    await webTables.landingToWebTablesPageActions();
    await webTables.editUser("“Gerimedica”", "“BV”");
  });

  test("Verify broken image - TC02", async ({ page }) => {
    page.setDefaultTimeout(300000);
    const brokenImage = new brokenImagePageActions(page);
    await brokenImage.landingToBrokenImagePageActions();
    await brokenImage.brokenImageValidation();
  });

  test("Verify user can submit the form - TC03", async ({ page }) => {
    page.setDefaultTimeout(300000);
    const practiceForm = new practiceFormPageActions(page);
    await practiceForm.landingToFormPageActions();
    await practiceForm.createForm(
      "Gerimedica",
      "BV",
      "test@test.com",
      "0123456789",
      "English",
      "Netherlands",
      "NCR",
      "Delhi"
    );
  });

  test("Verify the progress bar - TC04", async ({ page }) => {
    page.setDefaultTimeout(200000);
    const widgets = new widgetsPageActions(page);
    await widgets.landingToWidgetsPageActions();
    await widgets.progressBarValidation();
  });

  test("Verify the tooltip - TC05", async ({ page }) => {
    page.setDefaultTimeout(150000);
    const widgets = new widgetsPageActions(page);
    await widgets.landingToWidgetsPageActions();
    await widgets.toolTipValidation();
  });

  test("Verify the drag and drop - TC06", async ({ page }) => {
    page.setDefaultTimeout(150000);
    const interactions = new interactionsPageActions(page);
    await interactions.landingToInteractionsPageActions();
    await interactions.dragAndDrop();
  });
});
