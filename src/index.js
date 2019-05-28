import './style.scss';
import data from './modules/Data'
import Cookies from 'js-cookie'

(function (window, document) {
  let AdsModal = function () {
    let lib = {
      setCode: function (code, gaClientId = '') {
        this.data = new data(code, gaClientId);
      }
    };

    return lib;

  };

  if (typeof window.AdsModal === "undefined") {
    window.AdsModal = AdsModal()
  }
})(window, document);
