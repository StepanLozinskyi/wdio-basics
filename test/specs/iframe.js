describe("iFrame", () => {
  it("Working with iFrame", async () => {
    // open url
    await browser.url("/iframe-sample/");

    // access the iFrame
    const iFrame = await $("#advanced_iframe");
    await browser.switchToFrame(iFrame);

    // verify logo exists
    await expect($("#site-logo")).toExist();

    // switch to parent frame
    await browser.switchToParentFrame();

    // verify page title
    await expect($("h1.tg-page-header__title")).toHaveText("IFrame Sample");
  });
});
