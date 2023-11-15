import { expect, Page } from "@playwright/test";
import { demoQAPage } from "../page-objects/demoQAPage";
import { elementsPage } from "../page-objects/Elements/elementsPage";
import { webTablesPage } from "../page-objects/Elements/webTablesPage";

export class webTablesPageActions {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async landingToWebTablesPageActions() {
    const demoQA = new demoQAPage(this.page);
    const elements = new elementsPage(this.page);

    console.log("===Landing to WebTables Page===");

    await demoQA.elementsTitle.waitFor({ state: "visible" });
    await demoQA.elementsTitle.click();

    await elements.webTables.waitFor({ state: "visible" });
    await elements.webTables.click();
  }

  async createNewUser(firstName, lastName, userEmail, age, salary, department) {
    console.log("===Creating a New User===");

    const webTables = new webTablesPage(this.page);

    await webTables.addButton.waitFor({ state: "visible" });
    await webTables.addButton.click();

    await webTables.firstName.waitFor({ state: "visible" });
    await webTables.firstName.fill(firstName);

    await webTables.lastName.waitFor({ state: "visible" });
    await webTables.lastName.fill(lastName);

    await webTables.userEmail.waitFor({ state: "visible" });
    await webTables.userEmail.fill(userEmail);

    await webTables.age.waitFor({ state: "visible" });
    await webTables.age.fill(age);

    await webTables.salary.waitFor({ state: "visible" });
    await webTables.salary.fill(salary);

    await webTables.department.waitFor({ state: "visible" });
    await webTables.department.fill(department);

    await webTables.submit.waitFor({ state: "visible" });
    await webTables.submit.click();

    await webTables.searchBox.waitFor({ state: "visible" });
    await webTables.searchBox.fill(age);

    await webTables.rows.waitFor({ state: "visible" });
    const rowContent = await webTables.rows.allTextContents();

    console.log(` Row ${rowContent}==>` + rowContent);

    var arrayToString = rowContent.toString();

    console.log(` arrayToString ${arrayToString}==>` + arrayToString);

    await expect(arrayToString).toContain(firstName);
    await expect(arrayToString).toContain(lastName);
    await expect(arrayToString).toContain(age);
    await expect(arrayToString).toContain(salary);
    await expect(arrayToString).toContain(department);
    await expect(arrayToString).toContain(userEmail);

    await webTables.delete.waitFor({ state: "visible" });
    await webTables.delete.click();
  }

  async editUser(firstName, lastName) {
    const webTables = new webTablesPage(this.page);
    await webTables.editButtonForNameAlden.waitFor({ state: "visible" });
    await webTables.editButtonForNameAlden.click();

    await webTables.firstName.waitFor({ state: "visible" });
    await webTables.firstName.fill(firstName);

    await webTables.lastName.waitFor({ state: "visible" });
    await webTables.lastName.fill(lastName);

    await webTables.submit.waitFor({ state: "visible" });
    await webTables.submit.click();

    await webTables.searchBox.waitFor({ state: "visible" });
    await webTables.searchBox.fill(firstName);

    await webTables.rows.waitFor({ state: "visible" });
    const rowContent = await webTables.rows.allTextContents();

    console.log(` Row Content is ${rowContent}==>` + rowContent);

    var arrayToString = rowContent.toString();

    console.log(` arrayToString ${arrayToString}==>` + arrayToString);

    //Asserting the first name and last name got changed

    await expect(arrayToString).toContain(firstName);
    await expect(arrayToString).toContain(lastName);

    // Repeating this step as it is mentioned to edit the 2nd row with specific name, in order to find the name again resetting it to original
    await webTables.editButton.waitFor({ state: "visible" });
    await webTables.editButton.click();

    await webTables.firstName.waitFor({ state: "visible" });
    await webTables.firstName.fill("Alden");

    await webTables.lastName.waitFor({ state: "visible" });
    await webTables.lastName.fill("Cantrell");

    await webTables.submit.waitFor({ state: "visible" });
    await webTables.submit.click();
  }
}
