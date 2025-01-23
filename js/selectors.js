const labelName = document.getElementById("labelName");
const inputName = document.getElementById("name");
const labelEmail = document.getElementById("labelEmail");
const inputEmail = document.getElementById("email");
const labelPhone = document.getElementById("labelPhone");
const inputPhone = document.getElementById("phone");

export const elements = [
  {
    element: inputName,
    label: labelName,
    imgSource: "../assets/icons/licence-driver.png",
    inputText: "Nome",
  },
  {
    element: inputEmail,
    label: labelEmail,
    imgSource: "../assets/icons/email.png",
    inputText: "Email",
  },
  {
    element: inputPhone,
    label: labelPhone,
    imgSource: "../assets/icons/zap.png",
    inputText: "Whatsapp",
  },
];

export const events = ["focus", "change", "blur"];
