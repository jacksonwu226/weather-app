import UI from "./UI.js";
import "../styles/style.css"

function addWrapper() {
  const body = document.querySelector("body");
  const wrapperDiv = document.createElement("div");
  wrapperDiv.setAttribute("id", "wrapper");
  body.append(wrapperDiv);
}

document.addEventListener("DOMContentLoaded", () => {
  addWrapper();
  const ui = new UI();
});
