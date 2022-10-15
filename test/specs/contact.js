import ContactPage from "../pages/contact-page";

describe("Contact", () => {
  it("Fill all the input fields, submit form and assert success message", async () => {
    await ContactPage.open();

    // // Fill out the input fields & click submit
    // await $(".contact-name input").addValue("Test Name");
    // await $(".contact-email input").addValue("test@mail.com");
    // await $(".contact-phone input").addValue("123456789");
    // await $(".contact-message textarea").addValue("This is a test message");
    // await $("button[type=submit").click();

    // Adding PMO (Page Object Model)
    await ContactPage.submitForm(
      "Test Name",
      "test@mail.com",
      "123456789",
      "This is a test message"
    );

    // Assert the success message
    const successAlert = ContactPage.alertSuccess;
    await expect(successAlert).toHaveTextContaining(
      "Thanks for contacting us! We will be in touch with you shortly"
    );
  });
});
