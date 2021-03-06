import ajax from 'axios';
import Cookies from 'js-cookie';
import Modal from "./Modal";

class Data {

  constructor(code, gaClientId) {
    this.code = code;
    this.gaClientId = gaClientId;
    this.url = this.getURLApi();
    this.send()
  }

  send(action = 'pageview') {
    const cookie = Cookies.get('_aa') ? Cookies.get('_aa') : '';

    ajax.post(this.url, {'code': this.code, cookie, 'referrer': document.referrer, action, 'gacid': this.gaClientId})
      .then(this.generateData.bind(this))
  }

  generateData(response) {

    if (!Cookies.get('_aa')) {
      Cookies.set('_aa', response.data.cookie);
    }
    const timeDelay = response.data.time ? response.data.time : 0;
    if (this.validate(response.data.rules)) {
      setTimeout(function () {
        new Modal(response.data.content);
      }, timeDelay);
    }
  }

  validate(rules) {
    return rules.user && this.validatePage(rules.pageViews);
  }

  validatePage(pageViews) {

    if (pageViews.all) {
      return true
    }
    const pages = pageViews.accepted;
    for (const key in pages) {
      if (pages[key].regex) {
        const re1 = new RegExp(pages[key].regex);
        if (re1.test(location.pathname)) {
          return true
        }
      }
      if (location.pathname === pages[key].path) {
        return true
      }
    }

    return false;
  }

  getURLApi() {
    return process.env.NODE_ENV === 'development' ? "http://adsmodal-back.jk/api/get-info-initial" :
      "https://api.artico.io/api/get-info-initial"
  }


}

export default Data;
