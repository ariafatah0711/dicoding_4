const KEY = "theme";
const bodyElement = document.querySelector("body");
if (!localStorage.getItem(KEY)) {
  localStorage.setItem(KEY, "light");
}
const theme = localStorage.getItem(KEY) ? localStorage.getItem(KEY) : "light";

bodyElement.setAttribute("data-bs-theme", theme);
