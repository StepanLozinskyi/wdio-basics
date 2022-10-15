import IframePage from "../pages/iframe-page";

describe("iFrame", () => {
  it("Working with iFrame", async () => {
    // open url
    await IframePage.open();

    // access the iFrame
    const iFrame = await IframePage.iFrame;
    await browser.switchToFrame(iFrame);

    // verify logo exists
    await expect(IframePage.iFrameLogo).toExist();

    // switch to parent frame
    await browser.switchToParentFrame();

    // verify page title
    await expect(IframePage.iFramePageTitle).toHaveText("IFrame Sample");
  });
});
