import API from "./api.js";
import UI from "./UI.js";

const APIKey = "1cb6dfdb758948eabb403513240404";

function addWrapper() {
  const body = document.querySelector("body");
  const wrapperDiv = document.createElement("div");
  wrapperDiv.setAttribute("id", "wrapper");
  body.append(wrapperDiv);
}

document.addEventListener("DOMContentLoaded", () => {
  addWrapper();
  const api = new API(APIKey);
  const ui = new UI();
});
