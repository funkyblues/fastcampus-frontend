import Dropdown from "bootstrap/js/dist/dropdown.js";
import Modal from "bootstrap/js/dist/modal";

const dropdownElementList = [].slice.call(
  document.querySelectorAll(".dropdown-toggle")
);
dropdownElementList.map(function (dropdownToggleEl) {
  return new Dropdown(dropdownToggleEl);
});

new Modal(document.querySelector("#exampleModal"), {
  focus: true,
});
