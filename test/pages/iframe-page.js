class IframePage {
  open() {
    return browser.url("/iframe-sample/");
  }

  get iFrame() {
    return $("#advanced_iframe");
  }

  get iFrameLogo() {
    return $("#site-logo");
  }

  get iFramePageTitle() {
    return $("h1.tg-page-header__title");
  }
}

export default new IframePage();
