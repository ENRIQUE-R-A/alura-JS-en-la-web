import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

import { addTask } from './components/addTask.js'

( () => {

const btn = document.querySelector("[data-form-btn]");

btn.addEventListener("click", addTask);

})();