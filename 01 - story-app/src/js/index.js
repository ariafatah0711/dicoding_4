// Import our custom CSS
import "../sass/main.scss";

// import our components
import "./components/index";

// Import javascript file as needed
import * as bootstrap from "bootstrap";

// data
const response = fetch("./DATA.json");
const responseJson = response.json();
