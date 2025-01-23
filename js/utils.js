export function inputElement(element, imgPath) {
  element.innerText = "";
  img = document.createElement("img");
  img.src = imgPath;
  img.width = 30;
  element.appendChild(img);
}

export function removeElement(element, text) {
  element.removeChild(element.firstChild);
  element.innerText = text;
}
