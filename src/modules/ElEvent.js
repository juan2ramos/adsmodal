class ElEvent {

  constructor(el, action, callback) {

    el.addEventListener(action, function () {
      eval(callback)
    })

  }


}

export default ElEvent;
