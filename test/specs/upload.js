import CartPage from "../pages/cart-page";
const path = require("path");

describe("Upload", () => {
  it("Upload file and assert success message", async () => {
    await CartPage.open();

    await browser.execute(CartPage.removeHiddenAttribuleClassFileBtn);

    const inputFile = await CartPage.fileInputBtn;
    const uploadBtn = await CartPage.fileUploadBtn;

    const remoteFilePath = await browser.uploadFile("logo.png");
    await inputFile.setValue(remoteFilePath);
    await uploadBtn.click();

    const successMessage = await CartPage.messageBlock;
    await expect(successMessage).toHaveTextContaining("uploaded successfully");
  });

  // Practise testing upload from another site https://the-internet.herokuapp.com/upload
  it.only("Simple upload test", async () => {
    // Open url
    await browser.url("https://the-internet.herokuapp.com/upload");

    // store test file path
    // __dirname - entire path to spec folder (.../wdio-basics/test/specs/)
    const filePath = path.join(__dirname, "../data/logotitle.png");

    // use browser.uploadFile to upload the test file
    const remoteFilePath = await browser.uploadFile(filePath);

    // set file path value in the input field
    await $("#file-upload").setValue(remoteFilePath);
    await $("#file-submit").click(); // click the submit button

    // assertion
    await expect($("h3")).toHaveText("File Uploaded!");
  });

  it.only("Upload on a hidden input field", async () => {
    // Open url
    await CartPage.open();

    // store test file path
    const filePath = path.join(__dirname, "../data/logotitle.png");

    // upload test file
    const remoteFilePath = await browser.uploadFile(filePath);

    // remove hidden class
    await browser.execute(CartPage.clearHiddenAttribuleClassFileBtn);

    // set file path value in the input field
    await CartPage.fileInputBtn.setValue(remoteFilePath);
    await CartPage.fileUploadBtn.click(); // click the upload button

    // assertion
    await expect(CartPage.messageBlock).toHaveTextContaining(
      "uploaded successfully"
    );
  });
});
