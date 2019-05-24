import render from './Render';
import data from './../DB/data.json';

class Modal {
  constructor() {
    new render(data.content)
  }
}
export default Modal;



