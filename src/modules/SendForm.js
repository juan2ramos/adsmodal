import ajax from 'axios';
import swal from 'sweetalert';

class SendForm {

  constructor(form, action) {
    this.form = form;
    this.action = action;
    this.send()
  }

  send() {
    this.form.onsubmit = e => {
      e.preventDefault();
      document.querySelector('#ModalAds button').setAttribute('disabled', 'disabled');
      ajax.post(this.action, this.inputs()).then(this.afterSubmit);
    }
  }

  inputs() {
    const Modal = document.querySelector('#ModalAds');
    const inputs = Modal.querySelectorAll('input, select, textarea');
    const obj= {};
    for( let i = 0; i < inputs.length; ++i ) {
      const element = inputs[i];
      const name = element.name;

      if( name ) {
        obj[ name ] = element.value;
      }
    }
    return obj;
  }

  afterSubmit(response) {
    document.getElementById('ModalAds').remove();
    console.log(response)
    swal("Tu mensaje ha sido enviado!", "Gracias por contactarnos!", "success");
  }
}

export default SendForm;
