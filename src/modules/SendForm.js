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
      ajax.get(this.action,{
          headers: {
            'Access-Control-Allow-Origin': '*',
          }
        }
        ).then(this.afterSubmit);
    }
  }

  afterSubmit(response) {
    document.getElementById('ModalAds').remove();
    swal("Tu mensaje ha sido enviado!", "Gracias por contactarnos!", "success");
  }
}

export default SendForm;
