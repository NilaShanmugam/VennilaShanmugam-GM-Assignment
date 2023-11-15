import axios from "axios";
import apiData from "../bookStoreAPIActions/apiData";
import { expect, Request, Page } from "@playwright/test";
let tokens = "";
export class addBooks {
  async addUser(): Promise<{ userId: string; userName: string }> {
    const userName = "user-" + new Date().getTime();
    const response = await axios.post("https://demoqa.com/Account/v1/User", {
      userName: userName,
      password: "P@ssw0rd",
    });
    expect(response.status).toBe(201);
    const userId = response.data.userID;
    return { userId, userName };
  }

  async deleteUser(userID) {
    try {
      const response = await axios.delete(
        `https://demoqa.com/Account/v1/User/${userID}`
      );
      expect(response.status).toBe(200);
    } catch (error) {
      console.error("Error message:", error.response.data.message);
    }
  }

  async genratingToken(userName): Promise<string> {
    if (tokens != "") {
      return tokens;
    }
    const response = await axios.post(
      "https://demoqa.com/Account/v1/GenerateToken",
      {
        userName: userName,
        password: "P@ssw0rd",
      }
    );

    // Ensure the request was successful
    expect(response.status).toBe(200);
    // Extract the token from the response data
    const token: string = response.data.token;
    tokens = token;
    return token;
  }
  async addBook(isbn, sharedToken, userID) {
    try {
      const response = await axios.post(
        "https://demoqa.com/BookStore/v1/Books",
        {
          userId: userID,
          collectionOfIsbns: [
            {
              isbn: isbn,
            },
          ],
        },
        {
          headers: {
            //authorization:"Basic VmVubmlsYTpBZ2VudEAwM1RlZW5h",
            Authorization: "Bearer " + sharedToken, // Replace with your encoded credentials
          },
        }
      );
      console.error("Response data" + response.statusText);
      expect(response.status).toBe(201);
      expect(response.data.books[0]).toHaveProperty("isbn");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Access the error message
        console.error("Error message:", error.response.data.message);
        expect(error.response.data.message).toBe(
          "ISBN supplied is not available in Books Collection!"
        );
      } else {
        // If it's not a 400 error, rethrow the error
        throw error;
      }
    }
  }

  async deleteBook(isbn, sharedToken, userID) {
    try {
      const response = await axios.delete(
        `https://demoqa.com/BookStore/v1/Book`,
        {
          headers: {
            Authorization: "Bearer " + sharedToken,
          },
          data: {
            // Your request body data goes here
            // For example:
            isbn: isbn,
            userId: userID,
          },
        }
      );

      // Check the response status or handle the success case as needed
      expect(response.status).toBe(204);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.error("Error message:", error.response.data.message);
        expect(error.response.data.message).toBe(
          "ISBN supplied is not available in User's Collection!"
        );
      } else {
        // If it's not a 400 error, rethrow the error
        throw error;
      }
    }
  }
}
