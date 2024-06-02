const KEY = "theme";
const bodyElement = document.querySelector("body");
if (!sessionStorage.getItem(KEY)) {
  sessionStorage.setItem(KEY, "light");
}
const theme = sessionStorage.getItem(KEY) ? sessionStorage.getItem(KEY) : "light";

bodyElement.setAttribute("data-bs-theme", theme);
