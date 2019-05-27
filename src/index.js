import './style.scss';
import data from './modules/Data'
import Cookies from 'js-cookie'

(function (window, document) {
  let AdsModal = function () {
    let lib = {
      setCode: function (code) {
        this.data = new data(code);
      }
    };

    return lib;

  };

  if (typeof window.AdsModal === "undefined") {
    window.AdsModal = AdsModal()
  }
})(window, document);
