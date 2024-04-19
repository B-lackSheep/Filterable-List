import { inputBody, inputTitle } from "./constants.js";
import { handleInputTitle, handleInputBody } from "./handlers.js";
import { fetchData } from "./api.js";
import { debounce } from "./utils.js";

inputTitle.addEventListener("input", debounce(handleInputTitle, 500));

inputBody.addEventListener("input", debounce(handleInputBody, 500));

fetchData("", "");
