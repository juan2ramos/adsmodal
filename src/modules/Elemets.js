import {el} from 'redom';
import SendForm from "./SendForm";
import ElEvent from "./ElEvent";

class Elemets {
  constructor(element) {

    if (element.content) {
      const elements = this.elements(element.content);
      this.el = el(element.el, element.attr, elements);
      if (element.el === "form") {
        new SendForm(this.el,element.action);
      }
      return
    }

    this.el = el(element.el, element.attr, element.text);

    if (element.event) {
      new ElEvent(this.el,element.event,element.callback);
    }
  }

  elements(content) {
    const elements = [];
    for (const key in content) {
      elements.push(new Elemets(content[key]));
    }
    return elements;
  }

}

export default Elemets;
