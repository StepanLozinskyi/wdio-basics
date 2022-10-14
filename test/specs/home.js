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

  // Get element by unique href value -> $("#get-started")
  it("Click Get Started btn on Home page & assert url contains 'get-started' text", async () => {
    // Open URL
    await browser.url("https://practice.automationbro.com");

    // Click Get Started btn
    await $("#get-started").click();

    // Assert title
    await expect(browser).toHaveUrlContaining("get-started");
  });

  // Get element by xPath -> //img[@alt='Practice E-Commerce Site
  it("Click Logo img on Home page & assert url does not contain 'get-started' text using xPath", async () => {
    // Open URL
    await browser.url("https://practice.automationbro.com");

    // Click Logo
    await $("//img[@alt='Practice E-Commerce Site']").click();

    // Assert title
    await expect(browser).not.toHaveUrlContaining("get-started");
  });

  // Get element by css selector -> .elementor-widget-container h1
  it("Find heading element & assert text", async () => {
    // Open URL
    await browser.url("https://practice.automationbro.com");

    // Find heading element
    const headingElement = await $(".elementor-widget-container h1");

    // Get text
    const headingText = await headingElement.getText();

    // Assert heading text

    // First solution using .getText() method which is using if we wanna manipulate with text
    //await expect(headingText).toEqual("Think different. Make different.");

    // Second solution using .toHaveText() assertion if we wanna directly assert text value without additional step (.getText() method)
    await expect(headingElement).toHaveText("Think different. Make different.");
  });
});
