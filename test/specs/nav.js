describe("Navigation Menu", () => {
  it("Get the text of all menu items & assert them", async () => {
    // Open URL using baseURL from wdio.config.js
    await browser.url("/");

    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];

    const actualLinks = [];

    // Solution1: if we know that #primary-menu selector return 1 elem
    //const navLinks = await $("#primary-menu").$$("li[id*=menu]");

    // Solution2: if we dont know about #primary-menu selector but our elems inside such elem we can directly write
    const navLinks = await $$("#primary-menu li[id*=menu]");

    for (const link of navLinks) {
      actualLinks.push(await link.getText());
    }
    // Assert title
    await expect(expectedLinks).toEqual(actualLinks);
  });
});
