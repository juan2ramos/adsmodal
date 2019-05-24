import './style.scss';
import Modal from './modules/Modal'

(function (window, document) {
  let initLib = function () {
    new Modal('');
  };

  if (typeof window.initLib === "undefined") {
    window.initLib = initLib()
  }
})(window, document);
