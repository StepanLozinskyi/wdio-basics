import HomePage from "../pages/home-page";
import allureReporter from "@wdio/allure-reporter";

describe("Navigation Menu", () => {
  it("Get the text of all menu items & assert them", async () => {
    // Open URL using baseURL from wdio.config.js
    allureReporter.addFeature("Navigation Feature");
    allureReporter.addSeverity("critical");
    await HomePage.open();
    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];

    const actualLinks = [];

    await browser.waitUntil(
      async function () {
        //const homeText = await $("#primary-menu li").getText(); // Home
        // Using PMO (Page Object Model) -> Component Concept
        const homeText = await HomePage.NavComponent.firstNavMenuList.getText(); // Home
        return homeText === "Home"; // true | false
      },
      {
        timeout: 5000,
        timeoutMsg: "Could not verify the Home text from #primary-menu li",
      }
    );

    // Solution1: if we know that #primary-menu selector return 1 elem
    //const navLinks = await $("#primary-menu").$$("li[id*=menu]");

    // Solution2: if we dont know about #primary-menu selector but our elems inside such elem we can directly write
    //const navLinks = await $$("#primary-menu li[id*=menu]");
    // Using PMO (Page Object Model) -> Component Concept
    const navLinks = await HomePage.NavComponent.linksNavMenu;

    for (const link of navLinks) {
      actualLinks.push(await link.getText());
    }
    // Assert title
    await expect(expectedLinks).toEqual(actualLinks);
  });
});
