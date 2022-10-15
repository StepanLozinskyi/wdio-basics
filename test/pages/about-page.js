class AboutPage {
  open() {
    return browser.url("/about");
  }
}

export default new AboutPage();
