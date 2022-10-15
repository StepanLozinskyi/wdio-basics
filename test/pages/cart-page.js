class CartPage {
  open() {
    return browser.url("/cart");
  }

  get removeHiddenAttribuleClassFileBtn() {
    return "document.querySelector('#upfile_1').removeAttribute('class')";
  }

  get clearHiddenAttribuleClassFileBtn() {
    return "document.querySelector('#upfile_1').className = ''";
  }

  get fileInputBtn() {
    return $("#upfile_1");
  }

  get fileUploadBtn() {
    return $("#upload_1");
  }

  get messageBlock() {
    return $("#wfu_messageblock_header_1_label_1");
  }
}

export default new CartPage();
