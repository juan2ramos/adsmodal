import {el, mount} from 'redom';
import Elemets from "./Elemets";

class Render {

  constructor(content) {
    this.render(content)
  }

  render(content) {
    const elements = this.elements(content);
    const contentModal = el('#ModalAds', el('.ModalAds-content',elements));
    mount(document.body, contentModal);
  }

  elements(content) {
    const elements = [];
    for (const key in content) {
      elements.push(new Elemets(content[key]));
    }
    return elements;
  }
}

export default Render;
