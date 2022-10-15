import HomePage from "../pages/home-page";
import AboutPage from "../pages/about-page";
import allureReporter from "@wdio/allure-reporter";

describe("Home", () => {
  // before(async () => {
  //   console.log('THIS COULD BE USED FOR TEST SETUP');
  // })

  beforeEach(async () => {
    console.log("THIS RUNS BEFORE EACH TEST");

    // Open URL
    await HomePage.open();
  });

  // after(async () => {
  //   console.log('THIS COULD BE USED FOR TEST CLEANUP');
  // })

  // afterEach(async () => {
  //   console.log('THIS RUNS AFTER EACH TEST');
  // })

  it("Open URL & assert title", async () => {
    // Open URL
    allureReporter.addFeature("Home Feature");
    allureReporter.addSeverity("minor");
    await HomePage.open();

    // Assert title
    await expect(browser).toHaveTitle(
      "Practice E-Commerce Site – Automation Bro"
    );
  });

  it("Open About Page & assert URL", async () => {
    // Open URL
    await AboutPage.open();

    // Assert title
    await expect(browser).toHaveUrl(
      "https://practice.automationbro.com/about/"
    );
  });

  // Get element by unique href value -> $("#get-started")
  it("Click Get Started btn on Home page & assert url contains 'get-started' text", async () => {
    // Open URL
    await HomePage.open();

    // Click Get Started btn
    await HomePage.btnGetStarted.click();

    // Assert title
    await expect(browser).toHaveUrlContaining("get-started");
  });

  // Get element by xPath -> //img[@alt='Practice E-Commerce Site
  it("Click Logo img on Home page & assert url does not contain 'get-started' text using xPath", async () => {
    // Open URL
    allureReporter.addFeature("Logo Verification");
    await HomePage.open();

    // Click Logo
    await HomePage.imageLogo.click();

    // Assert title
    await expect(browser).not.toHaveUrlContaining("get-started");
  });

  // Get element by css selector -> .elementor-widget-container h1
  it("Find heading element & assert text", async () => {
    // Open URL
    await HomePage.open();

    // Find heading element
    const headingElement = await HomePage.txtHeading;

    // Assert heading text

    // First solution using .getText() method which is using if we wanna manipulate with text
    // Get text
    //const headingText = await headingElement.getText();
    //await expect(headingText).toEqual("Think different. Make different.");

    // Second solution using .toHaveText() assertion if we wanna directly assert text value without additional step (.getText() method)
    await expect(headingElement).toHaveText("Think different. Make different.");
  });
});
