import { expect, Page } from "@playwright/test";
import { demoQAPage } from "../page-objects/demoQAPage";
import { formsPage } from "../page-objects/forms/formsPage";
import { practiceFormPage } from "../page-objects/forms/practiceFormPage";
const path = require("path");

export class practiceFormPageActions {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async landingToFormPageActions() {
    const demoQA = new demoQAPage(this.page);
    const forms = new formsPage(this.page);

    console.log("===Landing to Form Page===");

    await demoQA.formsTitle.waitFor({ state: "visible" });
    await demoQA.formsTitle.click();

    await forms.forms.waitFor({ state: "visible" });
    await forms.forms.click();
  }

  async createForm(
    firstName,
    lastName,
    userEmail,
    userNumber,
    subjects,
    currentAddress,
    state,
    city
  ) {
    const practiceForm = new practiceFormPage(this.page);

    await practiceForm.firstName.waitFor({ state: "visible" });
    await practiceForm.firstName.fill(firstName);

    await practiceForm.lastName.waitFor({ state: "visible" });
    await practiceForm.lastName.fill(lastName);

    await practiceForm.userEmail.waitFor({ state: "visible" });
    await practiceForm.userEmail.fill(userEmail);

    await practiceForm.gender.waitFor({ state: "visible" });
    await practiceForm.gender.click();

    await practiceForm.userNumber.waitFor({ state: "visible" });
    await practiceForm.userNumber.fill(userNumber);

    await practiceForm.dateOfBirth.waitFor({ state: "visible" });
    await practiceForm.dateOfBirth.click();
    await practiceForm.date.waitFor({ state: "visible" });
    await practiceForm.date.click();

    await practiceForm.subject.waitFor({ state: "visible" });
    await practiceForm.subject.click();
    await practiceForm.subject.type(subjects);
    await practiceForm.subject.press("Enter");

    await practiceForm.uploadPicture.waitFor({ state: "visible" });
    const filePath = path.join(__dirname, "sample-files/image.jpg");
    await practiceForm.uploadPicture.setInputFiles(filePath);

    await practiceForm.page.waitForTimeout(2000);

    await practiceForm.currentAddress.waitFor({ state: "visible" });
    await practiceForm.currentAddress.fill(currentAddress);

    await practiceForm.page.mouse.down();

    await practiceForm.page.waitForTimeout(2000);

    await practiceForm.state.waitFor({ state: "visible" });
    await practiceForm.state.click();
    await practiceForm.state.type(state);
    await practiceForm.state.press("Enter");

    await practiceForm.city.waitFor({ state: "visible" });
    await practiceForm.city.click();
    await practiceForm.city.type(city);
    await practiceForm.city.press("Enter");

    await practiceForm.submit.waitFor({ state: "visible" });
    await practiceForm.submit.click();

    const rowContent = await practiceForm.responseTable.allTextContents();

    var arrayToString = rowContent.toString();

    console.log(` arrayToString==>` + arrayToString);

    console.log(` Row ${rowContent}==>` + rowContent);

    await expect(arrayToString).toContain(firstName);
    await expect(arrayToString).toContain(lastName);
    await expect(arrayToString).toContain(userEmail);
    await expect(arrayToString).toContain("Female");
    await expect(arrayToString).toContain(userNumber);
    await expect(arrayToString).toContain("13 November,2023");
    await expect(arrayToString).toContain(subjects);
    await expect(arrayToString).toContain("image.jpg");
    await expect(arrayToString).toContain(state);
    await expect(arrayToString).toContain(city);
  }
}
