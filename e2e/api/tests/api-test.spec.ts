import { test } from "@playwright/test";
import { addBooks } from "../bookStoreAPIActions/apiBookStoreActions";

let user: { userId: string; userName: string };

test.beforeAll("Creating User", async ({}) => {
  const book = new addBooks();
  user = await book.addUser();
});

test("Add a list of books by generating token - TC02 Unhappy Flow (Invalid isbn)", async ({}) => {
  const book = new addBooks();
  const sharedTokens = await book.genratingToken(user.userName);
  await book.addBook("1234", sharedTokens, user.userId);
});

test("Remove one of the added books by generating token - TC03 Happy Flow", async ({
  request,
}) => {
  const book = new addBooks();
  const sharedTokens = await book.genratingToken(user.userName);
  await book.deleteBook("9781449331818", sharedTokens, user.userId);
});

test("Remove one of the added books by generating token - TC03 Unhappy Flow (Invalid isbn)", async ({
  request,
}) => {
  const book = new addBooks();
  const sharedTokens = await book.genratingToken(user.userName);
  await book.deleteBook("1234", sharedTokens, user.userId);
});

test("Add a list of books by generating token - TC02", async ({}) => {
  const book = new addBooks();
  const sharedTokens = await book.genratingToken(user.userName);
  await book.addBook("9781449331818", sharedTokens, user.userId);
});

test.afterAll("Deleting User", async ({}) => {
  const book = new addBooks();
  await book.deleteUser(user.userId);
});
