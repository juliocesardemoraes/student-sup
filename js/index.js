import { elements, events } from "./selectors.js";
import { inputElement, removeElement } from "./utils.js";

elements.forEach((element) => {
  events.forEach((event) => {
    element.element.addEventListener(event, () => {
      if (event === "blur") {
        removeElement(element.label, element.inputText);
      } else {
        inputElement(element.label, element.imgSource);
      }
    });
  });
});
