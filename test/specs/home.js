// Practice E-Commerce Site – Automation Bro
// https://practice.automationbro.com/

describe("Home", () => {
  it("Open URL & assert title", async () => {
    // Open URL
    await browser.url("https://practice.automationbro.com/");

    // Assert title
    await expect(browser).toHaveTitle(
      "Practice E-Commerce Site – Automation Bro"
    );
  });

  it("Open About Page & assert URL", async () => {
    // Open URL
    await browser.url("https://practice.automationbro.com/about");

    // Assert title
    await expect(browser).toHaveUrl(
      "https://practice.automationbro.com/about/"
    );
  });

  it("Click Get Started btn on Home page & assert url contains 'get-started' text", async () => {
    // Open URL
    await browser.url("https://practice.automationbro.com");

    // Click Get Started btn
    await $("#get-started").click();

    // Assert title
    await expect(browser).toHaveUrlContaining("get-started");
  });
});
